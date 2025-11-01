import { after, describe, it } from "node:test";
import assert from "node:assert/strict";
import * as prettier from "prettier";
import xqueryPlugin from "../src/main.ts";
import { readFile, writeFile } from "node:fs/promises";
import { DOMParser, Element } from "slimdom";
import fontoxpath from "fontoxpath";
import { fileURLToPath } from "node:url";
import { dirname } from "path";

import ignoreList3 from "./assets/ignoreList.ts";
import ignoreList4 from "./assets/ignoreList4.ts";

const { evaluateXPathToNodes, evaluateXPathToString, evaluateXPathToBoolean } = fontoxpath;

const prefix = `${fileURLToPath(dirname(import.meta.url))}/assets/qt4tests`;

const catalog = new DOMParser().parseFromString(await readFile(`${prefix}/catalog.xml`, "utf-8"), "text/xml");

const testsets = evaluateXPathToNodes<Element>("//test-set", catalog);

const abort = new AbortController();

const errorCounters = {
	"3": {
		amountOfCommentErrors: 0,
		amountOfTypeErrors: 0,
		amountOfTests: 0,
		amountOfRoundtripFailures: 0,
	},
	"4": {
		amountOfCommentErrors: 0,
		amountOfTypeErrors: 0,
		amountOfTests: 0,
		amountOfRoundtripFailures: 0,
	},
};

describe("Roundtripping all the QT4 tests", () => {
	for (const testset of testsets) {
		const testSetName = testset.getAttribute("name")!;
		if (abort.signal.aborted) {
			return Promise.resolve();
		}
		describe(testSetName, async () => {
			if (abort.signal.aborted) {
				return Promise.resolve();
			}
			const path = testset.getAttribute("file");
			const tests = new DOMParser().parseFromString(await readFile(`${prefix}/${path}`, "utf-8"), "text/xml");

			const testCases = evaluateXPathToNodes<Element>("//test-case", tests);

			for (const testCase of testCases) {
				const script = evaluateXPathToString("test", testCase);
				const name = evaluateXPathToString("@name", testCase);

				const isXQuery4Only = evaluateXPathToBoolean('dependency[@type="spec"]/@value = "XQ40+"', testCase);
				const isXQuery3Only = evaluateXPathToBoolean('dependency[@type="spec"]/@value = "XQ31"', testCase);

				const ignoreList = isXQuery4Only ? ignoreList4 : ignoreList3;

				const errorCounter = isXQuery4Only ? errorCounters[4] : errorCounters[3];
				it(`Can roundtrip ${testSetName} / ${name} ${isXQuery4Only ? ", using the XQuery 4 parser" : ""}`, async (t) => {
					errorCounter.amountOfTests++;
					if (abort.signal.aborted) {
						return Promise.resolve();
					}
					const isKnownFailure = name in (ignoreList[testSetName] ?? {});
					try {
						const firstPrettification = prettier.format(script, {
							parser: isXQuery4Only ? "xquery4" : "xquery",
							plugins: [xqueryPlugin],
						});
						try {
							await firstPrettification;
						} catch (e) {
							if (e instanceof SyntaxError) {
								// Syntax errors are out of our control.
								t.skip(`The first parse failed with a syntax error`);
								return;
							}
							throw e;
						}
						const resultOfFirstPrettification = await firstPrettification;
						const secondPrettification = prettier.format(resultOfFirstPrettification, {
							parser: isXQuery4Only ? "xquery4" : "xquery",
							plugins: [xqueryPlugin],
						});
						await assert.doesNotReject(
							secondPrettification,
							`The second prettification should also work.
Input: ${script}
Result of first round: ${resultOfFirstPrettification}`,
						);

						const resultOfSecondPrettification = await secondPrettification;
						if (resultOfSecondPrettification !== resultOfFirstPrettification) {
							errorCounter.amountOfRoundtripFailures++;
						}
						assert.equal(
							resultOfFirstPrettification,
							resultOfSecondPrettification,
							"The prettification should be stable after a first one",
						);
						if (!isXQuery3Only) {
							const resultOfXQ3Prettification = await prettier.format(script, {
								plugins: [xqueryPlugin],
								parser: "xquery",
							});
							assert.equal(
								resultOfFirstPrettification,
								resultOfXQ3Prettification,
								"The script should be formatted the same with the XQ4 parser as with the XQ3 parser",
							);
						}

						t.assert.fileSnapshot(
							resultOfFirstPrettification,
							`test/assets/qt4-snapshots/${testSetName}/${name}.xquery`,
							{ serializers: [(value: string) => value] },
						);

						if (isKnownFailure) {
							// Test started working!
							delete ignoreList[testSetName][name];
							if (Object.keys(ignoreList[testSetName]).length === 0) {
								// All these tests started working now
								delete ignoreList[testSetName];
							}
						}
					} catch (e) {
						if (e) {
							const message = e.toString() as string;
							if (/^Error: Comment ".*" was not printed/.test(message)) {
								errorCounter.amountOfCommentErrors++;
							} else if (e instanceof TypeError) {
								errorCounter.amountOfTypeErrors++;
							}
						}

						if (!ignoreList[testSetName]) {
							ignoreList[testSetName] = {};
						}
						ignoreList[testSetName][name] = e
							.toString()
							.replaceAll(/\u001b\[3.m/g, "")
							.split("\n");
						if (!isKnownFailure) {
							// New failure: rethrow. Otherwise, ignore
							throw e;
						}
					}
				});
			}
		});
	}

	after(async () => {
		const reportResults = (ignoreList, errorCounter) => {
			const totalFailureCount = Object.keys(ignoreList).reduce(
				(total, key) => total + Object.keys(ignoreList[key]).length,
				0,
			);

			return writeFile(
				`${fileURLToPath(dirname(import.meta.url))}/assets/${ignoreList === ignoreList3 ? "ignoreList" : "ignoreList4"}.ts`,
				`/**
* Automatically generated test report from running prettier over all ${errorCounter.amountOfTests} test cases in the QT4 tests.
*
* The ignore list contains ${totalFailureCount} known failing tests.
* Tests that fail because a comment failed to be printed: ${errorCounter.amountOfCommentErrors}
* Tests that fail because of a type error: ${errorCounter.amountOfTypeErrors}
* Tests that fail because the prettified result is not stable: ${errorCounter.amountOfRoundtripFailures}
*
* Other failures: ${totalFailureCount - errorCounter.amountOfRoundtripFailures - errorCounter.amountOfTypeErrors - errorCounter.amountOfCommentErrors}
*/
export default ${JSON.stringify(ignoreList, null, "\t")} as Record<string,Record<string,string[]>>;
`,
			);
		};

		reportResults(ignoreList3, errorCounters[3]);
		reportResults(ignoreList4, errorCounters[4]);
	});
});

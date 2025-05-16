import { after, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import * as prettier from 'prettier';
import xqueryPlugin from '../src/main.ts';
import { readFile, writeFile } from 'node:fs/promises';
import { DOMParser, Element } from 'slimdom';
import fontoxpath from 'fontoxpath';
import { fileURLToPath } from 'node:url';
import { dirname } from 'path';

import ignoreList from './assets/ignoreList.ts';

const { evaluateXPathToNodes, evaluateXPathToString } = fontoxpath;

const prefix = `${fileURLToPath(dirname(import.meta.url))}/assets/qt3tests`;

const catalog = new DOMParser().parseFromString(await readFile(`${prefix}/catalog.xml`, 'utf-8'), 'text/xml');

const testsets = evaluateXPathToNodes<Element>('//test-set', catalog);

const abort = new AbortController();

let amountOfCommentErors = 0;
let amountOfTypeErrors = 0;
let amountOfTests = 0;
let amountOfRoundtripFailures = 0;

describe('Roundtripping all the QT3 tests', () => {
	for (const testset of testsets) {
		const testSetName = testset.getAttribute('name');
		describe(testSetName, async () => {
			if (abort.signal.aborted) {
				return Promise.resolve();
			}
			const path = testset.getAttribute('file');
			const tests = new DOMParser().parseFromString(await readFile(`${prefix}/${path}`, 'utf-8'), 'text/xml');

			const testCases = evaluateXPathToNodes<Element>('//test-case', tests);

			for (const testCase of testCases) {
				const script = evaluateXPathToString('test', testCase);
				const name = evaluateXPathToString('@name', testCase);

				it(`Can roundtrip ${testSetName} / ${name}`, async (t) => {
					amountOfTests++;
					if (abort.signal.aborted) {
						return Promise.resolve();
					}
					const isKnownFailure = name in (ignoreList[testSetName] ?? {});
					try {
						const firstPrettification = prettier.format(script, {
							parser: 'xquery',
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
							parser: 'xquery',
							plugins: [xqueryPlugin],
						});
						await assert.doesNotReject(
							secondPrettification,
							`The second prettification should also work3.
Input: ${script}
Result of first round: ${resultOfFirstPrettification}`,
						);

						const resultOfSecondPrettification = await secondPrettification;
						if (resultOfSecondPrettification !== resultOfFirstPrettification) {
							amountOfRoundtripFailures++;
						}
						assert.equal(
							resultOfFirstPrettification,
							resultOfSecondPrettification,
							'The prettification should be stable after a first one',
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
						//abort.abort();

						if (e) {
							const message = e.toString() as string;
							if (/^Error: Comment ".*" was not printed/.test(message)) {
								amountOfCommentErors++;
							} else if (e instanceof TypeError) {
								amountOfTypeErrors++;
							}
						}

						if (!ignoreList[testSetName]) {
							ignoreList[testSetName] = {};
						}
						ignoreList[testSetName][name] = e.toString();
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
		const totalFailureCount = Object.keys(ignoreList).reduce(
			(total, key) => total + Object.keys(ignoreList[key]).length,
			0,
		);
		return writeFile(
			`${fileURLToPath(dirname(import.meta.url))}/assets/ignoreList.ts`,
			`/**
* Automatically generated test report from running prettier over all ${amountOfTests} test cases in the QT3 tests.
*
* The ignore list contains ${totalFailureCount} known failing tests.
* Tests that fail because a comment failed to be printed: ${amountOfCommentErors}
* Tests that fail because of a type error: ${amountOfTypeErrors}
* Tests that fail because the prettified result is not stable: ${amountOfRoundtripFailures}
*
* Other failures: ${totalFailureCount - amountOfRoundtripFailures - amountOfTypeErrors - amountOfCommentErors}
*/
export default ${JSON.stringify(ignoreList, null, '\t')} as Record<string,Record<string,string>>;
`,
		);
	});
});

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import * as prettier from 'prettier';
import xqueryPlugin from '../main.ts';
import { readFile } from 'node:fs/promises';
import { DOMParser, Element } from 'slimdom';
import fontoxpath from 'fontoxpath';
import { fileURLToPath } from 'node:url';
import { dirname } from 'path';
const { evaluateXPathToNodes, evaluateXPathToString } = fontoxpath;

describe('Running the linter on the QT3 test set', async () => {
	const prefix = `${fileURLToPath(dirname(import.meta.url))}/assets/qt3tests`;

	console.log(prefix);

	const catalog = new DOMParser().parseFromString(await readFile(`${prefix}/catalog.xml`, 'utf-8'), 'text/xml');

	const testsets = evaluateXPathToNodes<Element>('//test-set', catalog);

	for (const testset of testsets) {
		await describe(testset.getAttribute('name'), async () => {
			const path = testset.getAttribute('file');
			const tests = new DOMParser().parseFromString(await readFile(`${prefix}/${path}`, 'utf-8'), 'text/xml');

			const testCases = evaluateXPathToNodes<Element>('//test-case', tests);

			Promise.all(
				testCases.map(async (testCase) => {
					const script = evaluateXPathToString('test', testCase);
					const name = evaluateXPathToString('@name', testCase);

					await it(`Can roundtrip ${name}`, async () => {
						const firstPrettification = prettier.format(script, {
							parser: 'xquery-parser',
							plugins: [xqueryPlugin],
						});
						await assert.doesNotReject(firstPrettification, 'The initial prettification should work');
						const resultOfFirstPrettification = await firstPrettification;

						const secondPrettification = prettier.format(resultOfFirstPrettification, {
							parser: 'xquery-parser',
							plugins: [xqueryPlugin],
						});
						await assert.doesNotReject(secondPrettification, 'The second prettification should also work');

						const resultOfSecondPrettification = await secondPrettification;
						assert.equal(
							resultOfFirstPrettification,
							resultOfSecondPrettification,
							'The prettification should be stable after a first one',
						);
					});
				}),
			);
		});
	}
});

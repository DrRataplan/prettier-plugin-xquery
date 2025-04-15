import {describe, it} from 'node:test';
import assert from 'node:assert';
import * as prettier from "prettier";
import xqueryPlugin from '../main.ts';

describe('smoke tests', async (d) => {
	it('works', async () => {
		const code = "1 + 1";
		const result = await prettier.format(code, {
			parser: "xquery-parser",
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, 'The input was already formatted correctly');
	});

	it('indents long lines', async () => {
		const code = `1111111111111111111111111111111111111111111111111 +
  2222222222222222222222222222222222222222222 +
  333333333333333333333333333333333333333`;
		const result = await prettier.format(code, {
			parser: "xquery-parser",
			plugins: [xqueryPlugin],
		});
		assert.strictEqual(result, code, 'The input was already formatted correctly');

	});

	it.only('formats function definitions', async (t) => {
		const code = `declare function local:bla () {1}; local:bla()`;

		const result = await prettier.format(code, {
			parser: "xquery-parser",
			plugins: [xqueryPlugin],
		});

		console.log(`result ${result}`)

		assert.strictEqual(result, code, 'The input was already formatted correctly');
	});
});

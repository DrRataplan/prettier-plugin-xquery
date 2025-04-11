import {describe, it} from 'node:test';
import assert from 'node:assert';
import * as prettier from "prettier";
import xqueryPlugin from '../main.ts';

describe('smoke tests', () => {
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
  111111111111111111111111111111111111111111111 +
  11111111111111111111111111111111111111111111111111111111111111`;
		const result = await prettier.format(code, {
			parser: "xquery-parser",
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, 'The input was already formatted correctly');

	})
});

import { describe, it } from 'node:test';
import assert from 'node:assert';
import * as prettier from 'prettier';
import xqueryPlugin from '../src/main.ts';

describe('if expressions', async (d) => {
	it('formats a simple case', async () => {
		const code = `
if (1) then
  2
else
  3
`.trim();
		const result = await prettier.format(code, {
			parser: 'xquery',
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, 'The input was already formatted correctly');
	});

		it('formats a nested if case', async () => {
		const code = `
if (1) then
  2
else if (3) then
  4
else
  5
`.trim();
		const result = await prettier.format(code, {
			parser: 'xquery',
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, 'The input was already formatted correctly');
	});

			it('formats a if case with parenthess', async () => {
		const code = `
if (1) then (
  2
) else if (3) then (
  4
) else (
  5
)
`.trim();
		const result = await prettier.format(code, {
			parser: 'xquery',
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, 'The input was already formatted correctly');
	});

	it('formats a if case with parentheses and comments', async () => {
		const code = `
if (1) then (
  (: a :)
  2
) else if (3) then (
  (: b :)
  4
) else (
  (: c :)
)
`.trim();
		const result = await prettier.format(code, {
			parser: 'xquery',
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, 'The input was already formatted correctly');
	});

});

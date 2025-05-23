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
`.trimStart();
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
`.trimStart();
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
`.trimStart();
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
`.trimStart();
		const result = await prettier.format(code, {
			parser: 'xquery',
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, 'The input was already formatted correctly');
	});

	it('formats the case with empty sequences in the then', async () => {
		const code = `
if (true()) then (
) else (
  "Hello World!"
)
`.trimStart();
		const result = await prettier.format(code, {
			parser: 'xquery',
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, 'The input was already formatted correctly');
	});

	it('formats the case with empty sequences in the else', async () => {
		const code = `
if (true()) then
  "Hello world!"
else (
)
`.trimStart();
		const result = await prettier.format(code, {
			parser: 'xquery',
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, 'The input was already formatted correctly');
	});

	it('formats the case with empty sequences in both the else as the then', async () => {
		const code = `
if (true()) then (
) else (
)
`.trimStart();
		const result = await prettier.format(code, {
			parser: 'xquery',
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, 'The input was already formatted correctly');
	});

	it('formats the case with empty sequences but comments in both the else as the then', async () => {
		const code = `
if (true()) then (
  (: A :)
) else (
  (: B :)
)
`.trimStart();
		const result = await prettier.format(code, {
			parser: 'xquery',
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, 'The input was already formatted correctly');
	});

});

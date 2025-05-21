import { describe, it } from 'node:test';
import assert from 'node:assert';
import * as prettier from 'prettier';
import xqueryPlugin from '../src/main.ts';

describe('comments', async (d) => {
	it('retains comments', async () => {
		const code = `
(: A :)
1 (: B :) eq (: C :) 1
`.trim();
		debugger;
		const result = await prettier.format(code, {
			parser: 'xquery',
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, 'The input was already formatted correctly');
	});
});

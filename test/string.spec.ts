import { describe, it } from 'node:test';
import assert from 'node:assert';
import * as prettier from 'prettier';
import xqueryPlugin from '../src/main.ts';

describe('string literals', async (d) => {
	it('fixes the quotes to the preferred style', async () => {
		const code = `
"A", 'A', 'A''A', "A""A", "A""A""A'A"
`.trimStart();
		const result = await prettier.format(code, {
			parser: 'xquery',
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result,`"A", "A", "A'A", 'A"A', 'A"A"A''A'
` );
	});
});

import { readFile } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';
import * as prettier from 'prettier';
import xqueryPlugin from '../main.ts';
import assert from 'node:assert';

const prefix = `${fileURLToPath(dirname(import.meta.url))}/assets/`;

describe('Formatting a whole module', () => {
	it('Can format a whole module nicely', async (t) => {
		const roasterBodyScript = await readFile(path.join(prefix, 'roaster-body.xqm'), 'utf-8');
		const prettification = prettier.format(roasterBodyScript, {
			parser: 'xquery-parser',
			plugins: [xqueryPlugin],
		});
		await assert.doesNotReject(prettification);
		const result = await prettification;
		t.assert.snapshot(result, { serializers: [(value) => value] });

		const secondPrettification = prettier.format(result, {
			parser: 'xquery-parser',
			plugins: [xqueryPlugin],
		});
		await assert.doesNotReject(secondPrettification, 'Prettification should not result into syntax errors');
		assert.strictEqual(result, await secondPrettification, 'After one prettification, the result should remain stable')
	});
});

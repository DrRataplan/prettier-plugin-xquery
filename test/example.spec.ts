import { readFile } from "node:fs/promises";
import path, { dirname } from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";
import * as prettier from 'prettier';
import xqueryPlugin from '../main.ts';
import assert from "node:assert";

	const prefix = `${fileURLToPath(dirname(import.meta.url))}/assets/`;

describe('Formatting a whole module', () => {
	it.only('Can format a whole module nicely', async (t) => {
		const tuttleAppScript = await readFile(path.join(prefix, 'roaster-body.xqm'), 'utf-8');
		const prettification = prettier.format(tuttleAppScript, {
							parser: 'xquery-parser',
							plugins: [xqueryPlugin],
		});
		await assert.doesNotReject(prettification);
		const result = await prettification;
		t.assert.snapshot(result, {serializers: [value => value]});
	});
});

import { describe, it } from "node:test";
import assert from "node:assert";
import * as prettier from "prettier";
import xqueryPlugin from "../src/main.ts";

describe("XQuery 4", async (d) => {
	it("Parses a simple script", async () => {
		const code = `
123
`.trimStart();
		const result = await prettier.format(code, {
			parser: "xquery4",
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result.trim(), `123`.trim());
	});

	it("Parses a new syntax ", async () => {
		const code = `
1 otherwise 2
`.trimStart();
		const result = await prettier.format(code, {
			parser: "xquery4",
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result.trim(), `1 otherwise 2`.trim());
	});
});

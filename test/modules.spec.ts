import { describe, it } from "node:test";
import assert from "node:assert";
import * as prettier from "prettier";
import xqueryPlugin from "../src/main.ts";

describe("modules", async (d) => {
	describe("main modules", () => {
		it("formats a simple case", async () => {
			const code = `
"hello world!"
`.trimStart();
			const result = await prettier.format(code, {
				parser: "xquery",
				plugins: [xqueryPlugin],
			});

			assert.strictEqual(result, code, "The input was already formatted correctly");
		});

		it("formats a simple case with a version declaration", async () => {
			const code = `
xquery version "3.0";

"hello world"
`.trimStart();
			const result = await prettier.format(code, {
				parser: "xquery",
				plugins: [xqueryPlugin],
			});

			assert.strictEqual(result, code, "The input was already formatted correctly");
		});

		it("formats a simple case with a version declaration and a prolog", async () => {
			const code = `
xquery version "3.0";

declare variable $foo := "bar";

"hello world"
`.trimStart();
			const result = await prettier.format(code, {
				parser: "xquery",
				plugins: [xqueryPlugin],
			});

			assert.strictEqual(result, code, "The input was already formatted correctly");
		});
	});

	describe("library modules", () => {
		it("formats a simple case", async () => {
			const code = `
module namespace x = "y";

declare variable $foo := "bar";
`.trimStart();
			const result = await prettier.format(code, {
				parser: "xquery",
				plugins: [xqueryPlugin],
			});

			assert.strictEqual(result, code, "The input was already formatted correctly");
		});

		it("formats a simple case with a version declaration", async () => {
			const code = `
xquery version "3.0";

module namespace x = "y";

declare variable $foo := "bar";
`.trimStart();
			const result = await prettier.format(code, {
				parser: "xquery",
				plugins: [xqueryPlugin],
			});

			assert.strictEqual(result, code, "The input was already formatted correctly");
		});

		it("formats a simple case with a version declaration and multiple declarations", async () => {
			const code = `
xquery version "3.0";

module namespace x = "y";

declare variable $foo := "bar";

declare function foo () {
  "bar"
};
`.trimStart();
			const result = await prettier.format(code, {
				parser: "xquery",
				plugins: [xqueryPlugin],
			});

			assert.strictEqual(result, code, "The input was already formatted correctly");
		});
	});
});

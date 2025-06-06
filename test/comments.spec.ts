import { describe, it } from "node:test";
import assert from "node:assert";
import * as prettier from "prettier";
import xqueryPlugin from "../src/main.ts";

describe("comments", async (d) => {
	it("retains comments", async () => {
		const code = `
(: A :)
1 (: B :) eq (: C :) 1
`.trimStart();

		const result = await prettier.format(code, {
			parser: "xquery",
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, "The input was already formatted correctly");
	});

	it("splits up comments", async () => {
		const code = `
declare variable $x := "A"; (: A :)

(:~
: My second comment. a block this time.
: It needs to stay attached to the next statement.
:)
1 (: B :) eq (: C :) 1
`.trimStart();

		const result = await prettier.format(code, {
			parser: "xquery",
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, "The input was already formatted correctly");
	});

	it("Keeps comments on their own lines", async () => {
		const code = `
(
  (: A leading comment:) A,
  (: On its own line :)
  B,
  C (: Trailing now :)
)
`.trimStart();

		const result = await prettier.format(code, {
			parser: "xquery",
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, "The input was already formatted correctly");
	});

	it("handles comments separated with newlines", async () => {
		const code = `
(:a:)

(:b:)

a
`.trimStart();

		const result = await prettier.format(code, {
			parser: "xquery",
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, "The input was already formatted correctly");
	});
});

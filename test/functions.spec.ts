import { describe, it } from "node:test";
import assert from "node:assert";
import * as prettier from "prettier";
import xqueryPlugin from "../src/main.ts";

describe("functions", async (d) => {
	it("correctly formats inline functions", async () => {
		const code = `
function () as xs:integer+ {
  2, 3, 5, 7, 11, 13
}
`.trimStart();

		const result = await prettier.format(code, {
			parser: "xquery",
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, "The input was already formatted correctly");
	});

	it("correctly formats inline functions in let bindings", async () => {
		const code = `
let $x := function () as xs:integer+ {
    2, 3, 5, 7, 11, 13
  }
return $x()
`.trimStart();

		const result = await prettier.format(code, {
			parser: "xquery",
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, "The input was already formatted correctly");
	});

	it("correctly formats inline functions passed as arguments", async () => {
		const code = `
let $x := filter(function () as xs:integer+ {
      2, 3, 5, 7, 11, 13
    })
return $x()
`.trimStart();

		const result = await prettier.format(code, {
			parser: "xquery",
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, "The input was already formatted correctly");
	});
});

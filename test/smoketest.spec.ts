import { describe, it } from "node:test";
import assert from "node:assert";
import * as prettier from "prettier";
import xqueryPlugin from "../src/main.ts";

describe("smoke tests", async (d) => {
	it("works", async () => {
		const code = "1 + 1\n";
		const result = await prettier.format(code, {
			parser: "xquery",
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, "The input was already formatted correctly");
	});

	it("does not indent very short sequence expressions", async () => {
		const code = `(1, 2)
`;
		const result = await prettier.format(code, {
			parser: "xquery",
			plugins: [xqueryPlugin],
		});
		assert.strictEqual(result, code, "The input was already formatted correctly");
	});

	it("indents more complex sequence expressions", async () => {
		const code = `(
  map {"age": 1, "name": "a"},
  map {"age": 3, "name": "b"},
  map {"age": 4, "name": "c"},
  map {"age": 5, "name": "d"},
  map {"age": 6, "name": "e"}
)
`;
		const result = await prettier.format(code, {
			parser: "xquery",
			plugins: [xqueryPlugin],
		});
		assert.strictEqual(result, code, "The input was already formatted correctly");
	});

	it("indents long lines", async () => {
		const code = `1111111111111111111111111111111111111111111111111 +
  2222222222222222222222222222222222222222222 +
  333333333333333333333333333333333333333
`;
		const result = await prettier.format(code, {
			parser: "xquery",
			plugins: [xqueryPlugin],
		});
		assert.strictEqual(result, code, "The input was already formatted correctly");
	});
	it("formats function definitions and variable definitions", async (t) => {
		const code = `
declare variable $var := "B";

declare function local:bla ($a as xs:integer) as xs:double {
  1 + $a
};

local:bla(2)
`.trimStart();

		const result = await prettier.format(code, {
			parser: "xquery",
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, "The input was already formatted correctly");
	});

	it("formats FLWOR expressions", async (t) => {
		const code = `
for $x in (1, 2, 3)
let $y := $x + 1
let $x :=
  for $q in $y to $z
  return $q * $q
return $y + sum(($q))
`.trimStart();

		const result = await prettier.format(code, {
			parser: "xquery",
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, "The input was already formatted correctly");
	});
});

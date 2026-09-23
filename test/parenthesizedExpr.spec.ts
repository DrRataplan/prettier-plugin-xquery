import { describe, it } from "node:test";
import assert from "node:assert";
import * as prettier from "prettier";
import xqueryPlugin from "../src/main.ts";

const format = (code: string) =>
	prettier.format(code, {
		parser: "xquery",
		plugins: [xqueryPlugin],
	});

const cases = [
	{
		name: "collapses a doubly nested parenthesized expression",
		input: `((1, 2, 3))\n`,
		output: `(1, 2, 3)\n`,
	},
	{
		name: "collapses a triply nested parenthesized expression",
		input: `(((1, 2, 3)))\n`,
		output: `(1, 2, 3)\n`,
	},
	{
		name: "collapses down to a single pair, however deep",
		input: `((((((((1))))))))\n`,
		output: `(1)\n`,
	},
	{
		name: "keeps the innermost pair around a single value",
		input: `((1))\n`,
		output: `(1)\n`,
	},
	{
		name: "keeps the innermost pair around an empty sequence",
		input: `(())\n`,
		output: `()\n`,
	},
	{
		name: "collapses nested parentheses inside a larger expression",
		input: `1 + (((2)))\n`,
		output: `1 + (2)\n`,
	},
	{
		name: "collapses nested parentheses in FLWOR clauses",
		input: `for $x in ((1 to 10)) return (($x))\n`,
		output: `for $x in (1 to 10)\nreturn ($x)\n`,
	},
	{
		name: "keeps a comment that sits inside the collapsed parentheses",
		input: `((1, (:B:)2, 3))\n`,
		output: `(1, (: B :) 2, 3)\n`,
	},
	{
		name: "does not touch a single pair of parentheses",
		input: `(1 to 3)\n`,
		output: `(1 to 3)\n`,
	},
	{
		name: "does not flatten a nested sequence that carries meaning to the reader",
		input: `(1, (2, 3))\n`,
		output: `(1, (2, 3))\n`,
	},
	{
		name: "does not strip parentheses around a sub-expression in a sequence",
		input: `(1, (2 + 3))\n`,
		output: `(1, (2 + 3))\n`,
	},
	{
		name: "leaves an empty sequence binding alone",
		input: `let $x := () return $x\n`,
		output: `let $x := ()\nreturn $x\n`,
	},
];

describe("parenthesized expressions", () => {
	for (const testCase of cases) {
		it(testCase.name, async () => {
			assert.strictEqual(await format(testCase.input), testCase.output);
		});
	}

	it("respects prettier-ignore on nested parentheses", async () => {
		const script = `(: prettier-ignore :)\n(((1, 2, 3)))\n`;
		assert.strictEqual(await format(script), script);
	});

	it("is stable when formatted twice", async () => {
		const once = await format(`(((1, 2, 3)))\n`);
		assert.strictEqual(await format(once), once);
	});
});

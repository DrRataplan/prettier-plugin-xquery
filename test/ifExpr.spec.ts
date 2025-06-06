import { describe, it } from "node:test";
import assert from "node:assert";
import * as prettier from "prettier";
import xqueryPlugin from "../src/main.ts";

const cases = [
	{
		name: "formats a simple case",
		input: `
if (1) then
  2
else
  3
`.trimStart(),
		output: `
if (1) then
  2
else
  3
`.trimStart(),
	},

	{
		name: "formats a nested if , case",
		input: `
if (1) then
  2
else if (3) then
  4
else
  5
`.trimStart(),
		output: `
if (1) then
  2
else if (3) then
  4
else
  5
`.trimStart(),
	},

	{
		name: "formats a if case , with parenthess",
		input: `
if (1) then (
  2
) else if (3) then (
  4
) else (
  5
)
`.trimStart(),
		output: `
if (1) then (
  2
) else if (3) then (
  4
) else (
  5
)
`.trimStart(),
	},

	{
		name: "formats a if case , with parentheses and comments",
		input: `
if (1) then (
  (: a :)
  2
) else if (3) then (
  (: b :)
  4
) else (
  (: c :)
)
`.trimStart(),
		output: `
if (1) then (
  (: a :)
  2
) else if (3) then (
  (: b :)
  4
) else (
  (: c :)
)
`.trimStart(),
	},

	{
		name: "formats the case with , empty sequences in the then",
		input: `
if (true()) then (
) else (
  "Hello World!"
)
`.trimStart(),
		output: `
if (true()) then (
) else (
  "Hello World!"
)
`.trimStart(),
	},

	{
		name: "formats the case with , empty sequences in the else",
		input: `
if (true()) then
  "Hello world!"
else (
)
`.trimStart(),
		output: `
if (true()) then
  "Hello world!"
else (
)
`.trimStart(),
	},

	{
		name: "formats the case with , empty sequences in both the else as the then",
		input: `
if (true()) then (
) else (
)
`.trimStart(),
		output: `
if (true()) then (
) else (
)
`.trimStart(),
	},

	{
		name: "formats the case with , empty sequences but comments in both the else as the then",
		input: `
if (true()) then (
  (: A :)
) else (
  (: B :)
)
`.trimStart(),
		output: `
if (true()) then (
  (: A :)
) else (
  (: B :)
)
`.trimStart(),
	},
	{
		name: "Should retain newlines in comments. TODO: fix indent on the comments on an else.",
		input: `
(: Handle A case :)
if (A) then
  A

(: Handle B case :)
else if (B) then
  B

(: Handle C case :)
else if (C) then
  C

else
  D
`.trimStart(),
		output: `
(: Handle A case :)
if (A) then
  A

  (: Handle B case :)
else if (B) then
  B

  (: Handle C case :)
else if (C) then
  C

else
  D
`.trimStart(),
	},
];

describe("if expressions", async () => {
	for (const test of cases) {
		it(test.name, async () => {
			const code = test.input;
			const result = await prettier.format(code, {
				parser: "xquery",
				plugins: [xqueryPlugin],
			});

			assert.strictEqual(result, test.output);
		});
	}
});

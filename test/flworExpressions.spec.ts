import { describe, it } from "node:test";
import assert from "node:assert";
import * as prettier from "prettier";
import xqueryPlugin from "../src/main.ts";

const cases = [
	{
		name: "formats a simple case",
		input: `
let $x := 1
return $x
`.trimStart(),
		output: `
let $x := 1
return $x
`.trimStart(),
	},
	{
		name: "retains newlines",
		input: `
let $x := 1

for $x in ($x to 10)

return $x
`,
		output: `
let $x := 1

for $x in ($x to 10)

return $x
`.trimStart(),
	},
	{
		name: "normalizes newlines to a single one",
		input: `
let $x := 1




for $x in ($x to 10)





return $x
`,
		output: `
let $x := 1

for $x in ($x to 10)

return $x
`.trimStart(),
	},
	{
		name: "retains comments",
		input: `
(: Declare $x :)
let $x := 1




(: For 10 times, do :)
for $x in ($x to 10)




(: Add one to the current value of $x :)
return $x + 1
`,
		output: `
(: Declare $x :)
let $x := 1

(: For 10 times, do :)
for $x in ($x to 10)

(: Add one to the current value of $x :)
return $x + 1
`.trimStart(),
	},
];

describe("flwor expressions", async (d) => {
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

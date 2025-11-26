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
  (: A leading comment :) A,
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
(: a :)

(: b :)

a
`.trimStart();

		const result = await prettier.format(code, {
			parser: "xquery",
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, "The input was already formatted correctly");
	});

	describe("formatting the contents of comments", () => {
		const cases = [
			{
				name: "enforces spaces in single line comments",
				input: "(:Too Close!:) a",
				output: `
(: Too Close! :) a
`.trimStart(),
			},
			{
				name: "enforces exactly single spaces in single line comments",
				input: "(:        Too Far!    :) a",
				output: `
(: Too Far! :) a
`.trimStart(),
			},
			{
				name: "enforces spaces in multiline comments",
				input: `
let $x := "a"
(:let $_ := $x || "B"<space><space><space>
let $_ := util:log("info", "The value of X is " || $x):)
return $x`
					.trimStart()
					.replaceAll("<space>", " "),
				output: `
let $x := "a"
(: let $_ := $x || "B"
let $_ := util:log("info", "The value of X is " || $x) :) return $x
`.trimStart(),
			},
			{
				name: "forces a newline at the start of a block comment",
				input: `
(: I am multiline blocky comment
 : But I should not start with a newline
 :) a
`.trimStart(),
				output: `
(:
 : I am multiline blocky comment
 : But I should not start with a newline
 :) a
`.trimStart(),
			},
			{
				name: "forces a newline at the start of a block comment 2",
				skip: "Not implemented yet",
				input: `
let $x := "A" (: I am multiline blocky comment
 : But I should not start with a newline
 :)
return $x`.trimStart(),
				output: `
let $x := "A"
(:
 : I am multiline blocky comment
 : But I should not start with a newline
 :)
return $x`.trimStart(),
			},
			{
				name: "Forces a space after each colon",
				input: `
(:~
:I am multiline blocky comment
:But I am too cramped because my lines do not start with '<space>:<space>'
:) a`.trimStart(),
				output: `
(:~
 : I am multiline blocky comment
 : But I am too cramped because my lines do not start with '<space>:<space>'
 :) a
`.trimStart(),
			},
			{
				name: "Forces a newline at the end of a comment",
				input: `
(:~
: I am multiline blocky comment
: But I end without a trailing newline :) a
`.trimStart(),
				output: `(:~
 : I am multiline blocky comment
 : But I end without a trailing newline
 :) a
`,
			},
			{
				name: "trims trailing spaces",
				input: `(:~<space><space><space>
: I am multiline blocky comment<space><space>
: But I have trailing spaces<space>
:) a
`
					.trimStart()
					.replaceAll("<space>", " "),
				output: `
(:~
 : I am multiline blocky comment
 : But I have trailing spaces
 :) a
`.trimStart(),
			},
			{
				name: "Enforces leading newline for docblocks",
				input: `
(:~ I am a docblock
: But I should start with a newline
:) a`,
				output: `
(:~
 : I am a docblock
 : But I should start with a newline
 :) a
`.trimStart(),
			},
			{
				name: "enforces leading colons for all lines in docblocks",
				input: `
(:~
  I am a docblock
 : But I do not always start with a ':'
:) a
`,
				output: `
(:~
 : I am a docblock
 : But I do not always start with a ':'
 :) a
`.trimStart(),
			},
			{
				name: "enforces a trailing newline for docblocks",
				input: `
(:~
: I am a docblock
: But I end without a trailing newline :) a
`.trimStart(),
				output: `
(:~
 : I am a docblock
 : But I end without a trailing newline
 :) a
`.trimStart(),
			},
			{
				name: "enforces <space>:<space> for all lines in a docblock",
				input: `
(:~
:I am a docblock
:But I am too cramped because my lines do not start with '<space>:<space>'
:) a
`,
				output: `
(:~
 : I am a docblock
 : But I am too cramped because my lines do not start with '<space>:<space>'
 :) a
`.trimStart(),
			},
			{
				name: "indents xqdoc comment blocks",
				input: `
declare function xxx:yyy(){
(
(:~   ASDASD ASD ASD ASD :)
   a)
};

xxx:yyy()`,
				output: `
declare function xxx:yyy () {
  (
    (:~
     : ASDASD ASD ASD ASD
     :)
    a
  )
};

xxx:yyy()
`.trimStart(),
			},
		];

		for (const testcase of cases) {
			it(testcase.name, async (t) => {
				if (testcase.skip) {
					t.skip(testcase.skip);
					return;
				}

				const result = await prettier.format(testcase.input, {
					parser: "xquery",
					plugins: [xqueryPlugin],
				});

				assert.equal(result, testcase.output);
			});
		}
	});

	describe("prettier-ignore", () => {
		it("handles the prettier-ignore comment to ignore the root node", async () => {
			const script = `
(: prettier-ignore :)
let $tree := (  1,
               2,3,
              4,5,6,
             7,8,9,0
)
return sum($tree)
`;
			const result = await prettier.format(script, {
				parser: "xquery",
				plugins: [xqueryPlugin],
			});

			assert.equal(result.trim(), script.trim());
		});

		it("handles the prettier-ignore comment to ignore just a part", async () => {
			const script = `
let $normal := (  1,
               2,3,
              4,5,6,
             7,8,9,0)
(: prettier-ignore :)
let $tree := (  1,
               2,3,
              4,5,6,
             7,8,9,0
)
return sum($tree)
`;
			const expectedOutput = `let $normal := (1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
(: prettier-ignore :)
let $tree := (  1,
               2,3,
              4,5,6,
             7,8,9,0
)
return sum($tree)`;
			const result = await prettier.format(script, {
				parser: "xquery",
				plugins: [xqueryPlugin],
			});

			assert.equal(result.trim(), expectedOutput.trim());
		});
	});

	describe("pragma: noformat and noprettier", () => {
		it("ignores anything that has a comment with prettier-ignore before the prolog", async () => {
			const script = `
(: @noprettier :)
let $tree := (  1,
               2,3,
              4,5,6,
             7,8,9,0
)
return sum($tree)
`;
			const result = await prettier.format(script, {
				parser: "xquery",
				plugins: [xqueryPlugin],
				checkIgnorePragma: true,
			});

			assert.equal(result.trim(), script.trim());
		});

		it("ignores anything that has a comment with prettier-ignore before the prolog", async () => {
			const script = `
(: @noformat :)
let $tree := (  1,
               2,3,
              4,5,6,
             7,8,9,0
)
return sum($tree)
`;
			const result = await prettier.format(script, {
				parser: "xquery",
				plugins: [xqueryPlugin],
				checkIgnorePragma: true,
			});

			assert.equal(result.trim(), script.trim());
		});

		it("allows invalid scripts", async () => {
			const script = `
(: @noprettier :)

I am not a valid XQuery module!
`;
			const result = await prettier.format(script, {
				parser: "xquery",
				plugins: [xqueryPlugin],
				checkIgnorePragma: true,
			});

			assert.equal(result.trim(), script.trim());
		});

		it("Scans the whole first comment block", async () => {
			const script = `
(:
 : This module has syntax errors
 : @noprettier
 :)

I am not a valid XQuery module!
`;
			const result = await prettier.format(script, {
				parser: "xquery",
				plugins: [xqueryPlugin],
				checkIgnorePragma: true,
			});

			assert.equal(result.trim(), script.trim());
		});

		it("Only checks the first comment block", async () => {
			const script = `
(: A new comment! :)
(:
 : This module has syntax errors
 : @noprettier
 :)

if (true()) then 1 else 2
`;
			const result = await prettier.format(script, {
				parser: "xquery",
				plugins: [xqueryPlugin],
				checkIgnorePragma: true,
			});

			assert.notEqual(result.trim(), script.trim());
		});

		it("handles the absence comment block at the start", async () => {
			const script = `
if (true()) then 1 else 2
`;
			const result = await prettier.format(script, {
				parser: "xquery",
				plugins: [xqueryPlugin],
				checkIgnorePragma: true,
			});

			assert.notEqual(result.trim(), script.trim());
		});
	});

	describe("pragma: prettier for opting in for formatting", () => {
		it("detects a pragma", async () => {
			const script = `
(: @format :)
if (true()) then 1 else 2
`;
			const result = await prettier.format(script, {
				parser: "xquery",
				plugins: [xqueryPlugin],
				requirePragma: true,
			});

			assert.notEqual(result.trim(), script.trim());
		});

		it("detects the absence of a pragma", async () => {
			const script = `
if (true()) then 1 else 2
`;
			const result = await prettier.format(script, {
				parser: "xquery",
				plugins: [xqueryPlugin],
				requirePragma: true,
			});

			assert.equal(result.trim(), script.trim());
		});

		it("can place a pragma when there is no commentblock yet", async () => {
			const script = `
if (true()) then 1 else 2
`.trim();
			const result = await prettier.format(script, {
				parser: "xquery",
				plugins: [xqueryPlugin],
				insertPragma: true,
			});

			assert.equal(
				result.trim(),
				`
(: @format :)
if (true()) then
  1
else
  2
`.trim(),
			);
		});

		it("can place a pragma if there is already a single-line commentblock", async () => {
			const script = `
(: This file can be formatted right? :)
if (true()) then 1 else 2
`.trim();
			const result = await prettier.format(script, {
				parser: "xquery",
				plugins: [xqueryPlugin],
				insertPragma: true,
			});

			assert.equal(
				result.trim(),
				`
(:~
 : @format
 : This file can be formatted right?
 :)
if (true()) then
  1
else
  2
`.trim(),
			);
		});

		it("can place a pragma if there is already a multi-line commentblock", async () => {
			const script = `
(:~
 : This file can be formatted right?
 :)
if (true()) then 1 else 2
`.trim();
			const result = await prettier.format(script, {
				parser: "xquery",
				plugins: [xqueryPlugin],
				insertPragma: true,
			});

			assert.equal(
				result.trim(),
				`
(:~
 : @format
 : This file can be formatted right?
 :)
if (true()) then
  1
else
  2
`.trim(),
			);
		});
	});
});

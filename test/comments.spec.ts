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
});

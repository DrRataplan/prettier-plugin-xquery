import { describe, it } from "node:test";
import { format } from "prettier";
import xqueryPlugin from "../src/main.ts";

describe("node constructors", () => {
	const fixtures = [
		{
			name: "Formats self closing elements",
			input: "<ele/>",
			output: "<ele />\n",
		},
		{
			name: "Formats self closing elements with lots of whitespace",
			input: "<ele                    />",
			output: "<ele />\n",
		},
		{
			name: "Formats long attribute lists",
			input: '<ele a="a" b="b" c="c" d="d" e="e" f="f" g="g" h="h" i="i" j="j" k="k" l="l" m="m" n="n" o="o" p="p" />',
		},
		{
			name: "Orders attributes alphabeticaly",
			input: '<ele a="a" xmlns:A="aaa" b="b" xmlns="111" />',
		},
		{
			name: "Transforms empty elements into self-closing ones",
			input: "<ele></ele>",
			output: "<ele />\n",
		},
		{
			name: "Does not transform empty elements with XQuery comments in them to self-closing variants",
			input: "<ele>{(: Comment :)}</ele>",
			output: "<ele>{ (: Comment :) }</ele>\n",
		},
		{
			name: "Does not transform empty elements with multiple XQuery comments in them to self-closing variants",
			input: "<ele>{(: A :) (: B :)}</ele>",
			output: "<ele>{ (: A :) (: B :) }</ele>\n",
		},
		{
			name: "Still normalizes to self-closing if the comment is next to the element",
			input: "<ele></ele>(: Comment :)",
		},
		{
			name: "Moves long attributes to their own line",
			input: `
<a xmlns:html='http://www.w3.org/1999/xhtml#somethingtoexceed80charactersaaaaaaa'>1</a>`.trimStart(),
			output: `
<a
  xmlns:html='http://www.w3.org/1999/xhtml#somethingtoexceed80charactersaaaaaaa'
>1</a>
`.trimStart(),
		},
		{
			name: "Keeps short attributes in the same line",
			input: `
<a xmlns:html='http://www.w3.org/1999/xhtml'>1</a>
`.trimStart(),
			output: `
<a xmlns:html='http://www.w3.org/1999/xhtml'>1</a>
`.trimStart(),
		},
		{
			name: "Formats DirElemContent when the boundary-space policy is explicity set to strip",
			input: `
declare boundary-space strip;

<book isbn="isbn-0060229357"><title>Harold and the Purple Crayon</title>
    <author>
        <first>Crockett</first>
        <last>Johnson</last>
    </author>
</book>
`.trimStart(),
			output: `
declare boundary-space strip;

<book isbn="isbn-0060229357">
  <title>Harold and the Purple Crayon</title>
  <author><first>Crockett</first><last>Johnson</last></author>
</book>
`.trimStart(),
		},
		{
			name: "Makes empty elements self-closing when the boundary-space policy is explicity set to strip",
			input: `
declare boundary-space strip;

<ele>    </ele>
`.trimStart(),
			output: `
declare boundary-space strip;

<ele />
`.trimStart(),
		},
		{
			name: "Formats DirElemContent when the boundary-space policy is explicity set to strip but keeps inlines intact",
			input: `
declare boundary-space strip;
<p>This span is an <span class="highlight">inline-level element</span>; its background has been colored to display both the beginning and end of the element's influence. Input elements, like <input type="radio" /> and <input type="checkbox" />, are also inline-level content.</p>
`.trimStart(),
			output: `
declare boundary-space strip;

<p>This span is an <span
    class="highlight"
  >inline-level element</span>; its background has been colored to display both the beginning and end of the element's influence. Input elements, like <input
    type="radio" /> and <input
    type="checkbox" />, are also inline-level content.</p>
`.trimStart(),
		},
		{
			name: "Does not reformat boundary-whitespace with mixed content when it is set to 'preserve'",
			input: `
declare boundary-space preserve;
<p>This span is an <span class="highlight">inline-level element</span>; its background has been colored to display both the beginning and end of the element's influence. Input elements, like <input type="radio" /> and <input type="checkbox" />, are also inline-level content.</p>
`.trimStart(),
			output: `
declare boundary-space preserve;

<p>This span is an <span
    class="highlight"
  >inline-level element</span>; its background has been colored to display both the beginning and end of the element's influence. Input elements, like <input
    type="radio" /> and <input
    type="checkbox" />, are also inline-level content.</p>
`.trimStart(),
		},
		{
			name: "Does not reformat boundary-whitespace with unmixed content when it is set to 'preserve'",
			input: `
declare boundary-space preserve;
<book isbn="isbn-0060229357">
  <title>Harold and the Purple Crayon</title>
  <author>
  <first>Crockett</first>
  <last>Johnson</last>
  </author>
</book>`.trimStart(),
			output: `
declare boundary-space preserve;

<book isbn="isbn-0060229357">
  <title>Harold and the Purple Crayon</title>
  <author>
  <first>Crockett</first>
  <last>Johnson</last>
  </author>
</book>
`.trimStart(),
		},
		{
			name: "handles tricky situations with loads of siblings where there is almost no boundary space",

			input: `
<a><a>A</a>,<a>A</a>,<a>A</a>,<a>A</a>,<a>A</a>,<a>A</a>,<a>A</a>,<a>A</a>,<a>A</a>,<a>A</a></a>
`,
			output: `
<a>
  <a>A</a>,<a>A</a>,<a>A</a>,<a>A</a>,<a>A</a>,<a>A</a>,<a>A</a>,<a>A</a>,<a
  >A</a>,<a>A</a>
</a>
`.trimStart(),
		},
		{
			name: "handles various input whitespace correctly",
			input: `declare boundary-space strip;

<book isbn="isbn-0060229357"><title>Harold and the Purple Crayon</title><author>        <first>Crockett</first><last>Johnson</last>
    </author>
    </book> ,
<book isbn="isbn-0060229357"> <title>Harold and the Purple Crayon</title><author>        <first>Crockett</first><last>Johnson</last>
    </author>
    </book>,
    <book isbn="isbn-0060229357"><title>Harold and the Purple Crayon</title> <author>
    <first>Crockett</first><last>Johnson</last>
    </author>
    </book>,
<book isbn="isbn-0060229357">



  <title>Harold and the Purple Crayon</title>




  <author><first>Crockett</first><last>Johnson</last></author>



</book>,
<book isbn="isbn-0060229357">
  <title>Harold and the Purple Crayon</title>
  <author><first>Crockett</first><last>Johnson</last></author>
</book>
`.trimStart(),
			output: `
declare boundary-space strip;

<book isbn="isbn-0060229357">
  <title>Harold and the Purple Crayon</title>
  <author><first>Crockett</first><last>Johnson</last></author>
</book>,
<book isbn="isbn-0060229357">
  <title>Harold and the Purple Crayon</title>
  <author><first>Crockett</first><last>Johnson</last></author>
</book>,
<book isbn="isbn-0060229357">
  <title>Harold and the Purple Crayon</title>
  <author><first>Crockett</first><last>Johnson</last></author>
</book>,
<book isbn="isbn-0060229357">
  <title>Harold and the Purple Crayon</title>
  <author><first>Crockett</first><last>Johnson</last></author>
</book>,
<book isbn="isbn-0060229357">
  <title>Harold and the Purple Crayon</title>
  <author><first>Crockett</first><last>Johnson</last></author>
</book>
`.trimStart(),
		},
		{
			name: "handles enclosed expressions as boundary whitespace",
			input: `
declare boundary-space strip;

<testcase>{}Some text here to make it over the 80 characters! AAAAAAAAAAAAAAAAAAA</testcase>,
<testcase> {}Some text here to make it over the 80 characters! AAAAAAAAAAAAAAAAAAA</testcase>,
<testcase>Some text here to make it over the 80 characters! AAAAAAAAAAAAAAAAAAA{}</testcase>,
<testcase>Some text here to make it over the 80 characters! AAAAAAAAAAAAAAAAAAA{} </testcase>,
<testcase> {}Some text here to make it over the 80 characters! AAAAAAAAAAAAAAAAAAA{} </testcase>,
<testcase>{}Some text here to make it over the 80 characters! AAAAAAAAAAAAAAAAAAA{}</testcase>
`,
			Aoutput: `
declare boundary-space strip;

<testcase>
  {}Some text here to make it over the 80 characters! AAAAAAAAAAAAAAAAAAA</testcase>,
<testcase>
  {}Some text here to make it over the 80 characters! AAAAAAAAAAAAAAAAAAA</testcase>,
<testcase
>Some text here to make it over the 80 characters! AAAAAAAAAAAAAAAAAAA{}
</testcase>,
<testcase
>Some text here to make it over the 80 characters! AAAAAAAAAAAAAAAAAAA{}
</testcase>,
<testcase>
  {}Some text here to make it over the 80 characters! AAAAAAAAAAAAAAAAAAA{}
</testcase>,
<testcase>
  {}Some text here to make it over the 80 characters! AAAAAAAAAAAAAAAAAAA{}
</testcase>
`.trimStart(),
		},
	];

	for (const { name, input, output } of fixtures) {
		it(name, async (t) => {
			const result = await format(input, {
				parser: "xquery",
				plugins: [xqueryPlugin],
			});

			if (output) {
				t.assert.equal(result, output);
			} else {
				// Assert to snapshot
				t.assert.snapshot(result, { serializers: [(value) => value] });
			}
		});
	}
});

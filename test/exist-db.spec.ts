import { describe, it } from "node:test";
import assert from "node:assert";
import * as prettier from "prettier";
import xqueryPlugin from "../src/main.ts";

describe("Exist-DB update node syntax", () => {
	it("can be formatted", async () => {
		const code = `
let $node := <root><a /></root>
return update insert <b some-attr-to-exceed-columnwidth="there" /> into $node/a
`.trimStart();

		const result = await prettier.format(code, {
			parser: "xquery",
			plugins: [xqueryPlugin],
		});

		assert.strictEqual(result, code, "The input was already formatted correctly");
	});

	describe("Examples from the docs", () => {
		const examplesFromDocs = [
			{
				code: `let $node := <root><a/></root>
return
update insert <b/> into $node/a`,
				name: "insert-1",
			},
			{
				code: `for $address in //address
return
update delete //address`,
				name: "delete-1",
			},
			{
				code: `for $address in //address
return
update delete $address`,
				name: "delete-2",
			},
			{
				code: `update insert <email type="office">andrew@gmail.com</email> into //address[fname="Andrew"]
`,
				name: "insert-2",
			},

			// Note, the next one does not parse in XQuery 4 anymore
			{
				code: `update insert attribute type {'permanent'} into //address[fname="Andrew"]`,
				name: "insert-attributes",
			},

			{ code: `update replace //fname[. = "Andrew"] with <fname>Andy</fname>`, name: "replace" },
			{ code: `update value //fname[. = "Andrew"] with 'Andy'`, name: "value" },
			{
				code: `for $city in //address/city
return
update delete $city`,
				name: "delete-3",
			},
			{
				code: `for $city in //address/city
return
update rename $city as 'locale'`,
				name: "rename",
			},
			{ code: `update insert element div {} into /`, name: "insert-3" },
		];
		for (let i = 0; i < examplesFromDocs.length; ++i) {
			const { code, name } = examplesFromDocs[i];
			it(`works with the example ${name}`, async (t) => {
				const result = await prettier.format(code, {
					parser: "xquery",
					plugins: [xqueryPlugin],
				});

				assert.ok(result, "There should be some result");

				let result2: string;
				await assert.doesNotReject(async () => {
					result2 = await prettier.format(code, {
						parser: "xquery",
						plugins: [xqueryPlugin],
					});
				}, "a second format should also work");

				assert.equal(result, result2, "Formatting must be stable");
				t.assert.fileSnapshot(result, `test/assets/exist-db-update-node/${name}.xquery`, {
					serializers: [(value: string) => value],
				});
			});
		}
	});
});

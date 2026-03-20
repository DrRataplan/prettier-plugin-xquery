import { describe, it } from "node:test";
import assert from "node:assert";
import * as prettier from "prettier";
import xqueryPlugin from "../src/main.ts";
import { NonTerminalNode, type Node } from "../src/tree.ts";

describe("XQuery Update Facility", () => {
	describe("Examples from the docs", () => {
		const examplesFromDocs = [
			{
				code: `declare %updating function
   upsert($e as element(),
          $an as xs:QName,
          $av as xs:anyAtomicType)
   {
   let $ea := $e/attribute()[fn:node-name(.) = $an]
   return
      if (fn:empty($ea))
      then insert node attribute {$an} {$av} into $e
      else replace value of node $ea with $av
};
()`,
				name: "updating-function",
			},
			{
				code: `insert node <year>2005</year>
after fn:doc("bib.xml")/books/book[1]/publisher`,
				name: "insert-1",
			},
			{
				code: `insert node $new-police-report
   as last into fn:doc("insurance.xml")/policies
      /policy[id = $pid]
      /driver[license = $license]
      /accident[date = $accdate]
/police-reports`,
				name: "insert-2",
			},
			{
				code: `delete node fn:doc("bib.xml")/books/book[1]/author[last()]
`,
				name: "delete-1",
			},
			{
				code: `delete nodes /email/message
[fn:currentDate() - date > xs:dayTimeDuration("P365D")]`,
				name: "delete-2",
			},
			{
				code: `replace node fn:doc("bib.xml")/books/book[1]/publisher
with fn:doc("bib.xml")/books/book[2]/publisher`,
				name: "replace-1",
			},
			{
				code: `replace value of node fn:doc("bib.xml")/books/book[1]/price
with fn:doc("bib.xml")/books/book[1]/price * 1.1`,
				name: "replace-2",
			},
			{
				code: `rename node fn:doc("bib.xml")/books/book[1]/author[1]
as "principal-author"`,
				name: "rename-1",
			},
			{
				code: `rename node fn:doc("bib.xml")/books/book[1]/author[1]
as $newname`,
				name: "rename-2",
			},
			{
				code: `for $node in $root//abc:*
let $localName := fn:local-name($node),
    $newQName := fn:concat("xyz:", $localName)
return (
   rename node $node as fn:QName("http://xyz/ns", $newQName),
   for $attr in $node/@abc:*
   let $attrLocalName := fn:local-name($attr),
       $attrNewQName := fn:concat("xyz:", $attrLocalName)
   return
      rename node $attr as fn:QName("http://xyz/ns", $attrNewQName)
)`,
				name: "rename-3",
			},
			{
				code: `let $f := fn:put#2
return invoke updating $f(<newnode/>,"newnode.xml")`,
				name: "invoke-updating",
			},
			{
				code: `for $e in //employee[skill = "Java"]
return
   copy $je := $e
   modify delete node $je/salary
return $je`,
				name: "copy-modify-1",
			},
			{
				code: `let $oldx := /a/b/x
return
   copy $newx := $oldx
   modify (rename node $newx as "newx",
           replace value of node $newx with $newx * 2)
return ($oldx, $newx)`,
				name: "copy-modify-2",
			},
			//			{ code: `N transform with { U }`, name: "transform-with" },

			{
				code: `copy $v := N
modify $v!(U)
						  return $v`,
				name: "copy-modify-3",
			},
			{
				code: `for $p in /inventory/part
let $deltap := $changes/part[partno eq $p/partno]
return
    replace value of node $p/quantity
						   with $p/quantity + $deltap/quantity`,
				name: "replace-3",
			},
			{
				code: `if ($e/@last-updated)
then replace value of node
        $e/last-updated with fn:currentDate()
else insert node
							attribute last-updated {fn:currentDate()} into $e`,
				name: "replace-4",
			},
			{
				code: `let $q := /inventory/item[serialno = "123456"]/quantity
return
   ( replace value of node $q with ( ),
	 insert node attribute xsi:nil {"true"} into $q )`,
				name: "replace-5",
			},
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

				t.assert.fileSnapshot(result, `test/assets/xquf/${name}.xquery`, {
					serializers: [(value: string) => value],
				});
			});
		}
	});
});

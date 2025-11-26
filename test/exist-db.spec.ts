import { describe, it } from "node:test";
import assert from "node:assert";
import * as prettier from "prettier";
import xqueryPlugin from "../src/main.ts";
describe("Exist-DB update node syntax", async () => {
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

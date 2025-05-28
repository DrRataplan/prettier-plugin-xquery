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

/**
* Automatically generated test report from running prettier over all 31821 test cases in the QT3 tests.
*
* The ignore list contains 122 known failing tests.
* Tests that fail because a comment failed to be printed: 15
* Tests that fail because of a type error: 103
* Tests that fail because the prettified result is not stable: 2
*
* Other failures: 2
*/
export default {
	"fn-base-uri": {
		"K2-BaseURIFunc-18": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		]
	},
	"fn-deep-equal": {
		"K2-SeqDeepEqualFunc-42": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		]
	},
	"fn-in-scope-prefixes": {
		"fn-in-scope-prefixes-1": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		]
	},
	"fn-node-name": {
		"fn-node-name-7": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		]
	},
	"fn-string-join": {
		"fn-string-join-24": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"fn-string-join-25": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		]
	},
	"fn-unparsed-text": {
		"fn-unparsed-text-054a": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"  'for $t1 in unparsed-text(\"https://timeanddate.com\")\\n' +",
			"    'return every\\n' +",
			"    '    $i in\\n' +",
			"    '    1 to 50 satisfies\\n' +",
			"    '    (\\n' +",
			"+   '      parse-xml(\"<a><b><c>\" || $i || \"</c></b></a>\")//c (:waste some time:) and\\n' +",
			"-   '      parse-xml(\"<a><b><c>\" || $i || \"</c></b></a>\")//c(:waste some time:)  and\\n' +",
			"    '        unparsed-text(\\n' +",
			"    '          translate(concat(\"https://timeanddate.com\", $i), \"0123456789\", \"\")\\n' +",
			"    '        ) eq\\n' +",
			"    '          $t1\\n' +",
			"    '    )\\n'",
			""
		]
	},
	"prod-AxisStep": {
		"Axes128": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		]
	},
	"prod-BaseURIDecl": {
		"base-uri-27": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		]
	},
	"prod-CompElemConstructor": {
		"K2-ComputeConElem-2": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"K2-ComputeConElem-3": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		]
	},
	"prod-CopyNamespacesDecl": {
		"copynamespace-15": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"copynamespace-16": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"copynamespace-17": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"copynamespace-18": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"copynamespace-19": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"copynamespace-20": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"copynamespace-21": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"copynamespace-22": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		]
	},
	"prod-DirAttributeList": {
		"Constr-attr-nsprein-4": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"Constr-attr-enclexpr-12": [
			"Error: Comment \"(:comment:)\" was not printed. Please report this error!"
		],
		"K2-DirectConElemAttr-6": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"K2-DirectConElemAttr-6a": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		]
	},
	"prod-DirElemConstructor": {
		"Constr-elem-empty-2": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"Constr-elem-empty-4": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"Constr-elem-matchtag-1": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"Constr-elem-matchtag-2": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"Constr-elem-matchtag-2a": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"K2-DirectConElem-15": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"K2-DirectConElem-28": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		]
	},
	"prod-DirElemContent": {
		"K2-DirectConElemContent-26b": [
			"Error: Comment \"(:comment:)\" was not printed. Please report this error!"
		]
	},
	"prod-DirElemContent.namespace": {
		"K2-DirectConElemNamespace-2": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"K2-DirectConElemNamespace-3": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		]
	},
	"prod-DirElemContent.whitespace": {
		"K2-DirectConElemWhitespace-16": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		]
	},
	"prod-EmptyOrderDecl": {
		"emptyorderdecl-2": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"emptyorderdecl-3": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"emptyorderdecl-6": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"emptyorderdecl-7": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"emptyorderdecl-10": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"emptyorderdecl-11": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"emptyorderdecl-14": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"emptyorderdecl-15": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"emptyorderdecl-18": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"emptyorderdecl-19": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"emptyorderdecl-22": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"emptyorderdecl-24": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"emptyorderdecl-26": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"emptyorderdecl-28": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		]
	},
	"prod-FunctionCall": {
		"FunctionCall-046": [
			"Error: Comment \"(: there's nothing here :)\" was not printed. Please report this error!"
		],
		"FunctionCall-047": [
			"Error: Comment \"(: there's nothing here :)\" was not printed. Please report this error!"
		],
		"FunctionCall-048": [
			"Error: Comment \"(: there's nothing here :)\" was not printed. Please report this error!"
		],
		"FunctionCall-055": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"... Skipped lines",
			"",
			"  'declare function local:product ($s as xs:double+) as xs:double {\\n' +",
			"    '  if (not($s[2])) then\\n' +",
			"    '    $s[1]\\n' +",
			"    '  else\\n' +",
			"    '    $s[1] * local:product($s[position() > 1])\\n' +",
			"...",
			"    'local:product((1, \"2\", 3))\\n' +",
			"+   \" (: '2' is not xs:double, error should be raised :)\"",
			"-   \"(: '2' is not xs:double, error should be raised :) \"",
			""
		]
	},
	"prod-FunctionDecl": {
		"function-declaration-029": [
			"Error: Comment \"(:there is nothing here:)\" was not printed. Please report this error!"
		],
		"function-declaration-030": [
			"Error: Comment \"(:there is nothing here:)\" was not printed. Please report this error!"
		]
	},
	"prod-GroupByClause": {
		"group-009": [
			"AssertionError [ERR_ASSERTION]: Got unwanted rejection: The second prettification should also work3.",
			"Input: ",
			"        <out>{ ",
			"            for $x in //employee ",
			"            let $key := $x/empnum ",
			"            group by $key collation \"http://www.w3.org/2005/xpath-functions/collation/codepoint\" ",
			"            order by $key ",
			"            return <group count=\"{count($x)}\" key=\"{$key}\"> {string-join($x/pnum, '|')} </group> ",
			"        }</out>",
			"      ",
			"Result of first round: <out>{",
			"    for $x in //employee",
			"    let $key := $x/empnum",
			"    group by $keycollation\"http://www.w3.org/2005/xpath-functions/collation/codepoint\"",
			"    order by $key",
			"    return <group count=\"{",
			"          count($x)",
			"        }\" key=\"{",
			"          $key",
			"        }\"> {",
			"          string-join($x/pnum, \"|\")",
			"        } </group>",
			"  }</out>",
			"",
			"Actual message: \"lexical analysis failed",
			"while expecting [S, '(:', ',', ':=', 'as', 'collation', 'count', 'for', 'group', 'let', 'order', 'return', 'stable', 'where']",
			"at line 4, column 27:",
			"...\"http://www.w3.org/2005/xpath-functions/collation/codepoint\"",
			"   ... (4:26)\""
		],
		"group-009a": [
			"AssertionError [ERR_ASSERTION]: Got unwanted rejection: The second prettification should also work3.",
			"Input: ",
			"        <out>{ ",
			"            for $x in //employee ",
			"            group by $key := $x/empnum collation \"http://www.w3.org/2005/xpath-functions/collation/codepoint\" ",
			"            order by $key ",
			"            return <group count=\"{count($x)}\" key=\"{$key}\"> {string-join($x/pnum, '|')} </group> ",
			"        }</out>",
			"      ",
			"Result of first round: <out>{",
			"    for $x in //employee",
			"    group by $key:=",
			"        $x/empnumcollation\"http://www.w3.org/2005/xpath-functions/collation/codepoint\"",
			"    order by $key",
			"    return <group count=\"{",
			"          count($x)",
			"        }\" key=\"{",
			"          $key",
			"        }\"> {",
			"          string-join($x/pnum, \"|\")",
			"        } </group>",
			"  }</out>",
			"",
			"Actual message: \"lexical analysis failed",
			"while expecting [S, EOF, '!', '!=', '#', '(', '(:', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', '|', '||', '}', '}`']",
			"at line 4, column 27:",
			"...\"http://www.w3.org/2005/xpath-functions/collation/codepoint\"",
			"   ... (4:26)\""
		]
	},
	"prod-ModuleImport": {
		"K-ModuleImport-1": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		],
		"K-ModuleImport-2": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		]
	},
	"prod-NamespaceDecl": {
		"K-NamespaceProlog-1": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		],
		"K-NamespaceProlog-2": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		]
	},
	"prod-NodeTest": {
		"K2-NodeTest-1": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		]
	},
	"prod-VarDecl": {
		"internalvar-2": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		],
		"internalvar-1": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		],
		"K-InternalVariablesWith-1": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		],
		"K-InternalVariablesWith-2": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		]
	},
	"method-text": {
		"Serialization-text-8": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"Serialization-text-8a": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		]
	},
	"method-xml": {
		"K2-Serialization-8": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"K2-Serialization-8a": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		]
	},
	"app-FunctxFn": {
		"functx-fn-empty-1": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-fn-empty-2": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-fn-empty-3": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-fn-empty-4": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-fn-empty-5": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-fn-empty-6": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-fn-empty-7": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-fn-empty-all": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-fn-nilled-1": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-fn-nilled-2": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-fn-nilled-3": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-fn-nilled-4": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-fn-nilled-all": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		]
	},
	"app-FunctxFunctx": {
		"functx-functx-has-element-only-content-1": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-element-only-content-2": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-element-only-content-3": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-element-only-content-4": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-element-only-content-5": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-element-only-content-6": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-element-only-content-7": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-element-only-content-8": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-element-only-content-9": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-element-only-content-all": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-empty-content-1": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-empty-content-2": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-empty-content-3": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-empty-content-4": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-empty-content-5": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-empty-content-6": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-empty-content-7": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-empty-content-all": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-mixed-content-1": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-mixed-content-2": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-mixed-content-3": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-mixed-content-4": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-mixed-content-5": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-mixed-content-6": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-mixed-content-7": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-mixed-content-all": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-simple-content-1": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-simple-content-2": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-simple-content-3": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-simple-content-4": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-simple-content-5": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-simple-content-6": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-has-simple-content-all": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-if-empty-1": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-if-empty-2": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-if-empty-3": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-if-empty-4": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-if-empty-5": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-if-empty-6": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		],
		"functx-functx-if-empty-all": [
			"TypeError: Cannot read properties of undefined (reading 'length')"
		]
	}
} as Record<string,Record<string,string>>;

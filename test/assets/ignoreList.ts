/**
* Automatically generated test report from running prettier over all 31821 test cases in the QT3 tests.
*
* The ignore list contains 26 known failing tests.
* Tests that fail because a comment failed to be printed: 8
* Tests that fail because of a type error: 0
* Tests that fail because the prettified result is not stable: 16
*
* Other failures: 2
*/
export default {
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
	"prod-FunctionCall": {
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
			"Result of first round: <out>",
			"  {",
			"    for $x in //employee",
			"    let $key := $x/empnum",
			"    group by $keycollation\"http://www.w3.org/2005/xpath-functions/collation/codepoint\"",
			"    order by $key",
			"    return <group count=\"{",
			"          count($x)",
			"        }\" key=\"{",
			"          $key",
			"        }\">{",
			"          string-join($x/pnum, \"|\")",
			"        }</group>",
			"  }",
			"</out>",
			"",
			"Actual message: \"lexical analysis failed",
			"while expecting [S, '(:', ',', ':=', 'as', 'collation', 'count', 'for', 'group', 'let', 'order', 'return', 'stable', 'where']",
			"at line 5, column 27:",
			"...\"http://www.w3.org/2005/xpath-functions/collation/codepoint\"",
			"   ... (5:26)\""
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
			"Result of first round: <out>",
			"  {",
			"    for $x in //employee",
			"    group by $key:=",
			"        $x/empnumcollation\"http://www.w3.org/2005/xpath-functions/collation/codepoint\"",
			"    order by $key",
			"    return <group count=\"{",
			"          count($x)",
			"        }\" key=\"{",
			"          $key",
			"        }\">{",
			"          string-join($x/pnum, \"|\")",
			"        }</group>",
			"  }",
			"</out>",
			"",
			"Actual message: \"lexical analysis failed",
			"while expecting [S, EOF, '!', '!=', '#', '(', '(:', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', '|', '||', '}', '}`']",
			"at line 5, column 27:",
			"...\"http://www.w3.org/2005/xpath-functions/collation/codepoint\"",
			"   ... (5:26)\""
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
	"method-html": {
		"Serialization-html-18": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"... Skipped lines",
			"",
			"  'declare namespace output = \"http://www.w3.org/2010/xslt-xquery-serialization\";\\n' +",
			"    'declare namespace ex = \"http://www.example.org\";\\n' +",
			"    '\\n' +",
			"    'declare option output:method \"html\";\\n' +",
			"    'declare option output:indent \"no\";\\n' +",
			"...",
			"    '    <p>No CDATA<em>No CDATA</em>No CDATA<ex:isle1>Some CDATA<ex:isle2>No CDATA</ex:isle2>More CDATA</ex:isle1>\\n' +",
			"-   '\\n' +",
			"    '    </p>\\n' +",
			"    '  </body>\\n' +",
			"    '</html>\\n'",
			""
		],
		"Serialization-html-19a": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"... Skipped lines",
			"",
			"  'declare namespace output = \"http://www.w3.org/2010/xslt-xquery-serialization\";\\n' +",
			"    'declare namespace ex = \"http://www.example.org\";\\n' +",
			"    '\\n' +",
			"    'declare option output:method \"html\";\\n' +",
			"    'declare option output:indent \"no\";\\n' +",
			"...",
			"    '    <p>No CDATA<em>No CDATA</em>No CDATA<ex:isle1>Some CDATA<ex:isle2>No CDATA</ex:isle2>More CDATA</ex:isle1>\\n' +",
			"-   '\\n' +",
			"    '    </p>\\n' +",
			"    '  </body>\\n' +",
			"    '</html>\\n'",
			""
		]
	},
	"prod-CompAttrConstructor": {
		"comp-attr-bad-name-1": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"  \"(: 3.7.3.2 Computed Attribute Constructor per XQ.E19 XQDY0044 if namespace prefix is 'xmlns' Mary Holstege :) <result>\\n\" +",
			"-   '\\n' +",
			"    '  {\\n' +",
			"    '    attribute {\"xmlns:error\"} {}\\n' +",
			"    '  }\\n' +",
			"    '</result>\\n'",
			""
		],
		"comp-attr-bad-name-2": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"  \"(: 3.7.3.2 Computed Attribute Constructor per XQ.E19 XQDY0044 if no namespace prefix and local name is 'xmlns' Mary Holstege :) <result>\\n\" +",
			"-   '\\n' +",
			"    '  {\\n' +",
			"    '    attribute {\"xmlns\"} {}\\n' +",
			"    '  }\\n' +",
			"    '</result>\\n'",
			""
		],
		"comp-attr-bad-name-3": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"  \"(: 3.7.3.2 Computed Attribute Constructor per XQ.E19 XQDY0044 if namespace URI is 'http://www.w3.org/2000/xmlns/' Mary Holstege :) <result>\\n\" +",
			"-   '\\n' +",
			"    '  {\\n' +",
			"    '    attribute {fn:QName(\"http://www.w3.org/2000/xmlns/\", \"error\")} {}\\n' +",
			"    '  }\\n' +",
			"    '</result>\\n'",
			""
		],
		"comp-attr-bad-name-4": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"  \"(: 3.7.3.2 Computed Attribute Constructor per XQ.E19 XQDY0044 if namespace URI is 'http://www.w3.org/2000/xmlns/' Mary Holstege :) <result>\\n\" +",
			"-   '\\n' +",
			"    '  {\\n' +",
			"    '    attribute {fn:QName(\"http://www.w3.org/2000/xmlns/\", \"foo:error\")} {}\\n' +",
			"    '  }\\n' +",
			"    '</result>\\n'",
			""
		],
		"comp-attr-bad-name-5": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"  \"(: 3.7.3.2 Computed Attribute Constructor per XQ.E19 XQDY0044 if namespace prefix is 'xml' and namespace URI is not 'http://www.w3.org/XML/1998/namespace' Mary Holstege :) <result>\\n\" +",
			"-   '\\n' +",
			"    '  {\\n' +",
			"    '    attribute {fn:QName(\"http://example.com/not-XML-uri\", \"xml:error\")} {}\\n' +",
			"    '  }\\n' +",
			"    '</result>\\n'",
			""
		],
		"comp-attr-bad-name-6": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"  \"(: 3.7.3.2 Computed Attribute Constructor per XQ.E19 XQDY0044 if namespace prefix is not 'xml' and namespace URI is 'http://www.w3.org/XML/1998/namespace' Mary Holstege :) <result>\\n\" +",
			"-   '\\n' +",
			"    '  {\\n' +",
			"    '    attribute {fn:QName(\"http://www.w3.org/XML/1998/namespace\", \"foo:error\")} {}\\n' +",
			"    '  }\\n' +",
			"    '</result>\\n'",
			""
		],
		"comp-attr-bad-name-7": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"  \"(: 3.7.3.2 Computed Attribute Constructor per XQ.E19 XQDY0044 if namespace prefix is 'xmlns' Mary Holstege :) <result>\\n\" +",
			"-   '\\n' +",
			"    '  {\\n' +",
			"    '    attribute {fn:QName(\"http://example.com/some-uri\", \"xmlns:error\")} {}\\n' +",
			"    '  }\\n' +",
			"    '</result>\\n'",
			""
		]
	},
	"prod-ContextItemDecl": {
		"contextDecl-017": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"  'declare context item := $y;\\n' +",
			"    '\\n' +",
			"+   'declare variable $y := <root><a>1</a>,<a>2</a>,<a>3</a>,<a>4</a>,<a>5</a>,<a>6\\n' +",
			"-   'declare variable $y := <root><a>1</a>,<a>2</a>,<a>3</a>,<a>4</a>,<a>5\\n' +",
			"-   '  </a>,<a>6\\n' +",
			"    '  </a>,<a>7</a>,<a>8</a>,<a>9</a>,<a>10</a>\\n' +",
			"    '</root>;\\n' +",
			"    '\\n' +",
			"    'declare variable $x external;\\n' +",
			"    '\\n' +",
			""
		]
	},
	"prod-DirElemContent": {
		"Constr-cont-nested-4": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"+ '<elem>A<a>B<?pi?>C<b />D<!---->E</a>F<!--content-->G<a />H<?pi content?>I<c />J\\n' +",
			"- '<elem>A<a>B<?pi?>C<b />D<!---->E\\n' +",
			"-   '  </a>F<!--content-->G<a />H<?pi content?>I<c />J\\n' +",
			"    '</elem>\\n'",
			""
		],
		"K2-DirectConElemContent-28": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"  'string(\\n' +",
			"    '  <elem>\\n' +",
			"    `    <![CDATA[con<<< ]] >\"\"'*\"*\">>tent]]&#00;&#x12;&amp;&quot;&notrecognized;&apos]]>\\n` +",
			"-   '\\n' +",
			"    '  </elem>\\n' +",
			"    ') eq\\n' +",
			"    `  'con&lt;&lt;&lt; ]] &gt;\"\"''*\"*\"&gt;&gt;tent]]&amp;#00;&amp;#x12;&amp;amp;&amp;quot;&amp;notrecognized;&amp;apos'\\n`",
			""
		]
	},
	"prod-VarDefaultValue": {
		"extvardef-016b": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"  'declare context item := $y;\\n' +",
			"    '\\n' +",
			"+   'declare variable $y := <root><a>1</a>,<a>2</a>,<a>3</a>,<a>4</a>,<a>5</a>,<a>6\\n' +",
			"-   'declare variable $y := <root><a>1</a>,<a>2</a>,<a>3</a>,<a>4</a>,<a>5\\n' +",
			"-   '  </a>,<a>6\\n' +",
			"    '  </a>,<a>7</a>,<a>8</a>,<a>9</a>,<a>10</a>\\n' +",
			"    '</root>;\\n' +",
			"    '\\n' +",
			"    'declare variable $x external;\\n' +",
			"    '\\n' +",
			""
		]
	},
	"app-Demos": {
		"sudoku": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"... Skipped lines",
			"",
			"  'declare namespace fn = \"sudoku\";\\n' +",
			"    '\\n' +",
			"    'declare variable $board := (\\n' +",
			"    '  1,\\n' +",
			"    '  0,\\n' +",
			"...",
			"    '      <style>table {{ border-collapse: collapse; border: 1px solid black; }} td {{ padding: 10px; }} .norm {{ border-left: 1px solid #CCC; border-top: 1px solid #CCC; }} .csep {{ border-left: 1px solid black; }} .rsep {{ border-top: 1px solid black; }}\\n' +",
			"-   '\\n' +",
			"    '      </style>\\n' +",
			"    '    </head>\\n' +",
			"    '    <body>{\\n' +",
			"    '        fn:drawBoard($board)\\n' +",
			"    '      }</body>\\n' +",
			""
		]
	}
} as Record<string,Record<string,string>>;

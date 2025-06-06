/**
* Automatically generated test report from running prettier over all 31821 test cases in the QT3 tests.
*
* The ignore list contains 17 known failing tests.
* Tests that fail because a comment failed to be printed: 15
* Tests that fail because of a type error: 0
* Tests that fail because the prettified result is not stable: 0
*
* Other failures: 2
*/
export default {
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
			"  for $x in //employee",
			"  let $key := $x/empnum",
			"  group by $keycollation\"http://www.w3.org/2005/xpath-functions/collation/codepoint\"",
			"  order by $key",
			"  return <group count=\"{",
			"      count($x)",
			"    }\" key=\"{",
			"      $key",
			"    }\"> {",
			"      string-join($x/pnum, \"|\")",
			"    } </group>",
			"}</out>",
			"",
			"Actual message: \"lexical analysis failed",
			"while expecting [S, '(:', ',', ':=', 'as', 'collation', 'count', 'for', 'group', 'let', 'order', 'return', 'stable', 'where']",
			"at line 4, column 25:",
			"...\"http://www.w3.org/2005/xpath-functions/collation/codepoint\"",
			"  o... (4:24)\""
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
			"  for $x in //employee",
			"  group by $key:=",
			"      $x/empnumcollation\"http://www.w3.org/2005/xpath-functions/collation/codepoint\"",
			"  order by $key",
			"  return <group count=\"{",
			"      count($x)",
			"    }\" key=\"{",
			"      $key",
			"    }\"> {",
			"      string-join($x/pnum, \"|\")",
			"    } </group>",
			"}</out>",
			"",
			"Actual message: \"lexical analysis failed",
			"while expecting [S, EOF, '!', '!=', '#', '(', '(:', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', '|', '||', '}', '}`']",
			"at line 4, column 25:",
			"...\"http://www.w3.org/2005/xpath-functions/collation/codepoint\"",
			"  o... (4:24)\""
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
	"prod-DirAttributeList": {
		"Constr-attr-enclexpr-12": [
			"Error: Comment \"(:comment:)\" was not printed. Please report this error!"
		]
	},
	"prod-DirElemContent": {
		"K2-DirectConElemContent-26b": [
			"Error: Comment \"(:comment:)\" was not printed. Please report this error!"
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
		]
	},
	"prod-FunctionDecl": {
		"function-declaration-029": [
			"Error: Comment \"(:there is nothing here:)\" was not printed. Please report this error!"
		],
		"function-declaration-030": [
			"Error: Comment \"(:there is nothing here:)\" was not printed. Please report this error!"
		]
	}
} as Record<string,Record<string,string>>;

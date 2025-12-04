/**
* Automatically generated test report from running prettier over all 31821 test cases in the QT3 tests.
*
* The ignore list contains 709 known failing tests.
* Tests that fail because a comment failed to be printed: 8
* Tests that fail because of a type error: 0
* Tests that fail because the prettified result is not stable: 0
*
* Other failures: 701
*/
export default {
	"prod-ModuleImport": {
		"K-ModuleImport-1": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		],
		"K-ModuleImport-2": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		],
		"K2-ModuleProlog-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, 'declare', 'import']",
			"at line 1, column 51:",
			"...\"an expression\"..."
		],
		"K-ModuleImport-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', '=']",
			"at line 1, column 32:",
			"...:= \"http://example.com/Dummy\"; 1..."
		]
	},
	"prod-NamespaceDecl": {
		"K-NamespaceProlog-1": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		],
		"K-NamespaceProlog-2": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		],
		"namespaceDecl-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', '=']",
			"at line 1, column 22:",
			"...:bar = \"http://www.example.com/examples\"; \"aa\"..."
		],
		"K-NamespaceProlog-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', '=']",
			"at line 1, column 26:",
			"...:= \"http://example.com/\";..."
		],
		"K2-NamespaceProlog-14": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 42:",
			"...namespace x = \"http://example.com/\"; 1..."
		],
		"K2-NamespaceProlog-16": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ';']",
			"at line 1, column 50:",
			"...{ 1 }..."
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
		],
		"K2-InternalVariablesWithout-15": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ';']",
			"at line 1, column 28:",
			"...:= 2; 3..."
		],
		"K-InternalVariablesWith-7": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', '$']",
			"at line 1, column 18:",
			"...var1 := 1; 1..."
		],
		"K-InternalVariablesWith-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'external', ':=', 'as']",
			"at line 1, column 24:",
			"...= 1; 1..."
		],
		"K-InternalVariablesWith-10": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 45:",
			"...namespace prefix = \"http://example.com/myNamespace\"; true()..."
		]
	},
	"fn-generate-id": {
		"generate-id-007": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')']",
			"at line 1, column 25:",
			"...::*)[1])..."
		],
		"generate-id-011": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')']",
			"at line 1, column 34:",
			"...::*) ",
			"            return count($nodes) eq count(distinct-values(..."
		]
	},
	"fn-has-children": {
		"fn-has-children-020": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 16:",
			"...::fots/fn:has-children()..."
		],
		"fn-has-children-021": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')', ',']",
			"at line 1, column 33:",
			"...::fots )..."
		]
	},
	"fn-innermost": {
		"fn-innermost-017": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')', ',']",
			"at line 1, column 28:",
			"...::* )..."
		],
		"fn-innermost-018": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')', ',']",
			"at line 1, column 28:",
			"...::* )[position() le 2] ! local-name()..."
		],
		"fn-innermost-019": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')', ',']",
			"at line 1, column 28:",
			"...::* )[position() = (7 to 9)] ! local-name()..."
		],
		"fn-innermost-020": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')', ',']",
			"at line 1, column 28:",
			"...::* )[position() = (16 to 19)] ! local-name()..."
		],
		"fn-innermost-021": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')', ',']",
			"at line 1, column 28:",
			"...::* )[position() = (66 to 69)] ! local-name()..."
		],
		"fn-innermost-022": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')', ',']",
			"at line 1, column 43:",
			"...::* ),",
			"                           //*/namespace::* )..."
		]
	},
	"fn-local-name": {
		"fn-local-name-77": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')']",
			"at line 1, column 18:",
			"...::*[.='http://www.w3.org/1999/xlink'])[1])..."
		]
	},
	"fn-name": {
		"fn-name-27": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')']",
			"at line 1, column 18:",
			"...::*[.='http://www.w3.org/1999/xlink'])[1])..."
		]
	},
	"fn-outermost": {
		"fn-outermost-017": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')', ',']",
			"at line 1, column 28:",
			"...::* )..."
		],
		"fn-outermost-018": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')', ',']",
			"at line 1, column 28:",
			"...::* )[position() le 2] ! local-name()..."
		],
		"fn-outermost-019": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')', ',']",
			"at line 1, column 28:",
			"...::* )[position() = (7 to 9)] ! local-name()..."
		],
		"fn-outermost-020": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')', ',']",
			"at line 1, column 28:",
			"...::* )[position() = (16 to 19)] ! local-name()..."
		],
		"fn-outermost-021": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')', ',']",
			"at line 1, column 28:",
			"...::* )[position() = (66 to 69)] ! local-name()..."
		],
		"fn-outermost-022": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')', ',']",
			"at line 1, column 43:",
			"...::* ),",
			"                           //*/namespace::* )..."
		]
	},
	"fn-path": {
		"path011": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')']",
			"at line 1, column 21:",
			"...::xml)[1])..."
		],
		"path012": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')']",
			"at line 1, column 21:",
			"...::xml)[1])..."
		],
		"path013": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')']",
			"at line 1, column 21:",
			"...::*[name()=''])[1])..."
		]
	},
	"fn-serialize": {
		"serialize-xml-012": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')']",
			"at line 1, column 23:",
			"...::*)[1])..."
		]
	},
	"fn-string": {
		"fn-string-27": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')']",
			"at line 1, column 20:",
			"...::*[.='http://www.w3.org/1999/xlink'])[1])..."
		]
	},
	"xs-anyURI": {
		"cbcl-anyURI-004b": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', ')', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 11:",
			"...\"http://!$&'()*+,;=/\")..."
		],
		"cbcl-anyURI-006b": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', ')', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 11:",
			"...\"http://www.example.org/!/$/&/'/(/)/*/+/,/;/=/\")..."
		],
		"cbcl-anyURI-009b": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', ')', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 11:",
			"...\"http://www.example.org/?!$&'()*+,;=\")..."
		],
		"cbcl-anyURI-012b": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', ')', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 11:",
			"...\"http://www.example.org/#!$&'()*+,;=\")..."
		]
	},
	"op-boolean-equal": {
		"op-boolean-equal-18": [
			"Error: Parser error: syntax error, found 'eq'",
			"while expecting [S, '(:', EOF, ')', ',', ':', ';', ']', 'and', 'as', 'ascending', 'case', 'collation', 'count', 'default', 'descending', 'else', 'empty', 'end', 'following', 'for', 'group', 'into', 'let', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'where', 'with', '}', '}`']",
			"at line 1, column 18:",
			"...eq true() eq true()..."
		]
	},
	"op-is-same-node": {
		"K-NodeSame-5": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 6:",
			"......"
		],
		"cbcl-is-same-node-002": [
			"Error: Parser error: syntax error, found 'is'",
			"while expecting [S, '(:', EOF, ')', ',', ':', ';', ']', 'and', 'as', 'ascending', 'case', 'collation', 'count', 'default', 'descending', 'else', 'empty', 'end', 'following', 'for', 'group', 'into', 'let', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'where', 'with', '}', '}`']",
			"at line 1, column 72:",
			"...is (/staff[1]/employee[1]/empnum[1])..."
		]
	},
	"op-node-after": {
		"K-NodeAfter-5": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 6:",
			"...> ()..."
		],
		"K-NodeAfter-6": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 6:",
			"......"
		],
		"K-NodeAfter-7": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...>> ()..."
		],
		"K-NodeAfter-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...>>..."
		],
		"K-NodeAfter-9": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 5:",
			"......"
		],
		"K-NodeAfter-10": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...>> 1..."
		],
		"K-NodeAfter-11": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...>>>..."
		]
	},
	"op-node-before": {
		"K-NodeBefore-5": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 7:",
			"... ()..."
		],
		"K-NodeBefore-6": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 6:",
			"......"
		],
		"K-NodeBefore-7": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 2:",
			"...< ()..."
		],
		"K-NodeBefore-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 2:",
			"...<..."
		],
		"K-NodeBefore-9": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 5:",
			"......"
		],
		"K-NodeBefore-10": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 2:",
			"...< 1..."
		],
		"K-NodeBefore-11": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 2:",
			"...<<..."
		]
	},
	"op-numeric-equal": {
		"K-NumericEqual-47": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 3:",
			"...:= 3..."
		]
	},
	"op-numeric-divide": {
		"K-NumericDivide-36": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 4:",
			"...div3..."
		],
		"K-NumericDivide-37": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...10div 3..."
		],
		"K-NumericDivide-38": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...10div3..."
		]
	},
	"op-numeric-integer-divide": {
		"K-NumericIntegerDivide-43": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...10idiv 3..."
		],
		"K-NumericIntegerDivide-44": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 4:",
			"...idiv3..."
		],
		"K-NumericIntegerDivide-45": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...10idiv3..."
		]
	},
	"op-numeric-mod": {
		"K-NumericMod-21": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 4:",
			"...mod3..."
		],
		"K-NumericMod-22": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...10mod 3..."
		],
		"K-NumericMod-23": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...10mod3..."
		]
	},
	"op-numeric-multiply": {
		"K-NumericMultiply-25": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 3:",
			"...5..."
		],
		"K-NumericMultiply-26": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 5:",
			"...5..."
		],
		"K-NumericMultiply-27": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 9:",
			"...5..."
		]
	},
	"op-to": {
		"rangeExpr-33": [
			"Error: Parser error: syntax error, found 'to'",
			"while expecting [S, '(:', EOF, '!=', ')', ',', ':', ';', '<', '<<', '<=', '=', '>', '>=', '>>', ']', 'and', 'as', 'ascending', 'case', 'collation', 'count', 'default', 'descending', 'else', 'empty', 'end', 'eq', 'following', 'for', 'ge', 'group', 'gt', 'into', 'is', 'le', 'let', 'lt', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'where', 'with', '||', '}', '}`']",
			"at line 1, column 10:",
			"...to 12..."
		]
	},
	"prod-Annotation": {
		"annotation-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')', ',']",
			"at line 3, column 31:",
			"...+2) function local:foo() { 0 }; ",
			"",
			"         local:foo()",
			"      ..."
		],
		"annotation-33": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, S, '(:']",
			"at line 2, column 25:",
			"...true())  function () { \"bar\" } ()",
			"      ..."
		]
	},
	"prod-ArrowPostfix": {
		"ArrowPostfix-014": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', '(']",
			"at line 1, column 51:",
			"......"
		],
		"ArrowPostfix-031": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!=', ')', '*', '+', ',', '-', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 44:",
			"...! upper-case(.)..."
		]
	},
	"prod-AxisStep": {
		"Axes088": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 4:",
			"......"
		],
		"Axes114": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 13:",
			"...::namespace-node()..."
		],
		"Axes116": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 13:",
			"...::*[self::namespace-node()]..."
		],
		"Axes118": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 13:",
			"...::*..."
		],
		"Axes119": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 13:",
			"...::*/....."
		],
		"Axes120": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 13:",
			"...::*/name()..."
		],
		"Axes121": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', ')', ',']",
			"at line 1, column 20:",
			"...::xlink)..."
		],
		"Axes122": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 13:",
			"...::xlink is /*/*[1]/namespace::xlink..."
		],
		"Axes123": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 13:",
			"...::xlink is /*/namespace::*[. = 'http://www.w3.org/1999/xlink']..."
		],
		"Axes124": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 13:",
			"...::*[not(name())]..."
		],
		"Axes125": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 15:",
			"...::*[not(name())]..."
		],
		"Axes126": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 17:",
			"...::*[not(name())]..."
		],
		"K2-Axes-5": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 2:",
			"...:(:hey:)ncname..."
		],
		"K2-Axes-6": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 9:",
			"...:ncname..."
		],
		"K2-Axes-7": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 3:",
			"...:ncname..."
		],
		"K2-Axes-8": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 9:",
			"...:ncname..."
		],
		"K2-Axes-9": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 8:",
			"...:*..."
		],
		"K2-Axes-10": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 12:",
			"...:*..."
		],
		"K2-Axes-11": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 3:",
			"...:ncname..."
		],
		"K2-Axes-12": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 7:",
			"...: *..."
		],
		"K2-Axes-13": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 9:",
			"...:ncname..."
		],
		"K2-Axes-14": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 7:",
			"...:(:hey:)*..."
		],
		"K2-Axes-15": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 9:",
			"...:(:hey:) ncname..."
		],
		"K2-Axes-16": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 2:",
			"...:(:hey:)ncname..."
		],
		"K2-Axes-17": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 2:",
			"...:..."
		],
		"K2-Axes-29": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 22:",
			"...::*..."
		],
		"K2-Axes-34": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 11:",
			"......"
		],
		"K2-Axes-35": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 10:",
			"......"
		],
		"K2-Axes-36": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 45:",
			"......"
		],
		"K2-Axes-37": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 13:",
			"...()..."
		],
		"K2-Axes-46": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 3:",
			"......"
		],
		"K2-Axes-54": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 10:",
			"...::*..."
		],
		"K2-Axes-77": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 11:",
			"...::node()..."
		],
		"K2-Axes-85": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 34:",
			"...)..."
		],
		"K2-Axes-90": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 7:",
			"...:..."
		],
		"K2-Axes-91": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 7:",
			"...:..."
		],
		"K2-Axes-93": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 2:",
			"... asd />..."
		],
		"K2-Axes-95": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 8:",
			"...function..."
		],
		"K2-Axes-96": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', '(']",
			"at line 1, column 22:",
			"......"
		],
		"K2-Axes-97": [
			"Error: Parser error: syntax error, found EOF",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 39:",
			"......"
		]
	},
	"prod-BoundarySpaceDecl": {
		"K-BoundarySpaceProlog-4": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 16:",
			"...boundary space(::)strip(::); 1 eq 1..."
		]
	},
	"prod-CastableExpr": {
		"K-SeqExprCastable-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 32:",
			"......"
		],
		"K-SeqExprCastable-2": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 32:",
			"......"
		],
		"K-SeqExprCastable-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 38:",
			"......"
		],
		"K-SeqExprCastable-4": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 33:",
			"......"
		],
		"K-SeqExprCastable-4a": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 33:",
			"......"
		],
		"K-SeqExprCastable-12": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 66:",
			"......"
		],
		"K-SeqExprCastable-12a": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 66:",
			"......"
		],
		"K-SeqExprCastable-13": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!=', ')', '*', '+', ',', '-', ':', ';', '<', '<<', '<=', '=', '>', '>=', '>>', '?', ']', 'and', 'as', 'ascending', 'case', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 26:",
			"...()..."
		],
		"K-SeqExprCastable-13a": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!=', ')', '*', '+', ',', '-', ':', ';', '<', '<<', '<=', '=', '>', '>=', '>>', '?', ']', 'and', 'as', 'ascending', 'case', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 26:",
			"...()..."
		],
		"K-SeqExprCastable-14": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!=', ')', '*', '+', ',', '-', ':', ';', '<', '<<', '<=', '=', '>', '>=', '>>', '?', ']', 'and', 'as', 'ascending', 'case', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 26:",
			"...()..."
		],
		"K-SeqExprCastable-15": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!=', ')', '*', '+', ',', '-', ':', ';', '<', '<<', '<=', '=', '>', '>=', '>>', '?', ']', 'and', 'as', 'ascending', 'case', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 31:",
			"...()..."
		],
		"K-SeqExprCastable-16": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!=', ')', '*', '+', ',', '-', ':', ';', '<', '<<', '<=', '=', '>', '>=', '>>', '?', ']', 'and', 'as', 'ascending', 'case', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 36:",
			"...()..."
		]
	},
	"prod-CastExpr": {
		"K-SeqExprCast-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 28:",
			"......"
		],
		"K-SeqExprCast-2": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 28:",
			"......"
		],
		"K-SeqExprCast-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 29:",
			"......"
		],
		"K-SeqExprCast-3a": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 29:",
			"......"
		],
		"K-SeqExprCast-10": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!=', ')', '*', '+', ',', '-', ':', ';', '<', '<<', '<=', '=', '>', '>=', '>>', '?', ']', 'and', 'as', 'ascending', 'case', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 22:",
			"...()..."
		],
		"K-SeqExprCast-10a": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!=', ')', '*', '+', ',', '-', ':', ';', '<', '<<', '<=', '=', '>', '>=', '>>', '?', ']', 'and', 'as', 'ascending', 'case', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 22:",
			"...()..."
		],
		"K-SeqExprCast-11": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!=', ')', '*', '+', ',', '-', ':', ';', '<', '<<', '<=', '=', '>', '>=', '>>', '?', ']', 'and', 'as', 'ascending', 'case', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 22:",
			"...()..."
		],
		"K-SeqExprCast-11a": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!=', ')', '*', '+', ',', '-', ':', ';', '<', '<<', '<=', '=', '>', '>=', '>>', '?', ']', 'and', 'as', 'ascending', 'case', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 22:",
			"...()..."
		],
		"K-SeqExprCast-12": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!=', ')', '*', '+', ',', '-', ':', ';', '<', '<<', '<=', '=', '>', '>=', '>>', '?', ']', 'and', 'as', 'ascending', 'case', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 27:",
			"...()..."
		],
		"K-SeqExprCast-12a": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!=', ')', '*', '+', ',', '-', ':', ';', '<', '<<', '<=', '=', '>', '>=', '>>', '?', ']', 'and', 'as', 'ascending', 'case', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 27:",
			"...()..."
		],
		"K-SeqExprCast-13": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!=', ')', '*', '+', ',', '-', ':', ';', '<', '<<', '<=', '=', '>', '>=', '>>', '?', ']', 'and', 'as', 'ascending', 'case', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 32:",
			"...()..."
		],
		"K-SeqExprCast-13a": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!=', ')', '*', '+', ',', '-', ':', ';', '<', '<<', '<=', '=', '>', '>=', '>>', '?', ']', 'and', 'as', 'ascending', 'case', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 32:",
			"...()..."
		]
	},
	"prod-Comment": {
		"XQueryComment015": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', ')', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 5, column 2:",
			"...! Wrong syntax :)",
			"<empty/>..."
		],
		"XQueryComment016": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [CommentContents, '(:', ':)']",
			"at line 5, column 3:",
			"...)",
			"<empty/>..."
		],
		"XQueryComment017": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [CommentContents, '(:', ':)']",
			"at line 5, column 3:",
			"...: )",
			"<empty/>..."
		],
		"XQueryComment018": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 5, column 10:",
			"...comment format",
			"<empty/>..."
		],
		"XQueryComment019": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 5, column 1:",
			"...{-- Wrong comment format --}",
			"<empty/>..."
		],
		"K-XQueryComment-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 5, column 102:",
			"...`. :)",
			"(:*******************************************************:..."
		],
		"K-XQueryComment-13": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 7, column 27:",
			"...) then 1 else 1..."
		],
		"K-XQueryComment-14": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [CommentContents, '(:', ':)']",
			"at line 7, column 30:",
			"...:..."
		],
		"K-XQueryComment-15": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [CommentContents, '(:', ':)']",
			"at line 7, column 44:",
			"......"
		],
		"K-XQueryComment-16": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 7, column 53:",
			"...:)..."
		],
		"K-XQueryComment-20": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 7, column 1:",
			"...: :) 1..."
		],
		"K2-XQueryComment-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [CommentContents, '(:', ':)']",
			"at line 12, column 44:",
			"...  ..."
		],
		"K2-XQueryComment-2": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [CommentContents, '(:', ':)']",
			"at line 12, column 62:",
			"...some content  ..."
		]
	},
	"prod-CompAttrConstructor": {
		"K2-ComputeConAttr-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', '::', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', 'xquery', '{', '|', '||', '}', '}`']",
			"at line 1, column 11:",
			"...\"name\" {\"content\"}..."
		],
		"Constr-compattr-eqname-error-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery', '}']",
			"at line 1, column 13:",
			"...{}x {}..."
		],
		"Constr-compattr-eqname-error-4": [
			"Error: Parser error: syntax error, found '}'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 14:",
			"...}x {}..."
		]
	},
	"prod-CompDocConstructor": {
		"K2-ConDocNode-1": [
			"Error: Parser error: syntax error, found '{'",
			"while expecting [S, '(:', EOF, '!', '!=', '#', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 14:",
			"...{\"content\"}..."
		],
		"K2-ConDocNode-2": [
			"Error: Parser error: syntax error, found ';'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 20:",
			"...;..."
		]
	},
	"prod-CompCommentConstructor": {
		"K2-ComputeConComment-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 18:",
			"...{\"content\"}..."
		],
		"K2-ComputeConComment-2": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '{', '|', '||', '}', '}`']",
			"at line 1, column 9:",
			"...name {\"content\"}..."
		]
	},
	"prod-CompElemConstructor": {
		"K2-ComputeConElem-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', 'xquery', '{', '|', '||', '}', '}`']",
			"at line 1, column 9:",
			"...\"name\" {\"content\"}..."
		],
		"Constr-compelem-eqname-error-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery', '}']",
			"at line 1, column 11:",
			"...{}x {}..."
		],
		"Constr-compelem-eqname-error-4": [
			"Error: Parser error: syntax error, found '}'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 12:",
			"...}x {}..."
		]
	},
	"prod-CompPIConstructor": {
		"Constr-comppi-name-2": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', '{']",
			"at line 1, column 69:",
			"...:pi {'text'}}</elem>..."
		],
		"K2-ComputeConPI-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', NCName, EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '{', '|', '||', '}', '}`']",
			"at line 1, column 24:",
			"...\"name\" {\"content\"}..."
		]
	},
	"prod-CompTextConstructor": {
		"K2-ConText-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 15:",
			"...{\"content\"}..."
		],
		"K2-ConText-2": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '{', '|', '||', '}', '}`']",
			"at line 1, column 6:",
			"...name {\"content\"}..."
		],
		"K2-ConText-11": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 5:",
			"...![CDATA]]..."
		],
		"K2-ConText-12": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 5:",
			"...![CDATA]..."
		],
		"K2-ConText-13": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 5:",
			"...![CDATA]]>..."
		]
	},
	"prod-ConstructionDecl": {
		"K-ConstructionProlog-2": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'preserve', 'strip']",
			"at line 1, column 28:",
			"...Preserve;(::)1(::)eq(::)1..."
		]
	},
	"prod-ContextItemDecl": {
		"contextDecl-023": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'external', ':=']",
			"at line 1, column 35:",
			"...+ := (1 to 17)[position() = 5];",
			"        .",
			"      ..."
		]
	},
	"prod-CopyNamespacesDecl": {
		"K-CopyNamespacesProlog-4": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'no-preserve', 'preserve']",
			"at line 1, column 25:",
			"...no-inherit, no-preserve; 1 eq 1..."
		],
		"K-CopyNamespacesProlog-5": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'no-preserve', 'preserve']",
			"at line 1, column 25:",
			"...inherit, preserve; 1 eq 1..."
		]
	},
	"prod-CountClause": {
		"count-901": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'count', 'for', 'group', 'let', 'order', 'return', 'stable', 'where']",
			"at line 3, column 22:",
			"..., $undex",
			"         return $index",
			"      ..."
		],
		"count-902": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', '$']",
			"at line 3, column 16:",
			"...index",
			"         return $index",
			"      ..."
		],
		"count-903": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', '$']",
			"at line 4, column 10:",
			"...return $index",
			"      ..."
		]
	},
	"prod-DecimalFormatDecl": {
		"decimal-format-07": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'NaN', 'decimal-separator', 'digit', 'exponent-separator', 'grouping-separator', 'infinity', 'minus-sign', 'pattern-separator', 'per-mille', 'percent', 'zero-digit', ';']",
			"at line 1, column 48:",
			"...currency-symbol=\"¤\" decimal-separator=\".\";",
			"      \tformat-number(..."
		],
		"decimal-format-38": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'NaN', 'decimal-separator', 'digit', 'exponent-separator', 'grouping-separator', 'infinity', 'minus-sign', 'pattern-separator', 'per-mille', 'percent', 'zero-digit', ';']",
			"at line 1, column 32:",
			"...decimal-sprtr = \".\";",
			"      \ttrue()",
			"      ..."
		]
	},
	"prod-DefaultCollationDecl": {
		"K2-CollationProlog-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [StringLiteral, S, '(:']",
			"at line 1, column 27:",
			"...\"&\"; 1..."
		]
	},
	"prod-DefaultNamespaceDecl": {
		"K-DefaultNamespaceProlog-6": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', '(']",
			"at line 1, column 28:",
			"...\"http://example.com/\";1..."
		],
		"K-DefaultNamespaceProlog-7": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 9:",
			"...element namespace \"http://example.com/\";1..."
		],
		"K-DefaultNamespaceProlog-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [StringLiteral, S, '(:']",
			"at line 1, column 35:",
			"...= \"http://example.com/\";1..."
		],
		"K-DefaultNamespaceProlog-9": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [StringLiteral, S, '(:']",
			"at line 1, column 36:",
			"...= \"http://example.com/\";1..."
		],
		"K-DefaultNamespaceProlog-10": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [StringLiteral, S, '(:']",
			"at line 1, column 35:",
			"...:= \"http://example.com/\";1..."
		],
		"K-DefaultNamespaceProlog-11": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [StringLiteral, S, '(:']",
			"at line 1, column 36:",
			"...:= \"http://example.com/\";1..."
		],
		"K2-DefaultNamespaceProlog-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 9:",
			"...declare default element namespace b = \"http://www.example.com/\";..."
		],
		"K2-DefaultNamespaceProlog-4": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [StringLiteral, S, '(:']",
			"at line 1, column 35:",
			"...b = \"http://www.example.com/\"; empty(<e xmlns=\"http://www.exampl..."
		],
		"K2-DefaultNamespaceProlog-5": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [StringLiteral, S, '(:']",
			"at line 1, column 35:",
			"...b = \"http://www.example.com/\"; 1..."
		],
		"K2-DefaultNamespaceProlog-13": [
			"Error: Parser error: syntax error, found 'default'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 42:",
			"...default element namespace \"http://example.com\"; 1..."
		],
		"K2-DefaultNamespaceProlog-14": [
			"Error: Parser error: syntax error, found 'default'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 42:",
			"...default element namespace \"http://example.com\"; 1..."
		],
		"K2-DefaultNamespaceProlog-15": [
			"Error: Parser error: syntax error, found 'default'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 48:",
			"...default element namespace \"http://example.com\"; 1..."
		],
		"K2-DefaultNamespaceProlog-16": [
			"Error: Parser error: syntax error, found 'default'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 46:",
			"...default element namespace \"http://example.com\"; 1..."
		]
	},
	"prod-DirAttributeList": {
		"Constr-attr-syntax-6": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, EscapeApos, AposAttrContentChar, CharRef, '''', '{{', '}}', '{']",
			"at line 1, column 21:",
			"......"
		],
		"Constr-attr-syntax-7": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 21:",
			"......"
		],
		"Constr-attr-syntax-11": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['\"', '''', S]",
			"at line 1, column 12:",
			"...`value`/>..."
		],
		"Constr-attr-content-2": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery', '}']",
			"at line 1, column 14:",
			"...\"/>..."
		],
		"Constr-attr-content-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 13:",
			"...}\"/>..."
		],
		"Constr-attr-content-4": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 13:",
			"...<\"/>..."
		],
		"Constr-attr-content-5": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 13:",
			"...&\"/>..."
		],
		"Constr-attr-enclexpr-16": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 18:",
			"...}xyz\"/>..."
		],
		"K2-DirectConElemAttr-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', S, '/>', '>', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 9:",
			"...(:a misplaced comment:)/>..."
		],
		"K2-DirectConElemAttr-2": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 2:",
			"...(:a misplaced comment:)ncname/>..."
		],
		"K2-DirectConElemAttr-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 11:",
			"... ncname>..."
		],
		"K2-DirectConElemAttr-4": [
			"Error: Parser error: lexical analysis failed",
			"while expecting '>'",
			"at line 1, column 18:",
			"...(:a misplaced comment:)>..."
		],
		"K2-DirectConElemAttr-4a": [
			"Error: Parser error: lexical analysis failed",
			"while expecting '>'",
			"at line 1, column 18:",
			"...(:a misplaced comment:)>..."
		],
		"K2-DirectConElemAttr-7": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 2:",
			"...![CDATA[a string]]>..."
		],
		"K2-DirectConElemAttr-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 16:",
			"......"
		],
		"K2-DirectConElemAttr-9": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, EscapeApos, AposAttrContentChar, CharRef, '''', '{{', '}}', '{']",
			"at line 1, column 16:",
			"......"
		],
		"K2-DirectConElemAttr-10": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 19:",
			"...<content\"/>..."
		],
		"K2-DirectConElemAttr-11": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 19:",
			"...}content\"/>..."
		],
		"K2-DirectConElemAttr-12": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 21:",
			"...\"/>..."
		],
		"K2-DirectConElemAttr-13": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery', '}']",
			"at line 1, column 15:",
			"...\"..."
		],
		"K2-DirectConElemAttr-14": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery', '}']",
			"at line 1, column 13:",
			"...\"..."
		],
		"K2-DirectConElemAttr-15": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery', '}']",
			"at line 1, column 13:",
			"......"
		],
		"K2-DirectConElemAttr-16": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 17:",
			"...}\"/>..."
		],
		"K2-DirectConElemAttr-17": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 12:",
			"......"
		],
		"K2-DirectConElemAttr-18": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 12:",
			"...<foo/>\"/>..."
		],
		"K2-DirectConElemAttr-19": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 12:",
			"...<?target content?>\"/>..."
		],
		"K2-DirectConElemAttr-20": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 12:",
			"...<!-- a comment-->\"/>..."
		],
		"K2-DirectConElemAttr-21": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 12:",
			"...<![CDATA[content]]>\"/>..."
		],
		"K2-DirectConElemAttr-22": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['\"', '''', S]",
			"at line 1, column 11:",
			"......"
		],
		"K2-DirectConElemAttr-23": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 23:",
			"......"
		],
		"K2-DirectConElemAttr-24": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, EscapeApos, AposAttrContentChar, CharRef, '''', '{{', '}}', '{']",
			"at line 1, column 23:",
			"......"
		],
		"K2-DirectConElemAttr-25": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', S, '/>', '>', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 6:",
			"...(:comment :)/>..."
		],
		"K2-DirectConElemAttr-26": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['\"', '''', S]",
			"at line 1, column 11:",
			"...(:comment:)\"value\" />..."
		],
		"K2-DirectConElemAttr-27": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '=']",
			"at line 1, column 10:",
			"...(:comment:)=\"value\" />..."
		],
		"K2-DirectConElemAttr-28": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', S, '/>', '>', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 19:",
			"...(:comment:) attr2=\"value\" />..."
		],
		"K2-DirectConElemAttr-48": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '/>', '>']",
			"at line 1, column 11:",
			"...fb=\"1\"/>..."
		],
		"K2-DirectConElemAttr-51": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '/>', '>']",
			"at line 1, column 11:",
			"...fb='1'/>..."
		],
		"K2-DirectConElemAttr-53": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '/>', '>']",
			"at line 1, column 9:",
			".../a=\"1\"/>..."
		],
		"K2-DirectConElemAttr-54": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '/>', '>']",
			"at line 1, column 9:",
			".../a='1'/>..."
		],
		"K2-DirectConElemAttr-55": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, ElementContentChar, CharRef, '<!--', '<![CDATA[', '</', '<?', '{{', '}}', '<', '{']",
			"at line 1, column 17:",
			"......"
		],
		"K2-DirectConElemAttr-56": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, ElementContentChar, CharRef, '<!--', '<![CDATA[', '</', '<?', '{{', '}}', '<', '{']",
			"at line 1, column 17:",
			"......"
		],
		"K2-DirectConElemAttr-57": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '/>', '>']",
			"at line 1, column 18:",
			"......"
		],
		"K2-DirectConElemAttr-58": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '/>', '>']",
			"at line 1, column 18:",
			"......"
		],
		"K2-DirectConElemAttr-59": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '/>', '>']",
			"at line 1, column 18:",
			"......"
		],
		"K2-DirectConElemAttr-60": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '/>', '>']",
			"at line 1, column 18:",
			"......"
		],
		"K2-DirectConElemAttr-61": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, EscapeApos, AposAttrContentChar, CharRef, '''', '{{', '}}', '{']",
			"at line 1, column 13:",
			"......"
		],
		"K2-DirectConElemAttr-62": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 13:",
			"......"
		],
		"K2-DirectConElemAttr-63": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['\"', '''', S]",
			"at line 1, column 9:",
			"......"
		],
		"K2-DirectConElemAttr-64": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['\"', '''', S]",
			"at line 1, column 9:",
			"......"
		],
		"K2-DirectConElemAttr-65": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '=']",
			"at line 1, column 8:",
			"......"
		],
		"K2-DirectConElemAttr-66": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '/>', '>']",
			"at line 1, column 9:",
			".../..."
		],
		"K2-DirectConElemAttr-67": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '/>', '>']",
			"at line 1, column 9:",
			".../..."
		]
	},
	"prod-DirectConstructor": {
		"Constr-pi-content-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, S, '(:', NCName, '(', '*', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where']",
			"at line 1, column 9:",
			"...>..."
		],
		"Constr-pi-target-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['?>', S]",
			"at line 1, column 5:",
			"...L?>..."
		],
		"Constr-pi-target-2": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['?>', S]",
			"at line 1, column 5:",
			"...L?>..."
		],
		"Constr-pi-target-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['?>', S]",
			"at line 1, column 5:",
			"...l?>..."
		],
		"Constr-pi-target-4": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['?>', S]",
			"at line 1, column 5:",
			"...l?>..."
		],
		"Constr-comment-6": [
			"Error: Parser error: lexical analysis failed",
			"while expecting '-->'",
			"at line 1, column 5:",
			"...--->..."
		],
		"Constr-comment-7": [
			"Error: Parser error: lexical analysis failed",
			"while expecting '-->'",
			"at line 1, column 12:",
			"...--->..."
		],
		"Constr-comment-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting '-->'",
			"at line 1, column 8:",
			"...--ment-->..."
		],
		"K2-DirectConOther-2": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 2:",
			"...!- oo -->..."
		],
		"K2-DirectConOther-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 2:",
			"...! oo -->..."
		],
		"K2-DirectConOther-4": [
			"Error: Parser error: lexical analysis failed",
			"while expecting '-->'",
			"at line 1, column 11:",
			"......"
		],
		"K2-DirectConOther-5": [
			"Error: Parser error: lexical analysis failed",
			"while expecting '-->'",
			"at line 1, column 12:",
			"......"
		],
		"K2-DirectConOther-6": [
			"Error: Parser error: lexical analysis failed",
			"while expecting '-->'",
			"at line 1, column 6:",
			"......"
		],
		"K2-DirectConOther-7": [
			"Error: Parser error: lexical analysis failed",
			"while expecting '-->'",
			"at line 1, column 6:",
			"...-- -->..."
		],
		"K2-DirectConOther-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting '-->'",
			"at line 1, column 5:",
			"......"
		],
		"K2-DirectConOther-9": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 2:",
			"...!-..."
		],
		"K2-DirectConOther-10": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 2:",
			"...!..."
		],
		"K2-DirectConOther-11": [
			"Error: Parser error: lexical analysis failed",
			"while expecting '-->'",
			"at line 1, column 10:",
			"......"
		],
		"K2-DirectConOther-12": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 7:",
			"...!-..."
		],
		"K2-DirectConOther-13": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 7:",
			"...!..."
		],
		"K2-DirectConOther-14": [
			"Error: Parser error: lexical analysis failed",
			"while expecting '-->'",
			"at line 1, column 5:",
			"......"
		],
		"K2-DirectConOther-15": [
			"Error: Parser error: lexical analysis failed",
			"while expecting '-->'",
			"at line 1, column 13:",
			"......"
		],
		"K2-DirectConOther-16": [
			"Error: Parser error: lexical analysis failed",
			"while expecting '-->'",
			"at line 1, column 14:",
			"...-..."
		],
		"K2-DirectConOther-17": [
			"Error: Parser error: lexical analysis failed",
			"while expecting '-->'",
			"at line 1, column 5:",
			"...-..."
		],
		"K2-DirectConOther-18": [
			"Error: Parser error: lexical analysis failed",
			"while expecting '-->'",
			"at line 1, column 5:",
			"...--..."
		],
		"K2-DirectConOther-19": [
			"Error: Parser error: lexical analysis failed",
			"while expecting '-->'",
			"at line 1, column 5:",
			"...--..."
		],
		"K2-DirectConOther-20": [
			"Error: Parser error: lexical analysis failed",
			"while expecting PITarget",
			"at line 1, column 3:",
			"... spaceIsNotAllowedBefore ?>..."
		],
		"K2-DirectConOther-21": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['?>', S]",
			"at line 1, column 10:",
			"...|char ?>..."
		],
		"K2-DirectConOther-22": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['?>', S]",
			"at line 1, column 10:",
			"...:char ?>..."
		],
		"K2-DirectConOther-23": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['?>', S]",
			"at line 1, column 5:",
			"...l:char ?>..."
		],
		"K2-DirectConOther-24": [
			"Error: Parser error: lexical analysis failed",
			"while expecting PITarget",
			"at line 1, column 3:",
			"......"
		],
		"K2-DirectConOther-25": [
			"Error: Parser error: lexical analysis failed",
			"while expecting PITarget",
			"at line 1, column 3:",
			"......"
		],
		"K2-DirectConOther-26": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['?>', S]",
			"at line 1, column 5:",
			"...l ?>..."
		],
		"K2-DirectConOther-27": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['?>', S]",
			"at line 1, column 5:",
			"...L ?>..."
		],
		"K2-DirectConOther-28": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['?>', S]",
			"at line 1, column 5:",
			"...L ?>..."
		],
		"K2-DirectConOther-42": [
			"Error: Parser error: lexical analysis failed",
			"while expecting PITarget",
			"at line 1, column 3:",
			"...?>..."
		],
		"K2-DirectConOther-43": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, S, '(:', NCName, '(', '*', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where']",
			"at line 1, column 11:",
			"...>..."
		],
		"K2-DirectConOther-55": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...>..."
		],
		"K2-DirectConOther-56": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 2:",
			"......"
		],
		"K2-DirectConOther-57": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 3:",
			"......"
		],
		"K2-DirectConOther-61": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 25:",
			"...}\"/>..."
		],
		"K2-DirectConOther-62": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, EscapeApos, AposAttrContentChar, CharRef, '''', '{{', '}}', '{']",
			"at line 1, column 25:",
			"...}'/>..."
		]
	},
	"prod-DirElemConstructor": {
		"Constr-elem-curlybr-5": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 9:",
			".../elem>..."
		],
		"Constr-elem-curlybr-6": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, ElementContentChar, CharRef, '<!--', '<![CDATA[', '</', '<?', '{{', '}}', '<', '{']",
			"at line 1, column 7:",
			"...}</elem>..."
		],
		"K2-DirectConElem-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 2:",
			"......"
		],
		"K2-DirectConElem-4": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 2:",
			"... foo/>..."
		],
		"K2-DirectConElem-5": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '/>', '>']",
			"at line 1, column 5:",
			".../ >..."
		],
		"K2-DirectConElem-6": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 2:",
			"... foo></foo>..."
		],
		"K2-DirectConElem-7": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 7:",
			"... /foo>..."
		],
		"K2-DirectConElem-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', S, '/>', '>', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 6:",
			".../..."
		],
		"K2-DirectConElem-9": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '/>', '>']",
			"at line 1, column 5:",
			"......"
		],
		"K2-DirectConElem-10": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '/>', '>']",
			"at line 1, column 12:",
			"......"
		],
		"K2-DirectConElem-11": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '/>', '>']",
			"at line 1, column 8:",
			"...: foo/>..."
		],
		"K2-DirectConElem-12": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 25:",
			"...<<<\"/>..."
		],
		"K2-DirectConElem-13": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 2:",
			".../>..."
		],
		"K2-DirectConElem-14": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, ElementContentChar, CharRef, '<!--', '<![CDATA[', '</', '<?', '{{', '}}', '<', '{']",
			"at line 1, column 12:",
			"...}</e>..."
		],
		"K2-DirectConElem-16": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, ElementContentChar, CharRef, '<!--', '<![CDATA[', '</', '<?', '{{', '}}', '<', '{']",
			"at line 1, column 19:",
			"......"
		],
		"K2-DirectConElem-17": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, ElementContentChar, CharRef, '<!--', '<![CDATA[', '</', '<?', '{{', '}}', '<', '{']",
			"at line 1, column 19:",
			"......"
		],
		"K2-DirectConElem-18": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, ElementContentChar, CharRef, '<!--', '<![CDATA[', '</', '<?', '{{', '}}', '<', '{']",
			"at line 1, column 7:",
			"......"
		],
		"K2-DirectConElem-19": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, ElementContentChar, CharRef, '<!--', '<![CDATA[', '</', '<?', '{{', '}}', '<', '{']",
			"at line 1, column 7:",
			"......"
		],
		"K2-DirectConElem-20": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 8:",
			"......"
		],
		"K2-DirectConElem-21": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 8:",
			"...[..."
		],
		"K2-DirectConElem-22": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 8:",
			"...![..."
		],
		"K2-DirectConElem-23": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 8:",
			"...!-..."
		],
		"K2-DirectConElem-24": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, ElementContentChar, CharRef, '<!--', '<![CDATA[', '</', '<?', '{{', '}}', '<', '{']",
			"at line 1, column 7:",
			"...&</elem>..."
		],
		"K2-DirectConElem-25": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', S, '/>', '>', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 7:",
			"...{\"attribute-name\"} = \"attribute value\"/>..."
		],
		"K2-DirectConElem-26": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['\"', '''']",
			"at line 1, column 23:",
			"...{\"attribute value\"} />..."
		],
		"K2-DirectConElem-27": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['\"', '''']",
			"at line 1, column 23:",
			"...{\"attribute value\"}></elem>..."
		],
		"K2-DirectConElem-50": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 10:",
			"...<\"/>..."
		],
		"K2-DirectConElem-54": [
			"Error: Parser error: syntax error, found '{'",
			"while expecting [S, '(:', EOF, '!', '!=', '#', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 16:",
			"...{\"p\"} {\"abc\"}..."
		]
	},
	"prod-DirElemContent": {
		"Constr-cont-invalid-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 9:",
			".../elem>..."
		],
		"Constr-cont-invalid-2": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, ElementContentChar, CharRef, '<!--', '<![CDATA[', '</', '<?', '{{', '}}', '<', '{']",
			"at line 1, column 7:",
			"...}</elem>..."
		],
		"Constr-cont-invalid-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 8:",
			"...</elem>..."
		],
		"Constr-cont-invalid-4": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, ElementContentChar, CharRef, '<!--', '<![CDATA[', '</', '<?', '{{', '}}', '<', '{']",
			"at line 1, column 7:",
			"...&</elem>..."
		],
		"K2-DirectConElemContent-1": [
			"Error: Parser error: syntax error, found '}'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 2:",
			"...}..."
		],
		"K2-DirectConElemContent-2": [
			"Error: Parser error: syntax error, found '}'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 12:",
			"...}..."
		],
		"K2-DirectConElemContent-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...}..."
		],
		"K2-DirectConElemContent-4": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...}..."
		],
		"K2-DirectConElemContent-18": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 2:",
			"...![CDATA[content]]>..."
		],
		"K2-DirectConElemContent-19": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 8:",
			"...![THISISWRONG[content]]></elem>..."
		],
		"K2-DirectConElemContent-20": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 8:",
			"...![CDA..."
		],
		"K2-DirectConElemContent-21": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, ElementContentChar, CharRef, '<!--', '<![CDATA[', '</', '<?', '{{', '}}', '<', '{']",
			"at line 1, column 26:",
			"......"
		],
		"K2-DirectConElemContent-22": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ']]>'",
			"at line 1, column 23:",
			"...]]..."
		],
		"K2-DirectConElemContent-23": [
			"Error: Parser error: lexical analysis failed",
			"while expecting CDataSectionContents",
			"at line 1, column 16:",
			"...CONTENT]..."
		],
		"K2-DirectConElemContent-24": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 8:",
			"...![cdata[CONTENT]]></elem>..."
		],
		"K2-DirectConElemContent-44": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, EscapeApos, AposAttrContentChar, CharRef, '''', '{{', '}}', '{']",
			"at line 1, column 20:",
			"......"
		],
		"K2-DirectConElemContent-45": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 20:",
			"......"
		]
	},
	"prod-DirElemContent.namespace": {
		"K2-DirectConElemNamespace-38": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 28:",
			"...}\"/>/@xmlns..."
		],
		"K2-DirectConElemNamespace-44": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery', '}']",
			"at line 1, column 29:",
			"...\"/>/@xmlns..."
		],
		"K2-DirectConElemNamespace-61": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery', '}']",
			"at line 1, column 14:",
			"...\"/>..."
		],
		"K2-DirectConElemNamespace-62": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 13:",
			"...}\"/>..."
		],
		"K2-DirectConElemNamespace-63": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery', '}']",
			"at line 1, column 21:",
			"...\"/>..."
		],
		"K2-DirectConElemNamespace-64": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 20:",
			"...}\"/>..."
		],
		"K2-DirectConElemNamespace-67": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 21:",
			"...\"/>..."
		],
		"K2-DirectConElemNamespace-68": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 13:",
			"...}content\"/>..."
		],
		"K2-DirectConElemNamespace-69": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 28:",
			"...\"/>..."
		],
		"K2-DirectConElemNamespace-70": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [PredefinedEntityRef, '\"\"', QuotAttrContentChar, CharRef, '\"', '{{', '}}', '{']",
			"at line 1, column 20:",
			"...}content\"/>..."
		]
	},
	"prod-EQName": {
		"eqname-018": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 61:",
			"...::Q{}*/string()..."
		],
		"eqname-019": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')']",
			"at line 1, column 58:",
			"...{}alpha)..."
		],
		"eqname-023": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 61:",
			"...::Q{  ",
			"         ",
			"         }*/string()..."
		],
		"eqname-901": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 81:",
			"...{http://www.example.com/ns?p='23'}:b }</out>..."
		],
		"eqname-902": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 81:",
			"...{http://www.example.com/ns?p='23'}}b }</out>..."
		],
		"eqname-903": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '/>', '>']",
			"at line 1, column 10:",
			"...{http://www.example.com/ns}/> }</out>..."
		],
		"eqname-904": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 81:",
			"...{http://www.example.com/ns?p='23'}:b }</out>..."
		],
		"eqname-905": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 2:",
			"...{http://www.w3.org/2005/xpath-functions/math}}pi()..."
		],
		"eqname-906": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 2:",
			"...{{http://www.w3.org/2005/xpath-functions/math}pi()..."
		],
		"eqname-907": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 2:",
			"...{http://www.w3.org/2005/xpath-functions/math pi()..."
		]
	},
	"prod-ExtensionExpr": {
		"K-ExtensionExpression-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting '#)'",
			"at line 1, column 20:",
			"...# {1}..."
		],
		"K-ExtensionExpression-2": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 10:",
			"...content #) {1}..."
		],
		"K2-ExtensionExpression-6": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['#)', S]",
			"at line 1, column 73:",
			"...(content)#) {true()}..."
		],
		"K2-ExtensionExpression-7": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['#)', S]",
			"at line 2, column 27:",
			"...(:content:)#) {true()}..."
		],
		"K2-ExtensionExpression-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['#)', S]",
			"at line 1, column 73:",
			"...:)#) {true()}..."
		],
		"K2-ExtensionExpression-9": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['#)', S]",
			"at line 1, column 73:",
			"...:)#) {true()}..."
		],
		"K2-ExtensionExpression-10": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['#)', S]",
			"at line 1, column 73:",
			"...:)#) {true()}..."
		],
		"K2-ExtensionExpression-13": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', S, 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 49:",
			"......"
		],
		"K2-ExtensionExpression-14": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', S, 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 49:",
			"......"
		],
		"K2-ExtensionExpression-15": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['#)', S]",
			"at line 1, column 57:",
			"......"
		],
		"K2-ExtensionExpression-16": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['#)', S]",
			"at line 1, column 57:",
			"......"
		]
	},
	"prod-ForClause": {
		"ForExpr014": [
			"Error: Parser error: syntax error, found 'return'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 92:",
			"...return $fileName..."
		],
		"ForExpr017": [
			"Error: Parser error: syntax error, found 'return'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 40:",
			"...return $folder..."
		],
		"ForExpr018": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 19:",
			"....//Folder return $folder..."
		],
		"ForExpr019": [
			"Error: Parser error: syntax error, found 'for'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 5:",
			"...for $folder in //Folder return $folder..."
		],
		"ForExpr020": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', '$']",
			"at line 1, column 49:",
			"...return $file/FileName..."
		],
		"ForExpr026": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'allowing', 'at', 'in', 'as']",
			"at line 1, column 11:",
			"...(//Folder)[1]/File return $file/FileName..."
		],
		"ForExpr027": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 33:",
			"...at $pos return (string($file/FileName[1]), $pos)..."
		],
		"K-ForExprWithout-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', '$']",
			"at line 1, column 38:",
			"...return 4..."
		],
		"K-ForExprWithout-2": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '$', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'sliding', 'stable', 'start', 'to', 'treat', 'tumbling', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 5:",
			"...in 1 return 4..."
		],
		"K-ForExprWithout-3": [
			"Error: Parser error: syntax error, found 'return'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 5:",
			"...return 4..."
		],
		"K-ForExprWithout-4": [
			"Error: Parser error: syntax error, found 'satisfies'",
			"while expecting [S, '(:', ',', 'count', 'for', 'group', 'let', 'order', 'return', 'stable', 'where']",
			"at line 1, column 13:",
			"...satisfies 4..."
		],
		"K2-ForExprWithout-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 5:",
			"...$i IN (1, 2, 3)..."
		],
		"ForExprType007": [
			"Error: Parser error: syntax error, found 'as'",
			"while expecting [S, '(:', ',', 'count', 'for', 'group', 'let', 'order', 'return', 'stable', 'where']",
			"at line 1, column 33:",
			"...as element(Folder,xs:untypedAny) return $file/FileName..."
		],
		"ForExprType008": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'in']",
			"at line 1, column 19:",
			"...as element(Folder,xs:untyped) in (//Folder)[1]/File return (stri..."
		],
		"ForExprType012": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'allowing', 'at', 'external', 'in', EOF, '!=', ')', '*', '+', ',', '-', ':', ':=', ';', '<', '<<', '<=', '=', '>', '>=', '>>', '?', ']', 'and', 'as', 'ascending', 'case', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'union', 'where', 'with', '{', '|', '||', '}', '}`']",
			"at line 1, column 17:",
			"...(//Folder)[1]/File return $file..."
		],
		"ForExprType013": [
			"Error: Parser error: syntax error, found 'as'",
			"while expecting [S, '(:', 'allowing', 'at', 'in']",
			"at line 2, column 32:",
			"...as xs:decimal in data( /xqt:DataValues/xqt:NegativeNumbers/xqt:o..."
		]
	},
	"prod-FunctionCall": {
		"K-FunctionCallExpr-6": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 4:",
			"...:()..."
		],
		"K-FunctionCallExpr-7": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...:f()..."
		],
		"K-FunctionCallExpr-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...:f()..."
		],
		"K-FunctionCallExpr-9": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...1fd()..."
		],
		"K-FunctionCallExpr-10": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 4:",
			"...:lname()..."
		],
		"function-call-reserved-function-names-001": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', ')', '*', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 3, column 12:",
			"...1)",
			"      ..."
		],
		"function-call-reserved-function-names-002": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')']",
			"at line 3, column 10:",
			"...1)",
			"      ..."
		],
		"function-call-reserved-function-names-003": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'element', 'schema-element', ')']",
			"at line 3, column 16:",
			"...1)",
			"      ..."
		],
		"function-call-reserved-function-names-004": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', ')', '*', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 3, column 10:",
			"...1)",
			"      ..."
		],
		"function-call-reserved-function-names-005": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 3, column 16:",
			"...()",
			"      ..."
		],
		"function-call-reserved-function-names-006": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 3, column 5:",
			"...)",
			"      ..."
		],
		"function-call-reserved-function-names-007": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 3, column 6:",
			"...(1)",
			"      ..."
		],
		"function-call-reserved-function-names-008": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')']",
			"at line 3, column 7:",
			"...1)",
			"      ..."
		],
		"function-call-reserved-function-names-009": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [StringLiteral, S, '(:', NCName, ')', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where']",
			"at line 3, column 25:",
			"...1)",
			"      ..."
		],
		"function-call-reserved-function-names-010": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 3, column 19:",
			"...)",
			"      ..."
		],
		"function-call-reserved-function-names-011": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 3, column 17:",
			"...)",
			"      ..."
		],
		"function-call-reserved-function-names-012": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')']",
			"at line 3, column 7:",
			"...1)",
			"      ..."
		],
		"function-call-reserved-function-names-013": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 3, column 13:",
			"...)",
			"      ..."
		],
		"function-call-reserved-function-names-014": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'as', '{']",
			"at line 4, column 7:",
			"......"
		],
		"function-call-reserved-function-names-015": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')']",
			"at line 3, column 17:",
			"...1)",
			"      ..."
		],
		"function-call-reserved-function-names-016": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 3, column 9:",
			"...)",
			"      ..."
		],
		"function-call-reserved-function-names-017": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'as', '{']",
			"at line 4, column 7:",
			"......"
		],
		"function-call-reserved-function-names-018": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')']",
			"at line 3, column 17:",
			"...1)",
			"      ..."
		],
		"function-call-reserved-function-names-019": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 3, column 9:",
			"...)",
			"      ..."
		],
		"function-call-reserved-function-names-020": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', ')', '*', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 11:",
			"...1)",
			"      ..."
		],
		"function-call-reserved-function-names-021": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')']",
			"at line 1, column 9:",
			"...1)",
			"      ..."
		],
		"function-call-reserved-function-names-022": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'element', 'schema-element', ')']",
			"at line 1, column 15:",
			"...1)",
			"      ..."
		],
		"function-call-reserved-function-names-023": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', ')', '*', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 9:",
			"...1)",
			"      ..."
		],
		"function-call-reserved-function-names-024": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 15:",
			"...()",
			"      ..."
		],
		"function-call-reserved-function-names-025": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 4:",
			"...)",
			"      ..."
		],
		"function-call-reserved-function-names-026": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 5:",
			"...()",
			"      ..."
		],
		"function-call-reserved-function-names-027": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')']",
			"at line 1, column 6:",
			"...1)",
			"      ..."
		],
		"function-call-reserved-function-names-028": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [StringLiteral, S, '(:', NCName, ')', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where']",
			"at line 1, column 24:",
			"...1)",
			"      ..."
		],
		"function-call-reserved-function-names-029": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 18:",
			"...)",
			"      ..."
		],
		"function-call-reserved-function-names-030": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 16:",
			"...)",
			"      ..."
		],
		"function-call-reserved-function-names-031": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')']",
			"at line 1, column 6:",
			"...1)",
			"      ..."
		],
		"function-call-reserved-function-names-032": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 12:",
			"...)",
			"      ..."
		],
		"function-call-reserved-function-names-033": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'as', '{']",
			"at line 2, column 7:",
			"......"
		],
		"function-call-reserved-function-names-034": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')']",
			"at line 1, column 16:",
			"...1)",
			"      ..."
		],
		"function-call-reserved-function-names-035": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 8:",
			"...)",
			"      ..."
		],
		"function-call-reserved-function-names-036": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'as', '{']",
			"at line 2, column 7:",
			"......"
		],
		"function-call-reserved-function-names-037": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')']",
			"at line 1, column 16:",
			"...1)",
			"      ..."
		],
		"function-call-reserved-function-names-038": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 8:",
			"...)",
			"      ..."
		],
		"function-call-reserved-function-names-039": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '{', '|', '||', '}', '}`']",
			"at line 3, column 7:",
			"...()",
			"      ..."
		],
		"function-call-reserved-function-names-040": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '{', '|', '||', '}', '}`']",
			"at line 3, column 7:",
			"...()",
			"      ..."
		],
		"function-call-reserved-function-names-041": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '{', '|', '||', '}', '}`']",
			"at line 1, column 6:",
			"...()",
			"      ..."
		],
		"function-call-reserved-function-names-042": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '{', '|', '||', '}', '}`']",
			"at line 1, column 6:",
			"...()",
			"      ..."
		],
		"function-call-reserved-function-names-043": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '{', '|', '||', '}', '}`']",
			"at line 3, column 5:",
			"...()",
			"      ..."
		],
		"function-call-reserved-function-names-044": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '{', '|', '||', '}', '}`']",
			"at line 3, column 5:",
			"...()",
			"      ..."
		],
		"function-call-reserved-function-names-045": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '{', '|', '||', '}', '}`']",
			"at line 1, column 4:",
			"...()",
			"      ..."
		],
		"function-call-reserved-function-names-046": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '{', '|', '||', '}', '}`']",
			"at line 1, column 4:",
			"...()",
			"      ..."
		]
	},
	"prod-FunctionDecl": {
		"K-FunctionProlog-6": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')', ',', 'as']",
			"at line 1, column 40:",
			"...= 1) {1};",
			"        true()..."
		],
		"K-FunctionProlog-7": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')', ',', 'as']",
			"at line 1, column 40:",
			"...= 1 as xs:integer) {1};",
			"        true()..."
		],
		"K-FunctionProlog-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')', ',', 'as']",
			"at line 1, column 40:",
			"...:= 1) {1};",
			"        true()..."
		],
		"K-FunctionProlog-9": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')', ',', 'as']",
			"at line 1, column 40:",
			"...:= 1 as xs:integer) {1};",
			"        true()..."
		],
		"K-FunctionProlog-13": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 2, column 17:",
			"...namespaces prefix = \"example.com/Anamespace\";",
			"        1..."
		],
		"K-FunctionProlog-16": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', '(']",
			"at line 1, column 35:",
			"...as xs:integer { 1 };",
			"        true()..."
		],
		"K-FunctionProlog-17": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', '(']",
			"at line 1, column 35:",
			"...{ 1 };",
			"        true()..."
		],
		"K-FunctionProlog-47": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')', ',']",
			"at line 1, column 59:",
			"...+) { $arg };",
			"        local:myFunction(())..."
		],
		"K-FunctionProlog-48": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')', ',']",
			"at line 1, column 59:",
			"...?) { $arg };",
			"        local:myFunction(())..."
		],
		"K-FunctionProlog-58": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'allowing', 'at', 'external', 'in', EOF, '!=', ')', '*', '+', ',', '-', ':', ':=', ';', '<', '<<', '<=', '=', '>', '>=', '>>', '?', ']', 'and', 'as', 'ascending', 'case', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'union', 'where', 'with', '{', '|', '||', '}', '}`']",
			"at line 1, column 39:",
			"...() { 1 };",
			"        local:error()..."
		]
	},
	"prod-GeneralComp.eq": {
		"K-GenCompEq-5": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 4:",
			"...= 1..."
		],
		"GenCompEq-24": [
			"Error: Parser error: syntax error, found '='",
			"while expecting [S, '(:', EOF, ')', ',', ':', ';', ']', 'and', 'as', 'ascending', 'case', 'collation', 'count', 'default', 'descending', 'else', 'empty', 'end', 'following', 'for', 'group', 'into', 'let', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'where', 'with', '}', '}`']",
			"at line 1, column 17:",
			"...= true() = true()..."
		]
	},
	"prod-GeneralComp.ge": {
		"K-GenCompGTEQ-4": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 5:",
			"...; 1..."
		]
	},
	"prod-GeneralComp.lt": {
		"K-GenCompLT-4": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 5:",
			"... 1..."
		],
		"GenCompLT-12": [
			"Error: Parser error: syntax error, found '<'",
			"while expecting [S, '(:', EOF, ')', ',', ':', ';', ']', 'and', 'as', 'ascending', 'case', 'collation', 'count', 'default', 'descending', 'else', 'empty', 'end', 'following', 'for', 'group', 'into', 'let', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'where', 'with', '}', '}`']",
			"at line 1, column 7:",
			"...< 4..."
		],
		"GenCompLT-13": [
			"Error: Parser error: syntax error, found '<'",
			"while expecting [S, '(:', EOF, ')', ',', ':', ';', ']', 'and', 'as', 'ascending', 'case', 'collation', 'count', 'default', 'descending', 'else', 'empty', 'end', 'following', 'for', 'group', 'into', 'let', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'where', 'with', '}', '}`']",
			"at line 1, column 17:",
			"...< true()..."
		]
	},
	"prod-GeneralComp.ne": {
		"K-GenCompNE-6": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 4:",
			"...! 1..."
		]
	},
	"prod-GroupByClause": {
		"group-021": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ':=']",
			"at line 4, column 7:",
			"...return concat($key, ':',  ",
			"      string-join(for $e in $x return..."
		]
	},
	"prod-IfExpr": {
		"CondExpr019": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 14:",
			"...then \"true\" else \"false\"..."
		],
		"K2-CondExpr-5": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 4:",
			"...!true()) then 2 else 3..."
		],
		"K2-CondExpr-6": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 8:",
			"...(true()) then 1 else 3..."
		]
	},
	"prod-InlineFunctionExpr": {
		"inline-fn-017": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, S, '(:']",
			"at line 1, column 46:",
			"...) %Q{http://example.com/origin}author(\"Mike\") function($x, $y) {..."
		],
		"inline-fn-018": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, S, '(:']",
			"at line 1, column 46:",
			"...true())  function($x, $y) {$x + $y} return $add(2,2)",
			"      ..."
		],
		"inline-fn-019": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, S, '(:']",
			"at line 1, column 49:",
			"...-1)  function($x, $y) {$x + $y} return $add(2,2)",
			"      ..."
		],
		"inline-fn-020": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, S, '(:']",
			"at line 1, column 49:",
			"...())  function($x, $y) {$x + $y} return $add(2,2)",
			"      ..."
		]
	},
	"prod-InstanceofExpr": {
		"K-SeqExprInstanceOf-54": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'allowing', 'at', 'external', 'in', EOF, '!=', ')', '*', '+', ',', '-', ':', ':=', ';', '<', '<<', '<=', '=', '>', '>=', '>>', '?', ']', 'and', 'as', 'ascending', 'case', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'union', 'where', 'with', '{', '|', '||', '}', '}`']",
			"at line 1, column 19:",
			"...()..."
		],
		"K-SeqExprInstanceOf-55": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'allowing', 'at', 'external', 'in', EOF, '!=', ')', '*', '+', ',', '-', ':', ':=', ';', '<', '<<', '<=', '=', '>', '>=', '>>', '?', ']', 'and', 'as', 'ascending', 'case', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'union', 'where', 'with', '{', '|', '||', '}', '}`']",
			"at line 1, column 19:",
			"...()..."
		]
	},
	"prod-LetClause": {
		"K-LetExprWithout-2": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ':=', 'as']",
			"at line 1, column 8:",
			"...= 5 return 3..."
		],
		"K-LetExprWithout-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ':=', 'as']",
			"at line 1, column 8:",
			"...in 5 return 3..."
		],
		"K2-LetExprWithout-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 8:",
			"...1..."
		]
	},
	"prod-Literal": {
		"Literals006": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"test..."
		],
		"Literals007": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...'test..."
		],
		"Literals008": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...'test\"..."
		],
		"Literals009": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"test'..."
		],
		"Literals036": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 13:",
			"....01..."
		],
		"Literals037": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 3:",
			"...01..."
		],
		"Literals038": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 3:",
			"....1..."
		],
		"Literals039": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 4:",
			"....1..."
		],
		"Literals040": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 4:",
			"....1..."
		],
		"Literals041": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...1e 2..."
		],
		"Literals042": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...1E 2..."
		],
		"Literals043": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 3:",
			"...e2..."
		],
		"Literals044": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 3:",
			"...E2..."
		],
		"Literals045": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 3:",
			"...e 2..."
		],
		"Literals046": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 3:",
			"...E 2..."
		],
		"Literals047": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 4:",
			"....1.1..."
		],
		"Literals048": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 4:",
			"....1.1..."
		],
		"Literals049": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 4:",
			"....1e2..."
		],
		"Literals050": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 4:",
			"....1.E2..."
		],
		"Literals051": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...1ee2..."
		],
		"Literals052": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...1EE2..."
		],
		"Literals053": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...1eE2..."
		],
		"Literals054": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...1e2e3..."
		],
		"Literals055": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 5:",
			"....1.1..."
		],
		"K-Literals-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 4:",
			"...oo'..."
		],
		"K-Literals-7": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 4:",
			"...oo\"..."
		],
		"K-Literals-23": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 6:",
			"...2..."
		],
		"K-Literals-24": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 3:",
			"...\"..."
		],
		"K-Literals-25": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 7:",
			"...#..."
		],
		"K-Literals-26": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...432f542..."
		],
		"K-Literals-27": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 4:",
			"....45..."
		],
		"K-Literals-30": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...{1}..."
		],
		"K-Literals-31": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"a string &;\"..."
		],
		"K-Literals-31a": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"a string &;\"..."
		],
		"K-Literals-32": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"a string &#;\"..."
		],
		"K-Literals-33": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"a string &#;\"..."
		],
		"K-Literals-34": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"a string &#1233a98;\"..."
		],
		"K-Literals-35": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"a string &#1233.98;\"..."
		],
		"K-Literals-36": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"a string &#1233 98;\"..."
		],
		"K-Literals-38": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"a string &#x;\"..."
		],
		"K-Literals-39": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"a string &#x543.3;\"..."
		],
		"K-Literals-40": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"a string &#x543g3;\"..."
		],
		"K-Literals-41": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"a string &#x543 3;\"..."
		],
		"K-Literals-42": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"a string &LT;\"..."
		],
		"K-Literals-43": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"a string &lte;\"..."
		],
		"K-Literals-44": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"a string &\"..."
		],
		"K-Literals-45": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"a string &#x;\"..."
		],
		"K-Literals-48": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"&#X4A;\"..."
		],
		"K-Literals-50": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 3:",
			"...&lt;= 3..."
		],
		"K2-Literals-2": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"&\"..."
		],
		"K2-Literals-20": [
			"Error: Parser error: syntax error, found ';'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 3:",
			"...; 1..."
		],
		"K2-Literals-21": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...0x20..."
		],
		"K2-Literals-22": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"&#x-20;\"..."
		],
		"K2-Literals-23": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"&#-20;\"..."
		],
		"K2-Literals-24": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"&#x+20;\"..."
		],
		"K2-Literals-25": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"&#+20;\"..."
		],
		"K2-Literals-26": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"&#2A0;\"..."
		],
		"K2-Literals-27": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"&#xW20;\"..."
		],
		"K2-Literals-29": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...\"&#0xA;\"..."
		],
		"K2-Literals-31": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 3:",
			"...5..."
		],
		"K2-Literals-33": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...} }..."
		],
		"K2-Literals-34": [
			"Error: Parser error: syntax error, found EOF",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 50:",
			"......"
		],
		"cbcl-literals-001": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...'&#x100000000x'..."
		],
		"cbcl-literals-002": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...'&#x100000000'..."
		],
		"cbcl-literals-003": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...'&#x;'..."
		],
		"cbcl-literals-005": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...'&#100000000x'..."
		],
		"cbcl-literals-006": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...'&#100000000'..."
		],
		"cbcl-literals-007": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...'&#;'..."
		]
	},
	"prod-Lookup": {
		"Lookup-004": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, S, '(:', NCName, '(', '*', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where']",
			"at line 1, column 30:",
			"...-1 eq 'c']..."
		],
		"Lookup-018": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 56:",
			"....0 = 'a']..."
		],
		"Lookup-104": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, S, '(:', NCName, '(', '*', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where']",
			"at line 1, column 27:",
			"...-1..."
		],
		"Lookup-116": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!=', ')', '*', '+', ',', '-', ':', ';', '<', '<<', '<=', '=', '>', '>=', '>>', ']', 'and', 'as', 'ascending', 'case', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 35:",
			"...?1..."
		],
		"Lookup-117": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!=', ')', '*', '+', ',', '-', ':', ';', '<', '<<', '<=', '=', '>', '>=', '>>', ']', 'and', 'as', 'ascending', 'case', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 37:",
			"...1..."
		],
		"Lookup-118": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 54:",
			"....0 ..."
		],
		"Lookup-156": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 73:",
			"...:integer..."
		],
		"Lookup-157": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 63:",
			"...{}integer..."
		],
		"Lookup-163": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 56:",
			"....2 ..."
		]
	},
	"prod-MapConstructor": {
		"MapConstructor-008": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 22:",
			"...})..."
		],
		"MapConstructor-009": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery', '}']",
			"at line 1, column 15:",
			"...,\"a\":2})..."
		],
		"MapConstructor-010": [
			"Error: Parser error: syntax error, found ','",
			"while expecting [S, '(:', ':']",
			"at line 1, column 18:",
			"...,\"b\":2})..."
		],
		"MapConstructor-011": [
			"Error: Parser error: syntax error, found '}'",
			"while expecting [S, '(:', ':']",
			"at line 1, column 22:",
			"...})..."
		],
		"MapConstructor-016": [
			"Error: Parser error: syntax error, found '}'",
			"while expecting [S, '(:', ':']",
			"at line 1, column 75:",
			"...})..."
		],
		"MapConstructor-018": [
			"Error: Parser error: syntax error, found '}'",
			"while expecting [S, '(:', ':']",
			"at line 1, column 81:",
			"...})..."
		]
	},
	"prod-MapTest": {
		"MapTest-007": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ',']",
			"at line 1, column 43:",
			"...)..."
		],
		"MapTest-016": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ',']",
			"at line 1, column 75:",
			"...+, xs:integer+)..."
		]
	},
	"prod-NameTest": {
		"nametest-23": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 2, column 31:",
			"...{}:*)",
			"      ..."
		],
		"K-NameTest-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 26:",
			"...asdasdad..."
		],
		"K-NameTest-2": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 9:",
			"......"
		],
		"K-NameTest-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 6:",
			"...foo..."
		],
		"K-NameTest-4": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 10:",
			"...: nametest..."
		],
		"K-NameTest-5": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 9:",
			"...: nametest..."
		],
		"K-NameTest-6": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 10:",
			"...:nametest..."
		],
		"K-NameTest-7": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 3:",
			"...oo\" eq \"f oo\"..."
		],
		"K-NameTest-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 11:",
			"...f oo\"..."
		],
		"K-NameTest-9": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 13:",
			"...oo\"..."
		],
		"K-NameTest-10": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 11:",
			"...\"f oo..."
		],
		"K-NameTest-11": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 30:",
			"...\"f oo..."
		],
		"K2-NameTest-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 3:",
			"......"
		],
		"K2-NameTest-2": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 3:",
			"...5..."
		],
		"K2-NameTest-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 5:",
			"...5..."
		],
		"K2-NameTest-4": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 9:",
			"...5..."
		],
		"K2-NameTest-6": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...::ncname..."
		],
		"K2-NameTest-7": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 1:",
			"...::local:ncname..."
		],
		"K2-NameTest-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, Wildcard, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 2:",
			"......"
		],
		"K2-NameTest-9": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, Wildcard, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 2:",
			"......"
		],
		"K2-NameTest-10": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, Wildcard, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 9:",
			"......"
		],
		"K2-NameTest-24": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [StringLiteral, S, '(:', NCName, ')', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where']",
			"at line 1, column 29:",
			"...1))..."
		],
		"K2-NameTest-25": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')']",
			"at line 1, column 35:",
			"...:ncname))..."
		],
		"K2-NameTest-26": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [StringLiteral, S, '(:', NCName, ')', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where']",
			"at line 1, column 58:",
			"...$name))..."
		],
		"K2-NameTest-27": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [StringLiteral, S, '(:', NCName, ')', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where']",
			"at line 1, column 58:",
			"...$name))..."
		],
		"K2-NameTest-28": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', ')', '*', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 14:",
			"...\"any\"))..."
		],
		"K2-NameTest-29": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', ')', '*', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 16:",
			"...\"any\"))..."
		],
		"K2-NameTest-33": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 16:",
			"...\"quotesAreNotAllowed\")..."
		],
		"K2-NameTest-34": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 18:",
			"...\"quotesAreNotAllowed\")..."
		],
		"K2-NameTest-82": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 6:",
			"...:..."
		]
	},
	"prod-NodeTest": {
		"K2-NodeTest-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [StringLiteral, S, '(:', NCName, ')', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where']",
			"at line 1, column 24:",
			"...*)..."
		],
		"K2-NodeTest-4": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')']",
			"at line 1, column 6:",
			"...*)..."
		],
		"K2-NodeTest-5": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')']",
			"at line 1, column 9:",
			"...*)..."
		],
		"K2-NodeTest-6": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')']",
			"at line 1, column 6:",
			"...*)..."
		],
		"K2-NodeTest-7": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'element', 'schema-element', ')']",
			"at line 1, column 15:",
			"...*)..."
		],
		"K2-NodeTest-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 18:",
			"...*)..."
		],
		"K2-NodeTest-9": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 16:",
			"...*)..."
		],
		"K2-NodeTest-12": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'allowing', 'at', 'external', 'in', EOF, '!=', ')', '*', '+', ',', '-', ':', ':=', ';', '<', '<<', '<=', '=', '>', '>=', '>>', '?', ']', 'and', 'as', 'ascending', 'case', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'union', 'where', 'with', '{', '|', '||', '}', '}`']",
			"at line 1, column 23:",
			"...(*)..."
		],
		"K2-NodeTest-13": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'allowing', 'at', 'external', 'in', EOF, '!=', ')', '*', '+', ',', '-', ':', ':=', ';', '<', '<<', '<=', '=', '>', '>=', '>>', '?', ']', 'and', 'as', 'ascending', 'case', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'union', 'where', 'with', '{', '|', '||', '}', '}`']",
			"at line 1, column 23:",
			"...()..."
		],
		"K2-NodeTest-14": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'element', 'schema-element', ')']",
			"at line 1, column 15:",
			"...name)..."
		],
		"K2-NodeTest-15": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'element', 'schema-element', ')']",
			"at line 1, column 15:",
			"...local:name)..."
		],
		"K2-NodeTest-16": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'element', 'schema-element', ')']",
			"at line 1, column 15:",
			"...processing-instruction())..."
		],
		"K2-NodeTest-17": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'element', 'schema-element', ')']",
			"at line 1, column 15:",
			"...unknown())..."
		],
		"K2-NodeTest-18": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'element', 'schema-element', ')']",
			"at line 1, column 15:",
			"...schema-attribute(ncname))..."
		]
	},
	"prod-OptionDecl": {
		"K-OptionDeclarationProlog-6": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [StringLiteral, S, '(:']",
			"at line 1, column 32:",
			"...: 'option value'; 1 eq 1..."
		]
	},
	"prod-OrExpr": {
		"K2-LogicExpr-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 3:",
			"...OR 0..."
		],
		"K2-LogicExpr-2": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 3:",
			"...AND 0..."
		]
	},
	"prod-OrderByClause": {
		"K2-OrderbyExprWithout-7": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'greatest', 'least']",
			"at line 1, column 39:",
			"...INVALID return ($i, 2)..."
		]
	},
	"prod-PathExpr": {
		"PathExpr-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 16:",
			"...5])..."
		],
		"PathExpr-5": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 15:",
			"... 5])..."
		],
		"PathExpr-5p": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 15:",
			"... 5])..."
		],
		"PathExpr-7": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 15:",
			"... a])..."
		],
		"PathExpr-7p": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 15:",
			"... a])..."
		],
		"PathExpr-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 15:",
			"... /b])..."
		],
		"PathExpr-8p": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 15:",
			"... /b])..."
		],
		"PathExpr-9": [
			"Error: Parser error: lexical analysis failed",
			"while expecting '='",
			"at line 1, column 20:",
			"...3])..."
		],
		"PathExpr-9p": [
			"Error: Parser error: lexical analysis failed",
			"while expecting '='",
			"at line 1, column 20:",
			"...3])..."
		],
		"PathExpr-10": [
			"Error: Parser error: syntax error, found ']'",
			"while expecting [S, '(:', 'else']",
			"at line 1, column 40:",
			"...])..."
		],
		"PathExpr-11": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 36:",
			"...$a])..."
		],
		"PathExpr-12": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 23:",
			"...of document-node(schema-element(x))])..."
		],
		"PathExpr-13": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 33:",
			"...$doc/*])..."
		],
		"PathExpr-22": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 12:",
			"...of document-node()..."
		],
		"PathExpr-23": [
			"Error: Parser error: syntax error, found 'as'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 8:",
			"...as document-node()..."
		]
	},
	"prod-PositionalVar": {
		"K-ForExprPositionalVar-5": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', '$']",
			"at line 1, column 11:",
			"...p1 in 1 return 1..."
		]
	},
	"prod-Predicate": {
		"K-FilterExpr-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 11:",
			"......"
		],
		"K-FilterExpr-2": [
			"Error: Parser error: syntax error, found ']'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 10:",
			"...]..."
		],
		"K-FilterExpr-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 11:",
			"...]..."
		]
	},
	"prod-QuantifiedExpr": {
		"K-QuantExprWithout-74": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 19:",
			"...2) return 1..."
		],
		"K-QuantExprWithout-75": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [URIQualifiedName, QName, S, '(:', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 20:",
			"...2) return 1..."
		],
		"K-QuantExprWithout-98": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'in', 'as']",
			"at line 1, column 9:",
			"...at $p in (1, 2) satisfies $a..."
		],
		"K-QuantExprWithout-99": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'in', 'as']",
			"at line 1, column 10:",
			"...at $p in (1, 2) satisfies $a..."
		],
		"K2-QuantExprWithout-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 6:",
			"...$i in (1, 2, 3) satisfies $i..."
		],
		"K2-QuantExprWithout-2": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 7:",
			"...$i in (1, 2, 3) satisfies $i..."
		],
		"K-QuantExprWith-7": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'in']",
			"at line 1, column 29:",
			"...? in (1, 2) satisfies $a..."
		],
		"K-QuantExprWith-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'in']",
			"at line 1, column 28:",
			"...? in (1, 2) satisfies $a..."
		],
		"K-QuantExprWith-19": [
			"Error: Parser error: syntax error, found 'at'",
			"while expecting [S, '(:', 'in']",
			"at line 1, column 19:",
			"...at $p in (1, 2) satisfies $a..."
		],
		"K-QuantExprWith-20": [
			"Error: Parser error: syntax error, found 'at'",
			"while expecting [S, '(:', 'in']",
			"at line 1, column 20:",
			"...at $p in (1, 2) satisfies $a..."
		]
	},
	"prod-ReturnClause": {
		"ReturnExpr012": [
			"Error: Parser error: syntax error, found 'return'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 46:",
			"...return $file..."
		],
		"ReturnExpr013": [
			"Error: Parser error: syntax error, found EOF",
			"while expecting [S, '(:', ',', 'count', 'for', 'group', 'let', 'order', 'return', 'stable', 'where']",
			"at line 1, column 32:",
			"......"
		],
		"ReturnExpr019": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 47:",
			"...$file/FileName..."
		],
		"K2-ReturnExpr-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 8:",
			"...1..."
		]
	},
	"prod-SchemaImport": {
		"qischema90007": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!=', ')', '*', '+', ',', '-', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 3, column 82:",
			".../*",
			"      ..."
		],
		"qischema90008": [
			"Error: Parser error: syntax error, found ')'",
			"while expecting [S, '(:', '}']",
			"at line 3, column 20:",
			"...)/validate { <abf> <a/> <b/> <b/> { for $i in 1 to 3 return <f/>..."
		]
	},
	"prod-StepExpr": {
		"K2-Steps-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 8:",
			"...)/foo..."
		],
		"K2-Steps-9": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [CommentContents, '(:', ':)']",
			"at line 1, column 17:",
			"...ada..."
		],
		"K2-Steps-11": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', '$', '(', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 3:",
			".../..."
		],
		"Steps-leading-lone-slash-1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 56:",
			"...5]",
			"        ..."
		],
		"Steps-leading-lone-slash-2": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '/>', '>']",
			"at line 1, column 57:",
			"...]",
			"        ..."
		],
		"Steps-leading-lone-slash-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 56:",
			"...5]",
			"        ..."
		],
		"Steps-leading-lone-slash-4": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [QName, 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'validate', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 56:",
			".../b]",
			"        ..."
		],
		"Steps-leading-lone-slash-5": [
			"Error: Parser error: lexical analysis failed",
			"while expecting '='",
			"at line 1, column 62:",
			"...3]",
			"        ..."
		],
		"Steps-leading-lone-slash-6": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 58:",
			"...($doclevel) then / else /*]",
			"        ..."
		],
		"Steps-leading-lone-slash-7": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 2, column 65:",
			"...$a]",
			"        ..."
		],
		"Steps-leading-lone-slash-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 2, column 25:",
			"...of document-node(element(x))]",
			"        ..."
		],
		"Steps-leading-lone-slash-9": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 2, column 30:",
			"...$doc/*",
			"        ..."
		]
	},
	"prod-StringConstructor": {
		"string-constructor-027": [
			"Error: Parser error: syntax error, found '}`'",
			"while expecting [S, '(:', '}']",
			"at line 1, column 36:",
			"...}`</a>..."
		],
		"string-constructor-028": [
			"Error: Parser error: syntax error, found '}`'",
			"while expecting [S, '(:', '}']",
			"at line 2, column 79:",
			"...}`</a>",
			"      ..."
		],
		"string-constructor-901": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['`{', ']``']",
			"at line 2, column 43:",
			"...]`..."
		],
		"string-constructor-902": [
			"Error: Parser error: lexical analysis failed",
			"while expecting StringConstructorChars",
			"at line 2, column 29:",
			"... green bottles]..."
		],
		"string-constructor-903": [
			"Error: Parser error: lexical analysis failed",
			"while expecting StringConstructorChars",
			"at line 2, column 29:",
			"... green bottles..."
		],
		"string-constructor-904": [
			"Error: Parser error: syntax error, found '}'",
			"while expecting [S, '(:', '}`']",
			"at line 2, column 27:",
			"...} green ..."
		],
		"string-constructor-905": [
			"Error: Parser error: syntax error, found EOF",
			"while expecting [S, '(:', '}`']",
			"at line 2, column 27:",
			"......"
		],
		"string-constructor-906": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', EOF, '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 2, column 9:",
			"...`[There were `{$n}` green bottles]``",
			"      ..."
		],
		"string-constructor-907": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', EOF, '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 2, column 9:",
			"...``{There were `{$n}` green bottles}``",
			"      ..."
		],
		"string-constructor-908": [
			"Error: Parser error: syntax error, found '}`'",
			"while expecting [S, '(:', '}']",
			"at line 2, column 21:",
			"...}`",
			"      ..."
		],
		"string-constructor-909": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', EOF, '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 2, column 9:",
			"...}`nasty!]``",
			"      ..."
		],
		"string-constructor-913": [
			"Error: Parser error: lexical analysis failed",
			"while expecting ['\"', '''', S]",
			"at line 1, column 6:",
			"...``[c]``/>",
			"      ..."
		],
		"string-constructor-914": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [StringLiteral, S, '(:']",
			"at line 1, column 23:",
			"...``[http://www.w3.org/1999/XSL/Transform]``;",
			"        <xsl:output/..."
		],
		"string-constructor-915": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [StringLiteral, S, '(:']",
			"at line 2, column 39:",
			"...= ``[http://www.w3.org/1999/XSL/Transform]``;",
			"        <zzz:outpu..."
		],
		"string-constructor-916": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [StringLiteral, S, '(:', NCName, ')', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where']",
			"at line 1, column 24:",
			"...``[pi-action]``)..."
		],
		"string-constructor-917": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [StringLiteral, S, '(:']",
			"at line 1, column 38:",
			"...``[not-a-number]``; 12..."
		],
		"string-constructor-918": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [StringLiteral, S, '(:']",
			"at line 1, column 52:",
			"...``[http://www.w3.org/2005/xpath-functions/collation/codepoint]``..."
		]
	},
	"prod-SwitchExpr": {
		"switch-903": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'case']",
			"at line 3, column 29:",
			"...default return \"Baa\" }</out>..."
		],
		"switch-904": [
			"Error: Parser error: syntax error, found '}'",
			"while expecting [S, '(:', 'case', 'default']",
			"at line 7, column 43:",
			"...}</out>..."
		],
		"switch-905": [
			"Error: Parser error: syntax error, found 'return'",
			"while expecting [S, '(:', 'case', 'default']",
			"at line 5, column 34:",
			"...return \"Quack\" ",
			"            case ($in to 4) return \"Oink\" ",
			"     ..."
		],
		"switch-906": [
			"Error: Parser error: syntax error, found ','",
			"while expecting [S, '(:', 'case', 'default']",
			"at line 4, column 32:",
			"..., \"Boo\" ",
			"            case 5 return \"Meow\" ",
			"            case 7 re..."
		],
		"switch-907": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 3, column 23:",
			"...$in ",
			"            case 1 return \"Moo\", \"Boo\" ",
			"            case 5 ..."
		],
		"switch-908": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'case']",
			"at line 3, column 29:",
			"...{ ",
			"            case 1 return \"Moo\", \"Boo\" ",
			"            case 5 re..."
		],
		"switch-909": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', 'case', 'return']",
			"at line 4, column 19:",
			"...: return \"Moo\", \"Boo\" ",
			"            case 5: return \"Meow\" ",
			"      ..."
		]
	},
	"prod-TreatExpr": {
		"K-SeqExprTreat-16": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')']",
			"at line 1, column 17:",
			"......"
		],
		"K2-SeqExprTreat-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'allowing', 'at', 'external', 'in', EOF, '!=', ')', '*', '+', ',', '-', ':', ':=', ';', '<', '<<', '<=', '=', '>', '>=', '>>', '?', ']', 'and', 'as', 'ascending', 'case', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'union', 'where', 'with', '{', '|', '||', '}', '}`']",
			"at line 1, column 47:",
			".../X..."
		]
	},
	"prod-TypeswitchExpr": {
		"K2-sequenceExprTypeswitch-2": [
			"Error: Parser error: syntax error, found EOF",
			"while expecting [S, '(:', 'case', 'default']",
			"at line 1, column 109:",
			"......"
		],
		"K2-sequenceExprTypeswitch-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 12:",
			"...1 case node() return 0 case xs:integer return 3 default return t..."
		],
		"K2-sequenceExprTypeswitch-8": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'return']",
			"at line 1, column 82:",
			"...as item() return 1..."
		]
	},
	"prod-UnaryLookup": {
		"UnaryLookup-004": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, S, '(:', NCName, '(', '*', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where']",
			"at line 1, column 29:",
			"...-1 eq 'c']..."
		],
		"UnaryLookup-018": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 55:",
			"....0 = 'a']..."
		],
		"UnaryLookup-047": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '?', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 57:",
			"....2 = 3]..."
		]
	},
	"prod-ValidateExpr": {
		"validate-as-91012": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', '{']",
			"at line 2, column 35:",
			"...hat:brimsize { <hat>8</hat> }",
			"      ..."
		],
		"validate-as-91013": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', '{']",
			"at line 2, column 34:",
			"...(12) { <hat>8</hat> }",
			"      ..."
		],
		"validate-as-91017": [
			"Error: Parser error: syntax error, found 'as'",
			"while expecting [S, '(:', EOF]",
			"at line 2, column 18:",
			"...as hat:hatsize { <hut>8</hut> }",
			"      ..."
		]
	},
	"prod-VarDecl.external": {
		"K2-ExternalVariablesWithout-14": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'external', ':=', 'as']",
			"at line 1, column 21:",
			"...::= 1; 1..."
		],
		"K2-ExternalVariablesWithout-15": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'external', ':=', 'as']",
			"at line 1, column 21:",
			"...: = 1; 1..."
		],
		"K2-ExternalVariablesWith-11": [
			"Error: Parser error: syntax error, found ','",
			"while expecting [S, '(:', ';']",
			"at line 1, column 25:",
			"..., 1; 1..."
		],
		"K2-ExternalVariablesWith-24": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')', '?']",
			"at line 1, column 45:",
			"...+)+ := <e/>; 1..."
		],
		"K2-ExternalVariablesWith-25": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')', '?']",
			"at line 1, column 45:",
			"...*)+ := <e/>; 1..."
		],
		"K2-ExternalVariablesWith-26": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')', '?']",
			"at line 1, column 55:",
			"...+)+ := <e/>; 1..."
		],
		"K2-ExternalVariablesWith-27": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ')', '?']",
			"at line 1, column 55:",
			"...*)+ := <e/>; 1..."
		]
	},
	"prod-VarDefaultValue": {
		"extvardef-004": [
			"Error: Parser error: syntax error, found ','",
			"while expecting [S, '(:', ';']",
			"at line 1, column 51:",
			"...,1,2; <a>{sum($ext)}</a>..."
		],
		"extvardef-005": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 50:",
			"...; <a></a>..."
		]
	},
	"prod-VersionDecl": {
		"version_declaration-009": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 41:",
			"...version \"1.0\"; 1,2..."
		],
		"version_declaration-020": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [StringLiteral, S, '(:']",
			"at line 1, column 15:",
			"...; 1..."
		],
		"K2-VersionProlog-3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'encoding', ';']",
			"at line 1, column 22:",
			"...default; 1..."
		],
		"K2-VersionProlog-3-v3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'encoding', ';']",
			"at line 1, column 22:",
			"...default; 1..."
		],
		"version_declaration-022-v1": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ';']",
			"at line 1, column 25:",
			"...version \"1.0\"; 1..."
		],
		"version_declaration-022-v3": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', ';']",
			"at line 1, column 25:",
			"...version \"3.0\"; 1..."
		],
		"K2-VersionProlog-4": [
			"Error: Parser error: syntax error, found ':'",
			"while expecting [S, '(:', EOF]",
			"at line 1, column 10:",
			"...:localName..."
		]
	},
	"prod-WhereClause": {
		"WhereExpr017": [
			"Error: Parser error: syntax error, found ','",
			"while expecting [S, '(:', 'count', 'for', 'group', 'let', 'order', 'return', 'stable', 'where']",
			"at line 1, column 45:",
			"..., true() return $file/FileName..."
		],
		"WhereExpr019": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 33:",
			"...where_ true() return $file/FileName..."
		],
		"K2-WhereExpr-2": [
			"Error: Parser error: syntax error, found ','",
			"while expecting [S, '(:', 'count', 'for', 'group', 'let', 'order', 'return', 'stable', 'where']",
			"at line 1, column 25:",
			"..., true() return $a..."
		]
	},
	"prod-WindowClause": {
		"TumblingWindowExpr535a": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'when']",
			"at line 2, column 29:",
			"...previous $pn when true()",
			"          return <window>{$w}</window>",
			"..."
		],
		"TumblingWindowExpr535b": [
			"Error: Parser error: syntax error, found 'end'",
			"while expecting [S, '(:', 'start']",
			"at line 2, column 11:",
			"...end $e next $en previous $en when true()",
			"          return <windo..."
		],
		"TumblingWindowExpr547": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'next', 'previous', 'when']",
			"at line 2, column 26:",
			"...as xs:integer when true()",
			"          end $e when $e - $s eq 3",
			"   ..."
		],
		"TumblingWindowExpr549": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'when']",
			"at line 2, column 29:",
			"...as xs:integer when true()",
			"          end $e when $e - $s eq 3",
			"   ..."
		],
		"WindowExpr500": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', EOF, '!', '!=', '#', '$', '(', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'as', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'into', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'sliding', 'stable', 'start', 'to', 'treat', 'tumbling', 'union', 'where', 'with', '|', '||', '}', '}`']",
			"at line 1, column 5:",
			"...window $w in (1 to 10)",
			"          start $s when true()",
			"          ..."
		]
	},
	"misc-CombinedErrorCodes": {
		"K-CombinedErrorCodes-7": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', '=']",
			"at line 1, column 32:",
			"...:= \"http://example.com/Dummy\"; 1..."
		],
		"K-CombinedErrorCodes-13": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 16:",
			"...}..."
		],
		"K-CombinedErrorCodes-14": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 19:",
			"...}..."
		],
		"K-CombinedErrorCodes-15": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [IntegerLiteral, DecimalLiteral, DoubleLiteral, StringLiteral, URIQualifiedName, QName, S, Wildcard, '%', '(#', '(:', '.', '..', '<!--', '<?', '@', '``[', 'ancestor', 'ancestor-or-self', 'array', 'attribute', 'child', 'comment', 'descendant', 'descendant-or-self', 'document', 'document-node', 'element', 'empty-sequence', 'every', 'following-sibling', 'function', 'if', 'item', 'map', 'namespace', 'namespace-node', 'node', 'ordered', 'parent', 'preceding-sibling', 'processing-instruction', 'schema-attribute', 'schema-element', 'self', 'some', 'switch', 'text', 'try', 'typeswitch', 'unordered', 'update', 'validate', '$', '(', '+', '-', '/', '//', '<', '?', '[', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'declare', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'following', 'for', 'ge', 'group', 'gt', 'idiv', 'import', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'module', 'ne', 'only', 'or', 'order', 'preceding', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', 'xquery']",
			"at line 1, column 12:",
			"...}..."
		]
	},
	"misc-HigherOrderFunctions": {
		"hof-910": [
			"Error: Parser error: lexical analysis failed",
			"while expecting [S, '(:', 'as']",
			"at line 4, column 40:",
			"...:= local:f#1",
			"        return $f(3)",
			"      ..."
		]
	}
} as Record<string,Record<string,string[]>>;

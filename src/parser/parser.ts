// @ts-nocheck

// This file was generated on Tue Apr 15, 2025 08:53 (UTC+02) by REx v6.1 which is Copyright (c) 1979-2025 by Gunther Rademacher <grd@gmx.net>
// REx command line: xquery-31.ebnf -tree -typescript

export interface ParsingEventHandler {
	reset(source: string): void;
	startNonterminal(name: string, begin: number): void;
	endNonterminal(name: string, end: number): void;
	terminal(name: string, begin: number, end: number): void;
	whitespace(begin: number, end: number): void;
}

export class ParseException {
	private begin: number;
	private end: number;
	private state: number;
	private offending: number;
	private expected: number;

	constructor(b: number, e: number, s: number, o: number, x: number) {
		this.begin = b;
		this.end = e;
		this.state = s;
		this.offending = o;
		this.expected = x;
	}

	getBegin() {
		return this.begin;
	}
	getEnd() {
		return this.end;
	}
	getState() {
		return this.state;
	}
	getExpected() {
		return this.expected;
	}
	getOffending() {
		return this.offending;
	}
	isAmbiguousInput() {
		return false;
	}

	getMessage() {
		return this.offending < 0 ? "lexical analysis failed" : "syntax error";
	}
}

interface Memoizer {
	[index: number]: number;
}

export class Parser {
	constructor(source: string, parsingEventHandler: ParsingEventHandler) {
		this.initialize(source, parsingEventHandler);
	}

	initialize(source: string, parsingEventHandler: ParsingEventHandler) {
		this.eventHandler = parsingEventHandler;
		this.input = source;
		this.size = source.length;
		this.reset(0, 0, 0);
	}

	getInput() {
		return this.input;
	}

	getTokenOffset() {
		return this.b0;
	}

	getTokenEnd() {
		return this.e0;
	}

	private reset(l: number, b: number, e: number) {
		this.b0 = b;
		this.e0 = b;
		this.l1 = l;
		this.b1 = b;
		this.e1 = e;
		this.l2 = 0;
		this.b2 = 0;
		this.e2 = 0;
		this.l3 = 0;
		this.b3 = 0;
		this.e3 = 0;
		this.end = e;
		this.eventHandler.reset(this.input);
	}

	getOffendingToken(e: ParseException) {
		var o = e.getOffending();
		return o >= 0 ? Parser.TOKEN[o] : null;
	}

	getExpectedTokenSet(e: ParseException) {
		var expected: string[];
		if (e.getExpected() < 0) {
			expected = Parser.getTokenSet(-e.getState());
		} else {
			expected = [Parser.TOKEN[e.getExpected()]];
		}
		return expected;
	}

	getErrorMessage(e: ParseException) {
		var message = e.getMessage();
		var found = this.getOffendingToken(e);
		var tokenSet = this.getExpectedTokenSet(e);
		var size = e.getEnd() - e.getBegin();
		message +=
			(found == null ? "" : ", found " + found) +
			"\nwhile expecting " +
			(tokenSet.length == 1 ? tokenSet[0] : "[" + tokenSet.join(", ") + "]") +
			"\n" +
			(size == 0 || found != null ? "" : "after successfully scanning " + size + " characters beginning ");
		var prefix = this.input.substring(0, e.getBegin());
		var lines = prefix.split("\n");
		var line = lines.length;
		var column = lines[line - 1].length + 1;
		return (
			message +
			"at line " +
			line +
			", column " +
			column +
			":\n..." +
			this.input.substring(e.getBegin(), Math.min(this.input.length, e.getBegin() + 64)) +
			"..."
		);
	}

	parse_XQuery() {
		this.eventHandler.startNonterminal("XQuery", this.e0);
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_Module();
		this.consume(25); // EOF
		this.eventHandler.endNonterminal("XQuery", this.e0);
	}

	private parse_Module() {
		this.eventHandler.startNonterminal("Module", this.e0);
		switch (this.token()) {
			case 200: // 'xquery'
				this.lookahead2W(144); // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | '*' | '+' | ',' | '-' | '/' | '//' |
				// '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | 'and' | 'cast' |
				// 'castable' | 'div' | 'encoding' | 'eq' | 'except' | 'ge' | 'gt' | 'idiv' |
				// 'instance' | 'intersect' | 'is' | 'le' | 'lt' | 'mod' | 'ne' | 'or' | 'to' |
				// 'treat' | 'union' | 'version' | '|' | '||'
				break;
			default:
				this.lk = this.l1;
		}
		if (
			this.tokenSequence() == 29128 || // 'xquery' 'encoding'
			this.tokenSequence() == 50376
		) {
			// 'xquery' 'version'
			this.whitespace();
			this.parse_VersionDecl();
		}
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		switch (this.token()) {
			case 147: // 'module'
				this.lookahead2W(143); // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | '*' | '+' | ',' | '-' | '/' | '//' |
				// '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | 'and' | 'cast' |
				// 'castable' | 'div' | 'eq' | 'except' | 'ge' | 'gt' | 'idiv' | 'instance' |
				// 'intersect' | 'is' | 'le' | 'lt' | 'mod' | 'namespace' | 'ne' | 'or' | 'to' |
				// 'treat' | 'union' | '|' | '||'
				break;
			default:
				this.lk = this.l1;
		}
		switch (this.tokenSequence()) {
			case 38035: // 'module' 'namespace'
				this.whitespace();
				this.parse_LibraryModule();
				break;
			default:
				this.whitespace();
				this.parse_MainModule();
		}
		this.eventHandler.endNonterminal("Module", this.e0);
	}

	private parse_VersionDecl() {
		this.eventHandler.startNonterminal("VersionDecl", this.e0);
		this.consume(200); // 'xquery'
		this.lookahead1W(85); // S^WS | '(:' | 'encoding' | 'version'
		switch (this.token()) {
			case 113: // 'encoding'
				this.consume(113); // 'encoding'
				this.lookahead1W(19); // StringLiteral | S^WS | '(:'
				this.consume(4); // StringLiteral
				break;
			default:
				this.consume(196); // 'version'
				this.lookahead1W(19); // StringLiteral | S^WS | '(:'
				this.consume(4); // StringLiteral
				this.lookahead1W(78); // S^WS | '(:' | ';' | 'encoding'
				if (this.token() == 113) {
					// 'encoding'
					this.consume(113); // 'encoding'
					this.lookahead1W(19); // StringLiteral | S^WS | '(:'
					this.consume(4); // StringLiteral
				}
		}
		this.lookahead1W(30); // S^WS | '(:' | ';'
		this.whitespace();
		this.parse_Separator();
		this.eventHandler.endNonterminal("VersionDecl", this.e0);
	}

	private parse_MainModule() {
		this.eventHandler.startNonterminal("MainModule", this.e0);
		this.parse_Prolog();
		this.whitespace();
		this.parse_QueryBody();
		this.eventHandler.endNonterminal("MainModule", this.e0);
	}

	private parse_LibraryModule() {
		this.eventHandler.startNonterminal("LibraryModule", this.e0);
		this.parse_ModuleDecl();
		this.lookahead1W(101); // S^WS | EOF | '(:' | 'declare' | 'import'
		this.whitespace();
		this.parse_Prolog();
		this.eventHandler.endNonterminal("LibraryModule", this.e0);
	}

	private parse_ModuleDecl() {
		this.eventHandler.startNonterminal("ModuleDecl", this.e0);
		this.consume(147); // 'module'
		this.lookahead1W(50); // S^WS | '(:' | 'namespace'
		this.consume(148); // 'namespace'
		this.lookahead1W(137); // NCName^Token | S^WS | '(:' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' |
		// 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
		// 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
		// 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
		// 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
		// 'union' | 'where'
		this.whitespace();
		this.parse_NCName();
		this.lookahead1W(31); // S^WS | '(:' | '='
		this.consume(60); // '='
		this.lookahead1W(19); // StringLiteral | S^WS | '(:'
		this.whitespace();
		this.parse_URILiteral();
		this.lookahead1W(30); // S^WS | '(:' | ';'
		this.whitespace();
		this.parse_Separator();
		this.eventHandler.endNonterminal("ModuleDecl", this.e0);
	}

	private parse_Prolog() {
		this.eventHandler.startNonterminal("Prolog", this.e0);
		for (;;) {
			this.lookahead1W(190); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
			// URIQualifiedName | QName^Token | S^WS | Wildcard | EOF | '$' | '%' | '(' | '(#' |
			// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
			// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
			// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
			// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
			// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
			// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
			// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
			// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
			// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
			// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
			// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
			// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
			// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
			// 'unordered' | 'validate' | 'where' | 'xquery'
			switch (this.token()) {
				case 100: // 'declare'
					this.lookahead2W(148); // S^WS | EOF | '!' | '!=' | '#' | '%' | '(' | '(:' | '*' | '+' | ',' | '-' | '/' |
					// '//' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | 'and' |
					// 'base-uri' | 'boundary-space' | 'cast' | 'castable' | 'construction' |
					// 'context' | 'copy-namespaces' | 'decimal-format' | 'default' | 'div' | 'eq' |
					// 'except' | 'function' | 'ge' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' |
					// 'le' | 'lt' | 'mod' | 'namespace' | 'ne' | 'option' | 'or' | 'ordering' | 'to' |
					// 'treat' | 'union' | 'variable' | '|' | '||'
					break;
				case 131: // 'import'
					this.lookahead2W(145); // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | '*' | '+' | ',' | '-' | '/' | '//' |
					// '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | 'and' | 'cast' |
					// 'castable' | 'div' | 'eq' | 'except' | 'ge' | 'gt' | 'idiv' | 'instance' |
					// 'intersect' | 'is' | 'le' | 'lt' | 'mod' | 'module' | 'ne' | 'or' | 'schema' |
					// 'to' | 'treat' | 'union' | '|' | '||'
					break;
				default:
					this.lk = this.l1;
			}
			if (
				this.tokenSequence() != 21604 && // 'declare' 'base-uri'
				this.tokenSequence() != 21860 && // 'declare' 'boundary-space'
				this.tokenSequence() != 24164 && // 'declare' 'construction'
				this.tokenSequence() != 24676 && // 'declare' 'copy-namespaces'
				this.tokenSequence() != 25188 && // 'declare' 'decimal-format'
				this.tokenSequence() != 25956 && // 'declare' 'default'
				this.tokenSequence() != 37763 && // 'import' 'module'
				this.tokenSequence() != 37988 && // 'declare' 'namespace'
				this.tokenSequence() != 41316 && // 'declare' 'ordering'
				this.tokenSequence() != 44419
			) {
				// 'import' 'schema'
				break;
			}
			switch (this.token()) {
				case 100: // 'declare'
					this.lookahead2W(127); // S^WS | '(:' | 'base-uri' | 'boundary-space' | 'construction' |
					// 'copy-namespaces' | 'decimal-format' | 'default' | 'namespace' | 'ordering'
					switch (this.tokenSequence()) {
						case 25956: // 'declare' 'default'
							this.lookahead3W(122); // S^WS | '(:' | 'collation' | 'decimal-format' | 'element' | 'function' | 'order'
							break;
					}
					break;
				default:
					this.lk = this.l1;
			}
			switch (this.tokenSequence()) {
				case 7169380: // 'declare' 'default' 'element'
				case 8086884: // 'declare' 'default' 'function'
					this.whitespace();
					this.parse_DefaultNamespaceDecl();
					break;
				case 37988: // 'declare' 'namespace'
					this.whitespace();
					this.parse_NamespaceDecl();
					break;
				case 131: // 'import'
					this.whitespace();
					this.parse_Import();
					break;
				default:
					this.whitespace();
					this.parse_Setter();
			}
			this.lookahead1W(30); // S^WS | '(:' | ';'
			this.whitespace();
			this.parse_Separator();
		}
		for (;;) {
			this.lookahead1W(190); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
			// URIQualifiedName | QName^Token | S^WS | Wildcard | EOF | '$' | '%' | '(' | '(#' |
			// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
			// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
			// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
			// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
			// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
			// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
			// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
			// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
			// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
			// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
			// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
			// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
			// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
			// 'unordered' | 'validate' | 'where' | 'xquery'
			switch (this.token()) {
				case 100: // 'declare'
					this.lookahead2W(147); // S^WS | EOF | '!' | '!=' | '#' | '%' | '(' | '(:' | '*' | '+' | ',' | '-' | '/' |
					// '//' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | 'and' |
					// 'cast' | 'castable' | 'context' | 'div' | 'eq' | 'except' | 'function' | 'ge' |
					// 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'lt' | 'mod' | 'ne' |
					// 'option' | 'or' | 'to' | 'treat' | 'union' | 'variable' | '|' | '||'
					break;
				default:
					this.lk = this.l1;
			}
			if (
				this.tokenSequence() != 8292 && // 'declare' '%'
				this.tokenSequence() != 24420 && // 'declare' 'context'
				this.tokenSequence() != 31588 && // 'declare' 'function'
				this.tokenSequence() != 40292 && // 'declare' 'option'
				this.tokenSequence() != 50020
			) {
				// 'declare' 'variable'
				break;
			}
			switch (this.token()) {
				case 100: // 'declare'
					this.lookahead2W(121); // S^WS | '%' | '(:' | 'context' | 'function' | 'option' | 'variable'
					break;
				default:
					this.lk = this.l1;
			}
			switch (this.tokenSequence()) {
				case 24420: // 'declare' 'context'
					this.whitespace();
					this.parse_ContextItemDecl();
					break;
				case 40292: // 'declare' 'option'
					this.whitespace();
					this.parse_OptionDecl();
					break;
				default:
					this.whitespace();
					this.parse_AnnotatedDecl();
			}
			this.lookahead1W(30); // S^WS | '(:' | ';'
			this.whitespace();
			this.parse_Separator();
		}
		this.eventHandler.endNonterminal("Prolog", this.e0);
	}

	private parse_Separator() {
		this.eventHandler.startNonterminal("Separator", this.e0);
		this.consume(52); // ';'
		this.eventHandler.endNonterminal("Separator", this.e0);
	}

	private parse_Setter() {
		this.eventHandler.startNonterminal("Setter", this.e0);
		switch (this.token()) {
			case 100: // 'declare'
				this.lookahead2W(126); // S^WS | '(:' | 'base-uri' | 'boundary-space' | 'construction' |
				// 'copy-namespaces' | 'decimal-format' | 'default' | 'ordering'
				switch (this.tokenSequence()) {
					case 25956: // 'declare' 'default'
						this.lookahead3W(111); // S^WS | '(:' | 'collation' | 'decimal-format' | 'order'
						break;
				}
				break;
			default:
				this.lk = this.l1;
		}
		switch (this.tokenSequence()) {
			case 21860: // 'declare' 'boundary-space'
				this.parse_BoundarySpaceDecl();
				break;
			case 6055268: // 'declare' 'default' 'collation'
				this.parse_DefaultCollationDecl();
				break;
			case 21604: // 'declare' 'base-uri'
				this.parse_BaseURIDecl();
				break;
			case 24164: // 'declare' 'construction'
				this.parse_ConstructionDecl();
				break;
			case 41316: // 'declare' 'ordering'
				this.parse_OrderingModeDecl();
				break;
			case 10446180: // 'declare' 'default' 'order'
				this.parse_EmptyOrderDecl();
				break;
			case 24676: // 'declare' 'copy-namespaces'
				this.parse_CopyNamespacesDecl();
				break;
			default:
				this.parse_DecimalFormatDecl();
		}
		this.eventHandler.endNonterminal("Setter", this.e0);
	}

	private parse_BoundarySpaceDecl() {
		this.eventHandler.startNonterminal("BoundarySpaceDecl", this.e0);
		this.consume(100); // 'declare'
		this.lookahead1W(34); // S^WS | '(:' | 'boundary-space'
		this.consume(85); // 'boundary-space'
		this.lookahead1W(96); // S^WS | '(:' | 'preserve' | 'strip'
		switch (this.token()) {
			case 168: // 'preserve'
				this.consume(168); // 'preserve'
				break;
			default:
				this.consume(182); // 'strip'
		}
		this.eventHandler.endNonterminal("BoundarySpaceDecl", this.e0);
	}

	private parse_DefaultCollationDecl() {
		this.eventHandler.startNonterminal("DefaultCollationDecl", this.e0);
		this.consume(100); // 'declare'
		this.lookahead1W(43); // S^WS | '(:' | 'default'
		this.consume(101); // 'default'
		this.lookahead1W(38); // S^WS | '(:' | 'collation'
		this.consume(92); // 'collation'
		this.lookahead1W(19); // StringLiteral | S^WS | '(:'
		this.whitespace();
		this.parse_URILiteral();
		this.eventHandler.endNonterminal("DefaultCollationDecl", this.e0);
	}

	private parse_BaseURIDecl() {
		this.eventHandler.startNonterminal("BaseURIDecl", this.e0);
		this.consume(100); // 'declare'
		this.lookahead1W(33); // S^WS | '(:' | 'base-uri'
		this.consume(84); // 'base-uri'
		this.lookahead1W(19); // StringLiteral | S^WS | '(:'
		this.whitespace();
		this.parse_URILiteral();
		this.eventHandler.endNonterminal("BaseURIDecl", this.e0);
	}

	private parse_ConstructionDecl() {
		this.eventHandler.startNonterminal("ConstructionDecl", this.e0);
		this.consume(100); // 'declare'
		this.lookahead1W(39); // S^WS | '(:' | 'construction'
		this.consume(94); // 'construction'
		this.lookahead1W(96); // S^WS | '(:' | 'preserve' | 'strip'
		switch (this.token()) {
			case 182: // 'strip'
				this.consume(182); // 'strip'
				break;
			default:
				this.consume(168); // 'preserve'
		}
		this.eventHandler.endNonterminal("ConstructionDecl", this.e0);
	}

	private parse_OrderingModeDecl() {
		this.eventHandler.startNonterminal("OrderingModeDecl", this.e0);
		this.consume(100); // 'declare'
		this.lookahead1W(54); // S^WS | '(:' | 'ordering'
		this.consume(161); // 'ordering'
		this.lookahead1W(95); // S^WS | '(:' | 'ordered' | 'unordered'
		switch (this.token()) {
			case 160: // 'ordered'
				this.consume(160); // 'ordered'
				break;
			default:
				this.consume(193); // 'unordered'
		}
		this.eventHandler.endNonterminal("OrderingModeDecl", this.e0);
	}

	private parse_EmptyOrderDecl() {
		this.eventHandler.startNonterminal("EmptyOrderDecl", this.e0);
		this.consume(100); // 'declare'
		this.lookahead1W(43); // S^WS | '(:' | 'default'
		this.consume(101); // 'default'
		this.lookahead1W(53); // S^WS | '(:' | 'order'
		this.consume(159); // 'order'
		this.lookahead1W(45); // S^WS | '(:' | 'empty'
		this.consume(111); // 'empty'
		this.lookahead1W(88); // S^WS | '(:' | 'greatest' | 'least'
		switch (this.token()) {
			case 125: // 'greatest'
				this.consume(125); // 'greatest'
				break;
			default:
				this.consume(141); // 'least'
		}
		this.eventHandler.endNonterminal("EmptyOrderDecl", this.e0);
	}

	private parse_CopyNamespacesDecl() {
		this.eventHandler.startNonterminal("CopyNamespacesDecl", this.e0);
		this.consume(100); // 'declare'
		this.lookahead1W(41); // S^WS | '(:' | 'copy-namespaces'
		this.consume(96); // 'copy-namespaces'
		this.lookahead1W(92); // S^WS | '(:' | 'no-preserve' | 'preserve'
		this.whitespace();
		this.parse_PreserveMode();
		this.lookahead1W(27); // S^WS | '(:' | ','
		this.consume(40); // ','
		this.lookahead1W(89); // S^WS | '(:' | 'inherit' | 'no-inherit'
		this.whitespace();
		this.parse_InheritMode();
		this.eventHandler.endNonterminal("CopyNamespacesDecl", this.e0);
	}

	private parse_PreserveMode() {
		this.eventHandler.startNonterminal("PreserveMode", this.e0);
		switch (this.token()) {
			case 168: // 'preserve'
				this.consume(168); // 'preserve'
				break;
			default:
				this.consume(153); // 'no-preserve'
		}
		this.eventHandler.endNonterminal("PreserveMode", this.e0);
	}

	private parse_InheritMode() {
		this.eventHandler.startNonterminal("InheritMode", this.e0);
		switch (this.token()) {
			case 134: // 'inherit'
				this.consume(134); // 'inherit'
				break;
			default:
				this.consume(152); // 'no-inherit'
		}
		this.eventHandler.endNonterminal("InheritMode", this.e0);
	}

	private parse_DecimalFormatDecl() {
		this.eventHandler.startNonterminal("DecimalFormatDecl", this.e0);
		this.consume(100); // 'declare'
		this.lookahead1W(83); // S^WS | '(:' | 'decimal-format' | 'default'
		switch (this.token()) {
			case 98: // 'decimal-format'
				this.consume(98); // 'decimal-format'
				this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
				// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
				// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
				// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
				// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
				// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
				// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
				// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
				// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
				// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
				// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
				// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
				// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
				// 'where' | 'xquery'
				this.whitespace();
				this.parse_EQName();
				break;
			default:
				this.consume(101); // 'default'
				this.lookahead1W(42); // S^WS | '(:' | 'decimal-format'
				this.consume(98); // 'decimal-format'
		}
		for (;;) {
			this.lookahead1W(135); // S^WS | '(:' | ';' | 'NaN' | 'decimal-separator' | 'digit' |
			// 'exponent-separator' | 'grouping-separator' | 'infinity' | 'minus-sign' |
			// 'pattern-separator' | 'per-mille' | 'percent' | 'zero-digit'
			if (this.token() == 52) {
				// ';'
				break;
			}
			this.whitespace();
			this.parse_DFPropertyName();
			this.lookahead1W(31); // S^WS | '(:' | '='
			this.consume(60); // '='
			this.lookahead1W(19); // StringLiteral | S^WS | '(:'
			this.consume(4); // StringLiteral
		}
		this.eventHandler.endNonterminal("DecimalFormatDecl", this.e0);
	}

	private parse_DFPropertyName() {
		this.eventHandler.startNonterminal("DFPropertyName", this.e0);
		switch (this.token()) {
			case 99: // 'decimal-separator'
				this.consume(99); // 'decimal-separator'
				break;
			case 127: // 'grouping-separator'
				this.consume(127); // 'grouping-separator'
				break;
			case 133: // 'infinity'
				this.consume(133); // 'infinity'
				break;
			case 145: // 'minus-sign'
				this.consume(145); // 'minus-sign'
				break;
			case 68: // 'NaN'
				this.consume(68); // 'NaN'
				break;
			case 165: // 'percent'
				this.consume(165); // 'percent'
				break;
			case 164: // 'per-mille'
				this.consume(164); // 'per-mille'
				break;
			case 201: // 'zero-digit'
				this.consume(201); // 'zero-digit'
				break;
			case 105: // 'digit'
				this.consume(105); // 'digit'
				break;
			case 163: // 'pattern-separator'
				this.consume(163); // 'pattern-separator'
				break;
			default:
				this.consume(118); // 'exponent-separator'
		}
		this.eventHandler.endNonterminal("DFPropertyName", this.e0);
	}

	private parse_Import() {
		this.eventHandler.startNonterminal("Import", this.e0);
		switch (this.token()) {
			case 131: // 'import'
				this.lookahead2W(90); // S^WS | '(:' | 'module' | 'schema'
				break;
			default:
				this.lk = this.l1;
		}
		switch (this.tokenSequence()) {
			case 44419: // 'import' 'schema'
				this.parse_SchemaImport();
				break;
			default:
				this.parse_ModuleImport();
		}
		this.eventHandler.endNonterminal("Import", this.e0);
	}

	private parse_SchemaImport() {
		this.eventHandler.startNonterminal("SchemaImport", this.e0);
		this.consume(131); // 'import'
		this.lookahead1W(56); // S^WS | '(:' | 'schema'
		this.consume(173); // 'schema'
		this.lookahead1W(100); // StringLiteral | S^WS | '(:' | 'default' | 'namespace'
		if (this.token() != 4) {
			// StringLiteral
			this.whitespace();
			this.parse_SchemaPrefix();
		}
		this.lookahead1W(19); // StringLiteral | S^WS | '(:'
		this.whitespace();
		this.parse_URILiteral();
		this.lookahead1W(77); // S^WS | '(:' | ';' | 'at'
		if (this.token() == 82) {
			// 'at'
			this.consume(82); // 'at'
			this.lookahead1W(19); // StringLiteral | S^WS | '(:'
			this.whitespace();
			this.parse_URILiteral();
			for (;;) {
				this.lookahead1W(73); // S^WS | '(:' | ',' | ';'
				if (this.token() != 40) {
					// ','
					break;
				}
				this.consume(40); // ','
				this.lookahead1W(19); // StringLiteral | S^WS | '(:'
				this.whitespace();
				this.parse_URILiteral();
			}
		}
		this.eventHandler.endNonterminal("SchemaImport", this.e0);
	}

	private parse_SchemaPrefix() {
		this.eventHandler.startNonterminal("SchemaPrefix", this.e0);
		switch (this.token()) {
			case 148: // 'namespace'
				this.consume(148); // 'namespace'
				this.lookahead1W(137); // NCName^Token | S^WS | '(:' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' |
				// 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
				// 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
				// 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
				// 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
				// 'union' | 'where'
				this.whitespace();
				this.parse_NCName();
				this.lookahead1W(31); // S^WS | '(:' | '='
				this.consume(60); // '='
				break;
			default:
				this.consume(101); // 'default'
				this.lookahead1W(44); // S^WS | '(:' | 'element'
				this.consume(109); // 'element'
				this.lookahead1W(50); // S^WS | '(:' | 'namespace'
				this.consume(148); // 'namespace'
		}
		this.eventHandler.endNonterminal("SchemaPrefix", this.e0);
	}

	private parse_ModuleImport() {
		this.eventHandler.startNonterminal("ModuleImport", this.e0);
		this.consume(131); // 'import'
		this.lookahead1W(49); // S^WS | '(:' | 'module'
		this.consume(147); // 'module'
		this.lookahead1W(62); // StringLiteral | S^WS | '(:' | 'namespace'
		if (this.token() == 148) {
			// 'namespace'
			this.consume(148); // 'namespace'
			this.lookahead1W(137); // NCName^Token | S^WS | '(:' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' |
			// 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
			// 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
			// 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
			// 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
			// 'union' | 'where'
			this.whitespace();
			this.parse_NCName();
			this.lookahead1W(31); // S^WS | '(:' | '='
			this.consume(60); // '='
		}
		this.lookahead1W(19); // StringLiteral | S^WS | '(:'
		this.whitespace();
		this.parse_URILiteral();
		this.lookahead1W(77); // S^WS | '(:' | ';' | 'at'
		if (this.token() == 82) {
			// 'at'
			this.consume(82); // 'at'
			this.lookahead1W(19); // StringLiteral | S^WS | '(:'
			this.whitespace();
			this.parse_URILiteral();
			for (;;) {
				this.lookahead1W(73); // S^WS | '(:' | ',' | ';'
				if (this.token() != 40) {
					// ','
					break;
				}
				this.consume(40); // ','
				this.lookahead1W(19); // StringLiteral | S^WS | '(:'
				this.whitespace();
				this.parse_URILiteral();
			}
		}
		this.eventHandler.endNonterminal("ModuleImport", this.e0);
	}

	private parse_NamespaceDecl() {
		this.eventHandler.startNonterminal("NamespaceDecl", this.e0);
		this.consume(100); // 'declare'
		this.lookahead1W(50); // S^WS | '(:' | 'namespace'
		this.consume(148); // 'namespace'
		this.lookahead1W(137); // NCName^Token | S^WS | '(:' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' |
		// 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
		// 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
		// 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
		// 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
		// 'union' | 'where'
		this.whitespace();
		this.parse_NCName();
		this.lookahead1W(31); // S^WS | '(:' | '='
		this.consume(60); // '='
		this.lookahead1W(19); // StringLiteral | S^WS | '(:'
		this.whitespace();
		this.parse_URILiteral();
		this.eventHandler.endNonterminal("NamespaceDecl", this.e0);
	}

	private parse_DefaultNamespaceDecl() {
		this.eventHandler.startNonterminal("DefaultNamespaceDecl", this.e0);
		this.consume(100); // 'declare'
		this.lookahead1W(43); // S^WS | '(:' | 'default'
		this.consume(101); // 'default'
		this.lookahead1W(84); // S^WS | '(:' | 'element' | 'function'
		switch (this.token()) {
			case 109: // 'element'
				this.consume(109); // 'element'
				break;
			default:
				this.consume(123); // 'function'
		}
		this.lookahead1W(50); // S^WS | '(:' | 'namespace'
		this.consume(148); // 'namespace'
		this.lookahead1W(19); // StringLiteral | S^WS | '(:'
		this.whitespace();
		this.parse_URILiteral();
		this.eventHandler.endNonterminal("DefaultNamespaceDecl", this.e0);
	}

	private parse_AnnotatedDecl() {
		this.eventHandler.startNonterminal("AnnotatedDecl", this.e0);
		this.consume(100); // 'declare'
		for (;;) {
			this.lookahead1W(105); // S^WS | '%' | '(:' | 'function' | 'variable'
			if (this.token() != 32) {
				// '%'
				break;
			}
			this.whitespace();
			this.parse_Annotation();
		}
		switch (this.token()) {
			case 195: // 'variable'
				this.whitespace();
				this.parse_VarDecl();
				break;
			default:
				this.whitespace();
				this.parse_FunctionDecl();
		}
		this.eventHandler.endNonterminal("AnnotatedDecl", this.e0);
	}

	private parse_Annotation() {
		this.eventHandler.startNonterminal("Annotation", this.e0);
		this.consume(32); // '%'
		this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
		// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
		// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
		// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
		// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
		// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_EQName();
		this.lookahead1W(116); // S^WS | '%' | '(' | '(:' | 'function' | 'variable'
		if (this.token() == 34) {
			// '('
			this.consume(34); // '('
			this.lookahead1W(114); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral | S^WS | '(:'
			this.whitespace();
			this.parse_Literal();
			for (;;) {
				this.lookahead1W(71); // S^WS | '(:' | ')' | ','
				if (this.token() != 40) {
					// ','
					break;
				}
				this.consume(40); // ','
				this.lookahead1W(114); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral | S^WS | '(:'
				this.whitespace();
				this.parse_Literal();
			}
			this.consume(37); // ')'
		}
		this.eventHandler.endNonterminal("Annotation", this.e0);
	}

	private parse_VarDecl() {
		this.eventHandler.startNonterminal("VarDecl", this.e0);
		this.consume(195); // 'variable'
		this.lookahead1W(23); // S^WS | '$' | '(:'
		this.consume(31); // '$'
		this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
		// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
		// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
		// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
		// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
		// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_VarName();
		this.lookahead1W(108); // S^WS | '(:' | ':=' | 'as' | 'external'
		if (this.token() == 80) {
			// 'as'
			this.whitespace();
			this.parse_TypeDeclaration();
		}
		this.lookahead1W(76); // S^WS | '(:' | ':=' | 'external'
		switch (this.token()) {
			case 51: // ':='
				this.consume(51); // ':='
				this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
				// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
				// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
				// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
				// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
				// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
				// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
				// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
				// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
				// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
				// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
				// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
				// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
				// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
				// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
				// 'unordered' | 'validate' | 'where' | 'xquery'
				this.whitespace();
				this.parse_VarValue();
				break;
			default:
				this.consume(119); // 'external'
				this.lookahead1W(74); // S^WS | '(:' | ':=' | ';'
				if (this.token() == 51) {
					// ':='
					this.consume(51); // ':='
					this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
					// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
					// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
					// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
					// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
					// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
					// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
					// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
					// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
					// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
					// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
					// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
					// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
					// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
					// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
					// 'unordered' | 'validate' | 'where' | 'xquery'
					this.whitespace();
					this.parse_VarDefaultValue();
				}
		}
		this.eventHandler.endNonterminal("VarDecl", this.e0);
	}

	private parse_VarValue() {
		this.eventHandler.startNonterminal("VarValue", this.e0);
		this.parse_ExprSingle();
		this.eventHandler.endNonterminal("VarValue", this.e0);
	}

	private parse_VarDefaultValue() {
		this.eventHandler.startNonterminal("VarDefaultValue", this.e0);
		this.parse_ExprSingle();
		this.eventHandler.endNonterminal("VarDefaultValue", this.e0);
	}

	private parse_ContextItemDecl() {
		this.eventHandler.startNonterminal("ContextItemDecl", this.e0);
		this.consume(100); // 'declare'
		this.lookahead1W(40); // S^WS | '(:' | 'context'
		this.consume(95); // 'context'
		this.lookahead1W(48); // S^WS | '(:' | 'item'
		this.consume(138); // 'item'
		this.lookahead1W(108); // S^WS | '(:' | ':=' | 'as' | 'external'
		if (this.token() == 80) {
			// 'as'
			this.consume(80); // 'as'
			this.lookahead1W(181); // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
			// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
			// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
			// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
			// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
			// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
			// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
			// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
			// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
			// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
			// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
			// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
			// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
			// 'where' | 'xquery'
			this.whitespace();
			this.parse_ItemType();
		}
		this.lookahead1W(76); // S^WS | '(:' | ':=' | 'external'
		switch (this.token()) {
			case 51: // ':='
				this.consume(51); // ':='
				this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
				// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
				// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
				// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
				// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
				// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
				// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
				// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
				// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
				// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
				// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
				// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
				// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
				// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
				// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
				// 'unordered' | 'validate' | 'where' | 'xquery'
				this.whitespace();
				this.parse_VarValue();
				break;
			default:
				this.consume(119); // 'external'
				this.lookahead1W(74); // S^WS | '(:' | ':=' | ';'
				if (this.token() == 51) {
					// ':='
					this.consume(51); // ':='
					this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
					// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
					// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
					// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
					// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
					// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
					// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
					// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
					// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
					// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
					// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
					// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
					// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
					// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
					// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
					// 'unordered' | 'validate' | 'where' | 'xquery'
					this.whitespace();
					this.parse_VarDefaultValue();
				}
		}
		this.eventHandler.endNonterminal("ContextItemDecl", this.e0);
	}

	private parse_FunctionDecl() {
		this.eventHandler.startNonterminal("FunctionDecl", this.e0);
		this.consume(123); // 'function'
		this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
		// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
		// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
		// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
		// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
		// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_EQName();
		this.lookahead1W(24); // S^WS | '(' | '(:'
		this.consume(34); // '('
		this.lookahead1W(66); // S^WS | '$' | '(:' | ')'
		if (this.token() == 31) {
			// '$'
			this.whitespace();
			this.parse_ParamList();
		}
		this.consume(37); // ')'
		this.lookahead1W(110); // S^WS | '(:' | 'as' | 'external' | '{'
		if (this.token() == 80) {
			// 'as'
			this.consume(80); // 'as'
			this.lookahead1W(181); // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
			// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
			// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
			// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
			// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
			// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
			// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
			// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
			// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
			// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
			// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
			// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
			// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
			// 'where' | 'xquery'
			this.whitespace();
			this.parse_SequenceType();
		}
		this.lookahead1W(87); // S^WS | '(:' | 'external' | '{'
		switch (this.token()) {
			case 202: // '{'
				this.whitespace();
				this.parse_FunctionBody();
				break;
			default:
				this.consume(119); // 'external'
		}
		this.eventHandler.endNonterminal("FunctionDecl", this.e0);
	}

	private parse_ParamList() {
		this.eventHandler.startNonterminal("ParamList", this.e0);
		this.parse_Param();
		for (;;) {
			this.lookahead1W(71); // S^WS | '(:' | ')' | ','
			if (this.token() != 40) {
				// ','
				break;
			}
			this.consume(40); // ','
			this.lookahead1W(23); // S^WS | '$' | '(:'
			this.whitespace();
			this.parse_Param();
		}
		this.eventHandler.endNonterminal("ParamList", this.e0);
	}

	private parse_Param() {
		this.eventHandler.startNonterminal("Param", this.e0);
		this.consume(31); // '$'
		this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
		// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
		// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
		// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
		// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
		// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_EQName();
		this.lookahead1W(106); // S^WS | '(:' | ')' | ',' | 'as'
		if (this.token() == 80) {
			// 'as'
			this.whitespace();
			this.parse_TypeDeclaration();
		}
		this.eventHandler.endNonterminal("Param", this.e0);
	}

	private parse_FunctionBody() {
		this.eventHandler.startNonterminal("FunctionBody", this.e0);
		this.parse_EnclosedExpr();
		this.eventHandler.endNonterminal("FunctionBody", this.e0);
	}

	private parse_EnclosedExpr() {
		this.eventHandler.startNonterminal("EnclosedExpr", this.e0);
		this.consume(202); // '{'
		this.lookahead1W(194); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery' | '}'
		if (this.token() != 206) {
			// '}'
			this.whitespace();
			this.parse_Expr();
		}
		this.consume(206); // '}'
		this.eventHandler.endNonterminal("EnclosedExpr", this.e0);
	}

	private parse_OptionDecl() {
		this.eventHandler.startNonterminal("OptionDecl", this.e0);
		this.consume(100); // 'declare'
		this.lookahead1W(52); // S^WS | '(:' | 'option'
		this.consume(157); // 'option'
		this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
		// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
		// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
		// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
		// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
		// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_EQName();
		this.lookahead1W(19); // StringLiteral | S^WS | '(:'
		this.consume(4); // StringLiteral
		this.eventHandler.endNonterminal("OptionDecl", this.e0);
	}

	private parse_QueryBody() {
		this.eventHandler.startNonterminal("QueryBody", this.e0);
		this.parse_Expr();
		this.eventHandler.endNonterminal("QueryBody", this.e0);
	}

	private parse_Expr() {
		this.eventHandler.startNonterminal("Expr", this.e0);
		this.parse_ExprSingle();
		for (;;) {
			if (this.token() != 40) {
				// ','
				break;
			}
			this.consume(40); // ','
			this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
			// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
			// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
			// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
			// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
			// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
			// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
			// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
			// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
			// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
			// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
			// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
			// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
			// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
			// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
			// 'unordered' | 'validate' | 'where' | 'xquery'
			this.whitespace();
			this.parse_ExprSingle();
		}
		this.eventHandler.endNonterminal("Expr", this.e0);
	}

	private parse_ExprSingle() {
		this.eventHandler.startNonterminal("ExprSingle", this.e0);
		switch (this.token()) {
			case 122: // 'for'
				this.lookahead2W(169); // S^WS | EOF | '!' | '!=' | '#' | '$' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' |
				// '/' | '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' |
				// '[' | ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
				// 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
				// 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
				// 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
				// 'satisfies' | 'sliding' | 'stable' | 'start' | 'to' | 'treat' | 'tumbling' |
				// 'union' | 'where' | '|' | '||' | '}' | '}`'
				break;
			case 188: // 'try'
				this.lookahead2W(167); // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' |
				// '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' |
				// ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
				// 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
				// 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
				// 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
				// 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '{' |
				// '|' | '||' | '}' | '}`'
				break;
			case 116: // 'every'
			case 142: // 'let'
			case 178: // 'some'
				this.lookahead2W(165); // S^WS | EOF | '!' | '!=' | '#' | '$' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' |
				// '/' | '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' |
				// '[' | ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
				// 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
				// 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
				// 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
				// 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' |
				// '||' | '}' | '}`'
				break;
			case 130: // 'if'
			case 183: // 'switch'
			case 191: // 'typeswitch'
				this.lookahead2W(161); // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' |
				// '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' |
				// ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
				// 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
				// 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
				// 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
				// 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' |
				// '||' | '}' | '}`'
				break;
			default:
				this.lk = this.l1;
		}
		switch (this.tokenSequence()) {
			case 8058: // 'for' '$'
			case 8078: // 'let' '$'
			case 45434: // 'for' 'sliding'
			case 48506: // 'for' 'tumbling'
				this.parse_FLWORExpr();
				break;
			case 8052: // 'every' '$'
			case 8114: // 'some' '$'
				this.parse_QuantifiedExpr();
				break;
			case 8887: // 'switch' '('
				this.parse_SwitchExpr();
				break;
			case 8895: // 'typeswitch' '('
				this.parse_TypeswitchExpr();
				break;
			case 8834: // 'if' '('
				this.parse_IfExpr();
				break;
			case 51900: // 'try' '{'
				this.parse_TryCatchExpr();
				break;
			default:
				this.parse_OrExpr();
		}
		this.eventHandler.endNonterminal("ExprSingle", this.e0);
	}

	private parse_FLWORExpr() {
		this.eventHandler.startNonterminal("FLWORExpr", this.e0);
		this.parse_InitialClause();
		for (;;) {
			this.lookahead1W(128); // S^WS | '(:' | 'count' | 'for' | 'group' | 'let' | 'order' | 'return' | 'stable' |
			// 'where'
			if (this.token() == 171) {
				// 'return'
				break;
			}
			this.whitespace();
			this.parse_IntermediateClause();
		}
		this.whitespace();
		this.parse_ReturnClause();
		this.eventHandler.endNonterminal("FLWORExpr", this.e0);
	}

	private parse_InitialClause() {
		this.eventHandler.startNonterminal("InitialClause", this.e0);
		switch (this.token()) {
			case 122: // 'for'
				this.lookahead2W(104); // S^WS | '$' | '(:' | 'sliding' | 'tumbling'
				break;
			default:
				this.lk = this.l1;
		}
		switch (this.tokenSequence()) {
			case 8058: // 'for' '$'
				this.parse_ForClause();
				break;
			case 142: // 'let'
				this.parse_LetClause();
				break;
			default:
				this.parse_WindowClause();
		}
		this.eventHandler.endNonterminal("InitialClause", this.e0);
	}

	private parse_IntermediateClause() {
		this.eventHandler.startNonterminal("IntermediateClause", this.e0);
		switch (this.token()) {
			case 122: // 'for'
			case 142: // 'let'
				this.parse_InitialClause();
				break;
			case 198: // 'where'
				this.parse_WhereClause();
				break;
			case 126: // 'group'
				this.parse_GroupByClause();
				break;
			case 97: // 'count'
				this.parse_CountClause();
				break;
			default:
				this.parse_OrderByClause();
		}
		this.eventHandler.endNonterminal("IntermediateClause", this.e0);
	}

	private parse_ForClause() {
		this.eventHandler.startNonterminal("ForClause", this.e0);
		this.consume(122); // 'for'
		this.lookahead1W(23); // S^WS | '$' | '(:'
		this.whitespace();
		this.parse_ForBinding();
		for (;;) {
			if (this.token() != 40) {
				// ','
				break;
			}
			this.consume(40); // ','
			this.lookahead1W(23); // S^WS | '$' | '(:'
			this.whitespace();
			this.parse_ForBinding();
		}
		this.eventHandler.endNonterminal("ForClause", this.e0);
	}

	private parse_ForBinding() {
		this.eventHandler.startNonterminal("ForBinding", this.e0);
		this.consume(31); // '$'
		this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
		// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
		// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
		// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
		// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
		// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_VarName();
		this.lookahead1W(117); // S^WS | '(:' | 'allowing' | 'as' | 'at' | 'in'
		if (this.token() == 80) {
			// 'as'
			this.whitespace();
			this.parse_TypeDeclaration();
		}
		this.lookahead1W(109); // S^WS | '(:' | 'allowing' | 'at' | 'in'
		if (this.token() == 75) {
			// 'allowing'
			this.whitespace();
			this.parse_AllowingEmpty();
		}
		this.lookahead1W(81); // S^WS | '(:' | 'at' | 'in'
		if (this.token() == 82) {
			// 'at'
			this.whitespace();
			this.parse_PositionalVar();
		}
		this.lookahead1W(47); // S^WS | '(:' | 'in'
		this.consume(132); // 'in'
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_ExprSingle();
		this.eventHandler.endNonterminal("ForBinding", this.e0);
	}

	private parse_AllowingEmpty() {
		this.eventHandler.startNonterminal("AllowingEmpty", this.e0);
		this.consume(75); // 'allowing'
		this.lookahead1W(45); // S^WS | '(:' | 'empty'
		this.consume(111); // 'empty'
		this.eventHandler.endNonterminal("AllowingEmpty", this.e0);
	}

	private parse_PositionalVar() {
		this.eventHandler.startNonterminal("PositionalVar", this.e0);
		this.consume(82); // 'at'
		this.lookahead1W(23); // S^WS | '$' | '(:'
		this.consume(31); // '$'
		this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
		// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
		// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
		// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
		// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
		// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_VarName();
		this.eventHandler.endNonterminal("PositionalVar", this.e0);
	}

	private parse_LetClause() {
		this.eventHandler.startNonterminal("LetClause", this.e0);
		this.consume(142); // 'let'
		this.lookahead1W(23); // S^WS | '$' | '(:'
		this.whitespace();
		this.parse_LetBinding();
		for (;;) {
			if (this.token() != 40) {
				// ','
				break;
			}
			this.consume(40); // ','
			this.lookahead1W(23); // S^WS | '$' | '(:'
			this.whitespace();
			this.parse_LetBinding();
		}
		this.eventHandler.endNonterminal("LetClause", this.e0);
	}

	private parse_LetBinding() {
		this.eventHandler.startNonterminal("LetBinding", this.e0);
		this.consume(31); // '$'
		this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
		// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
		// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
		// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
		// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
		// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_VarName();
		this.lookahead1W(75); // S^WS | '(:' | ':=' | 'as'
		if (this.token() == 80) {
			// 'as'
			this.whitespace();
			this.parse_TypeDeclaration();
		}
		this.lookahead1W(29); // S^WS | '(:' | ':='
		this.consume(51); // ':='
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_ExprSingle();
		this.eventHandler.endNonterminal("LetBinding", this.e0);
	}

	private parse_WindowClause() {
		this.eventHandler.startNonterminal("WindowClause", this.e0);
		this.consume(122); // 'for'
		this.lookahead1W(98); // S^WS | '(:' | 'sliding' | 'tumbling'
		switch (this.token()) {
			case 189: // 'tumbling'
				this.whitespace();
				this.parse_TumblingWindowClause();
				break;
			default:
				this.whitespace();
				this.parse_SlidingWindowClause();
		}
		this.eventHandler.endNonterminal("WindowClause", this.e0);
	}

	private parse_TumblingWindowClause() {
		this.eventHandler.startNonterminal("TumblingWindowClause", this.e0);
		this.consume(189); // 'tumbling'
		this.lookahead1W(59); // S^WS | '(:' | 'window'
		this.consume(199); // 'window'
		this.lookahead1W(23); // S^WS | '$' | '(:'
		this.consume(31); // '$'
		this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
		// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
		// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
		// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
		// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
		// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_VarName();
		this.lookahead1W(79); // S^WS | '(:' | 'as' | 'in'
		if (this.token() == 80) {
			// 'as'
			this.whitespace();
			this.parse_TypeDeclaration();
		}
		this.lookahead1W(47); // S^WS | '(:' | 'in'
		this.consume(132); // 'in'
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_ExprSingle();
		this.whitespace();
		this.parse_WindowStartCondition();
		if (
			this.token() == 114 || // 'end'
			this.token() == 156
		) {
			// 'only'
			this.whitespace();
			this.parse_WindowEndCondition();
		}
		this.eventHandler.endNonterminal("TumblingWindowClause", this.e0);
	}

	private parse_SlidingWindowClause() {
		this.eventHandler.startNonterminal("SlidingWindowClause", this.e0);
		this.consume(177); // 'sliding'
		this.lookahead1W(59); // S^WS | '(:' | 'window'
		this.consume(199); // 'window'
		this.lookahead1W(23); // S^WS | '$' | '(:'
		this.consume(31); // '$'
		this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
		// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
		// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
		// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
		// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
		// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_VarName();
		this.lookahead1W(79); // S^WS | '(:' | 'as' | 'in'
		if (this.token() == 80) {
			// 'as'
			this.whitespace();
			this.parse_TypeDeclaration();
		}
		this.lookahead1W(47); // S^WS | '(:' | 'in'
		this.consume(132); // 'in'
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_ExprSingle();
		this.whitespace();
		this.parse_WindowStartCondition();
		this.whitespace();
		this.parse_WindowEndCondition();
		this.eventHandler.endNonterminal("SlidingWindowClause", this.e0);
	}

	private parse_WindowStartCondition() {
		this.eventHandler.startNonterminal("WindowStartCondition", this.e0);
		this.consume(180); // 'start'
		this.lookahead1W(120); // S^WS | '$' | '(:' | 'at' | 'next' | 'previous' | 'when'
		this.whitespace();
		this.parse_WindowVars();
		this.lookahead1W(58); // S^WS | '(:' | 'when'
		this.consume(197); // 'when'
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_ExprSingle();
		this.eventHandler.endNonterminal("WindowStartCondition", this.e0);
	}

	private parse_WindowEndCondition() {
		this.eventHandler.startNonterminal("WindowEndCondition", this.e0);
		if (this.token() == 156) {
			// 'only'
			this.consume(156); // 'only'
		}
		this.lookahead1W(46); // S^WS | '(:' | 'end'
		this.consume(114); // 'end'
		this.lookahead1W(120); // S^WS | '$' | '(:' | 'at' | 'next' | 'previous' | 'when'
		this.whitespace();
		this.parse_WindowVars();
		this.lookahead1W(58); // S^WS | '(:' | 'when'
		this.consume(197); // 'when'
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_ExprSingle();
		this.eventHandler.endNonterminal("WindowEndCondition", this.e0);
	}

	private parse_WindowVars() {
		this.eventHandler.startNonterminal("WindowVars", this.e0);
		if (this.token() == 31) {
			// '$'
			this.consume(31); // '$'
			this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
			// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
			// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
			// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
			// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
			// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
			// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
			// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
			// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
			// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
			// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
			// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
			// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
			// 'where' | 'xquery'
			this.whitespace();
			this.parse_CurrentItem();
		}
		this.lookahead1W(118); // S^WS | '(:' | 'at' | 'next' | 'previous' | 'when'
		if (this.token() == 82) {
			// 'at'
			this.whitespace();
			this.parse_PositionalVar();
		}
		this.lookahead1W(113); // S^WS | '(:' | 'next' | 'previous' | 'when'
		if (this.token() == 169) {
			// 'previous'
			this.consume(169); // 'previous'
			this.lookahead1W(23); // S^WS | '$' | '(:'
			this.consume(31); // '$'
			this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
			// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
			// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
			// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
			// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
			// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
			// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
			// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
			// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
			// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
			// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
			// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
			// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
			// 'where' | 'xquery'
			this.whitespace();
			this.parse_PreviousItem();
		}
		this.lookahead1W(91); // S^WS | '(:' | 'next' | 'when'
		if (this.token() == 151) {
			// 'next'
			this.consume(151); // 'next'
			this.lookahead1W(23); // S^WS | '$' | '(:'
			this.consume(31); // '$'
			this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
			// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
			// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
			// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
			// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
			// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
			// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
			// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
			// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
			// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
			// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
			// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
			// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
			// 'where' | 'xquery'
			this.whitespace();
			this.parse_NextItem();
		}
		this.eventHandler.endNonterminal("WindowVars", this.e0);
	}

	private parse_CurrentItem() {
		this.eventHandler.startNonterminal("CurrentItem", this.e0);
		this.parse_EQName();
		this.eventHandler.endNonterminal("CurrentItem", this.e0);
	}

	private parse_PreviousItem() {
		this.eventHandler.startNonterminal("PreviousItem", this.e0);
		this.parse_EQName();
		this.eventHandler.endNonterminal("PreviousItem", this.e0);
	}

	private parse_NextItem() {
		this.eventHandler.startNonterminal("NextItem", this.e0);
		this.parse_EQName();
		this.eventHandler.endNonterminal("NextItem", this.e0);
	}

	private parse_CountClause() {
		this.eventHandler.startNonterminal("CountClause", this.e0);
		this.consume(97); // 'count'
		this.lookahead1W(23); // S^WS | '$' | '(:'
		this.consume(31); // '$'
		this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
		// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
		// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
		// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
		// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
		// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_VarName();
		this.eventHandler.endNonterminal("CountClause", this.e0);
	}

	private parse_WhereClause() {
		this.eventHandler.startNonterminal("WhereClause", this.e0);
		this.consume(198); // 'where'
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_ExprSingle();
		this.eventHandler.endNonterminal("WhereClause", this.e0);
	}

	private parse_GroupByClause() {
		this.eventHandler.startNonterminal("GroupByClause", this.e0);
		this.consume(126); // 'group'
		this.lookahead1W(35); // S^WS | '(:' | 'by'
		this.consume(86); // 'by'
		this.lookahead1W(23); // S^WS | '$' | '(:'
		this.whitespace();
		this.parse_GroupingSpecList();
		this.eventHandler.endNonterminal("GroupByClause", this.e0);
	}

	private parse_GroupingSpecList() {
		this.eventHandler.startNonterminal("GroupingSpecList", this.e0);
		this.parse_GroupingSpec();
		for (;;) {
			this.lookahead1W(130); // S^WS | '(:' | ',' | 'count' | 'for' | 'group' | 'let' | 'order' | 'return' |
			// 'stable' | 'where'
			if (this.token() != 40) {
				// ','
				break;
			}
			this.consume(40); // ','
			this.lookahead1W(23); // S^WS | '$' | '(:'
			this.whitespace();
			this.parse_GroupingSpec();
		}
		this.eventHandler.endNonterminal("GroupingSpecList", this.e0);
	}

	private parse_GroupingSpec() {
		this.eventHandler.startNonterminal("GroupingSpec", this.e0);
		this.parse_GroupingVariable();
		this.lookahead1W(133); // S^WS | '(:' | ',' | ':=' | 'as' | 'collation' | 'count' | 'for' | 'group' |
		// 'let' | 'order' | 'return' | 'stable' | 'where'
		if (
			this.token() == 51 || // ':='
			this.token() == 80
		) {
			// 'as'
			if (this.token() == 80) {
				// 'as'
				this.whitespace();
				this.parse_TypeDeclaration();
			}
			this.lookahead1W(29); // S^WS | '(:' | ':='
			this.consume(51); // ':='
			this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
			// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
			// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
			// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
			// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
			// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
			// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
			// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
			// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
			// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
			// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
			// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
			// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
			// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
			// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
			// 'unordered' | 'validate' | 'where' | 'xquery'
			this.whitespace();
			this.parse_ExprSingle();
		}
		if (this.token() == 92) {
			// 'collation'
			this.consume(92); // 'collation'
			this.lookahead1W(19); // StringLiteral | S^WS | '(:'
			this.whitespace();
			this.parse_URILiteral();
		}
		this.eventHandler.endNonterminal("GroupingSpec", this.e0);
	}

	private parse_GroupingVariable() {
		this.eventHandler.startNonterminal("GroupingVariable", this.e0);
		this.consume(31); // '$'
		this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
		// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
		// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
		// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
		// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
		// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_VarName();
		this.eventHandler.endNonterminal("GroupingVariable", this.e0);
	}

	private parse_OrderByClause() {
		this.eventHandler.startNonterminal("OrderByClause", this.e0);
		switch (this.token()) {
			case 159: // 'order'
				this.consume(159); // 'order'
				this.lookahead1W(35); // S^WS | '(:' | 'by'
				this.consume(86); // 'by'
				break;
			default:
				this.consume(179); // 'stable'
				this.lookahead1W(53); // S^WS | '(:' | 'order'
				this.consume(159); // 'order'
				this.lookahead1W(35); // S^WS | '(:' | 'by'
				this.consume(86); // 'by'
		}
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_OrderSpecList();
		this.eventHandler.endNonterminal("OrderByClause", this.e0);
	}

	private parse_OrderSpecList() {
		this.eventHandler.startNonterminal("OrderSpecList", this.e0);
		this.parse_OrderSpec();
		for (;;) {
			this.lookahead1W(130); // S^WS | '(:' | ',' | 'count' | 'for' | 'group' | 'let' | 'order' | 'return' |
			// 'stable' | 'where'
			if (this.token() != 40) {
				// ','
				break;
			}
			this.consume(40); // ','
			this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
			// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
			// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
			// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
			// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
			// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
			// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
			// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
			// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
			// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
			// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
			// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
			// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
			// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
			// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
			// 'unordered' | 'validate' | 'where' | 'xquery'
			this.whitespace();
			this.parse_OrderSpec();
		}
		this.eventHandler.endNonterminal("OrderSpecList", this.e0);
	}

	private parse_OrderSpec() {
		this.eventHandler.startNonterminal("OrderSpec", this.e0);
		this.parse_ExprSingle();
		this.whitespace();
		this.parse_OrderModifier();
		this.eventHandler.endNonterminal("OrderSpec", this.e0);
	}

	private parse_OrderModifier() {
		this.eventHandler.startNonterminal("OrderModifier", this.e0);
		if (
			this.token() == 81 || // 'ascending'
			this.token() == 104
		) {
			// 'descending'
			switch (this.token()) {
				case 81: // 'ascending'
					this.consume(81); // 'ascending'
					break;
				default:
					this.consume(104); // 'descending'
			}
		}
		this.lookahead1W(132); // S^WS | '(:' | ',' | 'collation' | 'count' | 'empty' | 'for' | 'group' | 'let' |
		// 'order' | 'return' | 'stable' | 'where'
		if (this.token() == 111) {
			// 'empty'
			this.consume(111); // 'empty'
			this.lookahead1W(88); // S^WS | '(:' | 'greatest' | 'least'
			switch (this.token()) {
				case 125: // 'greatest'
					this.consume(125); // 'greatest'
					break;
				default:
					this.consume(141); // 'least'
			}
		}
		this.lookahead1W(131); // S^WS | '(:' | ',' | 'collation' | 'count' | 'for' | 'group' | 'let' | 'order' |
		// 'return' | 'stable' | 'where'
		if (this.token() == 92) {
			// 'collation'
			this.consume(92); // 'collation'
			this.lookahead1W(19); // StringLiteral | S^WS | '(:'
			this.whitespace();
			this.parse_URILiteral();
		}
		this.eventHandler.endNonterminal("OrderModifier", this.e0);
	}

	private parse_ReturnClause() {
		this.eventHandler.startNonterminal("ReturnClause", this.e0);
		this.consume(171); // 'return'
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_ExprSingle();
		this.eventHandler.endNonterminal("ReturnClause", this.e0);
	}

	private parse_QuantifiedExpr() {
		this.eventHandler.startNonterminal("QuantifiedExpr", this.e0);
		switch (this.token()) {
			case 178: // 'some'
				this.consume(178); // 'some'
				break;
			default:
				this.consume(116); // 'every'
		}
		this.lookahead1W(23); // S^WS | '$' | '(:'
		this.consume(31); // '$'
		this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
		// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
		// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
		// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
		// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
		// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_VarName();
		this.lookahead1W(79); // S^WS | '(:' | 'as' | 'in'
		if (this.token() == 80) {
			// 'as'
			this.whitespace();
			this.parse_TypeDeclaration();
		}
		this.lookahead1W(47); // S^WS | '(:' | 'in'
		this.consume(132); // 'in'
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_ExprSingle();
		for (;;) {
			if (this.token() != 40) {
				// ','
				break;
			}
			this.consume(40); // ','
			this.lookahead1W(23); // S^WS | '$' | '(:'
			this.consume(31); // '$'
			this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
			// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
			// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
			// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
			// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
			// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
			// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
			// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
			// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
			// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
			// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
			// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
			// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
			// 'where' | 'xquery'
			this.whitespace();
			this.parse_VarName();
			this.lookahead1W(79); // S^WS | '(:' | 'as' | 'in'
			if (this.token() == 80) {
				// 'as'
				this.whitespace();
				this.parse_TypeDeclaration();
			}
			this.lookahead1W(47); // S^WS | '(:' | 'in'
			this.consume(132); // 'in'
			this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
			// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
			// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
			// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
			// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
			// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
			// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
			// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
			// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
			// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
			// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
			// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
			// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
			// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
			// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
			// 'unordered' | 'validate' | 'where' | 'xquery'
			this.whitespace();
			this.parse_ExprSingle();
		}
		this.consume(172); // 'satisfies'
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_ExprSingle();
		this.eventHandler.endNonterminal("QuantifiedExpr", this.e0);
	}

	private parse_SwitchExpr() {
		this.eventHandler.startNonterminal("SwitchExpr", this.e0);
		this.consume(183); // 'switch'
		this.lookahead1W(24); // S^WS | '(' | '(:'
		this.consume(34); // '('
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_Expr();
		this.consume(37); // ')'
		for (;;) {
			this.lookahead1W(36); // S^WS | '(:' | 'case'
			this.whitespace();
			this.parse_SwitchCaseClause();
			if (this.token() != 87) {
				// 'case'
				break;
			}
		}
		this.consume(101); // 'default'
		this.lookahead1W(55); // S^WS | '(:' | 'return'
		this.consume(171); // 'return'
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_ExprSingle();
		this.eventHandler.endNonterminal("SwitchExpr", this.e0);
	}

	private parse_SwitchCaseClause() {
		this.eventHandler.startNonterminal("SwitchCaseClause", this.e0);
		for (;;) {
			this.consume(87); // 'case'
			this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
			// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
			// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
			// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
			// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
			// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
			// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
			// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
			// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
			// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
			// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
			// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
			// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
			// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
			// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
			// 'unordered' | 'validate' | 'where' | 'xquery'
			this.whitespace();
			this.parse_SwitchCaseOperand();
			if (this.token() != 87) {
				// 'case'
				break;
			}
		}
		this.consume(171); // 'return'
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_ExprSingle();
		this.eventHandler.endNonterminal("SwitchCaseClause", this.e0);
	}

	private parse_SwitchCaseOperand() {
		this.eventHandler.startNonterminal("SwitchCaseOperand", this.e0);
		this.parse_ExprSingle();
		this.eventHandler.endNonterminal("SwitchCaseOperand", this.e0);
	}

	private parse_TypeswitchExpr() {
		this.eventHandler.startNonterminal("TypeswitchExpr", this.e0);
		this.consume(191); // 'typeswitch'
		this.lookahead1W(24); // S^WS | '(' | '(:'
		this.consume(34); // '('
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_Expr();
		this.consume(37); // ')'
		for (;;) {
			this.lookahead1W(36); // S^WS | '(:' | 'case'
			this.whitespace();
			this.parse_CaseClause();
			if (this.token() != 87) {
				// 'case'
				break;
			}
		}
		this.consume(101); // 'default'
		this.lookahead1W(67); // S^WS | '$' | '(:' | 'return'
		if (this.token() == 31) {
			// '$'
			this.consume(31); // '$'
			this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
			// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
			// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
			// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
			// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
			// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
			// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
			// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
			// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
			// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
			// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
			// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
			// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
			// 'where' | 'xquery'
			this.whitespace();
			this.parse_VarName();
		}
		this.lookahead1W(55); // S^WS | '(:' | 'return'
		this.consume(171); // 'return'
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_ExprSingle();
		this.eventHandler.endNonterminal("TypeswitchExpr", this.e0);
	}

	private parse_CaseClause() {
		this.eventHandler.startNonterminal("CaseClause", this.e0);
		this.consume(87); // 'case'
		this.lookahead1W(183); // URIQualifiedName | QName^Token | S^WS | '$' | '%' | '(' | '(:' | 'ancestor' |
		// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
		// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
		// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
		// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
		// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		if (this.token() == 31) {
			// '$'
			this.consume(31); // '$'
			this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
			// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
			// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
			// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
			// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
			// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
			// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
			// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
			// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
			// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
			// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
			// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
			// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
			// 'where' | 'xquery'
			this.whitespace();
			this.parse_VarName();
			this.lookahead1W(32); // S^WS | '(:' | 'as'
			this.consume(80); // 'as'
		}
		this.lookahead1W(181); // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
		// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
		// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
		// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
		// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
		// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_SequenceTypeUnion();
		this.consume(171); // 'return'
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_ExprSingle();
		this.eventHandler.endNonterminal("CaseClause", this.e0);
	}

	private parse_SequenceTypeUnion() {
		this.eventHandler.startNonterminal("SequenceTypeUnion", this.e0);
		this.parse_SequenceType();
		for (;;) {
			this.lookahead1W(97); // S^WS | '(:' | 'return' | '|'
			if (this.token() != 204) {
				// '|'
				break;
			}
			this.consume(204); // '|'
			this.lookahead1W(181); // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
			// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
			// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
			// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
			// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
			// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
			// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
			// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
			// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
			// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
			// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
			// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
			// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
			// 'where' | 'xquery'
			this.whitespace();
			this.parse_SequenceType();
		}
		this.eventHandler.endNonterminal("SequenceTypeUnion", this.e0);
	}

	private parse_IfExpr() {
		this.eventHandler.startNonterminal("IfExpr", this.e0);
		this.consume(130); // 'if'
		this.lookahead1W(24); // S^WS | '(' | '(:'
		this.consume(34); // '('
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_Expr();
		this.consume(37); // ')'
		this.lookahead1W(57); // S^WS | '(:' | 'then'
		this.consume(185); // 'then'
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_ExprSingle();
		this.consume(110); // 'else'
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_ExprSingle();
		this.eventHandler.endNonterminal("IfExpr", this.e0);
	}

	private parse_TryCatchExpr() {
		this.eventHandler.startNonterminal("TryCatchExpr", this.e0);
		this.parse_TryClause();
		for (;;) {
			this.lookahead1W(37); // S^WS | '(:' | 'catch'
			this.whitespace();
			this.parse_CatchClause();
			this.lookahead1W(136); // S^WS | EOF | '(:' | ')' | ',' | ':' | ';' | ']' | 'ascending' | 'case' |
			// 'catch' | 'collation' | 'count' | 'default' | 'descending' | 'else' | 'empty' |
			// 'end' | 'for' | 'group' | 'let' | 'only' | 'order' | 'return' | 'satisfies' |
			// 'stable' | 'start' | 'where' | '}' | '}`'
			if (this.token() != 90) {
				// 'catch'
				break;
			}
		}
		this.eventHandler.endNonterminal("TryCatchExpr", this.e0);
	}

	private parse_TryClause() {
		this.eventHandler.startNonterminal("TryClause", this.e0);
		this.consume(188); // 'try'
		this.lookahead1W(60); // S^WS | '(:' | '{'
		this.whitespace();
		this.parse_EnclosedTryTargetExpr();
		this.eventHandler.endNonterminal("TryClause", this.e0);
	}

	private parse_EnclosedTryTargetExpr() {
		this.eventHandler.startNonterminal("EnclosedTryTargetExpr", this.e0);
		this.parse_EnclosedExpr();
		this.eventHandler.endNonterminal("EnclosedTryTargetExpr", this.e0);
	}

	private parse_CatchClause() {
		this.eventHandler.startNonterminal("CatchClause", this.e0);
		this.consume(90); // 'catch'
		this.lookahead1W(176); // URIQualifiedName | QName^Token | S^WS | Wildcard | '(:' | 'ancestor' |
		// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
		// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
		// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
		// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
		// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_CatchErrorList();
		this.whitespace();
		this.parse_EnclosedExpr();
		this.eventHandler.endNonterminal("CatchClause", this.e0);
	}

	private parse_CatchErrorList() {
		this.eventHandler.startNonterminal("CatchErrorList", this.e0);
		this.parse_NameTest();
		for (;;) {
			this.lookahead1W(99); // S^WS | '(:' | '{' | '|'
			if (this.token() != 204) {
				// '|'
				break;
			}
			this.consume(204); // '|'
			this.lookahead1W(176); // URIQualifiedName | QName^Token | S^WS | Wildcard | '(:' | 'ancestor' |
			// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
			// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
			// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
			// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
			// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
			// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
			// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
			// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
			// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
			// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
			// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
			// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
			// 'where' | 'xquery'
			this.whitespace();
			this.parse_NameTest();
		}
		this.eventHandler.endNonterminal("CatchErrorList", this.e0);
	}

	private parse_OrExpr() {
		this.eventHandler.startNonterminal("OrExpr", this.e0);
		this.parse_AndExpr();
		for (;;) {
			if (this.token() != 158) {
				// 'or'
				break;
			}
			this.consume(158); // 'or'
			this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
			// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
			// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
			// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
			// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
			// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
			// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
			// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
			// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
			// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
			// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
			// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
			// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
			// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
			// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
			// 'unordered' | 'validate' | 'where' | 'xquery'
			this.whitespace();
			this.parse_AndExpr();
		}
		this.eventHandler.endNonterminal("OrExpr", this.e0);
	}

	private parse_AndExpr() {
		this.eventHandler.startNonterminal("AndExpr", this.e0);
		this.parse_ComparisonExpr();
		for (;;) {
			if (this.token() != 78) {
				// 'and'
				break;
			}
			this.consume(78); // 'and'
			this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
			// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
			// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
			// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
			// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
			// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
			// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
			// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
			// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
			// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
			// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
			// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
			// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
			// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
			// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
			// 'unordered' | 'validate' | 'where' | 'xquery'
			this.whitespace();
			this.parse_ComparisonExpr();
		}
		this.eventHandler.endNonterminal("AndExpr", this.e0);
	}

	private parse_ComparisonExpr() {
		this.eventHandler.startNonterminal("ComparisonExpr", this.e0);
		this.parse_StringConcatExpr();
		if (
			this.token() == 27 || // '!='
			this.token() == 53 || // '<'
			this.token() == 57 || // '<<'
			this.token() == 58 || // '<='
			this.token() == 60 || // '='
			this.token() == 62 || // '>'
			this.token() == 63 || // '>='
			this.token() == 64 || // '>>'
			this.token() == 115 || // 'eq'
			this.token() == 124 || // 'ge'
			this.token() == 128 || // 'gt'
			this.token() == 137 || // 'is'
			this.token() == 140 || // 'le'
			this.token() == 143 || // 'lt'
			this.token() == 150
		) {
			// 'ne'
			switch (this.token()) {
				case 115: // 'eq'
				case 124: // 'ge'
				case 128: // 'gt'
				case 140: // 'le'
				case 143: // 'lt'
				case 150: // 'ne'
					this.whitespace();
					this.parse_ValueComp();
					break;
				case 57: // '<<'
				case 64: // '>>'
				case 137: // 'is'
					this.whitespace();
					this.parse_NodeComp();
					break;
				default:
					this.whitespace();
					this.parse_GeneralComp();
			}
			this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
			// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
			// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
			// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
			// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
			// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
			// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
			// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
			// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
			// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
			// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
			// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
			// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
			// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
			// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
			// 'unordered' | 'validate' | 'where' | 'xquery'
			this.whitespace();
			this.parse_StringConcatExpr();
		}
		this.eventHandler.endNonterminal("ComparisonExpr", this.e0);
	}

	private parse_StringConcatExpr() {
		this.eventHandler.startNonterminal("StringConcatExpr", this.e0);
		this.parse_RangeExpr();
		for (;;) {
			if (this.token() != 205) {
				// '||'
				break;
			}
			this.consume(205); // '||'
			this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
			// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
			// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
			// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
			// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
			// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
			// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
			// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
			// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
			// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
			// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
			// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
			// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
			// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
			// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
			// 'unordered' | 'validate' | 'where' | 'xquery'
			this.whitespace();
			this.parse_RangeExpr();
		}
		this.eventHandler.endNonterminal("StringConcatExpr", this.e0);
	}

	private parse_RangeExpr() {
		this.eventHandler.startNonterminal("RangeExpr", this.e0);
		this.parse_AdditiveExpr();
		if (this.token() == 186) {
			// 'to'
			this.consume(186); // 'to'
			this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
			// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
			// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
			// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
			// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
			// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
			// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
			// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
			// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
			// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
			// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
			// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
			// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
			// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
			// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
			// 'unordered' | 'validate' | 'where' | 'xquery'
			this.whitespace();
			this.parse_AdditiveExpr();
		}
		this.eventHandler.endNonterminal("RangeExpr", this.e0);
	}

	private parse_AdditiveExpr() {
		this.eventHandler.startNonterminal("AdditiveExpr", this.e0);
		this.parse_MultiplicativeExpr();
		for (;;) {
			if (
				this.token() != 39 && // '+'
				this.token() != 41
			) {
				// '-'
				break;
			}
			switch (this.token()) {
				case 39: // '+'
					this.consume(39); // '+'
					break;
				default:
					this.consume(41); // '-'
			}
			this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
			// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
			// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
			// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
			// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
			// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
			// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
			// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
			// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
			// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
			// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
			// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
			// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
			// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
			// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
			// 'unordered' | 'validate' | 'where' | 'xquery'
			this.whitespace();
			this.parse_MultiplicativeExpr();
		}
		this.eventHandler.endNonterminal("AdditiveExpr", this.e0);
	}

	private parse_MultiplicativeExpr() {
		this.eventHandler.startNonterminal("MultiplicativeExpr", this.e0);
		this.parse_UnionExpr();
		for (;;) {
			if (
				this.token() != 38 && // '*'
				this.token() != 106 && // 'div'
				this.token() != 129 && // 'idiv'
				this.token() != 146
			) {
				// 'mod'
				break;
			}
			switch (this.token()) {
				case 38: // '*'
					this.consume(38); // '*'
					break;
				case 106: // 'div'
					this.consume(106); // 'div'
					break;
				case 129: // 'idiv'
					this.consume(129); // 'idiv'
					break;
				default:
					this.consume(146); // 'mod'
			}
			this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
			// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
			// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
			// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
			// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
			// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
			// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
			// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
			// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
			// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
			// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
			// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
			// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
			// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
			// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
			// 'unordered' | 'validate' | 'where' | 'xquery'
			this.whitespace();
			this.parse_UnionExpr();
		}
		this.eventHandler.endNonterminal("MultiplicativeExpr", this.e0);
	}

	private parse_UnionExpr() {
		this.eventHandler.startNonterminal("UnionExpr", this.e0);
		this.parse_IntersectExceptExpr();
		for (;;) {
			if (
				this.token() != 192 && // 'union'
				this.token() != 204
			) {
				// '|'
				break;
			}
			switch (this.token()) {
				case 192: // 'union'
					this.consume(192); // 'union'
					break;
				default:
					this.consume(204); // '|'
			}
			this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
			// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
			// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
			// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
			// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
			// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
			// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
			// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
			// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
			// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
			// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
			// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
			// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
			// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
			// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
			// 'unordered' | 'validate' | 'where' | 'xquery'
			this.whitespace();
			this.parse_IntersectExceptExpr();
		}
		this.eventHandler.endNonterminal("UnionExpr", this.e0);
	}

	private parse_IntersectExceptExpr() {
		this.eventHandler.startNonterminal("IntersectExceptExpr", this.e0);
		this.parse_InstanceofExpr();
		for (;;) {
			this.lookahead1W(149); // S^WS | EOF | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ';' | '<' | '<<' |
			// '<=' | '=' | '>' | '>=' | '>>' | ']' | 'and' | 'ascending' | 'case' |
			// 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
			// 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'intersect' |
			// 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
			// 'satisfies' | 'stable' | 'start' | 'to' | 'union' | 'where' | '|' | '||' | '}' |
			// '}`'
			if (
				this.token() != 117 && // 'except'
				this.token() != 136
			) {
				// 'intersect'
				break;
			}
			switch (this.token()) {
				case 136: // 'intersect'
					this.consume(136); // 'intersect'
					break;
				default:
					this.consume(117); // 'except'
			}
			this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
			// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
			// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
			// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
			// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
			// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
			// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
			// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
			// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
			// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
			// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
			// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
			// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
			// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
			// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
			// 'unordered' | 'validate' | 'where' | 'xquery'
			this.whitespace();
			this.parse_InstanceofExpr();
		}
		this.eventHandler.endNonterminal("IntersectExceptExpr", this.e0);
	}

	private parse_InstanceofExpr() {
		this.eventHandler.startNonterminal("InstanceofExpr", this.e0);
		this.parse_TreatExpr();
		this.lookahead1W(150); // S^WS | EOF | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ';' | '<' | '<<' |
		// '<=' | '=' | '>' | '>=' | '>>' | ']' | 'and' | 'ascending' | 'case' |
		// 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
		// 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
		// 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
		// 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'union' |
		// 'where' | '|' | '||' | '}' | '}`'
		if (this.token() == 135) {
			// 'instance'
			this.consume(135); // 'instance'
			this.lookahead1W(51); // S^WS | '(:' | 'of'
			this.consume(155); // 'of'
			this.lookahead1W(181); // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
			// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
			// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
			// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
			// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
			// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
			// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
			// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
			// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
			// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
			// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
			// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
			// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
			// 'where' | 'xquery'
			this.whitespace();
			this.parse_SequenceType();
		}
		this.eventHandler.endNonterminal("InstanceofExpr", this.e0);
	}

	private parse_TreatExpr() {
		this.eventHandler.startNonterminal("TreatExpr", this.e0);
		this.parse_CastableExpr();
		this.lookahead1W(151); // S^WS | EOF | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ';' | '<' | '<<' |
		// '<=' | '=' | '>' | '>=' | '>>' | ']' | 'and' | 'ascending' | 'case' |
		// 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
		// 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
		// 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
		// 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
		// 'union' | 'where' | '|' | '||' | '}' | '}`'
		if (this.token() == 187) {
			// 'treat'
			this.consume(187); // 'treat'
			this.lookahead1W(32); // S^WS | '(:' | 'as'
			this.consume(80); // 'as'
			this.lookahead1W(181); // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
			// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
			// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
			// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
			// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
			// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
			// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
			// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
			// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
			// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
			// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
			// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
			// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
			// 'where' | 'xquery'
			this.whitespace();
			this.parse_SequenceType();
		}
		this.eventHandler.endNonterminal("TreatExpr", this.e0);
	}

	private parse_CastableExpr() {
		this.eventHandler.startNonterminal("CastableExpr", this.e0);
		this.parse_CastExpr();
		this.lookahead1W(152); // S^WS | EOF | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ';' | '<' | '<<' |
		// '<=' | '=' | '>' | '>=' | '>>' | ']' | 'and' | 'ascending' | 'case' |
		// 'castable' | 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' |
		// 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' |
		// 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
		// 'union' | 'where' | '|' | '||' | '}' | '}`'
		if (this.token() == 89) {
			// 'castable'
			this.consume(89); // 'castable'
			this.lookahead1W(32); // S^WS | '(:' | 'as'
			this.consume(80); // 'as'
			this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
			// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
			// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
			// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
			// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
			// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
			// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
			// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
			// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
			// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
			// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
			// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
			// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
			// 'where' | 'xquery'
			this.whitespace();
			this.parse_SingleType();
		}
		this.eventHandler.endNonterminal("CastableExpr", this.e0);
	}

	private parse_CastExpr() {
		this.eventHandler.startNonterminal("CastExpr", this.e0);
		this.parse_ArrowExpr();
		if (this.token() == 88) {
			// 'cast'
			this.consume(88); // 'cast'
			this.lookahead1W(32); // S^WS | '(:' | 'as'
			this.consume(80); // 'as'
			this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
			// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
			// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
			// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
			// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
			// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
			// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
			// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
			// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
			// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
			// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
			// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
			// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
			// 'where' | 'xquery'
			this.whitespace();
			this.parse_SingleType();
		}
		this.eventHandler.endNonterminal("CastExpr", this.e0);
	}

	private parse_ArrowExpr() {
		this.eventHandler.startNonterminal("ArrowExpr", this.e0);
		this.parse_UnaryExpr();
		for (;;) {
			this.lookahead1W(154); // S^WS | EOF | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ';' | '<' | '<<' |
			// '<=' | '=' | '=>' | '>' | '>=' | '>>' | ']' | 'and' | 'ascending' | 'case' |
			// 'cast' | 'castable' | 'collation' | 'count' | 'default' | 'descending' | 'div' |
			// 'else' | 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' |
			// 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' |
			// 'only' | 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' |
			// 'treat' | 'union' | 'where' | '|' | '||' | '}' | '}`'
			if (this.token() != 61) {
				// '=>'
				break;
			}
			this.consume(61); // '=>'
			this.lookahead1W(180); // URIQualifiedName | QName^Token | S^WS | '$' | '(' | '(:' | 'ancestor' |
			// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
			// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
			// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
			// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
			// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
			// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
			// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
			// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
			// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
			// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
			// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
			// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
			// 'where' | 'xquery'
			this.whitespace();
			this.parse_ArrowFunctionSpecifier();
			this.lookahead1W(24); // S^WS | '(' | '(:'
			this.whitespace();
			this.parse_ArgumentList();
		}
		this.eventHandler.endNonterminal("ArrowExpr", this.e0);
	}

	private parse_UnaryExpr() {
		this.eventHandler.startNonterminal("UnaryExpr", this.e0);
		for (;;) {
			this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
			// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
			// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
			// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
			// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
			// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
			// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
			// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
			// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
			// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
			// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
			// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
			// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
			// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
			// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
			// 'unordered' | 'validate' | 'where' | 'xquery'
			if (
				this.token() != 39 && // '+'
				this.token() != 41
			) {
				// '-'
				break;
			}
			switch (this.token()) {
				case 41: // '-'
					this.consume(41); // '-'
					break;
				default:
					this.consume(39); // '+'
			}
		}
		this.whitespace();
		this.parse_ValueExpr();
		this.eventHandler.endNonterminal("UnaryExpr", this.e0);
	}

	private parse_ValueExpr() {
		this.eventHandler.startNonterminal("ValueExpr", this.e0);
		switch (this.token()) {
			case 194: // 'validate'
				this.lookahead2W(170); // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' |
				// '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' |
				// ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
				// 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
				// 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
				// 'is' | 'lax' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' |
				// 'return' | 'satisfies' | 'stable' | 'start' | 'strict' | 'to' | 'treat' |
				// 'type' | 'union' | 'where' | '{' | '|' | '||' | '}' | '}`'
				break;
			default:
				this.lk = this.l1;
		}
		switch (this.tokenSequence()) {
			case 35778: // 'validate' 'lax'
			case 46530: // 'validate' 'strict'
			case 48834: // 'validate' 'type'
			case 51906: // 'validate' '{'
				this.parse_ValidateExpr();
				break;
			case 35: // '(#'
				this.parse_ExtensionExpr();
				break;
			default:
				this.parse_SimpleMapExpr();
		}
		this.eventHandler.endNonterminal("ValueExpr", this.e0);
	}

	private parse_GeneralComp() {
		this.eventHandler.startNonterminal("GeneralComp", this.e0);
		switch (this.token()) {
			case 60: // '='
				this.consume(60); // '='
				break;
			case 27: // '!='
				this.consume(27); // '!='
				break;
			case 53: // '<'
				this.consume(53); // '<'
				break;
			case 58: // '<='
				this.consume(58); // '<='
				break;
			case 62: // '>'
				this.consume(62); // '>'
				break;
			default:
				this.consume(63); // '>='
		}
		this.eventHandler.endNonterminal("GeneralComp", this.e0);
	}

	private parse_ValueComp() {
		this.eventHandler.startNonterminal("ValueComp", this.e0);
		switch (this.token()) {
			case 115: // 'eq'
				this.consume(115); // 'eq'
				break;
			case 150: // 'ne'
				this.consume(150); // 'ne'
				break;
			case 143: // 'lt'
				this.consume(143); // 'lt'
				break;
			case 140: // 'le'
				this.consume(140); // 'le'
				break;
			case 128: // 'gt'
				this.consume(128); // 'gt'
				break;
			default:
				this.consume(124); // 'ge'
		}
		this.eventHandler.endNonterminal("ValueComp", this.e0);
	}

	private parse_NodeComp() {
		this.eventHandler.startNonterminal("NodeComp", this.e0);
		switch (this.token()) {
			case 137: // 'is'
				this.consume(137); // 'is'
				break;
			case 57: // '<<'
				this.consume(57); // '<<'
				break;
			default:
				this.consume(64); // '>>'
		}
		this.eventHandler.endNonterminal("NodeComp", this.e0);
	}

	private parse_ValidateExpr() {
		this.eventHandler.startNonterminal("ValidateExpr", this.e0);
		this.consume(194); // 'validate'
		this.lookahead1W(119); // S^WS | '(:' | 'lax' | 'strict' | 'type' | '{'
		if (this.token() != 202) {
			// '{'
			switch (this.token()) {
				case 190: // 'type'
					this.consume(190); // 'type'
					this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
					// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
					// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
					// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
					// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
					// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
					// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
					// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
					// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
					// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
					// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
					// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
					// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
					// 'where' | 'xquery'
					this.whitespace();
					this.parse_TypeName();
					break;
				default:
					this.whitespace();
					this.parse_ValidationMode();
			}
		}
		this.lookahead1W(60); // S^WS | '(:' | '{'
		this.consume(202); // '{'
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_Expr();
		this.consume(206); // '}'
		this.eventHandler.endNonterminal("ValidateExpr", this.e0);
	}

	private parse_ValidationMode() {
		this.eventHandler.startNonterminal("ValidationMode", this.e0);
		switch (this.token()) {
			case 139: // 'lax'
				this.consume(139); // 'lax'
				break;
			default:
				this.consume(181); // 'strict'
		}
		this.eventHandler.endNonterminal("ValidationMode", this.e0);
	}

	private parse_ExtensionExpr() {
		this.eventHandler.startNonterminal("ExtensionExpr", this.e0);
		for (;;) {
			this.whitespace();
			this.parse_Pragma();
			this.lookahead1W(70); // S^WS | '(#' | '(:' | '{'
			if (this.token() != 35) {
				// '(#'
				break;
			}
		}
		this.consume(202); // '{'
		this.lookahead1W(194); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery' | '}'
		if (this.token() != 206) {
			// '}'
			this.whitespace();
			this.parse_Expr();
		}
		this.consume(206); // '}'
		this.eventHandler.endNonterminal("ExtensionExpr", this.e0);
	}

	private parse_Pragma() {
		this.eventHandler.startNonterminal("Pragma", this.e0);
		this.consume(35); // '(#'
		this.lookahead1(173); // URIQualifiedName | QName^Token | S | 'ancestor' | 'ancestor-or-self' | 'and' |
		// 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' | 'child' |
		// 'collation' | 'comment' | 'count' | 'declare' | 'default' | 'descendant' |
		// 'descendant-or-self' | 'descending' | 'div' | 'document' | 'document-node' |
		// 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' |
		// 'except' | 'following' | 'following-sibling' | 'for' | 'function' | 'ge' |
		// 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' | 'intersect' | 'is' |
		// 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' | 'namespace' |
		// 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' | 'ordered' |
		// 'parent' | 'preceding' | 'preceding-sibling' | 'processing-instruction' |
		// 'return' | 'satisfies' | 'schema-attribute' | 'schema-element' | 'self' |
		// 'some' | 'stable' | 'start' | 'switch' | 'text' | 'to' | 'treat' | 'try' |
		// 'typeswitch' | 'union' | 'unordered' | 'validate' | 'where' | 'xquery'
		if (this.token() == 17) {
			// S
			this.consume(17); // S
		}
		this.parse_EQName();
		this.lookahead1(12); // S | '#)'
		if (this.token() == 17) {
			// S
			this.consume(17); // S
			this.lookahead1(2); // PragmaContents
			this.consume(20); // PragmaContents
		}
		this.lookahead1(6); // '#)'
		this.consume(30); // '#)'
		this.eventHandler.endNonterminal("Pragma", this.e0);
	}

	private parse_SimpleMapExpr() {
		this.eventHandler.startNonterminal("SimpleMapExpr", this.e0);
		this.parse_PathExpr();
		for (;;) {
			if (this.token() != 26) {
				// '!'
				break;
			}
			this.consume(26); // '!'
			this.lookahead1W(188); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
			// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(:' | '.' |
			// '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' | '[' | '``[' | 'ancestor' |
			// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
			// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
			// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
			// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
			// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
			// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
			// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
			// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
			// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
			// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
			// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
			// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
			// 'where' | 'xquery'
			this.whitespace();
			this.parse_PathExpr();
		}
		this.eventHandler.endNonterminal("SimpleMapExpr", this.e0);
	}

	private parse_PathExpr() {
		this.eventHandler.startNonterminal("PathExpr", this.e0);
		switch (this.token()) {
			case 45: // '/'
				this.consume(45); // '/'
				this.lookahead1W(198); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
				// URIQualifiedName | QName^Token | S^WS | Wildcard | EOF | '!' | '!=' | '$' | '%' |
				// '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '.' | '..' | ':' | ';' | '<' |
				// '<!--' | '<<' | '<=' | '<?' | '=' | '=>' | '>' | '>=' | '>>' | '?' | '@' | '[' |
				// ']' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
				// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
				// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
				// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
				// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
				// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
				// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
				// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
				// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
				// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
				// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
				// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
				// 'unordered' | 'validate' | 'where' | 'xquery' | '|' | '||' | '}' | '}`'
				switch (this.token()) {
					case 25: // EOF
					case 26: // '!'
					case 27: // '!='
					case 37: // ')'
					case 38: // '*'
					case 39: // '+'
					case 40: // ','
					case 41: // '-'
					case 48: // ':'
					case 52: // ';'
					case 57: // '<<'
					case 58: // '<='
					case 60: // '='
					case 61: // '=>'
					case 62: // '>'
					case 63: // '>='
					case 64: // '>>'
					case 70: // ']'
					case 204: // '|'
					case 205: // '||'
					case 206: // '}'
					case 207: // '}`'
						break;
					default:
						this.whitespace();
						this.parse_RelativePathExpr();
				}
				break;
			case 46: // '//'
				this.consume(46); // '//'
				this.lookahead1W(187); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
				// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(:' | '.' |
				// '..' | '<' | '<!--' | '<?' | '?' | '@' | '[' | '``[' | 'ancestor' |
				// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
				// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
				// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
				// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
				// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
				// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
				// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
				// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
				// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
				// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
				// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
				// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
				// 'where' | 'xquery'
				this.whitespace();
				this.parse_RelativePathExpr();
				break;
			default:
				this.parse_RelativePathExpr();
		}
		this.eventHandler.endNonterminal("PathExpr", this.e0);
	}

	private parse_RelativePathExpr() {
		this.eventHandler.startNonterminal("RelativePathExpr", this.e0);
		this.parse_StepExpr();
		for (;;) {
			if (
				this.token() != 45 && // '/'
				this.token() != 46
			) {
				// '//'
				break;
			}
			switch (this.token()) {
				case 45: // '/'
					this.consume(45); // '/'
					break;
				default:
					this.consume(46); // '//'
			}
			this.lookahead1W(187); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
			// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(:' | '.' |
			// '..' | '<' | '<!--' | '<?' | '?' | '@' | '[' | '``[' | 'ancestor' |
			// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
			// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
			// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
			// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
			// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
			// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
			// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
			// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
			// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
			// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
			// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
			// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
			// 'where' | 'xquery'
			this.whitespace();
			this.parse_StepExpr();
		}
		this.eventHandler.endNonterminal("RelativePathExpr", this.e0);
	}

	private parse_StepExpr() {
		this.eventHandler.startNonterminal("StepExpr", this.e0);
		switch (this.token()) {
			case 83: // 'attribute'
				this.lookahead2W(197); // URIQualifiedName | QName^Token | S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' |
				// ')' | '*' | '+' | ',' | '-' | '/' | '//' | ':' | '::' | ';' | '<' | '<<' | '<=' |
				// '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' | 'ancestor' | 'ancestor-or-self' |
				// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
				// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
				// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
				// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
				// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
				// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
				// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
				// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
				// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
				// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
				// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
				// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
				// 'where' | 'xquery' | '{' | '|' | '||' | '}' | '}`'
				switch (this.tokenSequence()) {
					case 23635: // 'attribute' 'collation'
						this.lookahead3W(63); // StringLiteral | S^WS | '(:' | '{'
						break;
					case 25939: // 'attribute' 'default'
						this.lookahead3W(103); // S^WS | '$' | '(:' | 'return' | '{'
						break;
					case 28499: // 'attribute' 'empty'
						this.lookahead3W(112); // S^WS | '(:' | 'greatest' | 'least' | '{'
						break;
					case 31315: // 'attribute' 'for'
						this.lookahead3W(115); // S^WS | '$' | '(:' | 'sliding' | 'tumbling' | '{'
						break;
					case 34643: // 'attribute' 'instance'
						this.lookahead3W(93); // S^WS | '(:' | 'of' | '{'
						break;
					case 40019: // 'attribute' 'only'
						this.lookahead3W(86); // S^WS | '(:' | 'end' | '{'
						break;
					case 45907: // 'attribute' 'stable'
						this.lookahead3W(94); // S^WS | '(:' | 'order' | '{'
						break;
					case 20819: // 'attribute' 'ascending'
					case 26707: // 'attribute' 'descending'
						this.lookahead3W(134); // S^WS | '(:' | ',' | 'collation' | 'count' | 'empty' | 'for' | 'group' | 'let' |
						// 'order' | 'return' | 'stable' | 'where' | '{'
						break;
					case 24915: // 'attribute' 'count'
					case 36435: // 'attribute' 'let'
						this.lookahead3W(68); // S^WS | '$' | '(:' | '{'
						break;
					case 29267: // 'attribute' 'end'
					case 46163: // 'attribute' 'start'
						this.lookahead3W(125); // S^WS | '$' | '(:' | 'at' | 'next' | 'previous' | 'when' | '{'
						break;
					case 32339: // 'attribute' 'group'
					case 40787: // 'attribute' 'order'
						this.lookahead3W(82); // S^WS | '(:' | 'by' | '{'
						break;
					case 22611: // 'attribute' 'cast'
					case 22867: // 'attribute' 'castable'
					case 47955: // 'attribute' 'treat'
						this.lookahead3W(80); // S^WS | '(:' | 'as' | '{'
						break;
					case 20051: // 'attribute' 'and'
					case 22355: // 'attribute' 'case'
					case 27219: // 'attribute' 'div'
					case 28243: // 'attribute' 'else'
					case 29523: // 'attribute' 'eq'
					case 30035: // 'attribute' 'except'
					case 31827: // 'attribute' 'ge'
					case 32851: // 'attribute' 'gt'
					case 33107: // 'attribute' 'idiv'
					case 34899: // 'attribute' 'intersect'
					case 35155: // 'attribute' 'is'
					case 35923: // 'attribute' 'le'
					case 36691: // 'attribute' 'lt'
					case 37459: // 'attribute' 'mod'
					case 38483: // 'attribute' 'ne'
					case 40531: // 'attribute' 'or'
					case 43859: // 'attribute' 'return'
					case 44115: // 'attribute' 'satisfies'
					case 47699: // 'attribute' 'to'
					case 49235: // 'attribute' 'union'
					case 50771: // 'attribute' 'where'
						this.lookahead3W(193); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
						// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
						// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
						// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
						// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
						// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
						// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
						// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
						// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
						// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
						// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
						// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
						// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
						// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
						// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
						// 'unordered' | 'validate' | 'where' | 'xquery' | '{'
						break;
				}
				break;
			case 109: // 'element'
				this.lookahead2W(196); // URIQualifiedName | QName^Token | S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' |
				// ')' | '*' | '+' | ',' | '-' | '/' | '//' | ':' | ';' | '<' | '<<' | '<=' | '=' |
				// '=>' | '>' | '>=' | '>>' | '[' | ']' | 'ancestor' | 'ancestor-or-self' | 'and' |
				// 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' | 'child' |
				// 'collation' | 'comment' | 'count' | 'declare' | 'default' | 'descendant' |
				// 'descendant-or-self' | 'descending' | 'div' | 'document' | 'document-node' |
				// 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' |
				// 'except' | 'following' | 'following-sibling' | 'for' | 'function' | 'ge' |
				// 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' | 'intersect' | 'is' |
				// 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' | 'namespace' |
				// 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' | 'ordered' |
				// 'parent' | 'preceding' | 'preceding-sibling' | 'processing-instruction' |
				// 'return' | 'satisfies' | 'schema-attribute' | 'schema-element' | 'self' |
				// 'some' | 'stable' | 'start' | 'switch' | 'text' | 'to' | 'treat' | 'try' |
				// 'typeswitch' | 'union' | 'unordered' | 'validate' | 'where' | 'xquery' | '{' |
				// '|' | '||' | '}' | '}`'
				switch (this.tokenSequence()) {
					case 23661: // 'element' 'collation'
						this.lookahead3W(63); // StringLiteral | S^WS | '(:' | '{'
						break;
					case 25965: // 'element' 'default'
						this.lookahead3W(103); // S^WS | '$' | '(:' | 'return' | '{'
						break;
					case 28525: // 'element' 'empty'
						this.lookahead3W(112); // S^WS | '(:' | 'greatest' | 'least' | '{'
						break;
					case 31341: // 'element' 'for'
						this.lookahead3W(115); // S^WS | '$' | '(:' | 'sliding' | 'tumbling' | '{'
						break;
					case 34669: // 'element' 'instance'
						this.lookahead3W(93); // S^WS | '(:' | 'of' | '{'
						break;
					case 40045: // 'element' 'only'
						this.lookahead3W(86); // S^WS | '(:' | 'end' | '{'
						break;
					case 45933: // 'element' 'stable'
						this.lookahead3W(94); // S^WS | '(:' | 'order' | '{'
						break;
					case 20845: // 'element' 'ascending'
					case 26733: // 'element' 'descending'
						this.lookahead3W(134); // S^WS | '(:' | ',' | 'collation' | 'count' | 'empty' | 'for' | 'group' | 'let' |
						// 'order' | 'return' | 'stable' | 'where' | '{'
						break;
					case 24941: // 'element' 'count'
					case 36461: // 'element' 'let'
						this.lookahead3W(68); // S^WS | '$' | '(:' | '{'
						break;
					case 29293: // 'element' 'end'
					case 46189: // 'element' 'start'
						this.lookahead3W(125); // S^WS | '$' | '(:' | 'at' | 'next' | 'previous' | 'when' | '{'
						break;
					case 32365: // 'element' 'group'
					case 40813: // 'element' 'order'
						this.lookahead3W(82); // S^WS | '(:' | 'by' | '{'
						break;
					case 22637: // 'element' 'cast'
					case 22893: // 'element' 'castable'
					case 47981: // 'element' 'treat'
						this.lookahead3W(80); // S^WS | '(:' | 'as' | '{'
						break;
					case 20077: // 'element' 'and'
					case 22381: // 'element' 'case'
					case 27245: // 'element' 'div'
					case 28269: // 'element' 'else'
					case 29549: // 'element' 'eq'
					case 30061: // 'element' 'except'
					case 31853: // 'element' 'ge'
					case 32877: // 'element' 'gt'
					case 33133: // 'element' 'idiv'
					case 34925: // 'element' 'intersect'
					case 35181: // 'element' 'is'
					case 35949: // 'element' 'le'
					case 36717: // 'element' 'lt'
					case 37485: // 'element' 'mod'
					case 38509: // 'element' 'ne'
					case 40557: // 'element' 'or'
					case 43885: // 'element' 'return'
					case 44141: // 'element' 'satisfies'
					case 47725: // 'element' 'to'
					case 49261: // 'element' 'union'
					case 50797: // 'element' 'where'
						this.lookahead3W(193); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
						// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
						// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
						// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
						// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
						// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
						// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
						// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
						// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
						// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
						// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
						// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
						// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
						// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
						// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
						// 'unordered' | 'validate' | 'where' | 'xquery' | '{'
						break;
				}
				break;
			case 79: // 'array'
			case 144: // 'map'
				this.lookahead2W(162); // S^WS | EOF | '!' | '!=' | '#' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' |
				// ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' |
				// 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' |
				// 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' |
				// 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' |
				// 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
				// 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '{' | '|' | '||' |
				// '}' | '}`'
				break;
			case 148: // 'namespace'
			case 170: // 'processing-instruction'
				this.lookahead2W(168); // NCName^Token | S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | ')' | '*' | '+' |
				// ',' | '-' | '/' | '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' |
				// '>=' | '>>' | '[' | ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' |
				// 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
				// 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
				// 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
				// 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
				// 'union' | 'where' | '{' | '|' | '||' | '}' | '}`'
				switch (this.tokenSequence()) {
					case 23700: // 'namespace' 'collation'
					case 23722: // 'processing-instruction' 'collation'
						this.lookahead3W(63); // StringLiteral | S^WS | '(:' | '{'
						break;
					case 26004: // 'namespace' 'default'
					case 26026: // 'processing-instruction' 'default'
						this.lookahead3W(103); // S^WS | '$' | '(:' | 'return' | '{'
						break;
					case 28564: // 'namespace' 'empty'
					case 28586: // 'processing-instruction' 'empty'
						this.lookahead3W(112); // S^WS | '(:' | 'greatest' | 'least' | '{'
						break;
					case 31380: // 'namespace' 'for'
					case 31402: // 'processing-instruction' 'for'
						this.lookahead3W(115); // S^WS | '$' | '(:' | 'sliding' | 'tumbling' | '{'
						break;
					case 34708: // 'namespace' 'instance'
					case 34730: // 'processing-instruction' 'instance'
						this.lookahead3W(93); // S^WS | '(:' | 'of' | '{'
						break;
					case 40084: // 'namespace' 'only'
					case 40106: // 'processing-instruction' 'only'
						this.lookahead3W(86); // S^WS | '(:' | 'end' | '{'
						break;
					case 45972: // 'namespace' 'stable'
					case 45994: // 'processing-instruction' 'stable'
						this.lookahead3W(94); // S^WS | '(:' | 'order' | '{'
						break;
					case 20884: // 'namespace' 'ascending'
					case 26772: // 'namespace' 'descending'
					case 20906: // 'processing-instruction' 'ascending'
					case 26794: // 'processing-instruction' 'descending'
						this.lookahead3W(134); // S^WS | '(:' | ',' | 'collation' | 'count' | 'empty' | 'for' | 'group' | 'let' |
						// 'order' | 'return' | 'stable' | 'where' | '{'
						break;
					case 24980: // 'namespace' 'count'
					case 36500: // 'namespace' 'let'
					case 25002: // 'processing-instruction' 'count'
					case 36522: // 'processing-instruction' 'let'
						this.lookahead3W(68); // S^WS | '$' | '(:' | '{'
						break;
					case 29332: // 'namespace' 'end'
					case 46228: // 'namespace' 'start'
					case 29354: // 'processing-instruction' 'end'
					case 46250: // 'processing-instruction' 'start'
						this.lookahead3W(125); // S^WS | '$' | '(:' | 'at' | 'next' | 'previous' | 'when' | '{'
						break;
					case 32404: // 'namespace' 'group'
					case 40852: // 'namespace' 'order'
					case 32426: // 'processing-instruction' 'group'
					case 40874: // 'processing-instruction' 'order'
						this.lookahead3W(82); // S^WS | '(:' | 'by' | '{'
						break;
					case 22676: // 'namespace' 'cast'
					case 22932: // 'namespace' 'castable'
					case 48020: // 'namespace' 'treat'
					case 22698: // 'processing-instruction' 'cast'
					case 22954: // 'processing-instruction' 'castable'
					case 48042: // 'processing-instruction' 'treat'
						this.lookahead3W(80); // S^WS | '(:' | 'as' | '{'
						break;
					case 20116: // 'namespace' 'and'
					case 22420: // 'namespace' 'case'
					case 27284: // 'namespace' 'div'
					case 28308: // 'namespace' 'else'
					case 29588: // 'namespace' 'eq'
					case 30100: // 'namespace' 'except'
					case 31892: // 'namespace' 'ge'
					case 32916: // 'namespace' 'gt'
					case 33172: // 'namespace' 'idiv'
					case 34964: // 'namespace' 'intersect'
					case 35220: // 'namespace' 'is'
					case 35988: // 'namespace' 'le'
					case 36756: // 'namespace' 'lt'
					case 37524: // 'namespace' 'mod'
					case 38548: // 'namespace' 'ne'
					case 40596: // 'namespace' 'or'
					case 43924: // 'namespace' 'return'
					case 44180: // 'namespace' 'satisfies'
					case 47764: // 'namespace' 'to'
					case 49300: // 'namespace' 'union'
					case 50836: // 'namespace' 'where'
					case 20138: // 'processing-instruction' 'and'
					case 22442: // 'processing-instruction' 'case'
					case 27306: // 'processing-instruction' 'div'
					case 28330: // 'processing-instruction' 'else'
					case 29610: // 'processing-instruction' 'eq'
					case 30122: // 'processing-instruction' 'except'
					case 31914: // 'processing-instruction' 'ge'
					case 32938: // 'processing-instruction' 'gt'
					case 33194: // 'processing-instruction' 'idiv'
					case 34986: // 'processing-instruction' 'intersect'
					case 35242: // 'processing-instruction' 'is'
					case 36010: // 'processing-instruction' 'le'
					case 36778: // 'processing-instruction' 'lt'
					case 37546: // 'processing-instruction' 'mod'
					case 38570: // 'processing-instruction' 'ne'
					case 40618: // 'processing-instruction' 'or'
					case 43946: // 'processing-instruction' 'return'
					case 44202: // 'processing-instruction' 'satisfies'
					case 47786: // 'processing-instruction' 'to'
					case 49322: // 'processing-instruction' 'union'
					case 50858: // 'processing-instruction' 'where'
						this.lookahead3W(193); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
						// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
						// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
						// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
						// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
						// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
						// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
						// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
						// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
						// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
						// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
						// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
						// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
						// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
						// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
						// 'unordered' | 'validate' | 'where' | 'xquery' | '{'
						break;
				}
				break;
			case 93: // 'comment'
			case 107: // 'document'
			case 160: // 'ordered'
			case 184: // 'text'
			case 193: // 'unordered'
				this.lookahead2W(167); // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' |
				// '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' |
				// ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
				// 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
				// 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
				// 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
				// 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '{' |
				// '|' | '||' | '}' | '}`'
				break;
			case 112: // 'empty-sequence'
			case 130: // 'if'
			case 138: // 'item'
			case 183: // 'switch'
			case 191: // 'typeswitch'
				this.lookahead2W(158); // S^WS | EOF | '!' | '!=' | '#' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' |
				// ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' |
				// 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' |
				// 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' |
				// 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' |
				// 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
				// 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' | '||' | '}' | '}`'
				break;
			case 76: // 'ancestor'
			case 77: // 'ancestor-or-self'
			case 91: // 'child'
			case 102: // 'descendant'
			case 103: // 'descendant-or-self'
			case 120: // 'following'
			case 121: // 'following-sibling'
			case 162: // 'parent'
			case 166: // 'preceding'
			case 167: // 'preceding-sibling'
			case 176: // 'self'
				this.lookahead2W(166); // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' |
				// '//' | ':' | '::' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' |
				// '[' | ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
				// 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
				// 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
				// 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
				// 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' |
				// '||' | '}' | '}`'
				break;
			case 5: // URIQualifiedName
			case 15: // QName^Token
			case 78: // 'and'
			case 81: // 'ascending'
			case 87: // 'case'
			case 88: // 'cast'
			case 89: // 'castable'
			case 92: // 'collation'
			case 97: // 'count'
			case 100: // 'declare'
			case 101: // 'default'
			case 104: // 'descending'
			case 106: // 'div'
			case 108: // 'document-node'
			case 110: // 'else'
			case 111: // 'empty'
			case 114: // 'end'
			case 115: // 'eq'
			case 116: // 'every'
			case 117: // 'except'
			case 122: // 'for'
			case 123: // 'function'
			case 124: // 'ge'
			case 126: // 'group'
			case 128: // 'gt'
			case 129: // 'idiv'
			case 131: // 'import'
			case 135: // 'instance'
			case 136: // 'intersect'
			case 137: // 'is'
			case 140: // 'le'
			case 142: // 'let'
			case 143: // 'lt'
			case 146: // 'mod'
			case 147: // 'module'
			case 149: // 'namespace-node'
			case 150: // 'ne'
			case 154: // 'node'
			case 156: // 'only'
			case 158: // 'or'
			case 159: // 'order'
			case 171: // 'return'
			case 172: // 'satisfies'
			case 174: // 'schema-attribute'
			case 175: // 'schema-element'
			case 178: // 'some'
			case 179: // 'stable'
			case 180: // 'start'
			case 186: // 'to'
			case 187: // 'treat'
			case 188: // 'try'
			case 192: // 'union'
			case 194: // 'validate'
			case 198: // 'where'
			case 200: // 'xquery'
				this.lookahead2W(161); // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' |
				// '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' |
				// ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
				// 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
				// 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
				// 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
				// 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' |
				// '||' | '}' | '}`'
				break;
			default:
				this.lk = this.l1;
		}
		switch (this.tokenSequence()) {
			case 1: // IntegerLiteral
			case 2: // DecimalLiteral
			case 3: // DoubleLiteral
			case 4: // StringLiteral
			case 31: // '$'
			case 32: // '%'
			case 34: // '('
			case 43: // '.'
			case 53: // '<'
			case 54: // '<!--'
			case 59: // '<?'
			case 65: // '?'
			case 69: // '['
			case 73: // '``['
			case 1363: // 'attribute' URIQualifiedName
			case 1389: // 'element' URIQualifiedName
			case 3732: // 'namespace' NCName^Token
			case 3754: // 'processing-instruction' NCName^Token
			case 3923: // 'attribute' QName^Token
			case 3949: // 'element' QName^Token
			case 7429: // URIQualifiedName '#'
			case 7439: // QName^Token '#'
			case 7500: // 'ancestor' '#'
			case 7501: // 'ancestor-or-self' '#'
			case 7502: // 'and' '#'
			case 7503: // 'array' '#'
			case 7505: // 'ascending' '#'
			case 7507: // 'attribute' '#'
			case 7511: // 'case' '#'
			case 7512: // 'cast' '#'
			case 7513: // 'castable' '#'
			case 7515: // 'child' '#'
			case 7516: // 'collation' '#'
			case 7517: // 'comment' '#'
			case 7521: // 'count' '#'
			case 7524: // 'declare' '#'
			case 7525: // 'default' '#'
			case 7526: // 'descendant' '#'
			case 7527: // 'descendant-or-self' '#'
			case 7528: // 'descending' '#'
			case 7530: // 'div' '#'
			case 7531: // 'document' '#'
			case 7532: // 'document-node' '#'
			case 7533: // 'element' '#'
			case 7534: // 'else' '#'
			case 7535: // 'empty' '#'
			case 7536: // 'empty-sequence' '#'
			case 7538: // 'end' '#'
			case 7539: // 'eq' '#'
			case 7540: // 'every' '#'
			case 7541: // 'except' '#'
			case 7544: // 'following' '#'
			case 7545: // 'following-sibling' '#'
			case 7546: // 'for' '#'
			case 7547: // 'function' '#'
			case 7548: // 'ge' '#'
			case 7550: // 'group' '#'
			case 7552: // 'gt' '#'
			case 7553: // 'idiv' '#'
			case 7554: // 'if' '#'
			case 7555: // 'import' '#'
			case 7559: // 'instance' '#'
			case 7560: // 'intersect' '#'
			case 7561: // 'is' '#'
			case 7562: // 'item' '#'
			case 7564: // 'le' '#'
			case 7566: // 'let' '#'
			case 7567: // 'lt' '#'
			case 7568: // 'map' '#'
			case 7570: // 'mod' '#'
			case 7571: // 'module' '#'
			case 7572: // 'namespace' '#'
			case 7573: // 'namespace-node' '#'
			case 7574: // 'ne' '#'
			case 7578: // 'node' '#'
			case 7580: // 'only' '#'
			case 7582: // 'or' '#'
			case 7583: // 'order' '#'
			case 7584: // 'ordered' '#'
			case 7586: // 'parent' '#'
			case 7590: // 'preceding' '#'
			case 7591: // 'preceding-sibling' '#'
			case 7594: // 'processing-instruction' '#'
			case 7595: // 'return' '#'
			case 7596: // 'satisfies' '#'
			case 7598: // 'schema-attribute' '#'
			case 7599: // 'schema-element' '#'
			case 7600: // 'self' '#'
			case 7602: // 'some' '#'
			case 7603: // 'stable' '#'
			case 7604: // 'start' '#'
			case 7607: // 'switch' '#'
			case 7608: // 'text' '#'
			case 7610: // 'to' '#'
			case 7611: // 'treat' '#'
			case 7612: // 'try' '#'
			case 7615: // 'typeswitch' '#'
			case 7616: // 'union' '#'
			case 7617: // 'unordered' '#'
			case 7618: // 'validate' '#'
			case 7622: // 'where' '#'
			case 7624: // 'xquery' '#'
			case 8709: // URIQualifiedName '('
			case 8719: // QName^Token '('
			case 8780: // 'ancestor' '('
			case 8781: // 'ancestor-or-self' '('
			case 8782: // 'and' '('
			case 8785: // 'ascending' '('
			case 8791: // 'case' '('
			case 8792: // 'cast' '('
			case 8793: // 'castable' '('
			case 8795: // 'child' '('
			case 8796: // 'collation' '('
			case 8801: // 'count' '('
			case 8804: // 'declare' '('
			case 8805: // 'default' '('
			case 8806: // 'descendant' '('
			case 8807: // 'descendant-or-self' '('
			case 8808: // 'descending' '('
			case 8810: // 'div' '('
			case 8811: // 'document' '('
			case 8814: // 'else' '('
			case 8815: // 'empty' '('
			case 8818: // 'end' '('
			case 8819: // 'eq' '('
			case 8820: // 'every' '('
			case 8821: // 'except' '('
			case 8824: // 'following' '('
			case 8825: // 'following-sibling' '('
			case 8826: // 'for' '('
			case 8827: // 'function' '('
			case 8828: // 'ge' '('
			case 8830: // 'group' '('
			case 8832: // 'gt' '('
			case 8833: // 'idiv' '('
			case 8835: // 'import' '('
			case 8839: // 'instance' '('
			case 8840: // 'intersect' '('
			case 8841: // 'is' '('
			case 8844: // 'le' '('
			case 8846: // 'let' '('
			case 8847: // 'lt' '('
			case 8850: // 'mod' '('
			case 8851: // 'module' '('
			case 8852: // 'namespace' '('
			case 8854: // 'ne' '('
			case 8860: // 'only' '('
			case 8862: // 'or' '('
			case 8863: // 'order' '('
			case 8864: // 'ordered' '('
			case 8866: // 'parent' '('
			case 8870: // 'preceding' '('
			case 8871: // 'preceding-sibling' '('
			case 8875: // 'return' '('
			case 8876: // 'satisfies' '('
			case 8880: // 'self' '('
			case 8882: // 'some' '('
			case 8883: // 'stable' '('
			case 8884: // 'start' '('
			case 8890: // 'to' '('
			case 8891: // 'treat' '('
			case 8892: // 'try' '('
			case 8896: // 'union' '('
			case 8897: // 'unordered' '('
			case 8898: // 'validate' '('
			case 8902: // 'where' '('
			case 8904: // 'xquery' '('
			case 19539: // 'attribute' 'ancestor'
			case 19565: // 'element' 'ancestor'
			case 19795: // 'attribute' 'ancestor-or-self'
			case 19821: // 'element' 'ancestor-or-self'
			case 20307: // 'attribute' 'array'
			case 20333: // 'element' 'array'
			case 21331: // 'attribute' 'attribute'
			case 21357: // 'element' 'attribute'
			case 23379: // 'attribute' 'child'
			case 23405: // 'element' 'child'
			case 23891: // 'attribute' 'comment'
			case 23917: // 'element' 'comment'
			case 25683: // 'attribute' 'declare'
			case 25709: // 'element' 'declare'
			case 26195: // 'attribute' 'descendant'
			case 26221: // 'element' 'descendant'
			case 26451: // 'attribute' 'descendant-or-self'
			case 26477: // 'element' 'descendant-or-self'
			case 27475: // 'attribute' 'document'
			case 27501: // 'element' 'document'
			case 27731: // 'attribute' 'document-node'
			case 27757: // 'element' 'document-node'
			case 27987: // 'attribute' 'element'
			case 28013: // 'element' 'element'
			case 28755: // 'attribute' 'empty-sequence'
			case 28781: // 'element' 'empty-sequence'
			case 29779: // 'attribute' 'every'
			case 29805: // 'element' 'every'
			case 30803: // 'attribute' 'following'
			case 30829: // 'element' 'following'
			case 31059: // 'attribute' 'following-sibling'
			case 31085: // 'element' 'following-sibling'
			case 31571: // 'attribute' 'function'
			case 31597: // 'element' 'function'
			case 33363: // 'attribute' 'if'
			case 33389: // 'element' 'if'
			case 33619: // 'attribute' 'import'
			case 33645: // 'element' 'import'
			case 35411: // 'attribute' 'item'
			case 35437: // 'element' 'item'
			case 36947: // 'attribute' 'map'
			case 36973: // 'element' 'map'
			case 37715: // 'attribute' 'module'
			case 37741: // 'element' 'module'
			case 37971: // 'attribute' 'namespace'
			case 37997: // 'element' 'namespace'
			case 38227: // 'attribute' 'namespace-node'
			case 38253: // 'element' 'namespace-node'
			case 39507: // 'attribute' 'node'
			case 39533: // 'element' 'node'
			case 41043: // 'attribute' 'ordered'
			case 41069: // 'element' 'ordered'
			case 41555: // 'attribute' 'parent'
			case 41581: // 'element' 'parent'
			case 42579: // 'attribute' 'preceding'
			case 42605: // 'element' 'preceding'
			case 42835: // 'attribute' 'preceding-sibling'
			case 42861: // 'element' 'preceding-sibling'
			case 43603: // 'attribute' 'processing-instruction'
			case 43629: // 'element' 'processing-instruction'
			case 44627: // 'attribute' 'schema-attribute'
			case 44653: // 'element' 'schema-attribute'
			case 44883: // 'attribute' 'schema-element'
			case 44909: // 'element' 'schema-element'
			case 45139: // 'attribute' 'self'
			case 45165: // 'element' 'self'
			case 45651: // 'attribute' 'some'
			case 45677: // 'element' 'some'
			case 46931: // 'attribute' 'switch'
			case 46957: // 'element' 'switch'
			case 47187: // 'attribute' 'text'
			case 47213: // 'element' 'text'
			case 48211: // 'attribute' 'try'
			case 48237: // 'element' 'try'
			case 48979: // 'attribute' 'typeswitch'
			case 49005: // 'element' 'typeswitch'
			case 49491: // 'attribute' 'unordered'
			case 49517: // 'element' 'unordered'
			case 49747: // 'attribute' 'validate'
			case 49773: // 'element' 'validate'
			case 51283: // 'attribute' 'xquery'
			case 51309: // 'element' 'xquery'
			case 51791: // 'array' '{'
			case 51795: // 'attribute' '{'
			case 51805: // 'comment' '{'
			case 51819: // 'document' '{'
			case 51821: // 'element' '{'
			case 51856: // 'map' '{'
			case 51860: // 'namespace' '{'
			case 51872: // 'ordered' '{'
			case 51882: // 'processing-instruction' '{'
			case 51896: // 'text' '{'
			case 51905: // 'unordered' '{'
			case 13258323: // 'attribute' 'and' '{'
			case 13258349: // 'element' 'and' '{'
			case 13258388: // 'namespace' 'and' '{'
			case 13258410: // 'processing-instruction' 'and' '{'
			case 13259091: // 'attribute' 'ascending' '{'
			case 13259117: // 'element' 'ascending' '{'
			case 13259156: // 'namespace' 'ascending' '{'
			case 13259178: // 'processing-instruction' 'ascending' '{'
			case 13260627: // 'attribute' 'case' '{'
			case 13260653: // 'element' 'case' '{'
			case 13260692: // 'namespace' 'case' '{'
			case 13260714: // 'processing-instruction' 'case' '{'
			case 13260883: // 'attribute' 'cast' '{'
			case 13260909: // 'element' 'cast' '{'
			case 13260948: // 'namespace' 'cast' '{'
			case 13260970: // 'processing-instruction' 'cast' '{'
			case 13261139: // 'attribute' 'castable' '{'
			case 13261165: // 'element' 'castable' '{'
			case 13261204: // 'namespace' 'castable' '{'
			case 13261226: // 'processing-instruction' 'castable' '{'
			case 13261907: // 'attribute' 'collation' '{'
			case 13261933: // 'element' 'collation' '{'
			case 13261972: // 'namespace' 'collation' '{'
			case 13261994: // 'processing-instruction' 'collation' '{'
			case 13263187: // 'attribute' 'count' '{'
			case 13263213: // 'element' 'count' '{'
			case 13263252: // 'namespace' 'count' '{'
			case 13263274: // 'processing-instruction' 'count' '{'
			case 13264211: // 'attribute' 'default' '{'
			case 13264237: // 'element' 'default' '{'
			case 13264276: // 'namespace' 'default' '{'
			case 13264298: // 'processing-instruction' 'default' '{'
			case 13264979: // 'attribute' 'descending' '{'
			case 13265005: // 'element' 'descending' '{'
			case 13265044: // 'namespace' 'descending' '{'
			case 13265066: // 'processing-instruction' 'descending' '{'
			case 13265491: // 'attribute' 'div' '{'
			case 13265517: // 'element' 'div' '{'
			case 13265556: // 'namespace' 'div' '{'
			case 13265578: // 'processing-instruction' 'div' '{'
			case 13266515: // 'attribute' 'else' '{'
			case 13266541: // 'element' 'else' '{'
			case 13266580: // 'namespace' 'else' '{'
			case 13266602: // 'processing-instruction' 'else' '{'
			case 13266771: // 'attribute' 'empty' '{'
			case 13266797: // 'element' 'empty' '{'
			case 13266836: // 'namespace' 'empty' '{'
			case 13266858: // 'processing-instruction' 'empty' '{'
			case 13267539: // 'attribute' 'end' '{'
			case 13267565: // 'element' 'end' '{'
			case 13267604: // 'namespace' 'end' '{'
			case 13267626: // 'processing-instruction' 'end' '{'
			case 13267795: // 'attribute' 'eq' '{'
			case 13267821: // 'element' 'eq' '{'
			case 13267860: // 'namespace' 'eq' '{'
			case 13267882: // 'processing-instruction' 'eq' '{'
			case 13268307: // 'attribute' 'except' '{'
			case 13268333: // 'element' 'except' '{'
			case 13268372: // 'namespace' 'except' '{'
			case 13268394: // 'processing-instruction' 'except' '{'
			case 13269587: // 'attribute' 'for' '{'
			case 13269613: // 'element' 'for' '{'
			case 13269652: // 'namespace' 'for' '{'
			case 13269674: // 'processing-instruction' 'for' '{'
			case 13270099: // 'attribute' 'ge' '{'
			case 13270125: // 'element' 'ge' '{'
			case 13270164: // 'namespace' 'ge' '{'
			case 13270186: // 'processing-instruction' 'ge' '{'
			case 13270611: // 'attribute' 'group' '{'
			case 13270637: // 'element' 'group' '{'
			case 13270676: // 'namespace' 'group' '{'
			case 13270698: // 'processing-instruction' 'group' '{'
			case 13271123: // 'attribute' 'gt' '{'
			case 13271149: // 'element' 'gt' '{'
			case 13271188: // 'namespace' 'gt' '{'
			case 13271210: // 'processing-instruction' 'gt' '{'
			case 13271379: // 'attribute' 'idiv' '{'
			case 13271405: // 'element' 'idiv' '{'
			case 13271444: // 'namespace' 'idiv' '{'
			case 13271466: // 'processing-instruction' 'idiv' '{'
			case 13272915: // 'attribute' 'instance' '{'
			case 13272941: // 'element' 'instance' '{'
			case 13272980: // 'namespace' 'instance' '{'
			case 13273002: // 'processing-instruction' 'instance' '{'
			case 13273171: // 'attribute' 'intersect' '{'
			case 13273197: // 'element' 'intersect' '{'
			case 13273236: // 'namespace' 'intersect' '{'
			case 13273258: // 'processing-instruction' 'intersect' '{'
			case 13273427: // 'attribute' 'is' '{'
			case 13273453: // 'element' 'is' '{'
			case 13273492: // 'namespace' 'is' '{'
			case 13273514: // 'processing-instruction' 'is' '{'
			case 13274195: // 'attribute' 'le' '{'
			case 13274221: // 'element' 'le' '{'
			case 13274260: // 'namespace' 'le' '{'
			case 13274282: // 'processing-instruction' 'le' '{'
			case 13274707: // 'attribute' 'let' '{'
			case 13274733: // 'element' 'let' '{'
			case 13274772: // 'namespace' 'let' '{'
			case 13274794: // 'processing-instruction' 'let' '{'
			case 13274963: // 'attribute' 'lt' '{'
			case 13274989: // 'element' 'lt' '{'
			case 13275028: // 'namespace' 'lt' '{'
			case 13275050: // 'processing-instruction' 'lt' '{'
			case 13275731: // 'attribute' 'mod' '{'
			case 13275757: // 'element' 'mod' '{'
			case 13275796: // 'namespace' 'mod' '{'
			case 13275818: // 'processing-instruction' 'mod' '{'
			case 13276755: // 'attribute' 'ne' '{'
			case 13276781: // 'element' 'ne' '{'
			case 13276820: // 'namespace' 'ne' '{'
			case 13276842: // 'processing-instruction' 'ne' '{'
			case 13278291: // 'attribute' 'only' '{'
			case 13278317: // 'element' 'only' '{'
			case 13278356: // 'namespace' 'only' '{'
			case 13278378: // 'processing-instruction' 'only' '{'
			case 13278803: // 'attribute' 'or' '{'
			case 13278829: // 'element' 'or' '{'
			case 13278868: // 'namespace' 'or' '{'
			case 13278890: // 'processing-instruction' 'or' '{'
			case 13279059: // 'attribute' 'order' '{'
			case 13279085: // 'element' 'order' '{'
			case 13279124: // 'namespace' 'order' '{'
			case 13279146: // 'processing-instruction' 'order' '{'
			case 13282131: // 'attribute' 'return' '{'
			case 13282157: // 'element' 'return' '{'
			case 13282196: // 'namespace' 'return' '{'
			case 13282218: // 'processing-instruction' 'return' '{'
			case 13282387: // 'attribute' 'satisfies' '{'
			case 13282413: // 'element' 'satisfies' '{'
			case 13282452: // 'namespace' 'satisfies' '{'
			case 13282474: // 'processing-instruction' 'satisfies' '{'
			case 13284179: // 'attribute' 'stable' '{'
			case 13284205: // 'element' 'stable' '{'
			case 13284244: // 'namespace' 'stable' '{'
			case 13284266: // 'processing-instruction' 'stable' '{'
			case 13284435: // 'attribute' 'start' '{'
			case 13284461: // 'element' 'start' '{'
			case 13284500: // 'namespace' 'start' '{'
			case 13284522: // 'processing-instruction' 'start' '{'
			case 13285971: // 'attribute' 'to' '{'
			case 13285997: // 'element' 'to' '{'
			case 13286036: // 'namespace' 'to' '{'
			case 13286058: // 'processing-instruction' 'to' '{'
			case 13286227: // 'attribute' 'treat' '{'
			case 13286253: // 'element' 'treat' '{'
			case 13286292: // 'namespace' 'treat' '{'
			case 13286314: // 'processing-instruction' 'treat' '{'
			case 13287507: // 'attribute' 'union' '{'
			case 13287533: // 'element' 'union' '{'
			case 13287572: // 'namespace' 'union' '{'
			case 13287594: // 'processing-instruction' 'union' '{'
			case 13289043: // 'attribute' 'where' '{'
			case 13289069: // 'element' 'where' '{'
			case 13289108: // 'namespace' 'where' '{'
			case 13289130: // 'processing-instruction' 'where' '{'
				this.parse_PostfixExpr();
				break;
			default:
				this.parse_AxisStep();
		}
		this.eventHandler.endNonterminal("StepExpr", this.e0);
	}

	private parse_AxisStep() {
		this.eventHandler.startNonterminal("AxisStep", this.e0);
		switch (this.token()) {
			case 76: // 'ancestor'
			case 77: // 'ancestor-or-self'
			case 162: // 'parent'
			case 166: // 'preceding'
			case 167: // 'preceding-sibling'
				this.lookahead2W(160); // S^WS | EOF | '!' | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' | ':' |
				// '::' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' |
				// 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' |
				// 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' |
				// 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' |
				// 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
				// 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' | '||' | '}' | '}`'
				break;
			default:
				this.lk = this.l1;
		}
		switch (this.tokenSequence()) {
			case 44: // '..'
			case 12876: // 'ancestor' '::'
			case 12877: // 'ancestor-or-self' '::'
			case 12962: // 'parent' '::'
			case 12966: // 'preceding' '::'
			case 12967: // 'preceding-sibling' '::'
				this.parse_ReverseStep();
				break;
			default:
				this.parse_ForwardStep();
		}
		this.lookahead1W(156); // S^WS | EOF | '!' | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' | ':' |
		// ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' | 'and' |
		// 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' | 'default' |
		// 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'for' |
		// 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'let' |
		// 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
		// 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' | '||' | '}' | '}`'
		this.whitespace();
		this.parse_PredicateList();
		this.eventHandler.endNonterminal("AxisStep", this.e0);
	}

	private parse_ForwardStep() {
		this.eventHandler.startNonterminal("ForwardStep", this.e0);
		switch (this.token()) {
			case 83: // 'attribute'
				this.lookahead2W(163); // S^WS | EOF | '!' | '!=' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' |
				// ':' | '::' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' |
				// ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
				// 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
				// 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
				// 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
				// 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' |
				// '||' | '}' | '}`'
				break;
			case 91: // 'child'
			case 102: // 'descendant'
			case 103: // 'descendant-or-self'
			case 120: // 'following'
			case 121: // 'following-sibling'
			case 176: // 'self'
				this.lookahead2W(160); // S^WS | EOF | '!' | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' | ':' |
				// '::' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' |
				// 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' |
				// 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' |
				// 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' |
				// 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
				// 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' | '||' | '}' | '}`'
				break;
			default:
				this.lk = this.l1;
		}
		switch (this.tokenSequence()) {
			case 12883: // 'attribute' '::'
			case 12891: // 'child' '::'
			case 12902: // 'descendant' '::'
			case 12903: // 'descendant-or-self' '::'
			case 12920: // 'following' '::'
			case 12921: // 'following-sibling' '::'
			case 12976: // 'self' '::'
				this.parse_ForwardAxis();
				this.lookahead1W(176); // URIQualifiedName | QName^Token | S^WS | Wildcard | '(:' | 'ancestor' |
				// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
				// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
				// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
				// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
				// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
				// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
				// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
				// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
				// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
				// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
				// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
				// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
				// 'where' | 'xquery'
				this.whitespace();
				this.parse_NodeTest();
				break;
			default:
				this.parse_AbbrevForwardStep();
		}
		this.eventHandler.endNonterminal("ForwardStep", this.e0);
	}

	private parse_ForwardAxis() {
		this.eventHandler.startNonterminal("ForwardAxis", this.e0);
		switch (this.token()) {
			case 91: // 'child'
				this.consume(91); // 'child'
				this.lookahead1W(28); // S^WS | '(:' | '::'
				this.consume(50); // '::'
				break;
			case 102: // 'descendant'
				this.consume(102); // 'descendant'
				this.lookahead1W(28); // S^WS | '(:' | '::'
				this.consume(50); // '::'
				break;
			case 83: // 'attribute'
				this.consume(83); // 'attribute'
				this.lookahead1W(28); // S^WS | '(:' | '::'
				this.consume(50); // '::'
				break;
			case 176: // 'self'
				this.consume(176); // 'self'
				this.lookahead1W(28); // S^WS | '(:' | '::'
				this.consume(50); // '::'
				break;
			case 103: // 'descendant-or-self'
				this.consume(103); // 'descendant-or-self'
				this.lookahead1W(28); // S^WS | '(:' | '::'
				this.consume(50); // '::'
				break;
			case 121: // 'following-sibling'
				this.consume(121); // 'following-sibling'
				this.lookahead1W(28); // S^WS | '(:' | '::'
				this.consume(50); // '::'
				break;
			default:
				this.consume(120); // 'following'
				this.lookahead1W(28); // S^WS | '(:' | '::'
				this.consume(50); // '::'
		}
		this.eventHandler.endNonterminal("ForwardAxis", this.e0);
	}

	private parse_AbbrevForwardStep() {
		this.eventHandler.startNonterminal("AbbrevForwardStep", this.e0);
		if (this.token() == 67) {
			// '@'
			this.consume(67); // '@'
		}
		this.lookahead1W(176); // URIQualifiedName | QName^Token | S^WS | Wildcard | '(:' | 'ancestor' |
		// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
		// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
		// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
		// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
		// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_NodeTest();
		this.eventHandler.endNonterminal("AbbrevForwardStep", this.e0);
	}

	private parse_ReverseStep() {
		this.eventHandler.startNonterminal("ReverseStep", this.e0);
		switch (this.token()) {
			case 44: // '..'
				this.parse_AbbrevReverseStep();
				break;
			default:
				this.parse_ReverseAxis();
				this.lookahead1W(176); // URIQualifiedName | QName^Token | S^WS | Wildcard | '(:' | 'ancestor' |
				// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
				// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
				// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
				// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
				// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
				// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
				// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
				// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
				// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
				// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
				// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
				// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
				// 'where' | 'xquery'
				this.whitespace();
				this.parse_NodeTest();
		}
		this.eventHandler.endNonterminal("ReverseStep", this.e0);
	}

	private parse_ReverseAxis() {
		this.eventHandler.startNonterminal("ReverseAxis", this.e0);
		switch (this.token()) {
			case 162: // 'parent'
				this.consume(162); // 'parent'
				this.lookahead1W(28); // S^WS | '(:' | '::'
				this.consume(50); // '::'
				break;
			case 76: // 'ancestor'
				this.consume(76); // 'ancestor'
				this.lookahead1W(28); // S^WS | '(:' | '::'
				this.consume(50); // '::'
				break;
			case 167: // 'preceding-sibling'
				this.consume(167); // 'preceding-sibling'
				this.lookahead1W(28); // S^WS | '(:' | '::'
				this.consume(50); // '::'
				break;
			case 166: // 'preceding'
				this.consume(166); // 'preceding'
				this.lookahead1W(28); // S^WS | '(:' | '::'
				this.consume(50); // '::'
				break;
			default:
				this.consume(77); // 'ancestor-or-self'
				this.lookahead1W(28); // S^WS | '(:' | '::'
				this.consume(50); // '::'
		}
		this.eventHandler.endNonterminal("ReverseAxis", this.e0);
	}

	private parse_AbbrevReverseStep() {
		this.eventHandler.startNonterminal("AbbrevReverseStep", this.e0);
		this.consume(44); // '..'
		this.eventHandler.endNonterminal("AbbrevReverseStep", this.e0);
	}

	private parse_NodeTest() {
		this.eventHandler.startNonterminal("NodeTest", this.e0);
		switch (this.token()) {
			case 83: // 'attribute'
			case 93: // 'comment'
			case 108: // 'document-node'
			case 109: // 'element'
			case 149: // 'namespace-node'
			case 154: // 'node'
			case 170: // 'processing-instruction'
			case 174: // 'schema-attribute'
			case 175: // 'schema-element'
			case 184: // 'text'
				this.lookahead2W(159); // S^WS | EOF | '!' | '!=' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' |
				// ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' |
				// 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' |
				// 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' |
				// 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' |
				// 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
				// 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' | '||' | '}' | '}`'
				break;
			default:
				this.lk = this.l1;
		}
		switch (this.tokenSequence()) {
			case 8787: // 'attribute' '('
			case 8797: // 'comment' '('
			case 8812: // 'document-node' '('
			case 8813: // 'element' '('
			case 8853: // 'namespace-node' '('
			case 8858: // 'node' '('
			case 8874: // 'processing-instruction' '('
			case 8878: // 'schema-attribute' '('
			case 8879: // 'schema-element' '('
			case 8888: // 'text' '('
				this.parse_KindTest();
				break;
			default:
				this.parse_NameTest();
		}
		this.eventHandler.endNonterminal("NodeTest", this.e0);
	}

	private parse_NameTest() {
		this.eventHandler.startNonterminal("NameTest", this.e0);
		switch (this.token()) {
			case 21: // Wildcard
				this.consume(21); // Wildcard
				break;
			default:
				this.parse_EQName();
		}
		this.eventHandler.endNonterminal("NameTest", this.e0);
	}

	private parse_PostfixExpr() {
		this.eventHandler.startNonterminal("PostfixExpr", this.e0);
		this.parse_PrimaryExpr();
		for (;;) {
			this.lookahead1W(164); // S^WS | EOF | '!' | '!=' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' |
			// ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '?' | '[' |
			// ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
			// 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
			// 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
			// 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
			// 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' |
			// '||' | '}' | '}`'
			if (
				this.token() != 34 && // '('
				this.token() != 65 && // '?'
				this.token() != 69
			) {
				// '['
				break;
			}
			switch (this.token()) {
				case 69: // '['
					this.whitespace();
					this.parse_Predicate();
					break;
				case 34: // '('
					this.whitespace();
					this.parse_ArgumentList();
					break;
				default:
					this.whitespace();
					this.parse_Lookup();
			}
		}
		this.eventHandler.endNonterminal("PostfixExpr", this.e0);
	}

	private parse_ArgumentList() {
		this.eventHandler.startNonterminal("ArgumentList", this.e0);
		this.consume(34); // '('
		this.lookahead1W(191); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | ')' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' |
		// '@' | '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' |
		// 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' | 'child' |
		// 'collation' | 'comment' | 'count' | 'declare' | 'default' | 'descendant' |
		// 'descendant-or-self' | 'descending' | 'div' | 'document' | 'document-node' |
		// 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' |
		// 'except' | 'following' | 'following-sibling' | 'for' | 'function' | 'ge' |
		// 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' | 'intersect' | 'is' |
		// 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' | 'namespace' |
		// 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' | 'ordered' |
		// 'parent' | 'preceding' | 'preceding-sibling' | 'processing-instruction' |
		// 'return' | 'satisfies' | 'schema-attribute' | 'schema-element' | 'self' |
		// 'some' | 'stable' | 'start' | 'switch' | 'text' | 'to' | 'treat' | 'try' |
		// 'typeswitch' | 'union' | 'unordered' | 'validate' | 'where' | 'xquery'
		if (this.token() != 37) {
			// ')'
			this.whitespace();
			this.parse_Argument();
			for (;;) {
				this.lookahead1W(71); // S^WS | '(:' | ')' | ','
				if (this.token() != 40) {
					// ','
					break;
				}
				this.consume(40); // ','
				this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
				// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
				// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
				// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
				// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
				// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
				// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
				// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
				// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
				// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
				// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
				// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
				// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
				// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
				// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
				// 'unordered' | 'validate' | 'where' | 'xquery'
				this.whitespace();
				this.parse_Argument();
			}
		}
		this.consume(37); // ')'
		this.eventHandler.endNonterminal("ArgumentList", this.e0);
	}

	private parse_PredicateList() {
		this.eventHandler.startNonterminal("PredicateList", this.e0);
		for (;;) {
			this.lookahead1W(156); // S^WS | EOF | '!' | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' | ':' |
			// ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' | 'and' |
			// 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' | 'default' |
			// 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'for' |
			// 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'let' |
			// 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
			// 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' | '||' | '}' | '}`'
			if (this.token() != 69) {
				// '['
				break;
			}
			this.whitespace();
			this.parse_Predicate();
		}
		this.eventHandler.endNonterminal("PredicateList", this.e0);
	}

	private parse_Predicate() {
		this.eventHandler.startNonterminal("Predicate", this.e0);
		this.consume(69); // '['
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_Expr();
		this.consume(70); // ']'
		this.eventHandler.endNonterminal("Predicate", this.e0);
	}

	private parse_Lookup() {
		this.eventHandler.startNonterminal("Lookup", this.e0);
		this.consume(65); // '?'
		this.lookahead1W(141); // IntegerLiteral | NCName^Token | S^WS | '(' | '(:' | '*' | 'and' | 'ascending' |
		// 'case' | 'cast' | 'castable' | 'collation' | 'count' | 'default' | 'descending' |
		// 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' |
		// 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' |
		// 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' |
		// 'to' | 'treat' | 'union' | 'where'
		this.whitespace();
		this.parse_KeySpecifier();
		this.eventHandler.endNonterminal("Lookup", this.e0);
	}

	private parse_KeySpecifier() {
		this.eventHandler.startNonterminal("KeySpecifier", this.e0);
		switch (this.token()) {
			case 1: // IntegerLiteral
				this.consume(1); // IntegerLiteral
				break;
			case 34: // '('
				this.parse_ParenthesizedExpr();
				break;
			case 38: // '*'
				this.consume(38); // '*'
				break;
			default:
				this.parse_NCName();
		}
		this.eventHandler.endNonterminal("KeySpecifier", this.e0);
	}

	private parse_ArrowFunctionSpecifier() {
		this.eventHandler.startNonterminal("ArrowFunctionSpecifier", this.e0);
		switch (this.token()) {
			case 31: // '$'
				this.parse_VarRef();
				break;
			case 34: // '('
				this.parse_ParenthesizedExpr();
				break;
			default:
				this.parse_EQName();
		}
		this.eventHandler.endNonterminal("ArrowFunctionSpecifier", this.e0);
	}

	private parse_PrimaryExpr() {
		this.eventHandler.startNonterminal("PrimaryExpr", this.e0);
		switch (this.token()) {
			case 148: // 'namespace'
				this.lookahead2W(142); // NCName^Token | S^WS | '#' | '(' | '(:' | 'and' | 'ascending' | 'case' | 'cast' |
				// 'castable' | 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' |
				// 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' |
				// 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' |
				// 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
				// 'union' | 'where' | '{'
				break;
			case 170: // 'processing-instruction'
				this.lookahead2W(140); // NCName^Token | S^WS | '#' | '(:' | 'and' | 'ascending' | 'case' | 'cast' |
				// 'castable' | 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' |
				// 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' |
				// 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' |
				// 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
				// 'union' | 'where' | '{'
				break;
			case 83: // 'attribute'
			case 109: // 'element'
				this.lookahead2W(179); // URIQualifiedName | QName^Token | S^WS | '#' | '(:' | 'ancestor' |
				// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
				// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
				// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
				// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
				// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
				// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
				// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
				// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
				// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
				// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
				// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
				// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
				// 'where' | 'xquery' | '{'
				break;
			case 107: // 'document'
			case 160: // 'ordered'
			case 193: // 'unordered'
				this.lookahead2W(102); // S^WS | '#' | '(' | '(:' | '{'
				break;
			case 79: // 'array'
			case 93: // 'comment'
			case 144: // 'map'
			case 184: // 'text'
				this.lookahead2W(65); // S^WS | '#' | '(:' | '{'
				break;
			case 5: // URIQualifiedName
			case 15: // QName^Token
			case 76: // 'ancestor'
			case 77: // 'ancestor-or-self'
			case 78: // 'and'
			case 81: // 'ascending'
			case 87: // 'case'
			case 88: // 'cast'
			case 89: // 'castable'
			case 91: // 'child'
			case 92: // 'collation'
			case 97: // 'count'
			case 100: // 'declare'
			case 101: // 'default'
			case 102: // 'descendant'
			case 103: // 'descendant-or-self'
			case 104: // 'descending'
			case 106: // 'div'
			case 110: // 'else'
			case 111: // 'empty'
			case 114: // 'end'
			case 115: // 'eq'
			case 116: // 'every'
			case 117: // 'except'
			case 120: // 'following'
			case 121: // 'following-sibling'
			case 122: // 'for'
			case 124: // 'ge'
			case 126: // 'group'
			case 128: // 'gt'
			case 129: // 'idiv'
			case 131: // 'import'
			case 135: // 'instance'
			case 136: // 'intersect'
			case 137: // 'is'
			case 140: // 'le'
			case 142: // 'let'
			case 143: // 'lt'
			case 146: // 'mod'
			case 147: // 'module'
			case 150: // 'ne'
			case 156: // 'only'
			case 158: // 'or'
			case 159: // 'order'
			case 162: // 'parent'
			case 166: // 'preceding'
			case 167: // 'preceding-sibling'
			case 171: // 'return'
			case 172: // 'satisfies'
			case 176: // 'self'
			case 178: // 'some'
			case 179: // 'stable'
			case 180: // 'start'
			case 186: // 'to'
			case 187: // 'treat'
			case 188: // 'try'
			case 192: // 'union'
			case 194: // 'validate'
			case 198: // 'where'
			case 200: // 'xquery'
				this.lookahead2W(64); // S^WS | '#' | '(' | '(:'
				break;
			default:
				this.lk = this.l1;
		}
		switch (this.tokenSequence()) {
			case 1: // IntegerLiteral
			case 2: // DecimalLiteral
			case 3: // DoubleLiteral
			case 4: // StringLiteral
				this.parse_Literal();
				break;
			case 31: // '$'
				this.parse_VarRef();
				break;
			case 34: // '('
				this.parse_ParenthesizedExpr();
				break;
			case 43: // '.'
				this.parse_ContextItemExpr();
				break;
			case 8709: // URIQualifiedName '('
			case 8719: // QName^Token '('
			case 8780: // 'ancestor' '('
			case 8781: // 'ancestor-or-self' '('
			case 8782: // 'and' '('
			case 8785: // 'ascending' '('
			case 8791: // 'case' '('
			case 8792: // 'cast' '('
			case 8793: // 'castable' '('
			case 8795: // 'child' '('
			case 8796: // 'collation' '('
			case 8801: // 'count' '('
			case 8804: // 'declare' '('
			case 8805: // 'default' '('
			case 8806: // 'descendant' '('
			case 8807: // 'descendant-or-self' '('
			case 8808: // 'descending' '('
			case 8810: // 'div' '('
			case 8811: // 'document' '('
			case 8814: // 'else' '('
			case 8815: // 'empty' '('
			case 8818: // 'end' '('
			case 8819: // 'eq' '('
			case 8820: // 'every' '('
			case 8821: // 'except' '('
			case 8824: // 'following' '('
			case 8825: // 'following-sibling' '('
			case 8826: // 'for' '('
			case 8828: // 'ge' '('
			case 8830: // 'group' '('
			case 8832: // 'gt' '('
			case 8833: // 'idiv' '('
			case 8835: // 'import' '('
			case 8839: // 'instance' '('
			case 8840: // 'intersect' '('
			case 8841: // 'is' '('
			case 8844: // 'le' '('
			case 8846: // 'let' '('
			case 8847: // 'lt' '('
			case 8850: // 'mod' '('
			case 8851: // 'module' '('
			case 8852: // 'namespace' '('
			case 8854: // 'ne' '('
			case 8860: // 'only' '('
			case 8862: // 'or' '('
			case 8863: // 'order' '('
			case 8864: // 'ordered' '('
			case 8866: // 'parent' '('
			case 8870: // 'preceding' '('
			case 8871: // 'preceding-sibling' '('
			case 8875: // 'return' '('
			case 8876: // 'satisfies' '('
			case 8880: // 'self' '('
			case 8882: // 'some' '('
			case 8883: // 'stable' '('
			case 8884: // 'start' '('
			case 8890: // 'to' '('
			case 8891: // 'treat' '('
			case 8892: // 'try' '('
			case 8896: // 'union' '('
			case 8897: // 'unordered' '('
			case 8898: // 'validate' '('
			case 8902: // 'where' '('
			case 8904: // 'xquery' '('
				this.parse_FunctionCall();
				break;
			case 51872: // 'ordered' '{'
				this.parse_OrderedExpr();
				break;
			case 51905: // 'unordered' '{'
				this.parse_UnorderedExpr();
				break;
			case 32: // '%'
			case 108: // 'document-node'
			case 112: // 'empty-sequence'
			case 123: // 'function'
			case 130: // 'if'
			case 138: // 'item'
			case 149: // 'namespace-node'
			case 154: // 'node'
			case 174: // 'schema-attribute'
			case 175: // 'schema-element'
			case 183: // 'switch'
			case 191: // 'typeswitch'
			case 7429: // URIQualifiedName '#'
			case 7439: // QName^Token '#'
			case 7500: // 'ancestor' '#'
			case 7501: // 'ancestor-or-self' '#'
			case 7502: // 'and' '#'
			case 7503: // 'array' '#'
			case 7505: // 'ascending' '#'
			case 7507: // 'attribute' '#'
			case 7511: // 'case' '#'
			case 7512: // 'cast' '#'
			case 7513: // 'castable' '#'
			case 7515: // 'child' '#'
			case 7516: // 'collation' '#'
			case 7517: // 'comment' '#'
			case 7521: // 'count' '#'
			case 7524: // 'declare' '#'
			case 7525: // 'default' '#'
			case 7526: // 'descendant' '#'
			case 7527: // 'descendant-or-self' '#'
			case 7528: // 'descending' '#'
			case 7530: // 'div' '#'
			case 7531: // 'document' '#'
			case 7533: // 'element' '#'
			case 7534: // 'else' '#'
			case 7535: // 'empty' '#'
			case 7538: // 'end' '#'
			case 7539: // 'eq' '#'
			case 7540: // 'every' '#'
			case 7541: // 'except' '#'
			case 7544: // 'following' '#'
			case 7545: // 'following-sibling' '#'
			case 7546: // 'for' '#'
			case 7548: // 'ge' '#'
			case 7550: // 'group' '#'
			case 7552: // 'gt' '#'
			case 7553: // 'idiv' '#'
			case 7555: // 'import' '#'
			case 7559: // 'instance' '#'
			case 7560: // 'intersect' '#'
			case 7561: // 'is' '#'
			case 7564: // 'le' '#'
			case 7566: // 'let' '#'
			case 7567: // 'lt' '#'
			case 7568: // 'map' '#'
			case 7570: // 'mod' '#'
			case 7571: // 'module' '#'
			case 7572: // 'namespace' '#'
			case 7574: // 'ne' '#'
			case 7580: // 'only' '#'
			case 7582: // 'or' '#'
			case 7583: // 'order' '#'
			case 7584: // 'ordered' '#'
			case 7586: // 'parent' '#'
			case 7590: // 'preceding' '#'
			case 7591: // 'preceding-sibling' '#'
			case 7594: // 'processing-instruction' '#'
			case 7595: // 'return' '#'
			case 7596: // 'satisfies' '#'
			case 7600: // 'self' '#'
			case 7602: // 'some' '#'
			case 7603: // 'stable' '#'
			case 7604: // 'start' '#'
			case 7608: // 'text' '#'
			case 7610: // 'to' '#'
			case 7611: // 'treat' '#'
			case 7612: // 'try' '#'
			case 7616: // 'union' '#'
			case 7617: // 'unordered' '#'
			case 7618: // 'validate' '#'
			case 7622: // 'where' '#'
			case 7624: // 'xquery' '#'
				this.parse_FunctionItemExpr();
				break;
			case 51856: // 'map' '{'
				this.parse_MapConstructor();
				break;
			case 69: // '['
			case 51791: // 'array' '{'
				this.parse_ArrayConstructor();
				break;
			case 73: // '``['
				this.parse_StringConstructor();
				break;
			case 65: // '?'
				this.parse_UnaryLookup();
				break;
			default:
				this.parse_NodeConstructor();
		}
		this.eventHandler.endNonterminal("PrimaryExpr", this.e0);
	}

	private parse_Literal() {
		this.eventHandler.startNonterminal("Literal", this.e0);
		switch (this.token()) {
			case 4: // StringLiteral
				this.consume(4); // StringLiteral
				break;
			default:
				this.parse_NumericLiteral();
		}
		this.eventHandler.endNonterminal("Literal", this.e0);
	}

	private parse_NumericLiteral() {
		this.eventHandler.startNonterminal("NumericLiteral", this.e0);
		switch (this.token()) {
			case 1: // IntegerLiteral
				this.consume(1); // IntegerLiteral
				break;
			case 2: // DecimalLiteral
				this.consume(2); // DecimalLiteral
				break;
			default:
				this.consume(3); // DoubleLiteral
		}
		this.eventHandler.endNonterminal("NumericLiteral", this.e0);
	}

	private parse_VarRef() {
		this.eventHandler.startNonterminal("VarRef", this.e0);
		this.consume(31); // '$'
		this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
		// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
		// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
		// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
		// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
		// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_VarName();
		this.eventHandler.endNonterminal("VarRef", this.e0);
	}

	private parse_VarName() {
		this.eventHandler.startNonterminal("VarName", this.e0);
		this.parse_EQName();
		this.eventHandler.endNonterminal("VarName", this.e0);
	}

	private parse_ParenthesizedExpr() {
		this.eventHandler.startNonterminal("ParenthesizedExpr", this.e0);
		this.consume(34); // '('
		this.lookahead1W(191); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | ')' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' |
		// '@' | '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' |
		// 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' | 'child' |
		// 'collation' | 'comment' | 'count' | 'declare' | 'default' | 'descendant' |
		// 'descendant-or-self' | 'descending' | 'div' | 'document' | 'document-node' |
		// 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' |
		// 'except' | 'following' | 'following-sibling' | 'for' | 'function' | 'ge' |
		// 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' | 'intersect' | 'is' |
		// 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' | 'namespace' |
		// 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' | 'ordered' |
		// 'parent' | 'preceding' | 'preceding-sibling' | 'processing-instruction' |
		// 'return' | 'satisfies' | 'schema-attribute' | 'schema-element' | 'self' |
		// 'some' | 'stable' | 'start' | 'switch' | 'text' | 'to' | 'treat' | 'try' |
		// 'typeswitch' | 'union' | 'unordered' | 'validate' | 'where' | 'xquery'
		if (this.token() != 37) {
			// ')'
			this.whitespace();
			this.parse_Expr();
		}
		this.consume(37); // ')'
		this.eventHandler.endNonterminal("ParenthesizedExpr", this.e0);
	}

	private parse_ContextItemExpr() {
		this.eventHandler.startNonterminal("ContextItemExpr", this.e0);
		this.consume(43); // '.'
		this.eventHandler.endNonterminal("ContextItemExpr", this.e0);
	}

	private parse_OrderedExpr() {
		this.eventHandler.startNonterminal("OrderedExpr", this.e0);
		this.consume(160); // 'ordered'
		this.lookahead1W(60); // S^WS | '(:' | '{'
		this.whitespace();
		this.parse_EnclosedExpr();
		this.eventHandler.endNonterminal("OrderedExpr", this.e0);
	}

	private parse_UnorderedExpr() {
		this.eventHandler.startNonterminal("UnorderedExpr", this.e0);
		this.consume(193); // 'unordered'
		this.lookahead1W(60); // S^WS | '(:' | '{'
		this.whitespace();
		this.parse_EnclosedExpr();
		this.eventHandler.endNonterminal("UnorderedExpr", this.e0);
	}

	private parse_FunctionCall() {
		this.eventHandler.startNonterminal("FunctionCall", this.e0);
		this.parse_FunctionEQName();
		this.lookahead1W(24); // S^WS | '(' | '(:'
		this.whitespace();
		this.parse_ArgumentList();
		this.eventHandler.endNonterminal("FunctionCall", this.e0);
	}

	private parse_Argument() {
		this.eventHandler.startNonterminal("Argument", this.e0);
		switch (this.token()) {
			case 65: // '?'
				this.lookahead2W(146); // IntegerLiteral | NCName^Token | S^WS | '(' | '(:' | ')' | '*' | ',' | 'and' |
				// 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' | 'default' |
				// 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'for' |
				// 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'let' |
				// 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
				// 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where'
				break;
			default:
				this.lk = this.l1;
		}
		switch (this.tokenSequence()) {
			case 9537: // '?' ')'
			case 10305: // '?' ','
				this.parse_ArgumentPlaceholder();
				break;
			default:
				this.parse_ExprSingle();
		}
		this.eventHandler.endNonterminal("Argument", this.e0);
	}

	private parse_ArgumentPlaceholder() {
		this.eventHandler.startNonterminal("ArgumentPlaceholder", this.e0);
		this.consume(65); // '?'
		this.eventHandler.endNonterminal("ArgumentPlaceholder", this.e0);
	}

	private parse_NodeConstructor() {
		this.eventHandler.startNonterminal("NodeConstructor", this.e0);
		switch (this.token()) {
			case 53: // '<'
			case 54: // '<!--'
			case 59: // '<?'
				this.parse_DirectConstructor();
				break;
			default:
				this.parse_ComputedConstructor();
		}
		this.eventHandler.endNonterminal("NodeConstructor", this.e0);
	}

	private parse_DirectConstructor() {
		this.eventHandler.startNonterminal("DirectConstructor", this.e0);
		switch (this.token()) {
			case 53: // '<'
				this.parse_DirElemConstructor();
				break;
			case 54: // '<!--'
				this.parse_DirCommentConstructor();
				break;
			default:
				this.parse_DirPIConstructor();
		}
		this.eventHandler.endNonterminal("DirectConstructor", this.e0);
	}

	private parse_DirElemConstructor() {
		this.eventHandler.startNonterminal("DirElemConstructor", this.e0);
		this.consume(53); // '<'
		this.parse_QName();
		this.parse_DirAttributeList();
		switch (this.token()) {
			case 47: // '/>'
				this.consume(47); // '/>'
				break;
			default:
				this.consume(62); // '>'
				for (;;) {
					this.lookahead1(129); // PredefinedEntityRef | ElementContentChar | CharRef | '<' | '<!--' | '<![CDATA[' |
					// '</' | '<?' | '{' | '{{' | '}}'
					if (this.token() == 56) {
						// '</'
						break;
					}
					this.parse_DirElemContent();
				}
				this.consume(56); // '</'
				this.parse_QName();
				this.lookahead1(14); // S | '>'
				if (this.token() == 17) {
					// S
					this.consume(17); // S
				}
				this.lookahead1(9); // '>'
				this.consume(62); // '>'
		}
		this.eventHandler.endNonterminal("DirElemConstructor", this.e0);
	}

	private parse_DirAttributeList() {
		this.eventHandler.startNonterminal("DirAttributeList", this.e0);
		for (;;) {
			this.lookahead1(21); // S | '/>' | '>'
			if (this.token() != 17) {
				// S
				break;
			}
			this.consume(17); // S
			this.lookahead1(175); // QName^Token | S | '/>' | '>' | 'ancestor' | 'ancestor-or-self' | 'and' |
			// 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' | 'child' |
			// 'collation' | 'comment' | 'count' | 'declare' | 'default' | 'descendant' |
			// 'descendant-or-self' | 'descending' | 'div' | 'document' | 'document-node' |
			// 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' |
			// 'except' | 'following' | 'following-sibling' | 'for' | 'function' | 'ge' |
			// 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' | 'intersect' | 'is' |
			// 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' | 'namespace' |
			// 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' | 'ordered' |
			// 'parent' | 'preceding' | 'preceding-sibling' | 'processing-instruction' |
			// 'return' | 'satisfies' | 'schema-attribute' | 'schema-element' | 'self' |
			// 'some' | 'stable' | 'start' | 'switch' | 'text' | 'to' | 'treat' | 'try' |
			// 'typeswitch' | 'union' | 'unordered' | 'validate' | 'where' | 'xquery'
			if (
				this.token() != 17 && // S
				this.token() != 47 && // '/>'
				this.token() != 62
			) {
				// '>'
				this.parse_QName();
				this.lookahead1(13); // S | '='
				if (this.token() == 17) {
					// S
					this.consume(17); // S
				}
				this.lookahead1(8); // '='
				this.consume(60); // '='
				this.lookahead1(20); // S | '"' | "'"
				if (this.token() == 17) {
					// S
					this.consume(17); // S
				}
				this.parse_DirAttributeValue();
			}
		}
		this.eventHandler.endNonterminal("DirAttributeList", this.e0);
	}

	private parse_DirAttributeValue() {
		this.eventHandler.startNonterminal("DirAttributeValue", this.e0);
		this.lookahead1(16); // '"' | "'"
		switch (this.token()) {
			case 28: // '"'
				this.consume(28); // '"'
				for (;;) {
					this.lookahead1(123); // PredefinedEntityRef | EscapeQuot | QuotAttrContentChar | CharRef | '"' | '{' |
					// '{{' | '}}'
					if (this.token() == 28) {
						// '"'
						break;
					}
					switch (this.token()) {
						case 7: // EscapeQuot
							this.consume(7); // EscapeQuot
							break;
						default:
							this.parse_QuotAttrValueContent();
					}
				}
				this.consume(28); // '"'
				break;
			default:
				this.consume(33); // "'"
				for (;;) {
					this.lookahead1(124); // PredefinedEntityRef | EscapeApos | AposAttrContentChar | CharRef | "'" | '{' |
					// '{{' | '}}'
					if (this.token() == 33) {
						// "'"
						break;
					}
					switch (this.token()) {
						case 8: // EscapeApos
							this.consume(8); // EscapeApos
							break;
						default:
							this.parse_AposAttrValueContent();
					}
				}
				this.consume(33); // "'"
		}
		this.eventHandler.endNonterminal("DirAttributeValue", this.e0);
	}

	private parse_QuotAttrValueContent() {
		this.eventHandler.startNonterminal("QuotAttrValueContent", this.e0);
		switch (this.token()) {
			case 10: // QuotAttrContentChar
				this.consume(10); // QuotAttrContentChar
				break;
			default:
				this.parse_CommonContent();
		}
		this.eventHandler.endNonterminal("QuotAttrValueContent", this.e0);
	}

	private parse_AposAttrValueContent() {
		this.eventHandler.startNonterminal("AposAttrValueContent", this.e0);
		switch (this.token()) {
			case 11: // AposAttrContentChar
				this.consume(11); // AposAttrContentChar
				break;
			default:
				this.parse_CommonContent();
		}
		this.eventHandler.endNonterminal("AposAttrValueContent", this.e0);
	}

	private parse_DirElemContent() {
		this.eventHandler.startNonterminal("DirElemContent", this.e0);
		switch (this.token()) {
			case 53: // '<'
			case 54: // '<!--'
			case 59: // '<?'
				this.parse_DirectConstructor();
				break;
			case 55: // '<![CDATA['
				this.parse_CDataSection();
				break;
			case 9: // ElementContentChar
				this.consume(9); // ElementContentChar
				break;
			default:
				this.parse_CommonContent();
		}
		this.eventHandler.endNonterminal("DirElemContent", this.e0);
	}

	private parse_CommonContent() {
		this.eventHandler.startNonterminal("CommonContent", this.e0);
		switch (this.token()) {
			case 6: // PredefinedEntityRef
				this.consume(6); // PredefinedEntityRef
				break;
			case 13: // CharRef
				this.consume(13); // CharRef
				break;
			case 203: // '{{'
				this.consume(203); // '{{'
				break;
			case 208: // '}}'
				this.consume(208); // '}}'
				break;
			default:
				this.parse_EnclosedExpr();
		}
		this.eventHandler.endNonterminal("CommonContent", this.e0);
	}

	private parse_DirCommentConstructor() {
		this.eventHandler.startNonterminal("DirCommentConstructor", this.e0);
		this.consume(54); // '<!--'
		this.lookahead1(3); // DirCommentContents
		this.consume(22); // DirCommentContents
		this.lookahead1(7); // '-->'
		this.consume(42); // '-->'
		this.eventHandler.endNonterminal("DirCommentConstructor", this.e0);
	}

	private parse_DirPIConstructor() {
		this.eventHandler.startNonterminal("DirPIConstructor", this.e0);
		this.consume(59); // '<?'
		this.lookahead1(0); // PITarget
		this.consume(12); // PITarget
		this.lookahead1(15); // S | '?>'
		if (this.token() == 17) {
			// S
			this.consume(17); // S
			this.lookahead1(4); // DirPIContents
			this.consume(23); // DirPIContents
		}
		this.lookahead1(10); // '?>'
		this.consume(66); // '?>'
		this.eventHandler.endNonterminal("DirPIConstructor", this.e0);
	}

	private parse_CDataSection() {
		this.eventHandler.startNonterminal("CDataSection", this.e0);
		this.consume(55); // '<![CDATA['
		this.lookahead1(5); // CDataSectionContents
		this.consume(24); // CDataSectionContents
		this.lookahead1(11); // ']]>'
		this.consume(71); // ']]>'
		this.eventHandler.endNonterminal("CDataSection", this.e0);
	}

	private parse_ComputedConstructor() {
		this.eventHandler.startNonterminal("ComputedConstructor", this.e0);
		switch (this.token()) {
			case 107: // 'document'
				this.parse_CompDocConstructor();
				break;
			case 109: // 'element'
				this.parse_CompElemConstructor();
				break;
			case 83: // 'attribute'
				this.parse_CompAttrConstructor();
				break;
			case 148: // 'namespace'
				this.parse_CompNamespaceConstructor();
				break;
			case 184: // 'text'
				this.parse_CompTextConstructor();
				break;
			case 93: // 'comment'
				this.parse_CompCommentConstructor();
				break;
			default:
				this.parse_CompPIConstructor();
		}
		this.eventHandler.endNonterminal("ComputedConstructor", this.e0);
	}

	private parse_CompDocConstructor() {
		this.eventHandler.startNonterminal("CompDocConstructor", this.e0);
		this.consume(107); // 'document'
		this.lookahead1W(60); // S^WS | '(:' | '{'
		this.whitespace();
		this.parse_EnclosedExpr();
		this.eventHandler.endNonterminal("CompDocConstructor", this.e0);
	}

	private parse_CompElemConstructor() {
		this.eventHandler.startNonterminal("CompElemConstructor", this.e0);
		this.consume(109); // 'element'
		this.lookahead1W(178); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
		// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
		// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
		// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
		// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
		// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery' | '{'
		switch (this.token()) {
			case 202: // '{'
				this.consume(202); // '{'
				this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
				// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
				// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
				// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
				// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
				// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
				// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
				// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
				// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
				// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
				// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
				// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
				// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
				// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
				// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
				// 'unordered' | 'validate' | 'where' | 'xquery'
				this.whitespace();
				this.parse_Expr();
				this.consume(206); // '}'
				break;
			default:
				this.whitespace();
				this.parse_EQName();
		}
		this.lookahead1W(60); // S^WS | '(:' | '{'
		this.whitespace();
		this.parse_EnclosedContentExpr();
		this.eventHandler.endNonterminal("CompElemConstructor", this.e0);
	}

	private parse_EnclosedContentExpr() {
		this.eventHandler.startNonterminal("EnclosedContentExpr", this.e0);
		this.parse_EnclosedExpr();
		this.eventHandler.endNonterminal("EnclosedContentExpr", this.e0);
	}

	private parse_CompAttrConstructor() {
		this.eventHandler.startNonterminal("CompAttrConstructor", this.e0);
		this.consume(83); // 'attribute'
		this.lookahead1W(178); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
		// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
		// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
		// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
		// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
		// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery' | '{'
		switch (this.token()) {
			case 202: // '{'
				this.consume(202); // '{'
				this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
				// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
				// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
				// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
				// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
				// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
				// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
				// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
				// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
				// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
				// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
				// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
				// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
				// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
				// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
				// 'unordered' | 'validate' | 'where' | 'xquery'
				this.whitespace();
				this.parse_Expr();
				this.consume(206); // '}'
				break;
			default:
				this.whitespace();
				this.parse_EQName();
		}
		this.lookahead1W(60); // S^WS | '(:' | '{'
		this.whitespace();
		this.parse_EnclosedExpr();
		this.eventHandler.endNonterminal("CompAttrConstructor", this.e0);
	}

	private parse_CompNamespaceConstructor() {
		this.eventHandler.startNonterminal("CompNamespaceConstructor", this.e0);
		this.consume(148); // 'namespace'
		this.lookahead1W(138); // NCName^Token | S^WS | '(:' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' |
		// 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
		// 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
		// 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
		// 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
		// 'union' | 'where' | '{'
		switch (this.token()) {
			case 202: // '{'
				this.whitespace();
				this.parse_EnclosedPrefixExpr();
				break;
			default:
				this.whitespace();
				this.parse_Prefix();
		}
		this.lookahead1W(60); // S^WS | '(:' | '{'
		this.whitespace();
		this.parse_EnclosedURIExpr();
		this.eventHandler.endNonterminal("CompNamespaceConstructor", this.e0);
	}

	private parse_Prefix() {
		this.eventHandler.startNonterminal("Prefix", this.e0);
		this.parse_NCName();
		this.eventHandler.endNonterminal("Prefix", this.e0);
	}

	private parse_EnclosedPrefixExpr() {
		this.eventHandler.startNonterminal("EnclosedPrefixExpr", this.e0);
		this.parse_EnclosedExpr();
		this.eventHandler.endNonterminal("EnclosedPrefixExpr", this.e0);
	}

	private parse_EnclosedURIExpr() {
		this.eventHandler.startNonterminal("EnclosedURIExpr", this.e0);
		this.parse_EnclosedExpr();
		this.eventHandler.endNonterminal("EnclosedURIExpr", this.e0);
	}

	private parse_CompTextConstructor() {
		this.eventHandler.startNonterminal("CompTextConstructor", this.e0);
		this.consume(184); // 'text'
		this.lookahead1W(60); // S^WS | '(:' | '{'
		this.whitespace();
		this.parse_EnclosedExpr();
		this.eventHandler.endNonterminal("CompTextConstructor", this.e0);
	}

	private parse_CompCommentConstructor() {
		this.eventHandler.startNonterminal("CompCommentConstructor", this.e0);
		this.consume(93); // 'comment'
		this.lookahead1W(60); // S^WS | '(:' | '{'
		this.whitespace();
		this.parse_EnclosedExpr();
		this.eventHandler.endNonterminal("CompCommentConstructor", this.e0);
	}

	private parse_CompPIConstructor() {
		this.eventHandler.startNonterminal("CompPIConstructor", this.e0);
		this.consume(170); // 'processing-instruction'
		this.lookahead1W(138); // NCName^Token | S^WS | '(:' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' |
		// 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
		// 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
		// 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
		// 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
		// 'union' | 'where' | '{'
		switch (this.token()) {
			case 202: // '{'
				this.consume(202); // '{'
				this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
				// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
				// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
				// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
				// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
				// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
				// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
				// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
				// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
				// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
				// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
				// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
				// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
				// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
				// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
				// 'unordered' | 'validate' | 'where' | 'xquery'
				this.whitespace();
				this.parse_Expr();
				this.consume(206); // '}'
				break;
			default:
				this.whitespace();
				this.parse_NCName();
		}
		this.lookahead1W(60); // S^WS | '(:' | '{'
		this.whitespace();
		this.parse_EnclosedExpr();
		this.eventHandler.endNonterminal("CompPIConstructor", this.e0);
	}

	private parse_FunctionItemExpr() {
		this.eventHandler.startNonterminal("FunctionItemExpr", this.e0);
		switch (this.token()) {
			case 123: // 'function'
				this.lookahead2W(64); // S^WS | '#' | '(' | '(:'
				break;
			default:
				this.lk = this.l1;
		}
		switch (this.tokenSequence()) {
			case 32: // '%'
			case 8827: // 'function' '('
				this.parse_InlineFunctionExpr();
				break;
			default:
				this.parse_NamedFunctionRef();
		}
		this.eventHandler.endNonterminal("FunctionItemExpr", this.e0);
	}

	private parse_NamedFunctionRef() {
		this.eventHandler.startNonterminal("NamedFunctionRef", this.e0);
		this.parse_EQName();
		this.lookahead1W(22); // S^WS | '#' | '(:'
		this.consume(29); // '#'
		this.lookahead1W(18); // IntegerLiteral | S^WS | '(:'
		this.consume(1); // IntegerLiteral
		this.eventHandler.endNonterminal("NamedFunctionRef", this.e0);
	}

	private parse_InlineFunctionExpr() {
		this.eventHandler.startNonterminal("InlineFunctionExpr", this.e0);
		for (;;) {
			this.lookahead1W(69); // S^WS | '%' | '(:' | 'function'
			if (this.token() != 32) {
				// '%'
				break;
			}
			this.whitespace();
			this.parse_Annotation();
		}
		this.consume(123); // 'function'
		this.lookahead1W(24); // S^WS | '(' | '(:'
		this.consume(34); // '('
		this.lookahead1W(66); // S^WS | '$' | '(:' | ')'
		if (this.token() == 31) {
			// '$'
			this.whitespace();
			this.parse_ParamList();
		}
		this.consume(37); // ')'
		this.lookahead1W(80); // S^WS | '(:' | 'as' | '{'
		if (this.token() == 80) {
			// 'as'
			this.consume(80); // 'as'
			this.lookahead1W(181); // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
			// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
			// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
			// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
			// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
			// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
			// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
			// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
			// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
			// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
			// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
			// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
			// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
			// 'where' | 'xquery'
			this.whitespace();
			this.parse_SequenceType();
		}
		this.lookahead1W(60); // S^WS | '(:' | '{'
		this.whitespace();
		this.parse_FunctionBody();
		this.eventHandler.endNonterminal("InlineFunctionExpr", this.e0);
	}

	private parse_MapConstructor() {
		this.eventHandler.startNonterminal("MapConstructor", this.e0);
		this.consume(144); // 'map'
		this.lookahead1W(60); // S^WS | '(:' | '{'
		this.consume(202); // '{'
		this.lookahead1W(194); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery' | '}'
		if (this.token() != 206) {
			// '}'
			this.whitespace();
			this.parse_MapConstructorEntry();
			for (;;) {
				if (this.token() != 40) {
					// ','
					break;
				}
				this.consume(40); // ','
				this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
				// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
				// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
				// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
				// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
				// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
				// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
				// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
				// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
				// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
				// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
				// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
				// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
				// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
				// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
				// 'unordered' | 'validate' | 'where' | 'xquery'
				this.whitespace();
				this.parse_MapConstructorEntry();
			}
		}
		this.consume(206); // '}'
		this.eventHandler.endNonterminal("MapConstructor", this.e0);
	}

	private parse_MapConstructorEntry() {
		this.eventHandler.startNonterminal("MapConstructorEntry", this.e0);
		this.parse_MapKeyExpr();
		this.consume(48); // ':'
		this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		this.whitespace();
		this.parse_MapValueExpr();
		this.eventHandler.endNonterminal("MapConstructorEntry", this.e0);
	}

	private parse_MapKeyExpr() {
		this.eventHandler.startNonterminal("MapKeyExpr", this.e0);
		this.parse_ExprSingle();
		this.eventHandler.endNonterminal("MapKeyExpr", this.e0);
	}

	private parse_MapValueExpr() {
		this.eventHandler.startNonterminal("MapValueExpr", this.e0);
		this.parse_ExprSingle();
		this.eventHandler.endNonterminal("MapValueExpr", this.e0);
	}

	private parse_ArrayConstructor() {
		this.eventHandler.startNonterminal("ArrayConstructor", this.e0);
		switch (this.token()) {
			case 69: // '['
				this.parse_SquareArrayConstructor();
				break;
			default:
				this.parse_CurlyArrayConstructor();
		}
		this.eventHandler.endNonterminal("ArrayConstructor", this.e0);
	}

	private parse_SquareArrayConstructor() {
		this.eventHandler.startNonterminal("SquareArrayConstructor", this.e0);
		this.consume(69); // '['
		this.lookahead1W(192); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | ']' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' |
		// 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' | 'child' |
		// 'collation' | 'comment' | 'count' | 'declare' | 'default' | 'descendant' |
		// 'descendant-or-self' | 'descending' | 'div' | 'document' | 'document-node' |
		// 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' |
		// 'except' | 'following' | 'following-sibling' | 'for' | 'function' | 'ge' |
		// 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' | 'intersect' | 'is' |
		// 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' | 'namespace' |
		// 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' | 'ordered' |
		// 'parent' | 'preceding' | 'preceding-sibling' | 'processing-instruction' |
		// 'return' | 'satisfies' | 'schema-attribute' | 'schema-element' | 'self' |
		// 'some' | 'stable' | 'start' | 'switch' | 'text' | 'to' | 'treat' | 'try' |
		// 'typeswitch' | 'union' | 'unordered' | 'validate' | 'where' | 'xquery'
		if (this.token() != 70) {
			// ']'
			this.whitespace();
			this.parse_ExprSingle();
			for (;;) {
				if (this.token() != 40) {
					// ','
					break;
				}
				this.consume(40); // ','
				this.lookahead1W(189); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
				// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
				// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
				// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
				// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
				// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
				// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
				// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
				// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
				// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
				// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
				// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
				// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
				// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
				// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
				// 'unordered' | 'validate' | 'where' | 'xquery'
				this.whitespace();
				this.parse_ExprSingle();
			}
		}
		this.consume(70); // ']'
		this.eventHandler.endNonterminal("SquareArrayConstructor", this.e0);
	}

	private parse_CurlyArrayConstructor() {
		this.eventHandler.startNonterminal("CurlyArrayConstructor", this.e0);
		this.consume(79); // 'array'
		this.lookahead1W(60); // S^WS | '(:' | '{'
		this.whitespace();
		this.parse_EnclosedExpr();
		this.eventHandler.endNonterminal("CurlyArrayConstructor", this.e0);
	}

	private parse_StringConstructor() {
		this.eventHandler.startNonterminal("StringConstructor", this.e0);
		this.consume(73); // '``['
		this.parse_StringConstructorContent();
		this.consume(72); // ']``'
		this.eventHandler.endNonterminal("StringConstructor", this.e0);
	}

	private parse_StringConstructorContent() {
		this.eventHandler.startNonterminal("StringConstructorContent", this.e0);
		this.lookahead1(1); // StringConstructorChars
		this.consume(16); // StringConstructorChars
		for (;;) {
			this.lookahead1(17); // ']``' | '`{'
			if (this.token() != 74) {
				// '`{'
				break;
			}
			this.parse_StringConstructorInterpolation();
			this.lookahead1(1); // StringConstructorChars
			this.consume(16); // StringConstructorChars
		}
		this.eventHandler.endNonterminal("StringConstructorContent", this.e0);
	}

	private parse_StringConstructorInterpolation() {
		this.eventHandler.startNonterminal("StringConstructorInterpolation", this.e0);
		this.consume(74); // '`{'
		this.lookahead1W(195); // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
		// URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
		// '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
		// '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery' | '}`'
		if (this.token() != 207) {
			// '}`'
			this.whitespace();
			this.parse_Expr();
		}
		this.consume(207); // '}`'
		this.eventHandler.endNonterminal("StringConstructorInterpolation", this.e0);
	}

	private parse_UnaryLookup() {
		this.eventHandler.startNonterminal("UnaryLookup", this.e0);
		this.consume(65); // '?'
		this.lookahead1W(141); // IntegerLiteral | NCName^Token | S^WS | '(' | '(:' | '*' | 'and' | 'ascending' |
		// 'case' | 'cast' | 'castable' | 'collation' | 'count' | 'default' | 'descending' |
		// 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' |
		// 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' |
		// 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' |
		// 'to' | 'treat' | 'union' | 'where'
		this.whitespace();
		this.parse_KeySpecifier();
		this.eventHandler.endNonterminal("UnaryLookup", this.e0);
	}

	private parse_SingleType() {
		this.eventHandler.startNonterminal("SingleType", this.e0);
		this.parse_SimpleTypeName();
		this.lookahead1W(153); // S^WS | EOF | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ';' | '<' | '<<' |
		// '<=' | '=' | '>' | '>=' | '>>' | '?' | ']' | 'and' | 'ascending' | 'case' |
		// 'castable' | 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' |
		// 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' |
		// 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
		// 'union' | 'where' | '|' | '||' | '}' | '}`'
		if (this.token() == 65) {
			// '?'
			this.consume(65); // '?'
		}
		this.eventHandler.endNonterminal("SingleType", this.e0);
	}

	private parse_TypeDeclaration() {
		this.eventHandler.startNonterminal("TypeDeclaration", this.e0);
		this.consume(80); // 'as'
		this.lookahead1W(181); // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
		// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
		// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
		// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
		// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
		// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_SequenceType();
		this.eventHandler.endNonterminal("TypeDeclaration", this.e0);
	}

	private parse_SequenceType() {
		this.eventHandler.startNonterminal("SequenceType", this.e0);
		switch (this.token()) {
			case 112: // 'empty-sequence'
				this.lookahead2W(157); // S^WS | EOF | '!=' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ':=' | ';' |
				// '<' | '<<' | '<=' | '=' | '>' | '>=' | '>>' | '?' | ']' | 'allowing' | 'and' |
				// 'ascending' | 'at' | 'case' | 'collation' | 'count' | 'default' | 'descending' |
				// 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'external' | 'for' | 'ge' |
				// 'group' | 'gt' | 'idiv' | 'in' | 'instance' | 'intersect' | 'is' | 'le' | 'let' |
				// 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
				// 'stable' | 'start' | 'to' | 'union' | 'where' | '{' | '|' | '||' | '}' | '}`'
				break;
			default:
				this.lk = this.l1;
		}
		switch (this.tokenSequence()) {
			case 8816: // 'empty-sequence' '('
				this.consume(112); // 'empty-sequence'
				this.lookahead1W(24); // S^WS | '(' | '(:'
				this.consume(34); // '('
				this.lookahead1W(25); // S^WS | '(:' | ')'
				this.consume(37); // ')'
				break;
			default:
				this.parse_ItemType();
				this.lookahead1W(155); // S^WS | EOF | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ':=' | ';' | '<' |
				// '<<' | '<=' | '=' | '>' | '>=' | '>>' | '?' | ']' | 'allowing' | 'and' |
				// 'ascending' | 'at' | 'case' | 'collation' | 'count' | 'default' | 'descending' |
				// 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'external' | 'for' | 'ge' |
				// 'group' | 'gt' | 'idiv' | 'in' | 'instance' | 'intersect' | 'is' | 'le' | 'let' |
				// 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
				// 'stable' | 'start' | 'to' | 'union' | 'where' | '{' | '|' | '||' | '}' | '}`'
				switch (this.token()) {
					case 38: // '*'
					case 39: // '+'
					case 65: // '?'
						this.whitespace();
						this.parse_OccurrenceIndicator();
						break;
					default:
						break;
				}
		}
		this.eventHandler.endNonterminal("SequenceType", this.e0);
	}

	private parse_OccurrenceIndicator() {
		this.eventHandler.startNonterminal("OccurrenceIndicator", this.e0);
		switch (this.token()) {
			case 65: // '?'
				this.consume(65); // '?'
				break;
			case 38: // '*'
				this.consume(38); // '*'
				break;
			default:
				this.consume(39); // '+'
		}
		this.eventHandler.endNonterminal("OccurrenceIndicator", this.e0);
	}

	private parse_ItemType() {
		this.eventHandler.startNonterminal("ItemType", this.e0);
		switch (this.token()) {
			case 79: // 'array'
			case 83: // 'attribute'
			case 93: // 'comment'
			case 108: // 'document-node'
			case 109: // 'element'
			case 123: // 'function'
			case 138: // 'item'
			case 144: // 'map'
			case 149: // 'namespace-node'
			case 154: // 'node'
			case 170: // 'processing-instruction'
			case 174: // 'schema-attribute'
			case 175: // 'schema-element'
			case 184: // 'text'
				this.lookahead2W(157); // S^WS | EOF | '!=' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ':=' | ';' |
				// '<' | '<<' | '<=' | '=' | '>' | '>=' | '>>' | '?' | ']' | 'allowing' | 'and' |
				// 'ascending' | 'at' | 'case' | 'collation' | 'count' | 'default' | 'descending' |
				// 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'external' | 'for' | 'ge' |
				// 'group' | 'gt' | 'idiv' | 'in' | 'instance' | 'intersect' | 'is' | 'le' | 'let' |
				// 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
				// 'stable' | 'start' | 'to' | 'union' | 'where' | '{' | '|' | '||' | '}' | '}`'
				break;
			default:
				this.lk = this.l1;
		}
		switch (this.tokenSequence()) {
			case 8787: // 'attribute' '('
			case 8797: // 'comment' '('
			case 8812: // 'document-node' '('
			case 8813: // 'element' '('
			case 8853: // 'namespace-node' '('
			case 8858: // 'node' '('
			case 8874: // 'processing-instruction' '('
			case 8878: // 'schema-attribute' '('
			case 8879: // 'schema-element' '('
			case 8888: // 'text' '('
				this.parse_KindTest();
				break;
			case 8842: // 'item' '('
				this.consume(138); // 'item'
				this.lookahead1W(24); // S^WS | '(' | '(:'
				this.consume(34); // '('
				this.lookahead1W(25); // S^WS | '(:' | ')'
				this.consume(37); // ')'
				break;
			case 32: // '%'
			case 8827: // 'function' '('
				this.parse_FunctionTest();
				break;
			case 8848: // 'map' '('
				this.parse_MapTest();
				break;
			case 8783: // 'array' '('
				this.parse_ArrayTest();
				break;
			case 34: // '('
				this.parse_ParenthesizedItemType();
				break;
			default:
				this.parse_AtomicOrUnionType();
		}
		this.eventHandler.endNonterminal("ItemType", this.e0);
	}

	private parse_AtomicOrUnionType() {
		this.eventHandler.startNonterminal("AtomicOrUnionType", this.e0);
		this.parse_EQName();
		this.eventHandler.endNonterminal("AtomicOrUnionType", this.e0);
	}

	private parse_KindTest() {
		this.eventHandler.startNonterminal("KindTest", this.e0);
		switch (this.token()) {
			case 108: // 'document-node'
				this.parse_DocumentTest();
				break;
			case 109: // 'element'
				this.parse_ElementTest();
				break;
			case 83: // 'attribute'
				this.parse_AttributeTest();
				break;
			case 175: // 'schema-element'
				this.parse_SchemaElementTest();
				break;
			case 174: // 'schema-attribute'
				this.parse_SchemaAttributeTest();
				break;
			case 170: // 'processing-instruction'
				this.parse_PITest();
				break;
			case 93: // 'comment'
				this.parse_CommentTest();
				break;
			case 184: // 'text'
				this.parse_TextTest();
				break;
			case 149: // 'namespace-node'
				this.parse_NamespaceNodeTest();
				break;
			default:
				this.parse_AnyKindTest();
		}
		this.eventHandler.endNonterminal("KindTest", this.e0);
	}

	private parse_AnyKindTest() {
		this.eventHandler.startNonterminal("AnyKindTest", this.e0);
		this.consume(154); // 'node'
		this.lookahead1W(24); // S^WS | '(' | '(:'
		this.consume(34); // '('
		this.lookahead1W(25); // S^WS | '(:' | ')'
		this.consume(37); // ')'
		this.eventHandler.endNonterminal("AnyKindTest", this.e0);
	}

	private parse_DocumentTest() {
		this.eventHandler.startNonterminal("DocumentTest", this.e0);
		this.consume(108); // 'document-node'
		this.lookahead1W(24); // S^WS | '(' | '(:'
		this.consume(34); // '('
		this.lookahead1W(107); // S^WS | '(:' | ')' | 'element' | 'schema-element'
		if (this.token() != 37) {
			// ')'
			switch (this.token()) {
				case 109: // 'element'
					this.whitespace();
					this.parse_ElementTest();
					break;
				default:
					this.whitespace();
					this.parse_SchemaElementTest();
			}
		}
		this.lookahead1W(25); // S^WS | '(:' | ')'
		this.consume(37); // ')'
		this.eventHandler.endNonterminal("DocumentTest", this.e0);
	}

	private parse_TextTest() {
		this.eventHandler.startNonterminal("TextTest", this.e0);
		this.consume(184); // 'text'
		this.lookahead1W(24); // S^WS | '(' | '(:'
		this.consume(34); // '('
		this.lookahead1W(25); // S^WS | '(:' | ')'
		this.consume(37); // ')'
		this.eventHandler.endNonterminal("TextTest", this.e0);
	}

	private parse_CommentTest() {
		this.eventHandler.startNonterminal("CommentTest", this.e0);
		this.consume(93); // 'comment'
		this.lookahead1W(24); // S^WS | '(' | '(:'
		this.consume(34); // '('
		this.lookahead1W(25); // S^WS | '(:' | ')'
		this.consume(37); // ')'
		this.eventHandler.endNonterminal("CommentTest", this.e0);
	}

	private parse_NamespaceNodeTest() {
		this.eventHandler.startNonterminal("NamespaceNodeTest", this.e0);
		this.consume(149); // 'namespace-node'
		this.lookahead1W(24); // S^WS | '(' | '(:'
		this.consume(34); // '('
		this.lookahead1W(25); // S^WS | '(:' | ')'
		this.consume(37); // ')'
		this.eventHandler.endNonterminal("NamespaceNodeTest", this.e0);
	}

	private parse_PITest() {
		this.eventHandler.startNonterminal("PITest", this.e0);
		this.consume(170); // 'processing-instruction'
		this.lookahead1W(24); // S^WS | '(' | '(:'
		this.consume(34); // '('
		this.lookahead1W(139); // StringLiteral | NCName^Token | S^WS | '(:' | ')' | 'and' | 'ascending' | 'case' |
		// 'cast' | 'castable' | 'collation' | 'count' | 'default' | 'descending' | 'div' |
		// 'else' | 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' |
		// 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' |
		// 'only' | 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' |
		// 'treat' | 'union' | 'where'
		if (this.token() != 37) {
			// ')'
			switch (this.token()) {
				case 4: // StringLiteral
					this.consume(4); // StringLiteral
					break;
				default:
					this.whitespace();
					this.parse_NCName();
			}
		}
		this.lookahead1W(25); // S^WS | '(:' | ')'
		this.consume(37); // ')'
		this.eventHandler.endNonterminal("PITest", this.e0);
	}

	private parse_AttributeTest() {
		this.eventHandler.startNonterminal("AttributeTest", this.e0);
		this.consume(83); // 'attribute'
		this.lookahead1W(24); // S^WS | '(' | '(:'
		this.consume(34); // '('
		this.lookahead1W(182); // URIQualifiedName | QName^Token | S^WS | '(:' | ')' | '*' | 'ancestor' |
		// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
		// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
		// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
		// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
		// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		if (this.token() != 37) {
			// ')'
			this.whitespace();
			this.parse_AttribNameOrWildcard();
			this.lookahead1W(71); // S^WS | '(:' | ')' | ','
			if (this.token() == 40) {
				// ','
				this.consume(40); // ','
				this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
				// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
				// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
				// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
				// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
				// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
				// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
				// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
				// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
				// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
				// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
				// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
				// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
				// 'where' | 'xquery'
				this.whitespace();
				this.parse_TypeName();
			}
		}
		this.lookahead1W(25); // S^WS | '(:' | ')'
		this.consume(37); // ')'
		this.eventHandler.endNonterminal("AttributeTest", this.e0);
	}

	private parse_AttribNameOrWildcard() {
		this.eventHandler.startNonterminal("AttribNameOrWildcard", this.e0);
		switch (this.token()) {
			case 38: // '*'
				this.consume(38); // '*'
				break;
			default:
				this.parse_AttributeName();
		}
		this.eventHandler.endNonterminal("AttribNameOrWildcard", this.e0);
	}

	private parse_SchemaAttributeTest() {
		this.eventHandler.startNonterminal("SchemaAttributeTest", this.e0);
		this.consume(174); // 'schema-attribute'
		this.lookahead1W(24); // S^WS | '(' | '(:'
		this.consume(34); // '('
		this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
		// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
		// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
		// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
		// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
		// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_AttributeDeclaration();
		this.lookahead1W(25); // S^WS | '(:' | ')'
		this.consume(37); // ')'
		this.eventHandler.endNonterminal("SchemaAttributeTest", this.e0);
	}

	private parse_AttributeDeclaration() {
		this.eventHandler.startNonterminal("AttributeDeclaration", this.e0);
		this.parse_AttributeName();
		this.eventHandler.endNonterminal("AttributeDeclaration", this.e0);
	}

	private parse_ElementTest() {
		this.eventHandler.startNonterminal("ElementTest", this.e0);
		this.consume(109); // 'element'
		this.lookahead1W(24); // S^WS | '(' | '(:'
		this.consume(34); // '('
		this.lookahead1W(182); // URIQualifiedName | QName^Token | S^WS | '(:' | ')' | '*' | 'ancestor' |
		// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
		// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
		// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
		// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
		// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		if (this.token() != 37) {
			// ')'
			this.whitespace();
			this.parse_ElementNameOrWildcard();
			this.lookahead1W(71); // S^WS | '(:' | ')' | ','
			if (this.token() == 40) {
				// ','
				this.consume(40); // ','
				this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
				// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
				// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
				// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
				// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
				// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
				// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
				// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
				// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
				// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
				// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
				// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
				// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
				// 'where' | 'xquery'
				this.whitespace();
				this.parse_TypeName();
				this.lookahead1W(72); // S^WS | '(:' | ')' | '?'
				if (this.token() == 65) {
					// '?'
					this.consume(65); // '?'
				}
			}
		}
		this.lookahead1W(25); // S^WS | '(:' | ')'
		this.consume(37); // ')'
		this.eventHandler.endNonterminal("ElementTest", this.e0);
	}

	private parse_ElementNameOrWildcard() {
		this.eventHandler.startNonterminal("ElementNameOrWildcard", this.e0);
		switch (this.token()) {
			case 38: // '*'
				this.consume(38); // '*'
				break;
			default:
				this.parse_ElementName();
		}
		this.eventHandler.endNonterminal("ElementNameOrWildcard", this.e0);
	}

	private parse_SchemaElementTest() {
		this.eventHandler.startNonterminal("SchemaElementTest", this.e0);
		this.consume(175); // 'schema-element'
		this.lookahead1W(24); // S^WS | '(' | '(:'
		this.consume(34); // '('
		this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
		// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
		// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
		// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
		// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
		// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_ElementDeclaration();
		this.lookahead1W(25); // S^WS | '(:' | ')'
		this.consume(37); // ')'
		this.eventHandler.endNonterminal("SchemaElementTest", this.e0);
	}

	private parse_ElementDeclaration() {
		this.eventHandler.startNonterminal("ElementDeclaration", this.e0);
		this.parse_ElementName();
		this.eventHandler.endNonterminal("ElementDeclaration", this.e0);
	}

	private parse_AttributeName() {
		this.eventHandler.startNonterminal("AttributeName", this.e0);
		this.parse_EQName();
		this.eventHandler.endNonterminal("AttributeName", this.e0);
	}

	private parse_ElementName() {
		this.eventHandler.startNonterminal("ElementName", this.e0);
		this.parse_EQName();
		this.eventHandler.endNonterminal("ElementName", this.e0);
	}

	private parse_SimpleTypeName() {
		this.eventHandler.startNonterminal("SimpleTypeName", this.e0);
		this.parse_TypeName();
		this.eventHandler.endNonterminal("SimpleTypeName", this.e0);
	}

	private parse_TypeName() {
		this.eventHandler.startNonterminal("TypeName", this.e0);
		this.parse_EQName();
		this.eventHandler.endNonterminal("TypeName", this.e0);
	}

	private parse_FunctionTest() {
		this.eventHandler.startNonterminal("FunctionTest", this.e0);
		for (;;) {
			this.lookahead1W(69); // S^WS | '%' | '(:' | 'function'
			if (this.token() != 32) {
				// '%'
				break;
			}
			this.whitespace();
			this.parse_Annotation();
		}
		switch (this.token()) {
			case 123: // 'function'
				this.lookahead2W(24); // S^WS | '(' | '(:'
				switch (this.tokenSequence()) {
					case 8827: // 'function' '('
						this.lookahead3W(186); // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | ')' | '*' |
						// 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' |
						// 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' |
						// 'declare' | 'default' | 'descendant' | 'descendant-or-self' | 'descending' |
						// 'div' | 'document' | 'document-node' | 'element' | 'else' | 'empty' |
						// 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
						// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
						// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
						// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
						// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
						// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
						// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
						// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
						// 'unordered' | 'validate' | 'where' | 'xquery'
						break;
				}
				break;
			default:
				this.lk = this.l1;
		}
		switch (this.tokenSequence()) {
			case 2499195: // 'function' '(' '*'
				this.whitespace();
				this.parse_AnyFunctionTest();
				break;
			default:
				this.whitespace();
				this.parse_TypedFunctionTest();
		}
		this.eventHandler.endNonterminal("FunctionTest", this.e0);
	}

	private parse_AnyFunctionTest() {
		this.eventHandler.startNonterminal("AnyFunctionTest", this.e0);
		this.consume(123); // 'function'
		this.lookahead1W(24); // S^WS | '(' | '(:'
		this.consume(34); // '('
		this.lookahead1W(26); // S^WS | '(:' | '*'
		this.consume(38); // '*'
		this.lookahead1W(25); // S^WS | '(:' | ')'
		this.consume(37); // ')'
		this.eventHandler.endNonterminal("AnyFunctionTest", this.e0);
	}

	private parse_TypedFunctionTest() {
		this.eventHandler.startNonterminal("TypedFunctionTest", this.e0);
		this.consume(123); // 'function'
		this.lookahead1W(24); // S^WS | '(' | '(:'
		this.consume(34); // '('
		this.lookahead1W(184); // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | ')' | 'ancestor' |
		// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
		// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
		// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
		// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
		// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		if (this.token() != 37) {
			// ')'
			this.whitespace();
			this.parse_SequenceType();
			for (;;) {
				this.lookahead1W(71); // S^WS | '(:' | ')' | ','
				if (this.token() != 40) {
					// ','
					break;
				}
				this.consume(40); // ','
				this.lookahead1W(181); // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
				// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
				// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
				// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
				// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
				// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
				// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
				// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
				// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
				// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
				// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
				// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
				// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
				// 'where' | 'xquery'
				this.whitespace();
				this.parse_SequenceType();
			}
		}
		this.consume(37); // ')'
		this.lookahead1W(32); // S^WS | '(:' | 'as'
		this.consume(80); // 'as'
		this.lookahead1W(181); // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
		// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
		// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
		// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
		// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
		// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_SequenceType();
		this.eventHandler.endNonterminal("TypedFunctionTest", this.e0);
	}

	private parse_MapTest() {
		this.eventHandler.startNonterminal("MapTest", this.e0);
		switch (this.token()) {
			case 144: // 'map'
				this.lookahead2W(24); // S^WS | '(' | '(:'
				switch (this.tokenSequence()) {
					case 8848: // 'map' '('
						this.lookahead3W(177); // URIQualifiedName | QName^Token | S^WS | '(:' | '*' | 'ancestor' |
						// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
						// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
						// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
						// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
						// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
						// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
						// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
						// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
						// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
						// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
						// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
						// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
						// 'where' | 'xquery'
						break;
				}
				break;
			default:
				this.lk = this.l1;
		}
		switch (this.tokenSequence()) {
			case 2499216: // 'map' '(' '*'
				this.parse_AnyMapTest();
				break;
			default:
				this.parse_TypedMapTest();
		}
		this.eventHandler.endNonterminal("MapTest", this.e0);
	}

	private parse_AnyMapTest() {
		this.eventHandler.startNonterminal("AnyMapTest", this.e0);
		this.consume(144); // 'map'
		this.lookahead1W(24); // S^WS | '(' | '(:'
		this.consume(34); // '('
		this.lookahead1W(26); // S^WS | '(:' | '*'
		this.consume(38); // '*'
		this.lookahead1W(25); // S^WS | '(:' | ')'
		this.consume(37); // ')'
		this.eventHandler.endNonterminal("AnyMapTest", this.e0);
	}

	private parse_TypedMapTest() {
		this.eventHandler.startNonterminal("TypedMapTest", this.e0);
		this.consume(144); // 'map'
		this.lookahead1W(24); // S^WS | '(' | '(:'
		this.consume(34); // '('
		this.lookahead1W(174); // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
		// 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
		// 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
		// 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
		// 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
		// 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_AtomicOrUnionType();
		this.lookahead1W(27); // S^WS | '(:' | ','
		this.consume(40); // ','
		this.lookahead1W(181); // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
		// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
		// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
		// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
		// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
		// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_SequenceType();
		this.lookahead1W(25); // S^WS | '(:' | ')'
		this.consume(37); // ')'
		this.eventHandler.endNonterminal("TypedMapTest", this.e0);
	}

	private parse_ArrayTest() {
		this.eventHandler.startNonterminal("ArrayTest", this.e0);
		switch (this.token()) {
			case 79: // 'array'
				this.lookahead2W(24); // S^WS | '(' | '(:'
				switch (this.tokenSequence()) {
					case 8783: // 'array' '('
						this.lookahead3W(185); // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | '*' | 'ancestor' |
						// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
						// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
						// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
						// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
						// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
						// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
						// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
						// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
						// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
						// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
						// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
						// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
						// 'where' | 'xquery'
						break;
				}
				break;
			default:
				this.lk = this.l1;
		}
		switch (this.tokenSequence()) {
			case 2499151: // 'array' '(' '*'
				this.parse_AnyArrayTest();
				break;
			default:
				this.parse_TypedArrayTest();
		}
		this.eventHandler.endNonterminal("ArrayTest", this.e0);
	}

	private parse_AnyArrayTest() {
		this.eventHandler.startNonterminal("AnyArrayTest", this.e0);
		this.consume(79); // 'array'
		this.lookahead1W(24); // S^WS | '(' | '(:'
		this.consume(34); // '('
		this.lookahead1W(26); // S^WS | '(:' | '*'
		this.consume(38); // '*'
		this.lookahead1W(25); // S^WS | '(:' | ')'
		this.consume(37); // ')'
		this.eventHandler.endNonterminal("AnyArrayTest", this.e0);
	}

	private parse_TypedArrayTest() {
		this.eventHandler.startNonterminal("TypedArrayTest", this.e0);
		this.consume(79); // 'array'
		this.lookahead1W(24); // S^WS | '(' | '(:'
		this.consume(34); // '('
		this.lookahead1W(181); // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
		// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
		// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
		// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
		// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
		// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_SequenceType();
		this.lookahead1W(25); // S^WS | '(:' | ')'
		this.consume(37); // ')'
		this.eventHandler.endNonterminal("TypedArrayTest", this.e0);
	}

	private parse_ParenthesizedItemType() {
		this.eventHandler.startNonterminal("ParenthesizedItemType", this.e0);
		this.consume(34); // '('
		this.lookahead1W(181); // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
		// 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
		// 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
		// 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
		// 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
		// 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
		// 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
		// 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
		// 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
		// 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
		// 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
		// 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
		// 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
		// 'where' | 'xquery'
		this.whitespace();
		this.parse_ItemType();
		this.lookahead1W(25); // S^WS | '(:' | ')'
		this.consume(37); // ')'
		this.eventHandler.endNonterminal("ParenthesizedItemType", this.e0);
	}

	private parse_URILiteral() {
		this.eventHandler.startNonterminal("URILiteral", this.e0);
		this.consume(4); // StringLiteral
		this.eventHandler.endNonterminal("URILiteral", this.e0);
	}

	private parse_EQName() {
		this.eventHandler.startNonterminal("EQName", this.e0);
		this.lookahead1(172); // URIQualifiedName | QName^Token | 'ancestor' | 'ancestor-or-self' | 'and' |
		// 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' | 'child' |
		// 'collation' | 'comment' | 'count' | 'declare' | 'default' | 'descendant' |
		// 'descendant-or-self' | 'descending' | 'div' | 'document' | 'document-node' |
		// 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' |
		// 'except' | 'following' | 'following-sibling' | 'for' | 'function' | 'ge' |
		// 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' | 'intersect' | 'is' |
		// 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' | 'namespace' |
		// 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' | 'ordered' |
		// 'parent' | 'preceding' | 'preceding-sibling' | 'processing-instruction' |
		// 'return' | 'satisfies' | 'schema-attribute' | 'schema-element' | 'self' |
		// 'some' | 'stable' | 'start' | 'switch' | 'text' | 'to' | 'treat' | 'try' |
		// 'typeswitch' | 'union' | 'unordered' | 'validate' | 'where' | 'xquery'
		switch (this.token()) {
			case 5: // URIQualifiedName
				this.consume(5); // URIQualifiedName
				break;
			default:
				this.parse_QName();
		}
		this.eventHandler.endNonterminal("EQName", this.e0);
	}

	private parse_FunctionEQName() {
		this.eventHandler.startNonterminal("FunctionEQName", this.e0);
		switch (this.token()) {
			case 5: // URIQualifiedName
				this.consume(5); // URIQualifiedName
				break;
			default:
				this.parse_FunctionName();
		}
		this.eventHandler.endNonterminal("FunctionEQName", this.e0);
	}

	private parse_QName() {
		this.eventHandler.startNonterminal("QName", this.e0);
		this.lookahead1(171); // QName^Token | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
		// 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
		// 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
		// 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
		// 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
		// 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
		// 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
		// 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
		// 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
		// 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
		// 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
		// 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
		// 'unordered' | 'validate' | 'where' | 'xquery'
		switch (this.token()) {
			case 79: // 'array'
				this.consume(79); // 'array'
				break;
			case 83: // 'attribute'
				this.consume(83); // 'attribute'
				break;
			case 93: // 'comment'
				this.consume(93); // 'comment'
				break;
			case 108: // 'document-node'
				this.consume(108); // 'document-node'
				break;
			case 109: // 'element'
				this.consume(109); // 'element'
				break;
			case 112: // 'empty-sequence'
				this.consume(112); // 'empty-sequence'
				break;
			case 123: // 'function'
				this.consume(123); // 'function'
				break;
			case 130: // 'if'
				this.consume(130); // 'if'
				break;
			case 138: // 'item'
				this.consume(138); // 'item'
				break;
			case 144: // 'map'
				this.consume(144); // 'map'
				break;
			case 149: // 'namespace-node'
				this.consume(149); // 'namespace-node'
				break;
			case 154: // 'node'
				this.consume(154); // 'node'
				break;
			case 170: // 'processing-instruction'
				this.consume(170); // 'processing-instruction'
				break;
			case 174: // 'schema-attribute'
				this.consume(174); // 'schema-attribute'
				break;
			case 175: // 'schema-element'
				this.consume(175); // 'schema-element'
				break;
			case 183: // 'switch'
				this.consume(183); // 'switch'
				break;
			case 184: // 'text'
				this.consume(184); // 'text'
				break;
			case 191: // 'typeswitch'
				this.consume(191); // 'typeswitch'
				break;
			default:
				this.parse_FunctionName();
		}
		this.eventHandler.endNonterminal("QName", this.e0);
	}

	private parse_FunctionName() {
		this.eventHandler.startNonterminal("FunctionName", this.e0);
		switch (this.token()) {
			case 15: // QName^Token
				this.consume(15); // QName^Token
				break;
			case 76: // 'ancestor'
				this.consume(76); // 'ancestor'
				break;
			case 77: // 'ancestor-or-self'
				this.consume(77); // 'ancestor-or-self'
				break;
			case 78: // 'and'
				this.consume(78); // 'and'
				break;
			case 81: // 'ascending'
				this.consume(81); // 'ascending'
				break;
			case 87: // 'case'
				this.consume(87); // 'case'
				break;
			case 88: // 'cast'
				this.consume(88); // 'cast'
				break;
			case 89: // 'castable'
				this.consume(89); // 'castable'
				break;
			case 91: // 'child'
				this.consume(91); // 'child'
				break;
			case 92: // 'collation'
				this.consume(92); // 'collation'
				break;
			case 97: // 'count'
				this.consume(97); // 'count'
				break;
			case 100: // 'declare'
				this.consume(100); // 'declare'
				break;
			case 101: // 'default'
				this.consume(101); // 'default'
				break;
			case 102: // 'descendant'
				this.consume(102); // 'descendant'
				break;
			case 103: // 'descendant-or-self'
				this.consume(103); // 'descendant-or-self'
				break;
			case 104: // 'descending'
				this.consume(104); // 'descending'
				break;
			case 106: // 'div'
				this.consume(106); // 'div'
				break;
			case 107: // 'document'
				this.consume(107); // 'document'
				break;
			case 110: // 'else'
				this.consume(110); // 'else'
				break;
			case 111: // 'empty'
				this.consume(111); // 'empty'
				break;
			case 114: // 'end'
				this.consume(114); // 'end'
				break;
			case 115: // 'eq'
				this.consume(115); // 'eq'
				break;
			case 116: // 'every'
				this.consume(116); // 'every'
				break;
			case 117: // 'except'
				this.consume(117); // 'except'
				break;
			case 120: // 'following'
				this.consume(120); // 'following'
				break;
			case 121: // 'following-sibling'
				this.consume(121); // 'following-sibling'
				break;
			case 122: // 'for'
				this.consume(122); // 'for'
				break;
			case 124: // 'ge'
				this.consume(124); // 'ge'
				break;
			case 126: // 'group'
				this.consume(126); // 'group'
				break;
			case 128: // 'gt'
				this.consume(128); // 'gt'
				break;
			case 129: // 'idiv'
				this.consume(129); // 'idiv'
				break;
			case 131: // 'import'
				this.consume(131); // 'import'
				break;
			case 135: // 'instance'
				this.consume(135); // 'instance'
				break;
			case 136: // 'intersect'
				this.consume(136); // 'intersect'
				break;
			case 137: // 'is'
				this.consume(137); // 'is'
				break;
			case 140: // 'le'
				this.consume(140); // 'le'
				break;
			case 142: // 'let'
				this.consume(142); // 'let'
				break;
			case 143: // 'lt'
				this.consume(143); // 'lt'
				break;
			case 146: // 'mod'
				this.consume(146); // 'mod'
				break;
			case 147: // 'module'
				this.consume(147); // 'module'
				break;
			case 148: // 'namespace'
				this.consume(148); // 'namespace'
				break;
			case 150: // 'ne'
				this.consume(150); // 'ne'
				break;
			case 156: // 'only'
				this.consume(156); // 'only'
				break;
			case 158: // 'or'
				this.consume(158); // 'or'
				break;
			case 159: // 'order'
				this.consume(159); // 'order'
				break;
			case 160: // 'ordered'
				this.consume(160); // 'ordered'
				break;
			case 162: // 'parent'
				this.consume(162); // 'parent'
				break;
			case 166: // 'preceding'
				this.consume(166); // 'preceding'
				break;
			case 167: // 'preceding-sibling'
				this.consume(167); // 'preceding-sibling'
				break;
			case 171: // 'return'
				this.consume(171); // 'return'
				break;
			case 172: // 'satisfies'
				this.consume(172); // 'satisfies'
				break;
			case 176: // 'self'
				this.consume(176); // 'self'
				break;
			case 178: // 'some'
				this.consume(178); // 'some'
				break;
			case 179: // 'stable'
				this.consume(179); // 'stable'
				break;
			case 180: // 'start'
				this.consume(180); // 'start'
				break;
			case 186: // 'to'
				this.consume(186); // 'to'
				break;
			case 187: // 'treat'
				this.consume(187); // 'treat'
				break;
			case 188: // 'try'
				this.consume(188); // 'try'
				break;
			case 192: // 'union'
				this.consume(192); // 'union'
				break;
			case 193: // 'unordered'
				this.consume(193); // 'unordered'
				break;
			case 194: // 'validate'
				this.consume(194); // 'validate'
				break;
			case 198: // 'where'
				this.consume(198); // 'where'
				break;
			default:
				this.consume(200); // 'xquery'
		}
		this.eventHandler.endNonterminal("FunctionName", this.e0);
	}

	private parse_NCName() {
		this.eventHandler.startNonterminal("NCName", this.e0);
		switch (this.token()) {
			case 14: // NCName^Token
				this.consume(14); // NCName^Token
				break;
			case 78: // 'and'
				this.consume(78); // 'and'
				break;
			case 81: // 'ascending'
				this.consume(81); // 'ascending'
				break;
			case 87: // 'case'
				this.consume(87); // 'case'
				break;
			case 88: // 'cast'
				this.consume(88); // 'cast'
				break;
			case 89: // 'castable'
				this.consume(89); // 'castable'
				break;
			case 92: // 'collation'
				this.consume(92); // 'collation'
				break;
			case 97: // 'count'
				this.consume(97); // 'count'
				break;
			case 101: // 'default'
				this.consume(101); // 'default'
				break;
			case 104: // 'descending'
				this.consume(104); // 'descending'
				break;
			case 106: // 'div'
				this.consume(106); // 'div'
				break;
			case 110: // 'else'
				this.consume(110); // 'else'
				break;
			case 111: // 'empty'
				this.consume(111); // 'empty'
				break;
			case 114: // 'end'
				this.consume(114); // 'end'
				break;
			case 115: // 'eq'
				this.consume(115); // 'eq'
				break;
			case 117: // 'except'
				this.consume(117); // 'except'
				break;
			case 122: // 'for'
				this.consume(122); // 'for'
				break;
			case 124: // 'ge'
				this.consume(124); // 'ge'
				break;
			case 126: // 'group'
				this.consume(126); // 'group'
				break;
			case 128: // 'gt'
				this.consume(128); // 'gt'
				break;
			case 129: // 'idiv'
				this.consume(129); // 'idiv'
				break;
			case 135: // 'instance'
				this.consume(135); // 'instance'
				break;
			case 136: // 'intersect'
				this.consume(136); // 'intersect'
				break;
			case 137: // 'is'
				this.consume(137); // 'is'
				break;
			case 140: // 'le'
				this.consume(140); // 'le'
				break;
			case 142: // 'let'
				this.consume(142); // 'let'
				break;
			case 143: // 'lt'
				this.consume(143); // 'lt'
				break;
			case 146: // 'mod'
				this.consume(146); // 'mod'
				break;
			case 150: // 'ne'
				this.consume(150); // 'ne'
				break;
			case 156: // 'only'
				this.consume(156); // 'only'
				break;
			case 158: // 'or'
				this.consume(158); // 'or'
				break;
			case 159: // 'order'
				this.consume(159); // 'order'
				break;
			case 171: // 'return'
				this.consume(171); // 'return'
				break;
			case 172: // 'satisfies'
				this.consume(172); // 'satisfies'
				break;
			case 179: // 'stable'
				this.consume(179); // 'stable'
				break;
			case 180: // 'start'
				this.consume(180); // 'start'
				break;
			case 186: // 'to'
				this.consume(186); // 'to'
				break;
			case 187: // 'treat'
				this.consume(187); // 'treat'
				break;
			case 192: // 'union'
				this.consume(192); // 'union'
				break;
			default:
				this.consume(198); // 'where'
		}
		this.eventHandler.endNonterminal("NCName", this.e0);
	}

	private try_Whitespace() {
		switch (this.token()) {
			case 18: // S^WS
				this.consumeT(18); // S^WS
				break;
			default:
				this.try_Comment();
		}
	}

	private try_Comment() {
		this.consumeT(36); // '(:'
		for (;;) {
			this.lookahead1(61); // CommentContents | '(:' | ':)'
			if (this.token() == 49) {
				// ':)'
				break;
			}
			switch (this.token()) {
				case 19: // CommentContents
					this.consumeT(19); // CommentContents
					break;
				default:
					this.try_Comment();
			}
		}
		this.consumeT(49); // ':)'
	}

	private consume(t: number) {
		if (this.l1 == t) {
			this.whitespace();
			this.eventHandler.terminal(Parser.TOKEN[this.l1], this.b1, this.e1);
			this.b0 = this.b1;
			this.e0 = this.e1;
			this.l1 = this.l2;
			if (this.l1 != 0) {
				this.b1 = this.b2;
				this.e1 = this.e2;
				this.l2 = this.l3;
				if (this.l2 != 0) {
					this.b2 = this.b3;
					this.e2 = this.e3;
					this.l3 = 0;
				}
			}
		} else {
			this.error(this.b1, this.e1, 0, this.l1, t);
		}
	}

	private consumeT(t: number) {
		if (this.l1 == t) {
			this.b0 = this.b1;
			this.e0 = this.e1;
			this.l1 = this.l2;
			if (this.l1 != 0) {
				this.b1 = this.b2;
				this.e1 = this.e2;
				this.l2 = this.l3;
				if (this.l2 != 0) {
					this.b2 = this.b3;
					this.e2 = this.e3;
					this.l3 = 0;
				}
			}
		} else {
			this.error(this.b1, this.e1, 0, this.l1, t);
		}
	}

	private skip(code: number) {
		var b0W = this.b0;
		var e0W = this.e0;
		var l1W = this.l1;
		var b1W = this.b1;
		var e1W = this.e1;
		var l2W = this.l2;
		var b2W = this.b2;
		var e2W = this.e2;

		this.l1 = code;
		this.b1 = this.begin;
		this.e1 = this.end;
		this.l2 = 0;
		this.l3 = 0;

		this.try_Whitespace();

		this.b0 = b0W;
		this.e0 = e0W;
		this.l1 = l1W;
		if (this.l1 != 0) {
			this.b1 = b1W;
			this.e1 = e1W;
			this.l2 = l2W;
			if (this.l2 != 0) {
				this.b2 = b2W;
				this.e2 = e2W;
			}
		}
	}

	private whitespace() {
		if (this.e0 != this.b1) {
			this.eventHandler.whitespace(this.e0, this.b1);
			this.e0 = this.b1;
		}
	}

	private matchW(tokenSetId: number) {
		var code: number;
		for (;;) {
			code = this.match(tokenSetId);
			if (code != 18) {
				// S^WS
				if (code != 36) {
					// '(:'
					break;
				}
				this.skip(code);
			}
		}
		return code;
	}

	private lookahead1W(tokenSetId: number) {
		if (this.l1 == 0) {
			this.l1 = this.matchW(tokenSetId);
			this.b1 = this.begin;
			this.e1 = this.end;
		}
	}

	private lookahead2W(tokenSetId: number) {
		if (this.l2 == 0) {
			this.l2 = this.matchW(tokenSetId);
			this.b2 = this.begin;
			this.e2 = this.end;
		}
		this.lk = (this.l2 << 8) | this.l1;
	}

	private lookahead3W(tokenSetId: number) {
		if (this.l3 == 0) {
			this.l3 = this.matchW(tokenSetId);
			this.b3 = this.begin;
			this.e3 = this.end;
		}
		this.lk |= this.l3 << 16;
	}

	private lookahead1(tokenSetId: number) {
		if (this.l1 == 0) {
			this.l1 = this.match(tokenSetId);
			this.b1 = this.begin;
			this.e1 = this.end;
		}
	}

	private error(b: number, e: number, s: number, l: number, t: number) {
		throw new ParseException(b, e, s, l, t);
	}

	private token(): number {
		return this.l1;
	}

	private tokenSequence(): number {
		return this.lk;
	}

	private lk: number;
	private b0: number;
	private e0: number;
	private l1: number;
	private b1: number;
	private e1: number;
	private l2: number;
	private b2: number;
	private e2: number;
	private l3: number;
	private b3: number;
	private e3: number;
	private eventHandler: ParsingEventHandler;

	private input: string;
	private size: number;
	private begin: number;
	private end: number;

	private match(tokenSetId: number): number {
		var nonbmp = false;
		this.begin = this.end;
		var current = this.end;
		var result = Parser.INITIAL[tokenSetId];
		var state = 0;
		for (var code = result & 2047; code != 0; ) {
			var charclass: number;
			var c0 = current < this.size ? this.input.charCodeAt(current) : 0;
			++current;
			if (c0 < 0x80) {
				charclass = Parser.MAP0[c0];
			} else if (c0 < 0xd800) {
				var c1 = c0 >> 4;
				charclass = Parser.MAP1[(c0 & 15) + Parser.MAP1[(c1 & 31) + Parser.MAP1[c1 >> 5]]];
			} else {
				if (c0 < 0xdc00) {
					var c1: number = current < this.size ? this.input.charCodeAt(current) : 0;
					if (c1 >= 0xdc00 && c1 < 0xe000) {
						++current;
						c0 = ((c0 & 0x3ff) << 10) + (c1 & 0x3ff) + 0x10000;
						nonbmp = true;
					}
				}

				var lo = 0,
					hi = 5;
				for (var m = 3; ; m = (hi + lo) >> 1) {
					if (Parser.MAP2[m] > c0) hi = m - 1;
					else if (Parser.MAP2[6 + m] < c0) lo = m + 1;
					else {
						charclass = Parser.MAP2[12 + m];
						break;
					}
					if (lo > hi) {
						charclass = 0;
						break;
					}
				}
			}

			state = code;
			var i0 = (charclass << 11) + code - 1;
			code = Parser.TRANSITION[(i0 & 15) + Parser.TRANSITION[i0 >> 4]];

			if (code > 2047) {
				result = code;
				code &= 2047;
				this.end = current;
			}
		}

		result >>= 11;
		if (result == 0) {
			this.end = current - 1;
			var c1: number = this.end < this.size ? this.input.charCodeAt(this.end) : 0;
			if (c1 >= 0xdc00 && c1 < 0xe000) --this.end;
			this.error(this.begin, this.end, state, -1, -1);
		}

		if (nonbmp) {
			for (var i = result >> 8; i > 0; --i) {
				--this.end;
				var c1: number = this.end < this.size ? this.input.charCodeAt(this.end) : 0;
				if (c1 >= 0xdc00 && c1 < 0xe000) --this.end;
			}
		} else {
			this.end -= result >> 8;
		}

		if (this.end > this.size) this.end = this.size;
		return (result & 255) - 1;
	}

	private static getTokenSet(tokenSetId: number) {
		var set: string[] = [];
		var s = tokenSetId < 0 ? -tokenSetId : Parser.INITIAL[tokenSetId] & 2047;
		for (var i = 0; i < 209; i += 32) {
			var j = i;
			var i0 = (i >> 5) * 1951 + s - 1;
			var i1 = i0 >> 1;
			var i2 = i1 >> 2;
			var f =
				Parser.EXPECTED[(i0 & 1) + Parser.EXPECTED[(i1 & 3) + Parser.EXPECTED[(i2 & 3) + Parser.EXPECTED[i2 >> 2]]]];
			for (; f != 0; f >>>= 1, ++j) {
				if ((f & 1) != 0) {
					set.push(Parser.TOKEN[j]);
				}
			}
		}
		return set;
	}

	private static MAP0: number[] = [
		/*   0 */ 69, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3,
		/*  35 */ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 19, 20, 21, 22,
		/*  63 */ 23, 24, 25, 26, 27, 28, 29, 26, 30, 30, 30, 30, 30, 31, 32, 33, 30, 30, 34, 30, 30, 35, 30, 30, 30, 36,
		/*  89 */ 30, 30, 37, 38, 39, 38, 30, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 30, 30, 50, 51, 52, 53, 54, 55, 56,
		/* 115 */ 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 38, 38,
	];

	private static MAP1: number[] = [
		/*   0 */ 108, 124, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 156, 181, 181, 181, 181,
		/*  21 */ 181, 214, 215, 213, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214,
		/*  42 */ 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214,
		/*  63 */ 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214,
		/*  84 */ 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214,
		/* 105 */ 214, 214, 214, 247, 261, 277, 293, 309, 355, 371, 387, 423, 423, 423, 415, 339, 331, 339, 331, 339, 339,
		/* 126 */ 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 440, 440, 440, 440, 440, 440, 440,
		/* 147 */ 324, 339, 339, 339, 339, 339, 339, 339, 339, 401, 423, 423, 424, 422, 423, 423, 339, 339, 339, 339, 339,
		/* 168 */ 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 423, 423, 423, 423, 423, 423, 423, 423,
		/* 189 */ 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423,
		/* 210 */ 423, 423, 423, 338, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339,
		/* 231 */ 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 423, 69, 0, 0, 0, 0, 0, 0, 0,
		/* 255 */ 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
		/* 289 */ 13, 14, 15, 16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
		/* 315 */ 26, 30, 30, 30, 30, 30, 31, 32, 33, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 38, 30, 30,
		/* 341 */ 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 34, 30, 30, 35, 30, 30, 30, 36, 30, 30, 37,
		/* 367 */ 38, 39, 38, 30, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 30, 30, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
		/* 393 */ 60, 61, 62, 63, 64, 65, 66, 67, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 30, 30, 38, 38, 38, 38,
		/* 419 */ 38, 38, 38, 68, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 68, 68, 68, 68, 68, 68,
		/* 445 */ 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68,
	];

	private static MAP2: number[] = [
		/*  0 */ 57344, 63744, 64976, 65008, 65536, 983040, 63743, 64975, 65007, 65533, 983039, 1114111, 38, 30, 38, 30, 30,
		/* 17 */ 38,
	];

	private static INITIAL: number[] = [
		/*   0 */ 1, 2, 3, 47108, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
		/*  28 */ 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
		/*  54 */ 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
		/*  80 */ 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105,
		/* 105 */ 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126,
		/* 126 */ 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147,
		/* 147 */ 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168,
		/* 168 */ 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189,
		/* 189 */ 190, 191, 192, 193, 194, 195, 196, 197, 198, 199,
	];

	private static TRANSITION: number[] = [
		/*     0 */ 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205,
		/*    15 */ 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205,
		/*    30 */ 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205,
		/*    45 */ 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205,
		/*    60 */ 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205,
		/*    75 */ 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205,
		/*    90 */ 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205,
		/*   105 */ 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205,
		/*   120 */ 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 8960, 8976, 9043, 8998, 9043, 9043, 9043, 9012,
		/*   136 */ 9041, 9043, 8982, 9043, 9025, 9059, 11205, 14818, 11205, 10536, 11205, 18143, 14389, 11205, 11205,
		/*   151 */ 12700, 9235, 9993, 10316, 9102, 9123, 9162, 21004, 11205, 18143, 9180, 9196, 9212, 9228, 9251, 9274,
		/*   167 */ 9297, 12708, 9258, 9281, 27732, 13600, 11205, 11031, 9313, 9350, 9368, 9405, 9464, 10284, 9513, 9542,
		/*   183 */ 9532, 10287, 9516, 9545, 27421, 14786, 9561, 27538, 12436, 9589, 9619, 10121, 9655, 10829, 10109, 10125,
		/*   199 */ 9659, 10833, 14073, 9675, 9704, 9741, 9778, 9794, 9810, 9832, 9762, 9804, 9826, 9756, 9848, 20255,
		/*   215 */ 18142, 9878, 9893, 9914, 9888, 9909, 9930, 9961, 14375, 9382, 9986, 9389, 13842, 10011, 10039, 10055,
		/*   231 */ 11617, 10065, 10081, 10097, 10141, 10171, 10233, 10274, 10303, 9993, 13832, 9995, 13530, 13536, 10351,
		/*   246 */ 10367, 10392, 10408, 10424, 11205, 11205, 11205, 11205, 11205, 11205, 10461, 11205, 11205, 14557, 11205,
		/*   261 */ 11205, 11205, 14709, 10483, 10510, 10524, 11205, 10494, 11913, 11205, 14818, 11205, 10536, 24400, 18143,
		/*   276 */ 14389, 11205, 11205, 12700, 9235, 9993, 10552, 9102, 9123, 9162, 21004, 11205, 18143, 9180, 9196, 9212,
		/*   292 */ 9228, 9251, 9274, 9297, 12708, 9258, 9281, 27732, 13600, 11205, 11031, 9313, 9350, 9368, 9405, 9464,
		/*   308 */ 10284, 9513, 9542, 9532, 10287, 9516, 9545, 27421, 14786, 9561, 27538, 12436, 9589, 9619, 10121, 9655,
		/*   324 */ 10829, 10109, 10125, 9659, 10833, 14073, 9675, 9704, 9741, 9778, 9794, 9810, 9832, 9762, 9804, 9826,
		/*   340 */ 9756, 9848, 20255, 18142, 9878, 9893, 9914, 9888, 9909, 9930, 9961, 14375, 9382, 9986, 9389, 13842,
		/*   356 */ 10011, 10039, 10055, 11617, 10065, 10081, 10097, 10141, 10171, 10233, 10274, 10303, 9993, 13832, 9995,
		/*   371 */ 13530, 13536, 10351, 10367, 10392, 10408, 10424, 11205, 11205, 11205, 11205, 11205, 11205, 10461, 10578,
		/*   386 */ 11205, 15859, 11205, 11205, 10606, 10258, 10599, 11205, 11205, 15697, 10627, 11902, 11205, 14818, 11205,
		/*   401 */ 17869, 11205, 18143, 14389, 11205, 11205, 12700, 9235, 9993, 10247, 9102, 9123, 9162, 21004, 11205,
		/*   416 */ 18143, 9180, 9196, 9212, 9228, 9251, 9274, 9297, 12708, 9258, 9281, 27732, 13600, 11205, 11031, 9313,
		/*   432 */ 9350, 9368, 9405, 9464, 10284, 9513, 9542, 9532, 10287, 9516, 9545, 27421, 14786, 9561, 27538, 12436,
		/*   448 */ 9589, 9619, 10121, 9655, 10829, 10109, 10125, 9659, 10833, 14073, 9675, 9704, 9741, 9778, 9794, 9810,
		/*   464 */ 9832, 9762, 9804, 9826, 9756, 9848, 20255, 18142, 9878, 9893, 9914, 9888, 9909, 9930, 9961, 14375, 9382,
		/*   481 */ 9986, 9389, 13842, 10011, 10039, 10055, 11617, 10065, 10081, 10097, 10141, 10171, 10233, 10274, 10303,
		/*   496 */ 9993, 13832, 9995, 13530, 13536, 10351, 10367, 10392, 10408, 10424, 11205, 11205, 11205, 11205, 11205,
		/*   511 */ 11205, 10664, 10741, 11205, 14557, 10715, 11205, 10741, 14709, 10693, 10733, 10706, 10744, 10760, 11913,
		/*   526 */ 11205, 21648, 11205, 22171, 11205, 18143, 14389, 11205, 11205, 12700, 9235, 9993, 10155, 9102, 9123,
		/*   541 */ 9162, 21004, 11205, 18143, 9180, 9196, 9212, 9228, 9251, 9274, 9297, 12708, 9258, 9281, 27732, 13600,
		/*   557 */ 11205, 11031, 9313, 9350, 9368, 9405, 9464, 10284, 9513, 9542, 10819, 10287, 9516, 9545, 27421, 14786,
		/*   573 */ 9561, 27538, 12436, 9589, 9619, 10121, 9655, 10829, 10109, 10125, 9659, 10833, 14073, 9675, 9704, 9741,
		/*   589 */ 9778, 9794, 9810, 9832, 9762, 9804, 9826, 9756, 9848, 20255, 18142, 9878, 9893, 9914, 9888, 9909, 9930,
		/*   606 */ 9961, 14375, 9382, 9986, 9389, 13842, 10011, 10039, 10055, 11617, 10065, 10081, 10097, 10141, 10171,
		/*   621 */ 10233, 10274, 10303, 9993, 13832, 9995, 13530, 13536, 10351, 10367, 10392, 10408, 10424, 11205, 11205,
		/*   636 */ 11205, 11205, 11205, 11205, 10461, 9489, 11205, 14557, 10849, 11205, 14875, 10870, 10912, 11205, 12739,
		/*   651 */ 10930, 10942, 11913, 11205, 14818, 11205, 10536, 11205, 18143, 14389, 11205, 11205, 12700, 9235, 9993,
		/*   666 */ 10316, 9102, 9123, 9162, 21004, 11205, 18143, 9180, 9196, 9212, 9228, 9251, 9274, 9297, 12708, 9258,
		/*   682 */ 9281, 27732, 13600, 11205, 11031, 9313, 9350, 9368, 9405, 9464, 10284, 9513, 9542, 9532, 10287, 9516,
		/*   698 */ 9545, 27421, 14786, 9561, 27538, 12436, 9589, 9619, 10121, 9655, 10829, 10109, 10125, 9659, 10833,
		/*   713 */ 14073, 9675, 9704, 9741, 9778, 9794, 9810, 9832, 9762, 9804, 9826, 9756, 9848, 20255, 18142, 9878, 9893,
		/*   730 */ 9914, 9888, 9909, 9930, 9961, 14375, 9382, 9986, 9389, 13842, 10011, 10039, 10055, 11617, 10065, 10081,
		/*   746 */ 10097, 10141, 10171, 10233, 10274, 10303, 9993, 13832, 9995, 13530, 13536, 10351, 10367, 10392, 10408,
		/*   761 */ 10424, 11205, 11205, 11205, 11205, 11205, 11205, 10461, 11205, 11205, 14557, 21177, 11205, 21173, 10958,
		/*   776 */ 10912, 11008, 11205, 12780, 12792, 11913, 11205, 14818, 11205, 10536, 11205, 18143, 14389, 11205, 11205,
		/*   791 */ 12700, 9235, 9993, 10316, 9102, 9123, 9162, 21004, 11205, 18143, 9180, 9196, 9212, 9228, 9251, 9274,
		/*   807 */ 9297, 12708, 9258, 9281, 27732, 13600, 11205, 11031, 9313, 9350, 9368, 9405, 9464, 10284, 9513, 9542,
		/*   823 */ 9532, 10287, 9516, 9545, 27421, 14786, 9561, 27538, 12436, 9589, 9619, 10121, 9655, 10829, 10109, 10125,
		/*   839 */ 9659, 10833, 14073, 9675, 9704, 9741, 9778, 9794, 9810, 9832, 9762, 9804, 9826, 9756, 9848, 20255,
		/*   855 */ 18142, 9878, 9893, 9914, 9888, 9909, 9930, 9961, 14375, 9382, 9986, 9389, 13842, 10011, 10039, 10055,
		/*   871 */ 11617, 10065, 10081, 10097, 10141, 10171, 10233, 10274, 10303, 9993, 13832, 9995, 13530, 13536, 10351,
		/*   886 */ 10367, 10392, 10408, 10424, 11205, 11205, 11205, 11205, 11205, 11205, 10461, 11205, 11205, 14557, 11205,
		/*   901 */ 11205, 11205, 25074, 11029, 11205, 11205, 11205, 13978, 11880, 11205, 14818, 11205, 10536, 11205, 18143,
		/*   916 */ 14389, 11205, 11205, 12700, 9235, 9993, 10316, 9102, 9123, 9162, 21004, 11205, 18143, 9180, 9196, 9212,
		/*   932 */ 9228, 9251, 9274, 11047, 12708, 9258, 9281, 27732, 13600, 11205, 11031, 9313, 9350, 9368, 9405, 9464,
		/*   948 */ 10284, 9513, 9542, 9532, 10287, 9516, 9545, 27421, 14786, 9561, 27538, 12436, 9589, 9619, 10121, 9655,
		/*   964 */ 10829, 10109, 10125, 9659, 10833, 14073, 9675, 9704, 9741, 9778, 9794, 9810, 9832, 9762, 9804, 9826,
		/*   980 */ 9756, 9848, 20255, 18142, 9878, 9893, 9914, 9888, 9909, 9930, 9961, 14375, 9382, 9986, 9389, 13842,
		/*   996 */ 10011, 10039, 10055, 11617, 10065, 10081, 10097, 10141, 10171, 10233, 10274, 10303, 9993, 13832, 9995,
		/*  1011 */ 13530, 13536, 10351, 10367, 10392, 10408, 10424, 11205, 11205, 11205, 11205, 11205, 11205, 10461, 11063,
		/*  1026 */ 11205, 16106, 11205, 11205, 11133, 11084, 11126, 11205, 11205, 16127, 11154, 11891, 11205, 14818, 11205,
		/*  1041 */ 10536, 11204, 18143, 14389, 11205, 11205, 12700, 9235, 9993, 10316, 11222, 9123, 9162, 21004, 11205,
		/*  1056 */ 18143, 9180, 9196, 9212, 9228, 9251, 9274, 9297, 12708, 9258, 9281, 27732, 13600, 11205, 11031, 9313,
		/*  1072 */ 9350, 9368, 9405, 9464, 10284, 9513, 9542, 9532, 10287, 9516, 9545, 27421, 14786, 9561, 27538, 12436,
		/*  1088 */ 9589, 9619, 10121, 9655, 10829, 10109, 10125, 9659, 10833, 14073, 9675, 9704, 9741, 9778, 9794, 9810,
		/*  1104 */ 9832, 9762, 9804, 9826, 9756, 9848, 20255, 18142, 9878, 9893, 9914, 9888, 9909, 9930, 9961, 14375, 9382,
		/*  1121 */ 9986, 9389, 13842, 10011, 10039, 10055, 11617, 10065, 10081, 10097, 10141, 10171, 10233, 10274, 10303,
		/*  1136 */ 9993, 13832, 9995, 13530, 13536, 10351, 10367, 10392, 10408, 10424, 11205, 11205, 11205, 11205, 11205,
		/*  1151 */ 11205, 10461, 11243, 11276, 11279, 11269, 11276, 11253, 11295, 11337, 11350, 11362, 11308, 11321, 11913,
		/*  1166 */ 11205, 12406, 11205, 10536, 11205, 18143, 14389, 11205, 11205, 12700, 9235, 9993, 10316, 9102, 11378,
		/*  1181 */ 9162, 21004, 11205, 18143, 9180, 9196, 9212, 9228, 9251, 9274, 9297, 12708, 9258, 9281, 27732, 13600,
		/*  1197 */ 11205, 11031, 9313, 9350, 9368, 9405, 9464, 10284, 9513, 9542, 9532, 10287, 9516, 9545, 27421, 14786,
		/*  1213 */ 9561, 27538, 12436, 9589, 9619, 10121, 9655, 10829, 10109, 10125, 9659, 10833, 14073, 9675, 9704, 9741,
		/*  1229 */ 9778, 9794, 9810, 9832, 9762, 9804, 9826, 9756, 9848, 20255, 18142, 9878, 9893, 9914, 9888, 9909, 9930,
		/*  1246 */ 9961, 14375, 9382, 9986, 9389, 13842, 10011, 10039, 10055, 11617, 10065, 10081, 10097, 10141, 10171,
		/*  1261 */ 10233, 10274, 10303, 9993, 13832, 9995, 13530, 13536, 10351, 10367, 10392, 10408, 10424, 11205, 11205,
		/*  1276 */ 11205, 11205, 11205, 11205, 10461, 18389, 11205, 14557, 11440, 11205, 15066, 14709, 11431, 11465, 11470,
		/*  1291 */ 11500, 11511, 11913, 11205, 13728, 11205, 10536, 11205, 18143, 14389, 11205, 11205, 12700, 9235, 9993,
		/*  1306 */ 10316, 9102, 11486, 9162, 21004, 11205, 18143, 9180, 9196, 9212, 9228, 9251, 9274, 9297, 12708, 9258,
		/*  1322 */ 9281, 27732, 13600, 11205, 11031, 9313, 9350, 9368, 9405, 9464, 10284, 9513, 9542, 9532, 10287, 9516,
		/*  1338 */ 9545, 27421, 14786, 9561, 27538, 12436, 9589, 9619, 10121, 9655, 10829, 10109, 10125, 9659, 10833,
		/*  1353 */ 14073, 9675, 9704, 9741, 9778, 9794, 9810, 9832, 9762, 9804, 9826, 9756, 9848, 20255, 18142, 9878, 9893,
		/*  1370 */ 9914, 9888, 9909, 9930, 9961, 14375, 9382, 9986, 9389, 13842, 10011, 10039, 10055, 11617, 10065, 10081,
		/*  1386 */ 10097, 10141, 10171, 10233, 10274, 10303, 9993, 13832, 9995, 13530, 13536, 10351, 10367, 10392, 10408,
		/*  1401 */ 10424, 11205, 11205, 11205, 11205, 11205, 11205, 10461, 17476, 11205, 14557, 11205, 11205, 11205, 14709,
		/*  1416 */ 11527, 11542, 11547, 11563, 11575, 11913, 11205, 14818, 11205, 10536, 11205, 18143, 14389, 11205, 11205,
		/*  1431 */ 12700, 9235, 9993, 10316, 9102, 9123, 9162, 21004, 11205, 18143, 9180, 9196, 9212, 9228, 9251, 9274,
		/*  1447 */ 11591, 12708, 9258, 9281, 27732, 13600, 11205, 11031, 9313, 9350, 9368, 9405, 9464, 10284, 9513, 9542,
		/*  1463 */ 11607, 10287, 9516, 9545, 27421, 14786, 9561, 27538, 12436, 9589, 9619, 10121, 9655, 10829, 10109,
		/*  1478 */ 10125, 9659, 10833, 14073, 9675, 9704, 9741, 9778, 9794, 9810, 9832, 9762, 9804, 9826, 9756, 9848,
		/*  1494 */ 20255, 18142, 9878, 9893, 9914, 9888, 9909, 9930, 9961, 14375, 9382, 9986, 9389, 13842, 10011, 10039,
		/*  1510 */ 10055, 11617, 10065, 10081, 10097, 10141, 10171, 10233, 10274, 10303, 9993, 13832, 9995, 13530, 13536,
		/*  1525 */ 10351, 10367, 10392, 10408, 10424, 11205, 11205, 11205, 11205, 11205, 11205, 10461, 11205, 11205, 14557,
		/*  1540 */ 11205, 11205, 11205, 14709, 11633, 11651, 11656, 11635, 11672, 11913, 11205, 14818, 11205, 10536, 11205,
		/*  1555 */ 18143, 14389, 11205, 11205, 12700, 9235, 9993, 10316, 9102, 9123, 9162, 24391, 11205, 18143, 9180, 9196,
		/*  1571 */ 9212, 9228, 9251, 9274, 9297, 12708, 9258, 9281, 27732, 13600, 11205, 11031, 9313, 9350, 9368, 9405,
		/*  1587 */ 9464, 10284, 9513, 9542, 9532, 10287, 9516, 9545, 27421, 14786, 9561, 27538, 12436, 9589, 9619, 10121,
		/*  1603 */ 9655, 10829, 10109, 10125, 9659, 10833, 14073, 9675, 9704, 9741, 9778, 9794, 9810, 9832, 9762, 9804,
		/*  1619 */ 9826, 9756, 9848, 20255, 18142, 9878, 9893, 9914, 9888, 9909, 9930, 9961, 14375, 9382, 9986, 9389,
		/*  1635 */ 13842, 10011, 10039, 10055, 11617, 10065, 10081, 10097, 10141, 10171, 10233, 10274, 10303, 9993, 13832,
		/*  1650 */ 9995, 13530, 13536, 10351, 10367, 10392, 10408, 10424, 11205, 11205, 11205, 11205, 11205, 11205, 10461,
		/*  1665 */ 23090, 11205, 14557, 15830, 11205, 23091, 14709, 11714, 11741, 11746, 11205, 11725, 11913, 11205, 14818,
		/*  1680 */ 11205, 10536, 11205, 18143, 14389, 11205, 11205, 12700, 9235, 9993, 10316, 9102, 9123, 9162, 21004,
		/*  1695 */ 11205, 18143, 9180, 9196, 9212, 9228, 9251, 9274, 9297, 12708, 9258, 9281, 27732, 13600, 11205, 11031,
		/*  1711 */ 9313, 9350, 9368, 9405, 9464, 10284, 9513, 9542, 9532, 10287, 9516, 9545, 27421, 14786, 9561, 27538,
		/*  1727 */ 12436, 9589, 9619, 10121, 9655, 10829, 10109, 10125, 9659, 10833, 14073, 9675, 9704, 9741, 9778, 9794,
		/*  1743 */ 9810, 9832, 9762, 9804, 9826, 9756, 9848, 20255, 18142, 9878, 9893, 9914, 9888, 9909, 9930, 9961, 14375,
		/*  1760 */ 9382, 9986, 9389, 13842, 10011, 10039, 10055, 11617, 10065, 10081, 10097, 10141, 10171, 10233, 10274,
		/*  1775 */ 10303, 9993, 13832, 9995, 13530, 13536, 10351, 10367, 10392, 10408, 10424, 11205, 11205, 11205, 11205,
		/*  1790 */ 11205, 11205, 11762, 11205, 11205, 14557, 11205, 11205, 11205, 14709, 11786, 11804, 11809, 11788, 11825,
		/*  1805 */ 11869, 11205, 14818, 11205, 10536, 11205, 20493, 17233, 11205, 11205, 18622, 16571, 18342, 18192, 11205,
		/*  1820 */ 17296, 16651, 24391, 27901, 20493, 12040, 16879, 11205, 18623, 22834, 22834, 21691, 18342, 18342, 18342,
		/*  1835 */ 22407, 11205, 11205, 11031, 10717, 25777, 12039, 17232, 27909, 22834, 22834, 22834, 20351, 18342, 18342,
		/*  1850 */ 18342, 10611, 11940, 11205, 11205, 26837, 12038, 16879, 22833, 22834, 22834, 15778, 18342, 18342, 18342,
		/*  1865 */ 11205, 11205, 11205, 9631, 12040, 10214, 16485, 22834, 16022, 22641, 18342, 17277, 11205, 20641, 20492,
		/*  1880 */ 27324, 22834, 11960, 18342, 20961, 24429, 24768, 12030, 22829, 24899, 18342, 23418, 25908, 27439, 12056,
		/*  1895 */ 12074, 17272, 11205, 21815, 12090, 12123, 23621, 12146, 27138, 23290, 18620, 25094, 9326, 12162, 20110,
		/*  1910 */ 25170, 24112, 19102, 11989, 11205, 11205, 11205, 11205, 11205, 11205, 10461, 11205, 11205, 14557, 11205,
		/*  1925 */ 11205, 11205, 12185, 10912, 11205, 11205, 10648, 12221, 11913, 11205, 14818, 11205, 22538, 11205, 20493,
		/*  1940 */ 17233, 11205, 11205, 18622, 16571, 18342, 12258, 11205, 17296, 11205, 21004, 11205, 20493, 12040, 16879,
		/*  1955 */ 11205, 18623, 22834, 22834, 21691, 18342, 18342, 18342, 19280, 11205, 11205, 11031, 11205, 11205, 12039,
		/*  1970 */ 17232, 27909, 22834, 22834, 22834, 20351, 18342, 18342, 18342, 11205, 11205, 11205, 11205, 11205, 12038,
		/*  1985 */ 16879, 22833, 22834, 22834, 15778, 18342, 18342, 18342, 11205, 11205, 11205, 11205, 12040, 10214, 22834,
		/*  2000 */ 22834, 16022, 18342, 18342, 17277, 11205, 11205, 20492, 27324, 22834, 16672, 18342, 18342, 11205, 11205,
		/*  2015 */ 20493, 22829, 24899, 18342, 19278, 11205, 27439, 22832, 20113, 17272, 11205, 21815, 17647, 17274, 24151,
		/*  2030 */ 20114, 15993, 20114, 18620, 25094, 18624, 17276, 20110, 25170, 24112, 19102, 11989, 11205, 11205, 11205,
		/*  2045 */ 11205, 11205, 11205, 10461, 25418, 11205, 14557, 11205, 11205, 11205, 14709, 12284, 12303, 12333, 12287,
		/*  2060 */ 12317, 11913, 11205, 14818, 11205, 10536, 24881, 18143, 12349, 11205, 11205, 12700, 9235, 9993, 10316,
		/*  2075 */ 9102, 9123, 9162, 21004, 11205, 18143, 9180, 9196, 9212, 9228, 9251, 9274, 9297, 12708, 9258, 9281,
		/*  2091 */ 27732, 13600, 11205, 11031, 9313, 9350, 9368, 9405, 9464, 10284, 9513, 9542, 9532, 10287, 9516, 9545,
		/*  2107 */ 27421, 14786, 9561, 27538, 12436, 9589, 9619, 10121, 9655, 10829, 10109, 10125, 9659, 10833, 14073,
		/*  2122 */ 9675, 9704, 9741, 9778, 9794, 9810, 9832, 9762, 9804, 9826, 9756, 9848, 20255, 18142, 9878, 9893, 9914,
		/*  2139 */ 9888, 9909, 9930, 9961, 14375, 9382, 9986, 9389, 13842, 10011, 10039, 10055, 11617, 10065, 10081, 10097,
		/*  2155 */ 10141, 10171, 10233, 10274, 10303, 9993, 13832, 9995, 13530, 13536, 10351, 10367, 10392, 10408, 10424,
		/*  2170 */ 11205, 11205, 11205, 11205, 11205, 11205, 10461, 12433, 11205, 14557, 11205, 11205, 11205, 12385, 12422,
		/*  2185 */ 12433, 11205, 18957, 12452, 25933, 11205, 14818, 11205, 10984, 11205, 20493, 17233, 11205, 11205, 18622,
		/*  2200 */ 16571, 18342, 27393, 11205, 17296, 11205, 19555, 11205, 20493, 12040, 16879, 11205, 18623, 22834, 22834,
		/*  2215 */ 21691, 18342, 18342, 18342, 24926, 11205, 11205, 14902, 12489, 11205, 12039, 17232, 27909, 22834, 22834,
		/*  2230 */ 22834, 20351, 18342, 18342, 18342, 12510, 11205, 11205, 24018, 11205, 12038, 16879, 22833, 22834, 22834,
		/*  2245 */ 12534, 18342, 18342, 18342, 12583, 11205, 11205, 11205, 12040, 10214, 22834, 22834, 12602, 18342, 18342,
		/*  2260 */ 17277, 11205, 11205, 20492, 27324, 22834, 16044, 18342, 18342, 11205, 11205, 20493, 22829, 24899, 18342,
		/*  2275 */ 19278, 11205, 27439, 22832, 20113, 17272, 11205, 21815, 17647, 17274, 24151, 20114, 15993, 20114, 18620,
		/*  2290 */ 25094, 18624, 17276, 20110, 25170, 24112, 19102, 11989, 11205, 11205, 11205, 11205, 11205, 11205, 10461,
		/*  2305 */ 16794, 11205, 19509, 23185, 11205, 18824, 14709, 12664, 13631, 12689, 11205, 12724, 15287, 11205, 22311,
		/*  2320 */ 11205, 10536, 11205, 18143, 14389, 11205, 11205, 14141, 12815, 13374, 12881, 9102, 12765, 9162, 21004,
		/*  2335 */ 11205, 18143, 9180, 9196, 9212, 12808, 13297, 12831, 13113, 13377, 12868, 12907, 13595, 13600, 11205,
		/*  2350 */ 11031, 9313, 9350, 9368, 9405, 12948, 14149, 12987, 13500, 12961, 13407, 13365, 13200, 27421, 14786,
		/*  2365 */ 9561, 27538, 12436, 9589, 9619, 13493, 13015, 14017, 12999, 13031, 13583, 13060, 14073, 9675, 9704,
		/*  2380 */ 9741, 9778, 13085, 13100, 13311, 13129, 13160, 13191, 13216, 9848, 20255, 18142, 13241, 12932, 13465,
		/*  2395 */ 13069, 13267, 9930, 9961, 14375, 9603, 12842, 13175, 12971, 10011, 10039, 13283, 13251, 13327, 10081,
		/*  2410 */ 13343, 13393, 13423, 13451, 13355, 13481, 12849, 12922, 12852, 14008, 13516, 13552, 13568, 13044, 13144,
		/*  2425 */ 13616, 11205, 11205, 11205, 11205, 11205, 11205, 10461, 27302, 11205, 14557, 14200, 11205, 11205, 14709,
		/*  2440 */ 13647, 13687, 13692, 11205, 13672, 11913, 11205, 14818, 11205, 10536, 11205, 18143, 14389, 11205, 11205,
		/*  2455 */ 12700, 9235, 9993, 10316, 9102, 9123, 9162, 21004, 11205, 18143, 9180, 9196, 9212, 9228, 9251, 9274,
		/*  2471 */ 9297, 12708, 9258, 9281, 27732, 13600, 11205, 11031, 13708, 9350, 9368, 9405, 9464, 10284, 9513, 9542,
		/*  2487 */ 9532, 10287, 9516, 9545, 13744, 14786, 9561, 21418, 12436, 9589, 9619, 10121, 9655, 10829, 10109, 10125,
		/*  2503 */ 9659, 10833, 13781, 9675, 9704, 9741, 9778, 9794, 9810, 9832, 13817, 9804, 9826, 9756, 9848, 20255,
		/*  2519 */ 18142, 9878, 9893, 13858, 9888, 9909, 9930, 9961, 14375, 9382, 9986, 9389, 13842, 10011, 10039, 10055,
		/*  2535 */ 11617, 10065, 10081, 10097, 10141, 10171, 10233, 10274, 10303, 9993, 13832, 9995, 13530, 13536, 10351,
		/*  2550 */ 10367, 10392, 10408, 10424, 11205, 11205, 11205, 11205, 11205, 11205, 10461, 11205, 11205, 14557, 11205,
		/*  2565 */ 11205, 11205, 11205, 13908, 13923, 13928, 22449, 13944, 11913, 11205, 14818, 11205, 10536, 11205, 18143,
		/*  2580 */ 13994, 11205, 11205, 12700, 9235, 9993, 14033, 9102, 9123, 9162, 21004, 11205, 18143, 9180, 9196, 9212,
		/*  2596 */ 9228, 9251, 9274, 9297, 12708, 9258, 9281, 27732, 13600, 11205, 11031, 9313, 9350, 9368, 9405, 9464,
		/*  2612 */ 10284, 9513, 9542, 9532, 10287, 9516, 9545, 27421, 14786, 9561, 27538, 12436, 9589, 9619, 10121, 9655,
		/*  2628 */ 10829, 10109, 10125, 9659, 10833, 14073, 9675, 9704, 9741, 9778, 9794, 9810, 9832, 9762, 9804, 9826,
		/*  2644 */ 9756, 9848, 20255, 18142, 9878, 9893, 9914, 9888, 9909, 9930, 9961, 14375, 9382, 9986, 9389, 13842,
		/*  2660 */ 10011, 10039, 10055, 11617, 10065, 10081, 10097, 10141, 10171, 10233, 10274, 10303, 9993, 13832, 9995,
		/*  2675 */ 13530, 13536, 10351, 10367, 10392, 10408, 10424, 11205, 11205, 11205, 11205, 11205, 11205, 14059, 10914,
		/*  2690 */ 11205, 14557, 11205, 11205, 11205, 14709, 14089, 14116, 14130, 11205, 14100, 11924, 11205, 14818, 11205,
		/*  2705 */ 10536, 11205, 18143, 14165, 11205, 11205, 12700, 9235, 9993, 14181, 9102, 9123, 9162, 21004, 11205,
		/*  2720 */ 18143, 9180, 9196, 9212, 9228, 9251, 9274, 9297, 12708, 9258, 9281, 27732, 13600, 11205, 11031, 9313,
		/*  2736 */ 9350, 9368, 9405, 9464, 10284, 9513, 9542, 9532, 10287, 9516, 9545, 27421, 14786, 9561, 27538, 12436,
		/*  2752 */ 9589, 9619, 10121, 9655, 10829, 10109, 10125, 9659, 10833, 14073, 9675, 9704, 9741, 9778, 9794, 9810,
		/*  2768 */ 9832, 9762, 9804, 9826, 9756, 9848, 20255, 18142, 9878, 9893, 9914, 9888, 9909, 9930, 9961, 14375, 9382,
		/*  2785 */ 9986, 9389, 13842, 10011, 10039, 10055, 11617, 10065, 10081, 10097, 10141, 10171, 10233, 10274, 10303,
		/*  2800 */ 9993, 13832, 9995, 13530, 13536, 10351, 10367, 10392, 10408, 10424, 11205, 11205, 11205, 11205, 11205,
		/*  2815 */ 11205, 14216, 13759, 11205, 14557, 11205, 11205, 11205, 14709, 14252, 14279, 14284, 11205, 14263, 14300,
		/*  2830 */ 11205, 14818, 11205, 10536, 11205, 18143, 14328, 11205, 11205, 12700, 9235, 9993, 9477, 9102, 9123,
		/*  2845 */ 9162, 21004, 11205, 18143, 9180, 9196, 9212, 9228, 9251, 9274, 9297, 12708, 9258, 9281, 27732, 13600,
		/*  2861 */ 11205, 11031, 9313, 9350, 9368, 9405, 9464, 10284, 9513, 9542, 9532, 10287, 9516, 9545, 27421, 14786,
		/*  2877 */ 9561, 27538, 12436, 9589, 9619, 10121, 9655, 10829, 10109, 10125, 9659, 10833, 14073, 9675, 9704, 9741,
		/*  2893 */ 9778, 9794, 9810, 9832, 9762, 9804, 9826, 9756, 9848, 20255, 18142, 9878, 9893, 9914, 9888, 9909, 9930,
		/*  2910 */ 9961, 14375, 9382, 9986, 9389, 13842, 10011, 10039, 10055, 11617, 10065, 10081, 10097, 10141, 10171,
		/*  2925 */ 10233, 10274, 10303, 9993, 13832, 9995, 13530, 13536, 10351, 10367, 10392, 10408, 10424, 11205, 11205,
		/*  2940 */ 11205, 11205, 11205, 11205, 14344, 11205, 11205, 14557, 14400, 11205, 11205, 14709, 10912, 25622, 14404,
		/*  2955 */ 12242, 14360, 11913, 11205, 14818, 11205, 10536, 25251, 18143, 14389, 11205, 11205, 12700, 9235, 9993,
		/*  2970 */ 14420, 9102, 9123, 9162, 21004, 11205, 18143, 9180, 9196, 9212, 9228, 9251, 9274, 9297, 12708, 9258,
		/*  2986 */ 9281, 27732, 13600, 11205, 11031, 9313, 9350, 9368, 9405, 9464, 10284, 9513, 9542, 9532, 10287, 9516,
		/*  3002 */ 9545, 27421, 14786, 9561, 27538, 12436, 9589, 9619, 10121, 9655, 10829, 10109, 10125, 9659, 10833,
		/*  3017 */ 14073, 9675, 9704, 9741, 9778, 9794, 9810, 9832, 9762, 9804, 9826, 9756, 9848, 20255, 18142, 9878, 9893,
		/*  3034 */ 9914, 9888, 9909, 9930, 9961, 14375, 9382, 9986, 9389, 13842, 10011, 10039, 10055, 11617, 10065, 10081,
		/*  3050 */ 10097, 10141, 10171, 10233, 10274, 10303, 9993, 13832, 9995, 13530, 13536, 10351, 10367, 10392, 10408,
		/*  3065 */ 10424, 11205, 11205, 11205, 11205, 11205, 11205, 10461, 11205, 11205, 14557, 11205, 11205, 11205, 14709,
		/*  3080 */ 10912, 11205, 11205, 22956, 14465, 11913, 11205, 14818, 11205, 10536, 11205, 18143, 14389, 11205, 11205,
		/*  3095 */ 12700, 9235, 9993, 10316, 9102, 9123, 9162, 21004, 11205, 18143, 9180, 9196, 9212, 9228, 9251, 9274,
		/*  3111 */ 9297, 12708, 9258, 9281, 27732, 13600, 11205, 11031, 9313, 9350, 9368, 9405, 9464, 10284, 9513, 9542,
		/*  3127 */ 9532, 10287, 9516, 9545, 27421, 14786, 9561, 27538, 12436, 9589, 9619, 10121, 9655, 10829, 10109, 10125,
		/*  3143 */ 9659, 10833, 14073, 9675, 9704, 9741, 9778, 9794, 9810, 9832, 9762, 9804, 9826, 9756, 9848, 20255,
		/*  3159 */ 18142, 9878, 9893, 9914, 9888, 9909, 9930, 9961, 14375, 9382, 9986, 9389, 13842, 10011, 10039, 10055,
		/*  3175 */ 11617, 10065, 10081, 10097, 10141, 10171, 10233, 10274, 10303, 9993, 13832, 9995, 13530, 13536, 10351,
		/*  3190 */ 10367, 10392, 10408, 10424, 11205, 11205, 11205, 11205, 11205, 11205, 14507, 11205, 11205, 14557, 11205,
		/*  3205 */ 11205, 11205, 14709, 14529, 14554, 10562, 17646, 20807, 9146, 11205, 14818, 11205, 11205, 11205, 20493,
		/*  3220 */ 17233, 11205, 11205, 18622, 16571, 18342, 18192, 11205, 17296, 11205, 11205, 11205, 20493, 12040, 16879,
		/*  3235 */ 11205, 27913, 22834, 22834, 21842, 18342, 18342, 18342, 19280, 11205, 11205, 11205, 15692, 11205, 12039,
		/*  3250 */ 17232, 27909, 22834, 22834, 22834, 23348, 18342, 18342, 18342, 14573, 11205, 11205, 24018, 11205, 12038,
		/*  3265 */ 16879, 22833, 22834, 22834, 15778, 18342, 18342, 18342, 12583, 11205, 11205, 14597, 12040, 10214, 22834,
		/*  3280 */ 22834, 26388, 18342, 18342, 17277, 11205, 11205, 20492, 27324, 22834, 16044, 18342, 18342, 11205, 16363,
		/*  3295 */ 20493, 22829, 24899, 18342, 19278, 11205, 27439, 22832, 20113, 17272, 11205, 21815, 17647, 17274, 24151,
		/*  3310 */ 20114, 15993, 20114, 18620, 25094, 18624, 17276, 20110, 25170, 24112, 19102, 11989, 11205, 11205, 11205,
		/*  3325 */ 11205, 11205, 11205, 14507, 11205, 11205, 14557, 11205, 11205, 11205, 14709, 14529, 14554, 10562, 17646,
		/*  3340 */ 20807, 9146, 11205, 14818, 11205, 11205, 11205, 20493, 17233, 11205, 11205, 18622, 16571, 18342, 18192,
		/*  3355 */ 11205, 17296, 11205, 11205, 11205, 20493, 12040, 16879, 11205, 27913, 22834, 22834, 21842, 18342, 18342,
		/*  3370 */ 18342, 19280, 11205, 11205, 11205, 15692, 11205, 12039, 17232, 27909, 22834, 22834, 22834, 23348, 18342,
		/*  3385 */ 18342, 18342, 14573, 11205, 11205, 24018, 11205, 12038, 16879, 22833, 22834, 22834, 15778, 18342, 18342,
		/*  3400 */ 18342, 12583, 11205, 11205, 11205, 12040, 10214, 22834, 22834, 26388, 18342, 18342, 17277, 11205, 11205,
		/*  3415 */ 20492, 27324, 22834, 16044, 18342, 18342, 11205, 11205, 20493, 22829, 24899, 18342, 19278, 11205, 27439,
		/*  3430 */ 22832, 20113, 17272, 11205, 21815, 17647, 17274, 24151, 20114, 15993, 20114, 18620, 25094, 18624, 17276,
		/*  3445 */ 20110, 25170, 24112, 19102, 11989, 11205, 11205, 11205, 11205, 11205, 11205, 14507, 11205, 11205, 14557,
		/*  3460 */ 11205, 11205, 11205, 14709, 14529, 14554, 10562, 17646, 20807, 9146, 11205, 14818, 11205, 11205, 11205,
		/*  3475 */ 20493, 17233, 11205, 11205, 18622, 16571, 18342, 18192, 11205, 17296, 11205, 11205, 11205, 20493, 12040,
		/*  3490 */ 16879, 11205, 27913, 22834, 22834, 21842, 18342, 18342, 18342, 19280, 11205, 11205, 11205, 15692, 14615,
		/*  3505 */ 12039, 17232, 27909, 22834, 22834, 22834, 23348, 18342, 18342, 18342, 14573, 11205, 11205, 24018, 11205,
		/*  3520 */ 12038, 16879, 22833, 22834, 22834, 15778, 18342, 18342, 18342, 12583, 11205, 11205, 11205, 12040, 10214,
		/*  3535 */ 22834, 22834, 26388, 18342, 18342, 17277, 11205, 11205, 20492, 27324, 22834, 16044, 18342, 18342, 11205,
		/*  3550 */ 11205, 20493, 22829, 24899, 18342, 19278, 11205, 27439, 22832, 20113, 17272, 11205, 21815, 17647, 17274,
		/*  3565 */ 24151, 20114, 15993, 20114, 18620, 25094, 18624, 17276, 20110, 25170, 24112, 19102, 11989, 11205, 11205,
		/*  3580 */ 11205, 11205, 11205, 11205, 14507, 11205, 11205, 14557, 11205, 11205, 11205, 14709, 14529, 14554, 10562,
		/*  3595 */ 17646, 20807, 9146, 11205, 14818, 11205, 11205, 11205, 20493, 17233, 11205, 11205, 18622, 16571, 18342,
		/*  3610 */ 18192, 11205, 17296, 11205, 11205, 11205, 20493, 12040, 16879, 11205, 27913, 22834, 22834, 21842, 18342,
		/*  3625 */ 18342, 18342, 19280, 11205, 11205, 11205, 15692, 11205, 12039, 17232, 27909, 22834, 22834, 22834, 23348,
		/*  3640 */ 18342, 18342, 18342, 14573, 11205, 11205, 24018, 14632, 12038, 16879, 22833, 22834, 22834, 15778, 18342,
		/*  3655 */ 18342, 18342, 12583, 11205, 11205, 11205, 12040, 10214, 22834, 22834, 26388, 18342, 18342, 17277, 11205,
		/*  3670 */ 11205, 20492, 27324, 22834, 16044, 18342, 18342, 11205, 11205, 20493, 22829, 24899, 18342, 19278, 11205,
		/*  3685 */ 27439, 22832, 20113, 17272, 11205, 21815, 17647, 17274, 24151, 20114, 15993, 20114, 18620, 25094, 18624,
		/*  3700 */ 17276, 20110, 25170, 24112, 19102, 11989, 11205, 11205, 11205, 11205, 11205, 11205, 14507, 11205, 11205,
		/*  3715 */ 14557, 11205, 11205, 11205, 14709, 14529, 14554, 10562, 17646, 20807, 9146, 11205, 14818, 11205, 27579,
		/*  3730 */ 11205, 20493, 17233, 11205, 11205, 18622, 16571, 18342, 18192, 11205, 17296, 11205, 27579, 11205, 20493,
		/*  3745 */ 12040, 16879, 11205, 27913, 22834, 22834, 21842, 18342, 18342, 18342, 19280, 11205, 11205, 11205, 15692,
		/*  3760 */ 11205, 12039, 17232, 27909, 22834, 22834, 22834, 23348, 18342, 18342, 18342, 14573, 11205, 11205, 24018,
		/*  3775 */ 11205, 12038, 16879, 22833, 22834, 22834, 15778, 18342, 18342, 18342, 12583, 11205, 11205, 11205, 12040,
		/*  3790 */ 10214, 22834, 22834, 26388, 18342, 18342, 17277, 11205, 11205, 20492, 27324, 22834, 16044, 18342, 18342,
		/*  3805 */ 11205, 11205, 20493, 22829, 24899, 18342, 19278, 11205, 27439, 22832, 20113, 17272, 11205, 21815, 17647,
		/*  3820 */ 17274, 24151, 20114, 15993, 20114, 18620, 25094, 18624, 17276, 20110, 25170, 24112, 19102, 11989, 11205,
		/*  3835 */ 11205, 11205, 11205, 11205, 11205, 14507, 11205, 11205, 14557, 11205, 11205, 11205, 14709, 14529, 14554,
		/*  3850 */ 10562, 17646, 20807, 9146, 11205, 14818, 11205, 11205, 11205, 20493, 17233, 11205, 11205, 18622, 16571,
		/*  3865 */ 18342, 18192, 11205, 17296, 11205, 11205, 11205, 20493, 12040, 16879, 11205, 27913, 22834, 22834, 21842,
		/*  3880 */ 18342, 18342, 18342, 19280, 11205, 11205, 11205, 11205, 11205, 12039, 17232, 27909, 22834, 22834, 22834,
		/*  3895 */ 23348, 18342, 18342, 18342, 11205, 11205, 11205, 11205, 11205, 12038, 16879, 22833, 22834, 22834, 15778,
		/*  3910 */ 18342, 18342, 18342, 11205, 11205, 11205, 11205, 12040, 10214, 22834, 22834, 16022, 18342, 18342, 17277,
		/*  3925 */ 11205, 11205, 20492, 27324, 22834, 16672, 18342, 18342, 11205, 11205, 20493, 22829, 24899, 18342, 19278,
		/*  3940 */ 11205, 27439, 22832, 20113, 17272, 11205, 21815, 17647, 17274, 24151, 20114, 15993, 20114, 18620, 25094,
		/*  3955 */ 18624, 17276, 20110, 25170, 24112, 19102, 11989, 11205, 11205, 11205, 11205, 11205, 11205, 14507, 11205,
		/*  3970 */ 11205, 14557, 11205, 11205, 11205, 14709, 14529, 14554, 10562, 17646, 20807, 9146, 11205, 14818, 11205,
		/*  3985 */ 11205, 11205, 20493, 17233, 11205, 11205, 18622, 16571, 18342, 17081, 11205, 17296, 11205, 11205, 11205,
		/*  4000 */ 20493, 12040, 16879, 11205, 27913, 22834, 22834, 21842, 18342, 18342, 18342, 19280, 11205, 11205, 11205,
		/*  4015 */ 11205, 11205, 12039, 17232, 27909, 22834, 22834, 22834, 23348, 18342, 18342, 18342, 11205, 11205, 11205,
		/*  4030 */ 11205, 11205, 12038, 16879, 22833, 22834, 22834, 15778, 18342, 18342, 18342, 11205, 11205, 11205, 11205,
		/*  4045 */ 12040, 10214, 22834, 22834, 16022, 18342, 18342, 17277, 11205, 11205, 20492, 27324, 22834, 16672, 18342,
		/*  4060 */ 18342, 11205, 11205, 20493, 22829, 24899, 18342, 19278, 11205, 27439, 22832, 20113, 17272, 11205, 21815,
		/*  4075 */ 17647, 17274, 24151, 20114, 15993, 20114, 18620, 25094, 18624, 17276, 20110, 25170, 24112, 19102, 11989,
		/*  4090 */ 11205, 11205, 11205, 11205, 11205, 11205, 14507, 11205, 11205, 14557, 11205, 11205, 11205, 14709, 14529,
		/*  4105 */ 14554, 10562, 17646, 27229, 9146, 11205, 14818, 11205, 11205, 11205, 20493, 17233, 11205, 11205, 18622,
		/*  4120 */ 16571, 18342, 18192, 11205, 17296, 11205, 11205, 11205, 20493, 12040, 16879, 11205, 27913, 22834, 22834,
		/*  4135 */ 21842, 18342, 18342, 18342, 19280, 11205, 11205, 11205, 11205, 11205, 12039, 17232, 27909, 22834, 22834,
		/*  4150 */ 22834, 23348, 18342, 18342, 18342, 11205, 11205, 11205, 11205, 11205, 12038, 16879, 22833, 22834, 22834,
		/*  4165 */ 15778, 18342, 18342, 18342, 11205, 11205, 11205, 11205, 12040, 10214, 22834, 22834, 16022, 18342, 18342,
		/*  4180 */ 17277, 11205, 11205, 20492, 27324, 22834, 16672, 18342, 18342, 11205, 11205, 20493, 22829, 24899, 18342,
		/*  4195 */ 19278, 11205, 27439, 22832, 20113, 17272, 11205, 21815, 17647, 17274, 24151, 20114, 15993, 20114, 18620,
		/*  4210 */ 25094, 18624, 17276, 20110, 25170, 24112, 19102, 11989, 11205, 11205, 11205, 11205, 11205, 11205, 14507,
		/*  4225 */ 11205, 11205, 14557, 11205, 11205, 11205, 14709, 14650, 14554, 10562, 17646, 20807, 9146, 11205, 14818,
		/*  4240 */ 11205, 11205, 11205, 20493, 17233, 11205, 11205, 18622, 16571, 18342, 18192, 11205, 17296, 11205, 11205,
		/*  4255 */ 15505, 20493, 12040, 16879, 11205, 27913, 22834, 22834, 21842, 18342, 18342, 18342, 19280, 11205, 11205,
		/*  4270 */ 11205, 11205, 11205, 12039, 17232, 27909, 22834, 22834, 22834, 23348, 18342, 18342, 18342, 11205, 11205,
		/*  4285 */ 11205, 11205, 11205, 12038, 16879, 22833, 22834, 22834, 15778, 18342, 18342, 18342, 11205, 11205, 11205,
		/*  4300 */ 11205, 12040, 10214, 22834, 22834, 16022, 18342, 18342, 17277, 11205, 11205, 20492, 27324, 22834, 16672,
		/*  4315 */ 18342, 18342, 11205, 11205, 20493, 22829, 24899, 18342, 19278, 11205, 27439, 22832, 20113, 17272, 11205,
		/*  4330 */ 21815, 17647, 17274, 24151, 20114, 15993, 20114, 18620, 25094, 18624, 17276, 20110, 25170, 24112, 19102,
		/*  4345 */ 11989, 11205, 11205, 11205, 11205, 11205, 11205, 14507, 11205, 11205, 14557, 11205, 11205, 11205, 14709,
		/*  4360 */ 14529, 14554, 12749, 14675, 14687, 9146, 11205, 14818, 11205, 11205, 11205, 20493, 17233, 11205, 11205,
		/*  4375 */ 18622, 16571, 18342, 18192, 11205, 17296, 11205, 11205, 11205, 20493, 12040, 16879, 11205, 27913, 22834,
		/*  4390 */ 22834, 21842, 18342, 18342, 18342, 19280, 11205, 11205, 11205, 11205, 11205, 12039, 17232, 27909, 22834,
		/*  4405 */ 22834, 22834, 23348, 18342, 18342, 18342, 11205, 11205, 11205, 11205, 11205, 12038, 16879, 22833, 22834,
		/*  4420 */ 22834, 15778, 18342, 18342, 18342, 11205, 11205, 11205, 11205, 12040, 10214, 22834, 22834, 16022, 18342,
		/*  4435 */ 18342, 17277, 11205, 11205, 20492, 27324, 22834, 16672, 18342, 18342, 11205, 11205, 20493, 22829, 24899,
		/*  4450 */ 18342, 19278, 11205, 27439, 22832, 20113, 17272, 11205, 21815, 17647, 17274, 24151, 20114, 15993, 20114,
		/*  4465 */ 18620, 25094, 18624, 17276, 20110, 25170, 24112, 19102, 11989, 11205, 11205, 11205, 11205, 11205, 11205,
		/*  4480 */ 14507, 11205, 11205, 14557, 11205, 11205, 11205, 14709, 14529, 14554, 10562, 17646, 20807, 9146, 11205,
		/*  4495 */ 14818, 11205, 11205, 11205, 20493, 17233, 11205, 11205, 18622, 16571, 18342, 18192, 11205, 17296, 11205,
		/*  4510 */ 11205, 11205, 20493, 12040, 16879, 11205, 27913, 22834, 22834, 21842, 18342, 18342, 18342, 19280, 11205,
		/*  4525 */ 11205, 11205, 11205, 11205, 12039, 17232, 27909, 22834, 22834, 22834, 23348, 18342, 18342, 18342, 11205,
		/*  4540 */ 11205, 11205, 11205, 11205, 12038, 16879, 22833, 22834, 22834, 15778, 18342, 18342, 18342, 11205, 11205,
		/*  4555 */ 11205, 11205, 12040, 10214, 22834, 22834, 16022, 18342, 18342, 17277, 11205, 24208, 20492, 27324, 22834,
		/*  4570 */ 16672, 18342, 18342, 11205, 11205, 20493, 22829, 24899, 18342, 19278, 11205, 27439, 22832, 20113, 17272,
		/*  4585 */ 11205, 21815, 17647, 17274, 24151, 20114, 15993, 20114, 18620, 25094, 18624, 17276, 20110, 25170, 24112,
		/*  4600 */ 19102, 11989, 11205, 11205, 11205, 11205, 11205, 11205, 14703, 11205, 11205, 14557, 11205, 11205, 11205,
		/*  4615 */ 14709, 14529, 14554, 10562, 17646, 20807, 9146, 11205, 14818, 11205, 11205, 11205, 20493, 17233, 11205,
		/*  4630 */ 11205, 18622, 16571, 18342, 18192, 11205, 17296, 11205, 11205, 11205, 20493, 12040, 16879, 11205, 27913,
		/*  4645 */ 22834, 22834, 21842, 18342, 18342, 18342, 19280, 11205, 11205, 11205, 11205, 11205, 12039, 17232, 27909,
		/*  4660 */ 22834, 22834, 22834, 23348, 18342, 18342, 18342, 11205, 11205, 11205, 11205, 11205, 12038, 16879, 22833,
		/*  4675 */ 22834, 22834, 15778, 18342, 18342, 18342, 11205, 11205, 11205, 11205, 12040, 10214, 22834, 22834, 16022,
		/*  4690 */ 18342, 18342, 17277, 11205, 11205, 20492, 27324, 22834, 16672, 18342, 18342, 11205, 11205, 20493, 22829,
		/*  4705 */ 24899, 18342, 19278, 11205, 27439, 22832, 20113, 17272, 11205, 21815, 17647, 17274, 24151, 20114, 15993,
		/*  4720 */ 20114, 18620, 25094, 18624, 17276, 20110, 25170, 24112, 19102, 11989, 11205, 11205, 11205, 11205, 11205,
		/*  4735 */ 11205, 10461, 11205, 11205, 14557, 11205, 11205, 11205, 14709, 14725, 14745, 14775, 14729, 14759, 11913,
		/*  4750 */ 11205, 14818, 11205, 10536, 11205, 18143, 14389, 11205, 11205, 12700, 9235, 9993, 10316, 9102, 9123,
		/*  4765 */ 9162, 21004, 23648, 18143, 9180, 9196, 9212, 9228, 9251, 9274, 9297, 12708, 9258, 9281, 14811, 13600,
		/*  4781 */ 11205, 11031, 9313, 9350, 9368, 9405, 9464, 10284, 9513, 9542, 9532, 10287, 9516, 9545, 27421, 14786,
		/*  4797 */ 9561, 27538, 12436, 9589, 9619, 10121, 9655, 10829, 10109, 10125, 9659, 10833, 14073, 9675, 9704, 9741,
		/*  4813 */ 9778, 9794, 9810, 9832, 9762, 9804, 9826, 9756, 9848, 20255, 18142, 9878, 9893, 9914, 9888, 9909, 9930,
		/*  4830 */ 9961, 14375, 9382, 9986, 9389, 13842, 14834, 10039, 10055, 11617, 10065, 10081, 10097, 10141, 10171,
		/*  4845 */ 10233, 10274, 10303, 9993, 13832, 9995, 13530, 13536, 10351, 10367, 10392, 10408, 10424, 11205, 11205,
		/*  4860 */ 11205, 11205, 11205, 11205, 10461, 11205, 11205, 14557, 11205, 11205, 11205, 14709, 10912, 11205, 11205,
		/*  4875 */ 11205, 13978, 11913, 11205, 14818, 11205, 10536, 11205, 18143, 14389, 11205, 11205, 12700, 9235, 9993,
		/*  4890 */ 10316, 9102, 9123, 9162, 21004, 11205, 18143, 9180, 9196, 9212, 9228, 9251, 9274, 9297, 12708, 9258,
		/*  4906 */ 9281, 27732, 13600, 11205, 11031, 9313, 9350, 9368, 9405, 9464, 10284, 9513, 9542, 9532, 10287, 9516,
		/*  4922 */ 9545, 27421, 14786, 9561, 27538, 12436, 9589, 9619, 10121, 9655, 10829, 10109, 10125, 9659, 10833,
		/*  4937 */ 14073, 9675, 9704, 9741, 9778, 9794, 9810, 9832, 9762, 9804, 9826, 9756, 9848, 20255, 18142, 9878, 9893,
		/*  4954 */ 9914, 9888, 9909, 9930, 9961, 14375, 9382, 9986, 9389, 13842, 10011, 10039, 10055, 11617, 10065, 10081,
		/*  4970 */ 10097, 10141, 10171, 10233, 10274, 10303, 9993, 13832, 9995, 13530, 13536, 10351, 10367, 10392, 10408,
		/*  4985 */ 10424, 11205, 11205, 11205, 11205, 11205, 11205, 14863, 14900, 11205, 14557, 11205, 11205, 11205, 14709,
		/*  5000 */ 14918, 13796, 13801, 11205, 14943, 14974, 11205, 14818, 11205, 10536, 11205, 18143, 14389, 11205, 11205,
		/*  5015 */ 12700, 9235, 9993, 13873, 9102, 9123, 9162, 21004, 11205, 18143, 9180, 9196, 9212, 9228, 9251, 9274,
		/*  5031 */ 9297, 12708, 9258, 9281, 27732, 13600, 11205, 11031, 9313, 9350, 9368, 9405, 9464, 10284, 9513, 9542,
		/*  5047 */ 9532, 10287, 9516, 9545, 27421, 14786, 9561, 27538, 12436, 9589, 9619, 10121, 9655, 10829, 10109, 10125,
		/*  5063 */ 9659, 10833, 14073, 9675, 9704, 9741, 9778, 9794, 9810, 9832, 9762, 9804, 9826, 9756, 9848, 20255,
		/*  5079 */ 18142, 9878, 9893, 9914, 9888, 9909, 9930, 9961, 14375, 9382, 9986, 9389, 13842, 10011, 10039, 10055,
		/*  5095 */ 11617, 10065, 10081, 10097, 10141, 10171, 10233, 10274, 10303, 9993, 13832, 9995, 13530, 13536, 10351,
		/*  5110 */ 10367, 10392, 10408, 10424, 11205, 11205, 11205, 11205, 11205, 11205, 15001, 15023, 11205, 14557, 11205,
		/*  5125 */ 11205, 11205, 14709, 10912, 11205, 11205, 26359, 15043, 17822, 11205, 14818, 11205, 10536, 11205, 11188,
		/*  5140 */ 14389, 11205, 11205, 12700, 9235, 9993, 15082, 9102, 9123, 9162, 21004, 11205, 18143, 9180, 9196, 9212,
		/*  5156 */ 9228, 9251, 9274, 9297, 12708, 9258, 9281, 27732, 13600, 11205, 11031, 9313, 9350, 9368, 9405, 9464,
		/*  5172 */ 10284, 9513, 9542, 9532, 10287, 9516, 9545, 27421, 14786, 9561, 27538, 12436, 9589, 9619, 10121, 9655,
		/*  5188 */ 10829, 10109, 10125, 9659, 10833, 14073, 9675, 9704, 9741, 9778, 9794, 9810, 9832, 9762, 9804, 9826,
		/*  5204 */ 9756, 9848, 20255, 18142, 9878, 9893, 9914, 9888, 9909, 9930, 9961, 14375, 9382, 9986, 9389, 13842,
		/*  5220 */ 10011, 10039, 10055, 11617, 10065, 10081, 10097, 10141, 10171, 10233, 10274, 10303, 9993, 13832, 9995,
		/*  5235 */ 13530, 13536, 10351, 10367, 10392, 10408, 10424, 11205, 11205, 11205, 11205, 11205, 11205, 14507, 11205,
		/*  5250 */ 15111, 14557, 17775, 15128, 24715, 25404, 15146, 15161, 15175, 15191, 15203, 25038, 15219, 15349, 11205,
		/*  5265 */ 15239, 15275, 15303, 10206, 15341, 15365, 15381, 15408, 15444, 15480, 11205, 17296, 12362, 11205, 23084,
		/*  5280 */ 21893, 12040, 15496, 11205, 24048, 22834, 22834, 15521, 18342, 18342, 20380, 19280, 17452, 10583, 11205,
		/*  5295 */ 15692, 11205, 15537, 25976, 15560, 16194, 22834, 24804, 15610, 15648, 18342, 23054, 14573, 15668, 11205,
		/*  5310 */ 15685, 11205, 15713, 25597, 15766, 17527, 22834, 15778, 15794, 18444, 18342, 15818, 10642, 20405, 15856,
		/*  5325 */ 12040, 10214, 22834, 21231, 15875, 18342, 23885, 27255, 15943, 11205, 20492, 27324, 20683, 16044, 18342,
		/*  5340 */ 15970, 11205, 11205, 20493, 27468, 21961, 15587, 15989, 11205, 27439, 22832, 20113, 17272, 11205, 21815,
		/*  5355 */ 17647, 17274, 24151, 20114, 16009, 20114, 15918, 25094, 16038, 21979, 16060, 25170, 24112, 19102, 11989,
		/*  5370 */ 11205, 11205, 11205, 11205, 11205, 11205, 14507, 11205, 16083, 14557, 11205, 16103, 11205, 15007, 14529,
		/*  5385 */ 16122, 10562, 17646, 20807, 9146, 11205, 14818, 11205, 11205, 11205, 20493, 17233, 11205, 11205, 18622,
		/*  5400 */ 16571, 18342, 18192, 11205, 17296, 11205, 11205, 11205, 20493, 12040, 16879, 11205, 27913, 22834, 22834,
		/*  5415 */ 21842, 18342, 18342, 18342, 19280, 11205, 11205, 18702, 27661, 11205, 16143, 24750, 27909, 22834, 22834,
		/*  5430 */ 17032, 23348, 18342, 18342, 17609, 14573, 11205, 11205, 24018, 11205, 12038, 16879, 22833, 22834, 22834,
		/*  5445 */ 15778, 18342, 18342, 18342, 12583, 11205, 21884, 11205, 16161, 16180, 22834, 22834, 26388, 16217, 18342,
		/*  5460 */ 17277, 11205, 11205, 20492, 27324, 22834, 16044, 18342, 18342, 11205, 11205, 20493, 22829, 24899, 18342,
		/*  5475 */ 19278, 11205, 27439, 22832, 20113, 17272, 11205, 21815, 17647, 17274, 24151, 20114, 15993, 20114, 16250,
		/*  5490 */ 16237, 18624, 17276, 20110, 25170, 24112, 19102, 11989, 11205, 11205, 11205, 11205, 11205, 11205, 14507,
		/*  5505 */ 11205, 14480, 14557, 11205, 11205, 11206, 25459, 16266, 16281, 16295, 16311, 16323, 9146, 11205, 10971,
		/*  5520 */ 11205, 16339, 11205, 20493, 17233, 11205, 11205, 18622, 24652, 15973, 18192, 22491, 17296, 16359, 16379,
		/*  5535 */ 9497, 16397, 16437, 15544, 11205, 16459, 16509, 22834, 21842, 16532, 18342, 18342, 19280, 16548, 19251,
		/*  5550 */ 11205, 15692, 17008, 25589, 17232, 27909, 19477, 16568, 16587, 23348, 21924, 21554, 18342, 14573, 11205,
		/*  5565 */ 11205, 10335, 11205, 12038, 16879, 22833, 22834, 24076, 15778, 18342, 18342, 22736, 12583, 11205, 11205,
		/*  5580 */ 11205, 12040, 10214, 22834, 22834, 26388, 18342, 18342, 17277, 11205, 11205, 20492, 16606, 21790, 16044,
		/*  5595 */ 22603, 18342, 16631, 11205, 20493, 16667, 16688, 26947, 19278, 11205, 27439, 22832, 23046, 25547, 11205,
		/*  5610 */ 21815, 17647, 17274, 24151, 20114, 15993, 20114, 16710, 19111, 18624, 17276, 20110, 25170, 24112, 24363,
		/*  5625 */ 16748, 11205, 11205, 11205, 11205, 11205, 11205, 14507, 11205, 25813, 14557, 11205, 16790, 14958, 9725,
		/*  5640 */ 16810, 16825, 16833, 16849, 16861, 9146, 11205, 14818, 11205, 11205, 11205, 20493, 16877, 21017, 21012,
		/*  5655 */ 16895, 16571, 12100, 18192, 22761, 16911, 27778, 11205, 11205, 11770, 16950, 16989, 25390, 17024, 17048,
		/*  5670 */ 16474, 21842, 17068, 19858, 17116, 19280, 11205, 25121, 21641, 15692, 11205, 12039, 17232, 27909, 22834,
		/*  5685 */ 22834, 22834, 23348, 18342, 18342, 18342, 17136, 11205, 9945, 24018, 11205, 12038, 16879, 12640, 22834,
		/*  5700 */ 22834, 17179, 17208, 18342, 17120, 12583, 11205, 11205, 22413, 17228, 17551, 22834, 17249, 26388, 17270,
		/*  5715 */ 26816, 17277, 11205, 17293, 21732, 27324, 17312, 16044, 26083, 17349, 11205, 11205, 20493, 22829, 24899,
		/*  5730 */ 18342, 19278, 25280, 27439, 22832, 24526, 17212, 11205, 21815, 17647, 17274, 24151, 20114, 20055, 22685,
		/*  5745 */ 26471, 16067, 18624, 17276, 20110, 25170, 24112, 19102, 11989, 11205, 11205, 11205, 11205, 11205, 11205,
		/*  5760 */ 14507, 11205, 20075, 14557, 23474, 15058, 17890, 15259, 17369, 17385, 17399, 17415, 17427, 9146, 14430,
		/*  5775 */ 17150, 17443, 17468, 11097, 17492, 17543, 23505, 17567, 20837, 17595, 17631, 18192, 23825, 17663, 22159,
		/*  5790 */ 12398, 13721, 20493, 12040, 15316, 19260, 27913, 17719, 17741, 25840, 18450, 17615, 27284, 17770, 17791,
		/*  5805 */ 17807, 17857, 17885, 26127, 17906, 17947, 17963, 18000, 15392, 18016, 18053, 22744, 22103, 18083, 14573,
		/*  5820 */ 18099, 15223, 24018, 18122, 23849, 26722, 16615, 22834, 18159, 18179, 22117, 21612, 23867, 18218, 27994,
		/*  5835 */ 18234, 18250, 16145, 10214, 19904, 18271, 26388, 25890, 27116, 22009, 25741, 23685, 20492, 18287, 18313,
		/*  5850 */ 16044, 22357, 18341, 11205, 18359, 11415, 18405, 18430, 18466, 18495, 11205, 18525, 18550, 16694, 25505,
		/*  5865 */ 13435, 21815, 9431, 20471, 18566, 18414, 12547, 15743, 18582, 15632, 10884, 18611, 20110, 21504, 18640,
		/*  5880 */ 19102, 11989, 11205, 11205, 11205, 11205, 11205, 11205, 14507, 11205, 11205, 14557, 9861, 9862, 9857,
		/*  5895 */ 23520, 18676, 18726, 18734, 18750, 18762, 9146, 11205, 18778, 11205, 11205, 11205, 20493, 17233, 11205,
		/*  5910 */ 11205, 19207, 16571, 9441, 18192, 26605, 17296, 18820, 11205, 15130, 21047, 12040, 16879, 11205, 14847,
		/*  5925 */ 22834, 22834, 21842, 24254, 18342, 18342, 19280, 11205, 11205, 11205, 15692, 11205, 12039, 17232, 27909,
		/*  5940 */ 22834, 22834, 17520, 23348, 18342, 18342, 18840, 14573, 11205, 11205, 24018, 11205, 12038, 16879, 22833,
		/*  5955 */ 22834, 22834, 15778, 18342, 18342, 18342, 12583, 11205, 11205, 23109, 16164, 10214, 22834, 21090, 26388,
		/*  5970 */ 18342, 23228, 17277, 11205, 11205, 20492, 27324, 22834, 16044, 18342, 18342, 11205, 11205, 20493, 22829,
		/*  5985 */ 24899, 18342, 25512, 11205, 27439, 22832, 20113, 17272, 11205, 21815, 17647, 17274, 24151, 20114, 15993,
		/*  6000 */ 20114, 18620, 25094, 18624, 17276, 20110, 19981, 24112, 19952, 11989, 11205, 11205, 11205, 11205, 11205,
		/*  6015 */ 11205, 14507, 11205, 11205, 14557, 11205, 27851, 11205, 27859, 18861, 18876, 18884, 18900, 18912, 9146,
		/*  6030 */ 11205, 14818, 11205, 22565, 11205, 20493, 17233, 11205, 11205, 18622, 16571, 18342, 18479, 11205, 17296,
		/*  6045 */ 11205, 11205, 22920, 20493, 12040, 16879, 11205, 27913, 22834, 22834, 21842, 18342, 18342, 18342, 19280,
		/*  6060 */ 11205, 11205, 11205, 11205, 11205, 12039, 17232, 27909, 22834, 22834, 22834, 18928, 18342, 18342, 18342,
		/*  6075 */ 11205, 11205, 11205, 11205, 11205, 12038, 16879, 22833, 22834, 22834, 15778, 18342, 18342, 18342, 11205,
		/*  6090 */ 11205, 11205, 11205, 12040, 10214, 22834, 22834, 16022, 18342, 18342, 17277, 11205, 18952, 20492, 27324,
		/*  6105 */ 22834, 16672, 18342, 18342, 25129, 10183, 18973, 22829, 24899, 18342, 19278, 11205, 18997, 19032, 19060,
		/*  6120 */ 19093, 11205, 19136, 19173, 24105, 24151, 20114, 15993, 20114, 18620, 25094, 18624, 17276, 20110, 25170,
		/*  6135 */ 18660, 19189, 11989, 11205, 11205, 11205, 11205, 11205, 11205, 14507, 11205, 11205, 14557, 11205, 11205,
		/*  6150 */ 11205, 14709, 14529, 14554, 10562, 17646, 20807, 9146, 11205, 15954, 11205, 11205, 14440, 20493, 16443,
		/*  6165 */ 11205, 11205, 14043, 19910, 19223, 19241, 11205, 13225, 22303, 25069, 11205, 20493, 12040, 16879, 11205,
		/*  6180 */ 27913, 22834, 20554, 21842, 18342, 18342, 15802, 19280, 11205, 11205, 11205, 11205, 11205, 12039, 17232,
		/*  6195 */ 27909, 22834, 22834, 22834, 23348, 18342, 18342, 18342, 25564, 11205, 11205, 11205, 11205, 12038, 16879,
		/*  6210 */ 22833, 22834, 22834, 15778, 18342, 18342, 18342, 11205, 21572, 11205, 11205, 12040, 10214, 22834, 26928,
		/*  6225 */ 16022, 18342, 18342, 19276, 11205, 11205, 20492, 27324, 22834, 16672, 18342, 18342, 11205, 11205, 20493,
		/*  6240 */ 22829, 24899, 18342, 19278, 11205, 27439, 22832, 20113, 17272, 11205, 21815, 16732, 26887, 24151, 20114,
		/*  6255 */ 15993, 20114, 18620, 25094, 18624, 17276, 20110, 25170, 24112, 19102, 11989, 11205, 11205, 11205, 11205,
		/*  6270 */ 11205, 11205, 14507, 11205, 14616, 19296, 14616, 19345, 27675, 27683, 19380, 19395, 19409, 19425, 19437,
		/*  6285 */ 9146, 11205, 11449, 11205, 11205, 25953, 19453, 17233, 19506, 19501, 12891, 16571, 19525, 18192, 11205,
		/*  6300 */ 17296, 23245, 11205, 11205, 20493, 23908, 25768, 19544, 18791, 26038, 22834, 19571, 25220, 26810, 16221,
		/*  6315 */ 19587, 16999, 19608, 27568, 19624, 19642, 12039, 16409, 27909, 22834, 22834, 19658, 19679, 18342, 18342,
		/*  6330 */ 19703, 11205, 11205, 22892, 19739, 11205, 12038, 16879, 19764, 22834, 22834, 15778, 19785, 18342, 18342,
		/*  6345 */ 11205, 19802, 10775, 11169, 12040, 10214, 26199, 22834, 16022, 18342, 19856, 12107, 11205, 11205, 10023,
		/*  6360 */ 19874, 21223, 19926, 19968, 23722, 19997, 11205, 20014, 17506, 23209, 23937, 20051, 20071, 20091, 22832,
		/*  6375 */ 20113, 17272, 20130, 21815, 17647, 17274, 24151, 20114, 15993, 20147, 18620, 25094, 18624, 17276, 20163,
		/*  6390 */ 20199, 24112, 19102, 12617, 11205, 11205, 11205, 11205, 11205, 11205, 14507, 11205, 11205, 14557, 11205,
		/*  6405 */ 10326, 11205, 20230, 20271, 20286, 20294, 20310, 20322, 9146, 27973, 14818, 14634, 23165, 11205, 11110,
		/*  6420 */ 17233, 11205, 17091, 20338, 16571, 20375, 17192, 14491, 17296, 11205, 22443, 14490, 23806, 12040, 20396,
		/*  6435 */ 11205, 15095, 10795, 24055, 20421, 19070, 20437, 20454, 20487, 26354, 11205, 19355, 11205, 11205, 20509,
		/*  6450 */ 17232, 27909, 20531, 20553, 22834, 20570, 20586, 18342, 18342, 11205, 19748, 11205, 20616, 11205, 12038,
		/*  6465 */ 20632, 22833, 19663, 25672, 15778, 18342, 24534, 19717, 11013, 11205, 11205, 11205, 20657, 10214, 20679,
		/*  6480 */ 22834, 16022, 23944, 18342, 26781, 11205, 27709, 11840, 11853, 22834, 16672, 20699, 18342, 11068, 11205,
		/*  6495 */ 20718, 22829, 24899, 18342, 19278, 23134, 27439, 22832, 20742, 15428, 11205, 21815, 17647, 17274, 24151,
		/*  6510 */ 20114, 15993, 20114, 18620, 25094, 17931, 26462, 20766, 25170, 15621, 20794, 11989, 11205, 11205, 11205,
		/*  6525 */ 11205, 11205, 11205, 14507, 11205, 11205, 20823, 11205, 12473, 11205, 14709, 20853, 20868, 20876, 20892,
		/*  6540 */ 20904, 9146, 16931, 14818, 11205, 20920, 11205, 9688, 17233, 11205, 16934, 20938, 16571, 20954, 18192,
		/*  6555 */ 11205, 20977, 11205, 21033, 11205, 20493, 12040, 16879, 11205, 17163, 22834, 25665, 21063, 20464, 18343,
		/*  6570 */ 22363, 22042, 22546, 11205, 11205, 11205, 11205, 12039, 17232, 27909, 21079, 19485, 22834, 23348, 21114,
		/*  6585 */ 15458, 18342, 11205, 21138, 11205, 22985, 21154, 12038, 16879, 24304, 22834, 18030, 27216, 25226, 18342,
		/*  6600 */ 21193, 11205, 11205, 11205, 11205, 12040, 10214, 22834, 22834, 16022, 18342, 18342, 17277, 11205, 11205,
		/*  6615 */ 20492, 27324, 22834, 16672, 18342, 18342, 12236, 11205, 20493, 22829, 24899, 18342, 19278, 11205, 27439,
		/*  6630 */ 22832, 20113, 17272, 11205, 21815, 17647, 17274, 21212, 23990, 21247, 20114, 18620, 25094, 18624, 17276,
		/*  6645 */ 20110, 25170, 24112, 19102, 11989, 11205, 11205, 11205, 11205, 11205, 11205, 14507, 11205, 11205, 21270,
		/*  6660 */ 11205, 9970, 16926, 21315, 21331, 21347, 21355, 21371, 21383, 9146, 24946, 14818, 21446, 11205, 20131,
		/*  6675 */ 10677, 21399, 21434, 19816, 21462, 21478, 21520, 18192, 16641, 27630, 11205, 11205, 21536, 20493, 12040,
		/*  6690 */ 16879, 9107, 27913, 16493, 22834, 21842, 18342, 21552, 18342, 19280, 21570, 26995, 11205, 14449, 11205,
		/*  6705 */ 21588, 17232, 27909, 26255, 22834, 22834, 23348, 21610, 18342, 18342, 11205, 11205, 14581, 11205, 21628,
		/*  6720 */ 21664, 24614, 21687, 22834, 21707, 18325, 18342, 22510, 25724, 27587, 21723, 21748, 18710, 26158, 20103,
		/*  6735 */ 21769, 19150, 16022, 26679, 23766, 17277, 11393, 11687, 21806, 27324, 21838, 16672, 19687, 18342, 13765,
		/*  6750 */ 11205, 10195, 16965, 21858, 15464, 21874, 11205, 17691, 12558, 21909, 24354, 14513, 21940, 17647, 21977,
		/*  6765 */ 24151, 21995, 19202, 22031, 12631, 22058, 18624, 17276, 20110, 20778, 22088, 19102, 15904, 11205, 11205,
		/*  6780 */ 11205, 11205, 11205, 11205, 14507, 11205, 11205, 22145, 11205, 12586, 15112, 27758, 22187, 22202, 22210,
		/*  6795 */ 22226, 22238, 9146, 22254, 14818, 18370, 11205, 22270, 22276, 22292, 11698, 22327, 24512, 22343, 22379,
		/*  6810 */ 18192, 11205, 17296, 24839, 11205, 22429, 20493, 24742, 16879, 11205, 27913, 20537, 26653, 9334, 18342,
		/*  6825 */ 22465, 15422, 22486, 11205, 10992, 15325, 11406, 27890, 12039, 20663, 9420, 22834, 17327, 27343, 23348,
		/*  6840 */ 18342, 22507, 20183, 22526, 26743, 22562, 11205, 11205, 12038, 16879, 22833, 22581, 22834, 15778, 18342,
		/*  6855 */ 22602, 18342, 11205, 23656, 10467, 11205, 12040, 10214, 22834, 22834, 18595, 18342, 18342, 17277, 19364,
		/*  6870 */ 11205, 20492, 18534, 10803, 17254, 26698, 18342, 22619, 11205, 27002, 19467, 24899, 22638, 19278, 11205,
		/*  6885 */ 27439, 22832, 20113, 17272, 22657, 22676, 17984, 15652, 12205, 12567, 22015, 22701, 18620, 25094, 18624,
		/*  6900 */ 17276, 20110, 23735, 23779, 19102, 11975, 11205, 11205, 11205, 11205, 11205, 11205, 14507, 11205, 11205,
		/*  6915 */ 14557, 11205, 24190, 22760, 22777, 22816, 14554, 15840, 22851, 22863, 9146, 11205, 22879, 11205, 11205,
		/*  6930 */ 11205, 20493, 17233, 11205, 22915, 18622, 16571, 18342, 18192, 26560, 17296, 11205, 22936, 22972, 20493,
		/*  6945 */ 23008, 16879, 26558, 27913, 23031, 24799, 18297, 18845, 24693, 18342, 23070, 11205, 11205, 23107, 22950,
		/*  6960 */ 11205, 12039, 17232, 27909, 22834, 22834, 22834, 23348, 18342, 18342, 18342, 23125, 11205, 11205, 23150,
		/*  6975 */ 10439, 20726, 26178, 22833, 23201, 22834, 15574, 20438, 23225, 18342, 11205, 23244, 11205, 11205, 12040,
		/*  6990 */ 10214, 22834, 23261, 18804, 18342, 26315, 17277, 11205, 11205, 20492, 27324, 22834, 16672, 18342, 18342,
		/*  7005 */ 11205, 11205, 20493, 22829, 24899, 18342, 19278, 11205, 27439, 22832, 20113, 17272, 11205, 21815, 17647,
		/*  7020 */ 17353, 23279, 20114, 12169, 20114, 18620, 25094, 18624, 17276, 20110, 25170, 24112, 19102, 11989, 11205,
		/*  7035 */ 11205, 11205, 11205, 11205, 11205, 14507, 11205, 11205, 14557, 11205, 11205, 11205, 14709, 14529, 14554,
		/*  7050 */ 10562, 17646, 20807, 9146, 11205, 14818, 11205, 22622, 11205, 23692, 17233, 23314, 23319, 23335, 19769,
		/*  7065 */ 23372, 23393, 11205, 17296, 11205, 11205, 11205, 20493, 12040, 16879, 11205, 27913, 22834, 22834, 21842,
		/*  7080 */ 18342, 18342, 18342, 19280, 11205, 11205, 11205, 11205, 11205, 12039, 17232, 27909, 22834, 22834, 22834,
		/*  7095 */ 23409, 18342, 18342, 18342, 11205, 11205, 11205, 11205, 11205, 12038, 16879, 22833, 22834, 22834, 15778,
		/*  7110 */ 18342, 18342, 18342, 11205, 11205, 11205, 11205, 12040, 10214, 22834, 22834, 16022, 18342, 18342, 17277,
		/*  7125 */ 11205, 11205, 20492, 27324, 22834, 16672, 18342, 18342, 11205, 11205, 20493, 22829, 24899, 18342, 19278,
		/*  7140 */ 11205, 27439, 19016, 20113, 23448, 11205, 21815, 17647, 17274, 24151, 20114, 15993, 20114, 18620, 25094,
		/*  7155 */ 18624, 17276, 20110, 25170, 24112, 19102, 11989, 11205, 11205, 11205, 11205, 11205, 11205, 14507, 11205,
		/*  7170 */ 11205, 14985, 23470, 11205, 23466, 14709, 23490, 23549, 23557, 23573, 23585, 9146, 11205, 23601, 20992,
		/*  7185 */ 18136, 18509, 17833, 23637, 12673, 23672, 23975, 23708, 23751, 18192, 11205, 17296, 24497, 23795, 23822,
		/*  7200 */ 23841, 26171, 16879, 11205, 22791, 12066, 26260, 21842, 23865, 23883, 20178, 19280, 11205, 11205, 27033,
		/*  7215 */ 19626, 11205, 23901, 26018, 9639, 16590, 22834, 12648, 23924, 22470, 18342, 18067, 11205, 10854, 23960,
		/*  7230 */ 24013, 11205, 18981, 24034, 22833, 21098, 24071, 24092, 18342, 22394, 24128, 21164, 11205, 24144, 18380,
		/*  7245 */ 12040, 10214, 24167, 22834, 16022, 24262, 18342, 19077, 11205, 24186, 20492, 27324, 22834, 16973, 18342,
		/*  7260 */ 26762, 11205, 24206, 20493, 20029, 27362, 18342, 19278, 24224, 27439, 22832, 20113, 17272, 11205, 21815,
		/*  7275 */ 17647, 23450, 27491, 24245, 24278, 20114, 16762, 18651, 24299, 17276, 20110, 22129, 24320, 22714, 11989,
		/*  7290 */ 11205, 11205, 11205, 11205, 11205, 11205, 14507, 11205, 11205, 26585, 11205, 9086, 24379, 24416, 24452,
		/*  7305 */ 24550, 24558, 24574, 24586, 19329, 11205, 14818, 11205, 14191, 11205, 24602, 24630, 23179, 19310, 24668,
		/*  7320 */ 16571, 24684, 18192, 24709, 17296, 11205, 11205, 11205, 24467, 24731, 23015, 24766, 24784, 24820, 22834,
		/*  7335 */ 21842, 19941, 23298, 18342, 19280, 25807, 27038, 24836, 11205, 11205, 12039, 17232, 24641, 22834, 22834,
		/*  7350 */ 22834, 23348, 18342, 18342, 18342, 11205, 12518, 11205, 15027, 27530, 24855, 24872, 24897, 17052, 19889,
		/*  7365 */ 19044, 18342, 9448, 24915, 24942, 11205, 11205, 11205, 21594, 19009, 23263, 21784, 16022, 18342, 21492,
		/*  7380 */ 17277, 16343, 24962, 24979, 27324, 21955, 25004, 19723, 22727, 11205, 11138, 20493, 22829, 24899, 18342,
		/*  7395 */ 19278, 16552, 25054, 22832, 25090, 20750, 25110, 21815, 17647, 17274, 24151, 25145, 15993, 20114, 12003,
		/*  7410 */ 25186, 21254, 26224, 25207, 25170, 24112, 19102, 11989, 11205, 11205, 11205, 11205, 11205, 11205, 14507,
		/*  7425 */ 11205, 11205, 14795, 11205, 11205, 25242, 25267, 25303, 25318, 25332, 25348, 25360, 9146, 14599, 14818,
		/*  7440 */ 25376, 18691, 21410, 13883, 25440, 23432, 23427, 25475, 25491, 25528, 18192, 12198, 22072, 25563, 15025,
		/*  7455 */ 26122, 25580, 20515, 25613, 25638, 25654, 22835, 25688, 21842, 25719, 23356, 26306, 12130, 20243, 11205,
		/*  7470 */ 25740, 11205, 11179, 25757, 25793, 25829, 25856, 16724, 16516, 25869, 15750, 25885, 26074, 11205, 25906,
		/*  7485 */ 25924, 16087, 25949, 25969, 24482, 15927, 17978, 17333, 26633, 24345, 25992, 26286, 13970, 11205, 9573,
		/*  7500 */ 11205, 26010, 17703, 18037, 26034, 17754, 20600, 26054, 25191, 26107, 11205, 26143, 14538, 26194, 19157,
		/*  7515 */ 24335, 25994, 9164, 9352, 20493, 15728, 17725, 26215, 25019, 11205, 27403, 26240, 26276, 25160, 26339,
		/*  7530 */ 26375, 21299, 21122, 24151, 20114, 15993, 20114, 18620, 25094, 26404, 23997, 26420, 26447, 24112, 19102,
		/*  7545 */ 15890, 11205, 11205, 11205, 11205, 11205, 11205, 14507, 11205, 11205, 14557, 11205, 15669, 11205, 14709,
		/*  7560 */ 26487, 26502, 26510, 26526, 26538, 9146, 11205, 25287, 19998, 11205, 11205, 20493, 17233, 11205, 11205,
		/*  7575 */ 21285, 16571, 25542, 18192, 26554, 17296, 11205, 24963, 26576, 22992, 12040, 16879, 11205, 23533, 22834,
		/*  7590 */ 22834, 22586, 26296, 18342, 18342, 20214, 16381, 26601, 11205, 24229, 9138, 13892, 17919, 19829, 16201,
		/*  7605 */ 26621, 26649, 23348, 26064, 26669, 26695, 11205, 9719, 11205, 11205, 11205, 26714, 16879, 21822, 22834,
		/*  7620 */ 22834, 16774, 26091, 18342, 18342, 26738, 11205, 11205, 11205, 12040, 10214, 22834, 22834, 16022, 18342,
		/*  7635 */ 18342, 15594, 11205, 25424, 20492, 14659, 22834, 16672, 26759, 18342, 11205, 11205, 20493, 22829, 24899,
		/*  7650 */ 18342, 19278, 11205, 27439, 22832, 20113, 17272, 11205, 24988, 17647, 26778, 24151, 20114, 15993, 20114,
		/*  7665 */ 18620, 25094, 10217, 26323, 20110, 25170, 19120, 26797, 11989, 11205, 11205, 11205, 11205, 11205, 11205,
		/*  7680 */ 14507, 11205, 11205, 14557, 11205, 15253, 14884, 17678, 14529, 26832, 18202, 26853, 26865, 9146, 11205,
		/*  7695 */ 14818, 11205, 11205, 11205, 20493, 17233, 11205, 11205, 24283, 16571, 26881, 18192, 11205, 17296, 11205,
		/*  7710 */ 11205, 11205, 18106, 12040, 21671, 11205, 26907, 22834, 22834, 21842, 20359, 18342, 18342, 19280, 11205,
		/*  7725 */ 11205, 11944, 11205, 11205, 24856, 17232, 26903, 22834, 26923, 22834, 23348, 18342, 26944, 18342, 11205,
		/*  7740 */ 11205, 11205, 11205, 11205, 12038, 16879, 22833, 22834, 22834, 15778, 18342, 18342, 18342, 11205, 11205,
		/*  7755 */ 11205, 11205, 12040, 10214, 22834, 22834, 16022, 18342, 18342, 17277, 11205, 26963, 20492, 27324, 22834,
		/*  7770 */ 16672, 18342, 18342, 11205, 11205, 20493, 22829, 24899, 18342, 19278, 11205, 27439, 22832, 20113, 17272,
		/*  7785 */ 12467, 21815, 17647, 17274, 24151, 20114, 15993, 20114, 18620, 25094, 18624, 17276, 20110, 25170, 24112,
		/*  7800 */ 19102, 11989, 11205, 11205, 11205, 11205, 11205, 11205, 14507, 11205, 11205, 24436, 11205, 18255, 11205,
		/*  7815 */ 26981, 27018, 27054, 27062, 27078, 27090, 9146, 11205, 14818, 11205, 11205, 11205, 20493, 17233, 11205,
		/*  7830 */ 11205, 18622, 12014, 19528, 18192, 11205, 17296, 11205, 11205, 11205, 20493, 12040, 16879, 11205, 27913,
		/*  7845 */ 22834, 22834, 21842, 18342, 18342, 18342, 19280, 11205, 11205, 11205, 11205, 11205, 12039, 17232, 27909,
		/*  7860 */ 22834, 22834, 22834, 23348, 18342, 18342, 18342, 11205, 11205, 11205, 25030, 11205, 12038, 16879, 22833,
		/*  7875 */ 22834, 22834, 15778, 18342, 18342, 18342, 11205, 23614, 11205, 11205, 12040, 10214, 20035, 18163, 16022,
		/*  7890 */ 18342, 27106, 27132, 11205, 11205, 20492, 27324, 22834, 16672, 18342, 18342, 11205, 11205, 20493, 22829,
		/*  7905 */ 24899, 18342, 19278, 11205, 27439, 22832, 20113, 17272, 11205, 21815, 17647, 17274, 24151, 20114, 15993,
		/*  7920 */ 20114, 18620, 25094, 18624, 17276, 20110, 25170, 24112, 19102, 11989, 11205, 11205, 11205, 11205, 11205,
		/*  7935 */ 11205, 14703, 11205, 11205, 14557, 11205, 11205, 11205, 14709, 14529, 14554, 12268, 27154, 27166, 9146,
		/*  7950 */ 11205, 12369, 11205, 11205, 22660, 22899, 17233, 27182, 27187, 27203, 16571, 27245, 18192, 11205, 17296,
		/*  7965 */ 13656, 14927, 11205, 20493, 12040, 16879, 11205, 27913, 22834, 22834, 25703, 18342, 18342, 20702, 26431,
		/*  7980 */ 11205, 11205, 11205, 11205, 11205, 12039, 17232, 27909, 22834, 22834, 22834, 23348, 18342, 18342, 18342,
		/*  7995 */ 11205, 11205, 11205, 11205, 11205, 12038, 16879, 22833, 22834, 22834, 27271, 18342, 18342, 18342, 17100,
		/*  8010 */ 11205, 11205, 11205, 12040, 10214, 22834, 22834, 16022, 18342, 18342, 17277, 11205, 11205, 20492, 27324,
		/*  8025 */ 22834, 16672, 18342, 18342, 11205, 11205, 20493, 22829, 24899, 18342, 19278, 11205, 27439, 22832, 20113,
		/*  8040 */ 17272, 11205, 21815, 17647, 17274, 24151, 20114, 15993, 20114, 18620, 25094, 18624, 17276, 20110, 25170,
		/*  8055 */ 24112, 19102, 11989, 11205, 11205, 11205, 11205, 11205, 11205, 14507, 11205, 11205, 14557, 11205, 11205,
		/*  8070 */ 11205, 14709, 14529, 14554, 10562, 17646, 20807, 9146, 27300, 14818, 11205, 21753, 11205, 20493, 17233,
		/*  8085 */ 11205, 11205, 10786, 22800, 19225, 18192, 11205, 17296, 11205, 11205, 11205, 20493, 12040, 16879, 11205,
		/*  8100 */ 27913, 22834, 22834, 19840, 18342, 18342, 19786, 19280, 19321, 11205, 11205, 11205, 20922, 12039, 27318,
		/*  8115 */ 27909, 22834, 24170, 22834, 23348, 18342, 23377, 18342, 11205, 25451, 11205, 11205, 11205, 17841, 16879,
		/*  8130 */ 27340, 27359, 22834, 10896, 21196, 18342, 18342, 11205, 11205, 11205, 11205, 12040, 10214, 22834, 22834,
		/*  8145 */ 27378, 18342, 18342, 18936, 11205, 11205, 20492, 27324, 22834, 16672, 18342, 18342, 27419, 11205, 27437,
		/*  8160 */ 22829, 24899, 18342, 19278, 11205, 27439, 22832, 20113, 17272, 11205, 21815, 17647, 17274, 24151, 20114,
		/*  8175 */ 15993, 20114, 18620, 25094, 18624, 17276, 20110, 25170, 24112, 19102, 11989, 11205, 11205, 11205, 11205,
		/*  8190 */ 11205, 11205, 14507, 11205, 11205, 14557, 11205, 11205, 11205, 14709, 27455, 14554, 10562, 17646, 20807,
		/*  8205 */ 9146, 11205, 14818, 11205, 11205, 11205, 20493, 17233, 11205, 11205, 18622, 16571, 18342, 18192, 11205,
		/*  8220 */ 17296, 11205, 11205, 11205, 20493, 12040, 16879, 11205, 27913, 22834, 22834, 21842, 18342, 18342, 18342,
		/*  8235 */ 19280, 11205, 11205, 11205, 11205, 11205, 12039, 17232, 27909, 22834, 22834, 22834, 23348, 18342, 18342,
		/*  8250 */ 18342, 11205, 11205, 11205, 11205, 11205, 12038, 16879, 22833, 22834, 22834, 15778, 18342, 18342, 18342,
		/*  8265 */ 11205, 11205, 11205, 11205, 12040, 10214, 22834, 22834, 16022, 18342, 18342, 17277, 11205, 11205, 20492,
		/*  8280 */ 27324, 22834, 16672, 18342, 18342, 11205, 11205, 20493, 22829, 24899, 18342, 19278, 11205, 27439, 22832,
		/*  8295 */ 20113, 17272, 11205, 21815, 17647, 17274, 24151, 20114, 15993, 20114, 18620, 25094, 18624, 17276, 20110,
		/*  8310 */ 25170, 24112, 19102, 11989, 11205, 11205, 11205, 11205, 11205, 11205, 10461, 11205, 11205, 11227, 27484,
		/*  8325 */ 27615, 27507, 27554, 27603, 10445, 27519, 27626, 27646, 13959, 11205, 14818, 11205, 17579, 11205, 18143,
		/*  8340 */ 14389, 11205, 11205, 12700, 10376, 9993, 27699, 9102, 9123, 9162, 21004, 11205, 18143, 9180, 9196, 9212,
		/*  8356 */ 9228, 9251, 9274, 27725, 12708, 9258, 9281, 27750, 13600, 11205, 11031, 9313, 9350, 9368, 9405, 9464,
		/*  8372 */ 10284, 9513, 9542, 9532, 10287, 9516, 9545, 27421, 14786, 9561, 27538, 12436, 9589, 9619, 10121, 9655,
		/*  8388 */ 10829, 10109, 10125, 9659, 10833, 14073, 9675, 9704, 9741, 9778, 9794, 9810, 9832, 9762, 9804, 9826,
		/*  8404 */ 9756, 9848, 20255, 18142, 9878, 9893, 9914, 9888, 9909, 9930, 9961, 14375, 9382, 9986, 9389, 13842,
		/*  8420 */ 10011, 10039, 10055, 11617, 10065, 10081, 10097, 10141, 10171, 10233, 10274, 10303, 9993, 13832, 9995,
		/*  8435 */ 13530, 13536, 10351, 10367, 10392, 10408, 10424, 11205, 11205, 11205, 11205, 11205, 11205, 10461, 11205,
		/*  8450 */ 11205, 14557, 11205, 11205, 27774, 14709, 27794, 27821, 27826, 11205, 27805, 11913, 11205, 14818, 11205,
		/*  8465 */ 10536, 11205, 18143, 14389, 12494, 11205, 12700, 9235, 9993, 10316, 9102, 9123, 9162, 21004, 11205,
		/*  8480 */ 18143, 9180, 9196, 9212, 9228, 9251, 9274, 9297, 12708, 9258, 9281, 27732, 13600, 11205, 11031, 9313,
		/*  8496 */ 9350, 9368, 9405, 9464, 10284, 9513, 9542, 9532, 10287, 9516, 9545, 27421, 14786, 9561, 27538, 12436,
		/*  8512 */ 9589, 9619, 10121, 9655, 10829, 10109, 10125, 9659, 10833, 14073, 9675, 9704, 9741, 9778, 9794, 9810,
		/*  8528 */ 9832, 9762, 9804, 9826, 9756, 9848, 20255, 18142, 9878, 9893, 9914, 9888, 9909, 9930, 9961, 14375, 9382,
		/*  8545 */ 9986, 9389, 13842, 10011, 10039, 10055, 11617, 10065, 10081, 10097, 10141, 10171, 10233, 10274, 10303,
		/*  8560 */ 9993, 13832, 9995, 13530, 13536, 10351, 10367, 10392, 10408, 10424, 11205, 11205, 11205, 11205, 11205,
		/*  8575 */ 11205, 10461, 11205, 11205, 14557, 11205, 11205, 11205, 19592, 27842, 14231, 14236, 11205, 27875, 11913,
		/*  8590 */ 11205, 14818, 11205, 16421, 11205, 18143, 14389, 11205, 11205, 12700, 9235, 9993, 10316, 9102, 9123,
		/*  8605 */ 9162, 21004, 11205, 18143, 9180, 9196, 9212, 9228, 9251, 9274, 27929, 12708, 9258, 9281, 27732, 13600,
		/*  8621 */ 11205, 11031, 9313, 9350, 9368, 9405, 9464, 10284, 9513, 9542, 9532, 10287, 9516, 9545, 27421, 14786,
		/*  8637 */ 9561, 27538, 12436, 9589, 9619, 10121, 9655, 10829, 10109, 10125, 9659, 10833, 14073, 9675, 9704, 9741,
		/*  8653 */ 9778, 9794, 9810, 9832, 9762, 9804, 9826, 9756, 9848, 20255, 18142, 9878, 9893, 9914, 9888, 9909, 9930,
		/*  8670 */ 9961, 14375, 9382, 9986, 9389, 13842, 10011, 10039, 10055, 11617, 10065, 10081, 10097, 10141, 10171,
		/*  8685 */ 10233, 10274, 10303, 9993, 13832, 9995, 13530, 13536, 10351, 10367, 10392, 10408, 10424, 11205, 11205,
		/*  8700 */ 11205, 11205, 11205, 11205, 10461, 11205, 11205, 14557, 11205, 11205, 11205, 14709, 10912, 11205, 11205,
		/*  8715 */ 11205, 14312, 9146, 11205, 14818, 11205, 11205, 11205, 20493, 17233, 11205, 11205, 18622, 16571, 18342,
		/*  8730 */ 18192, 11205, 17296, 11205, 11205, 11205, 20493, 12040, 16879, 11205, 18623, 22834, 22834, 21691, 18342,
		/*  8745 */ 18342, 18342, 19280, 11205, 11205, 11205, 11205, 11205, 12039, 17232, 27909, 22834, 22834, 22834, 20351,
		/*  8760 */ 18342, 18342, 18342, 11205, 11205, 11205, 11205, 11205, 12038, 16879, 22833, 22834, 22834, 15778, 18342,
		/*  8775 */ 18342, 18342, 11205, 11205, 11205, 11205, 12040, 10214, 22834, 22834, 16022, 18342, 18342, 17277, 11205,
		/*  8790 */ 11205, 20492, 27324, 22834, 16672, 18342, 18342, 11205, 11205, 20493, 22829, 24899, 18342, 19278, 11205,
		/*  8805 */ 27439, 22832, 20113, 17272, 11205, 21815, 17647, 17274, 24151, 20114, 15993, 20114, 18620, 25094, 18624,
		/*  8820 */ 17276, 20110, 25170, 24112, 19102, 11989, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205, 11205,
		/*  8835 */ 11205, 11205, 11205, 9080, 11205, 9070, 27945, 27950, 26965, 27966, 10535, 11205, 11205, 11205, 10536,
		/*  8850 */ 11205, 18143, 14389, 11205, 11205, 12700, 9235, 9993, 27734, 9102, 27989, 9162, 21004, 11205, 18143,
		/*  8865 */ 9180, 9196, 9212, 9228, 9251, 9274, 27725, 12708, 9258, 9281, 27732, 13600, 11205, 11031, 9313, 9350,
		/*  8881 */ 9368, 9405, 9464, 10284, 9513, 9542, 9532, 10287, 9516, 9545, 27421, 14786, 9561, 27538, 12436, 9589,
		/*  8897 */ 9619, 10121, 9655, 10829, 10109, 10125, 9659, 10833, 14073, 9675, 9704, 9741, 9778, 9794, 9810, 9832,
		/*  8913 */ 9762, 9804, 9826, 9756, 9848, 20255, 18142, 9878, 9893, 9914, 9888, 9909, 9930, 9961, 14375, 9382, 9986,
		/*  8930 */ 9389, 13842, 10011, 10039, 10055, 11617, 10065, 10081, 10097, 10141, 10171, 10233, 10274, 10303, 9993,
		/*  8945 */ 13832, 9995, 13530, 13536, 10351, 10367, 10392, 10408, 10424, 11205, 11205, 11205, 11205, 11205, 11205,
		/*  8960 */ 0, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 0, 37076, 37076, 37076, 37076, 0, 0, 39127, 39127, 37076, 37076,
		/*  8982 */ 39127, 39127, 39127, 39127, 39127, 39127, 39127, 39127, 39127, 39127, 39127, 0, 0, 37076, 39127, 37076,
		/*  8998 */ 39127, 39127, 39127, 39127, 39127, 39127, 39127, 39127, 39127, 39127, 39127, 39127, 39127, 251, 39127,
		/*  9013 */ 39127, 39127, 39127, 39127, 39127, 39127, 39127, 39127, 39127, 39127, 22528, 24576, 39127, 39127, 39127,
		/*  9028 */ 39127, 39127, 39127, 39127, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 39127, 20480, 39127, 39127, 39127, 39127,
		/*  9047 */ 39127, 39127, 39127, 39127, 39127, 39127, 39127, 39127, 39127, 39127, 39127, 39127, 0, 0, 0, 37076, 0,
		/*  9064 */ 0, 39127, 0, 528384, 218, 219, 0, 0, 0, 0, 0, 0, 0, 0, 53248, 0, 0, 0, 0, 0, 0, 53248, 0, 0, 0, 0, 0, 0,
		/*  9092 */ 0, 0, 0, 0, 247, 0, 0, 0, 0, 0, 0, 690176, 0, 0, 702464, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 824, 0, 0,
		/*  9122 */ 0, 796672, 0, 0, 0, 843776, 0, 0, 0, 0, 0, 0, 0, 0, 251, 251, 0, 0, 0, 0, 0, 1014, 0, 1016, 0, 0, 0, 0,
		/*  9150 */ 0, 0, 0, 0, 0, 218, 219, 0, 0, 0, 0, 0, 0, 694272, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1603,
		/*  9180 */ 555008, 555008, 555008, 761856, 555008, 555008, 780288, 555008, 788480, 555008, 555008, 806912, 813056,
		/*  9193 */ 819200, 555008, 833536, 555008, 849920, 555008, 555008, 555008, 907264, 555008, 555008, 555008, 0, 0, 0,
		/*  9208 */ 761856, 0, 780288, 788480, 0, 0, 806912, 813056, 819200, 0, 833536, 849920, 907264, 0, 0, 0, 0, 849920,
		/*  9226 */ 0, 813056, 849920, 0, 0, 0, 796672, 0, 0, 557056, 557056, 557056, 557056, 557056, 557056, 557056,
		/*  9242 */ 557056, 557056, 557056, 557056, 557056, 557056, 0, 557056, 557056, 557056, 557056, 557056, 557056,
		/*  9255 */ 761856, 557056, 557056, 557056, 557056, 780288, 557056, 788480, 557056, 792576, 557056, 557056, 806912,
		/*  9268 */ 557056, 813056, 819200, 557056, 557056, 557056, 806912, 557056, 813056, 819200, 557056, 557056, 557056,
		/*  9281 */ 833536, 557056, 557056, 849920, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056,
		/*  9294 */ 557056, 907264, 557056, 557056, 557056, 557056, 557056, 557056, 907264, 557056, 557056, 557056, 557056,
		/*  9307 */ 557056, 557056, 637, 0, 0, 640, 811008, 0, 0, 0, 0, 0, 0, 0, 0, 0, 776192, 0, 817152, 0, 0, 0, 0, 0, 0,
		/*  9332 */ 377, 1876, 377, 377, 377, 377, 377, 377, 377, 377, 880, 377, 377, 377, 637, 45942, 827, 640, 0, 665600,
		/*  9352 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1615, 0, 686080, 555008, 555008, 555008, 555008, 555008,
		/*  9375 */ 555008, 743424, 555008, 555008, 759808, 555008, 776192, 555008, 555008, 0, 0, 0, 557056, 557056, 557056,
		/*  9390 */ 557056, 557056, 716800, 731136, 733184, 557056, 557056, 749568, 557056, 557056, 557056, 557056, 557056,
		/*  9403 */ 557056, 854016, 555008, 555008, 817152, 825344, 555008, 555008, 555008, 555008, 555008, 555008, 555008,
		/*  9416 */ 555008, 686080, 0, 743424, 0, 0, 0, 0, 0, 1056, 0, 0, 0, 0, 827, 377, 377, 377, 377, 377, 377, 377,
		/*  9438 */ 1766, 377, 377, 399, 399, 399, 399, 399, 399, 663, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1336,
		/*  9458 */ 399, 399, 399, 399, 399, 399, 0, 0, 0, 825344, 0, 0, 825344, 0, 0, 0, 557056, 557056, 686080, 557056,
		/*  9478 */ 557056, 557056, 0, 0, 0, 0, 0, 2, 0, 88064, 147456, 0, 0, 0, 0, 0, 0, 0, 65536, 0, 0, 0, 0, 0, 0, 0, 0,
		/*  9505 */ 0, 0, 771, 0, 0, 0, 0, 0, 557056, 776192, 557056, 557056, 557056, 557056, 557056, 557056, 557056,
		/*  9522 */ 817152, 821248, 825344, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056,
		/*  9535 */ 0, 0, 0, 0, 0, 557056, 686080, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056,
		/*  9551 */ 557056, 557056, 557056, 911360, 557056, 557056, 557056, 557056, 557056, 557056, 905216, 929792, 0, 0, 0,
		/*  9566 */ 0, 0, 0, 0, 0, 0, 835584, 0, 0, 0, 0, 0, 0, 0, 1384, 0, 0, 0, 0, 1389, 0, 0, 0, 0, 0, 555008, 704512,
		/*  9593 */ 706560, 555008, 555008, 555008, 555008, 751616, 555008, 555008, 555008, 790528, 555008, 555008, 0, 0, 0,
		/*  9608 */ 557639, 557639, 557639, 557639, 557639, 717383, 731719, 733767, 557639, 557639, 750151, 845824, 555008,
		/*  9621 */ 555008, 555008, 555008, 555008, 555008, 555008, 555008, 706560, 0, 790528, 0, 0, 0, 0, 0, 0, 0, 1396, 0,
		/*  9640 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 827, 377, 377, 377, 377, 1061, 751616, 557056, 557056, 557056, 557056,
		/*  9660 */ 557056, 557056, 790528, 557056, 557056, 557056, 808960, 557056, 557056, 841728, 845824, 557056, 557056,
		/*  9673 */ 557056, 557056, 0, 0, 851968, 0, 0, 0, 0, 0, 0, 0, 0, 0, 815104, 0, 0, 0, 0, 0, 0, 447, 0, 0, 0, 315,
		/*  9699 */ 315, 315, 315, 530, 315, 0, 0, 0, 899072, 0, 0, 0, 0, 0, 0, 0, 0, 0, 724992, 784384, 0, 0, 0, 0, 0,
		/*  9724 */ 1181, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 233, 22528, 24576, 0, 259, 259, 931840, 0, 0, 741376, 0, 0, 0, 0, 0,
		/*  9750 */ 0, 0, 0, 0, 0, 0, 894976, 557056, 909312, 557056, 919552, 557056, 557056, 931840, 557056, 0, 0, 0, 0, 0,
		/*  9770 */ 0, 0, 0, 0, 0, 0, 0, 557056, 555008, 555008, 555008, 724992, 555008, 555008, 753664, 555008, 784384,
		/*  9787 */ 555008, 555008, 851968, 555008, 555008, 555008, 894976, 909312, 919552, 931840, 0, 0, 0, 0, 909312,
		/*  9802 */ 919552, 557056, 688128, 557056, 557056, 557056, 712704, 557056, 557056, 724992, 557056, 557056, 557056,
		/*  9815 */ 557056, 557056, 753664, 763904, 557056, 557056, 557056, 784384, 557056, 557056, 557056, 557056, 557056,
		/*  9828 */ 784384, 557056, 557056, 557056, 557056, 557056, 851968, 557056, 557056, 557056, 557056, 557056, 557056,
		/*  9841 */ 557056, 894976, 557056, 909312, 557056, 919552, 557056, 0, 0, 827392, 0, 847872, 0, 876544, 880640,
		/*  9856 */ 933888, 0, 0, 0, 0, 0, 0, 0, 0, 0, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 765952, 555008, 555008, 876544,
		/*  9882 */ 555008, 892928, 0, 765952, 0, 0, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056,
		/*  9897 */ 557056, 557056, 765952, 557056, 557056, 794624, 557056, 557056, 827392, 557056, 557056, 858112, 557056,
		/*  9910 */ 827392, 557056, 557056, 858112, 557056, 557056, 876544, 557056, 557056, 892928, 901120, 557056, 557056,
		/*  9923 */ 557056, 935936, 0, 0, 0, 0, 557056, 0, 0, 0, 0, 720896, 0, 0, 733184, 749568, 0, 0, 0, 0, 0, 927744, 0,
		/*  9946 */ 0, 0, 0, 0, 1194, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1203, 800768, 0, 0, 0, 854016, 0, 888832, 0, 731136, 0, 0,
		/*  9972 */ 0, 0, 0, 0, 0, 0, 0, 264, 0, 265, 266, 0, 0, 0, 557056, 557056, 557056, 557056, 557056, 557056, 854016,
		/*  9993 */ 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056,
		/* 10006 */ 557056, 557056, 557056, 0, 0, 770048, 757760, 782336, 0, 0, 870400, 0, 913408, 925696, 0, 679936,
		/* 10022 */ 872448, 0, 0, 0, 0, 0, 0, 0, 1527, 1528, 0, 1530, 1531, 315, 1533, 315, 315, 798720, 0, 0, 0, 0, 0, 0,
		/* 10046 */ 0, 555008, 708608, 555008, 555008, 802816, 555008, 555008, 708608, 802816, 0, 681984, 557056, 557056,
		/* 10060 */ 708608, 557056, 557056, 557056, 745472, 557056, 557056, 778240, 802816, 557056, 557056, 557056, 557056,
		/* 10073 */ 557056, 557056, 557056, 557056, 557056, 923648, 0, 714752, 0, 0, 0, 829440, 0, 0, 921600, 0, 0, 0, 0, 0,
		/* 10093 */ 0, 862208, 0, 692224, 0, 878592, 692224, 714752, 555008, 804864, 878592, 804864, 557056, 692224, 696320,
		/* 10108 */ 714752, 557056, 557056, 557056, 557056, 0, 0, 0, 0, 536576, 0, 0, 0, 0, 557056, 557056, 557056, 557056,
		/* 10126 */ 704512, 706560, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 751616, 557056,
		/* 10139 */ 557056, 557056, 772096, 804864, 829440, 866304, 557056, 878592, 557056, 557056, 557056, 921600, 557056,
		/* 10152 */ 692224, 696320, 714752, 557056, 557056, 557056, 0, 0, 0, 0, 0, 2, 6, 0, 0, 0, 0, 697, 701, 557056,
		/* 10172 */ 557056, 772096, 804864, 829440, 866304, 557056, 878592, 557056, 557056, 557056, 921600, 0, 0, 0, 0, 0,
		/* 10188 */ 0, 0, 1608, 0, 0, 0, 1611, 0, 0, 0, 0, 0, 0, 0, 1622, 0, 0, 1625, 315, 315, 315, 315, 315, 315, 315,
		/* 10213 */ 548, 315, 315, 315, 0, 0, 0, 0, 0, 0, 377, 377, 377, 377, 377, 377, 377, 377, 1882, 377, 837632, 0, 0,
		/* 10236 */ 0, 0, 0, 823296, 0, 937984, 739328, 739328, 557056, 735232, 739328, 557056, 557056, 557056, 0, 0, 0, 0,
		/* 10254 */ 0, 2, 6, 0, 0, 0, 218, 0, 0, 0, 0, 0, 0, 0, 0, 59677, 24576, 0, 0, 0, 557056, 557056, 557056, 557056,
		/* 10278 */ 557056, 557056, 917504, 557056, 735232, 739328, 557056, 557056, 557056, 557056, 557056, 557056, 557056,
		/* 10291 */ 557056, 743424, 557056, 557056, 557056, 557056, 759808, 557056, 557056, 557056, 776192, 557056, 557056,
		/* 10304 */ 557056, 917504, 0, 0, 0, 0, 839680, 0, 0, 0, 0, 0, 557056, 557056, 557056, 0, 0, 0, 0, 0, 2, 6, 0, 0, 0,
		/* 10329 */ 0, 0, 0, 0, 0, 262, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1213, 0, 1004, 0, 0, 0, 0, 0, 0, 557056, 557056, 755712,
		/* 10356 */ 557056, 831488, 557056, 557056, 557056, 884736, 557056, 557056, 755712, 557056, 831488, 557056, 557056,
		/* 10369 */ 557056, 884736, 722944, 0, 0, 0, 0, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056,
		/* 10384 */ 557056, 557056, 557056, 557056, 557693, 0, 557056, 557696, 557056, 557056, 557056, 557056, 557056, 0, 0,
		/* 10399 */ 0, 0, 684032, 557056, 557056, 557056, 557056, 882688, 684032, 557056, 557056, 557056, 557056, 882688,
		/* 10413 */ 729088, 0, 0, 860160, 557056, 774144, 868352, 557056, 557056, 774144, 868352, 557056, 768000, 786432,
		/* 10427 */ 737280, 557056, 737280, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 874496, 874496, 0, 0, 0,
		/* 10442 */ 0, 0, 1222, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 415744, 0, 415744, 0, 0, 0, 2, 3, 47108, 5, 6, 0, 0, 0, 0,
		/* 10471 */ 0, 0, 0, 0, 0, 0, 0, 1388, 0, 0, 0, 0, 0, 20480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55628, 55628,
		/* 10500 */ 55628, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 55628, 55628, 0, 55628, 55628, 332, 332, 332, 332, 332, 332, 332,
		/* 10522 */ 55628, 332, 55628, 55628, 55628, 55628, 55628, 55628, 55628, 55628, 55628, 55628, 55628, 0, 0, 0, 0, 0,
		/* 10540 */ 0, 0, 0, 528384, 0, 0, 0, 0, 0, 0, 0, 0, 557056, 557056, 557056, 0, 694, 0, 694, 0, 2, 6, 0, 0, 0, 0, 0,
		/* 10567 */ 0, 0, 0, 315, 0, 0, 377, 377, 377, 377, 377, 59392, 0, 0, 218, 59392, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 10594 */ 0, 984, 0, 0, 0, 0, 20480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 218, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1173, 0,
		/* 10625 */ 0, 0, 218, 218, 218, 218, 0, 0, 218, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 1368, 0, 0, 0, 0, 0, 0,
		/* 10654 */ 0, 0, 0, 0, 0, 90532, 90532, 90532, 90532, 90532, 0, 2, 567500, 47108, 5, 6, 208, 0, 0, 0, 0, 0, 208, 0,
		/* 10678 */ 0, 0, 0, 0, 0, 448, 520, 0, 0, 315, 523, 315, 315, 531, 315, 0, 20480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 10705 */ 61440, 0, 61440, 61440, 0, 0, 61440, 61440, 61440, 61440, 61440, 61440, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 10728 */ 0, 0, 0, 0, 112640, 61440, 61440, 0, 61440, 61440, 0, 0, 0, 0, 0, 0, 0, 0, 0, 61440, 0, 0, 0, 0, 0, 0,
		/* 10754 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 61440, 61440, 0, 0, 0, 2, 2, 567500, 47108, 5, 6, 0, 0, 0, 0, 0, 1382, 0,
		/* 10782 */ 0, 0, 0, 1387, 0, 0, 0, 0, 0, 0, 0, 492, 377, 377, 377, 377, 377, 377, 377, 377, 849, 377, 377, 377,
		/* 10806 */ 377, 377, 377, 377, 377, 1555, 377, 377, 377, 377, 377, 377, 377, 557056, 557056, 557056, 1109, 0, 0,
		/* 10825 */ 1114, 0, 557056, 686080, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 886784, 890880, 557056,
		/* 10839 */ 557056, 557056, 903168, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 0, 0, 65536, 65536,
		/* 10853 */ 65536, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1187, 1188, 1189, 0, 0, 0, 0, 65536, 0, 0, 0, 0, 65536, 0, 0,
		/* 10881 */ 22528, 24576, 65536, 0, 0, 0, 0, 0, 0, 1875, 377, 377, 1877, 377, 1879, 377, 377, 377, 377, 0, 0, 0, 0,
		/* 10904 */ 1113, 0, 0, 0, 0, 399, 1313, 399, 0, 20480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124928, 0, 0,
		/* 10932 */ 0, 0, 65536, 0, 0, 65536, 0, 0, 0, 65536, 65536, 65536, 65536, 65536, 0, 0, 65536, 0, 0, 2, 2, 3, 47108,
		/* 10955 */ 5, 6, 0, 0, 0, 0, 0, 67584, 0, 0, 0, 0, 67584, 0, 22528, 24576, 0, 0, 0, 0, 0, 0, 458, 0, 0, 0, 251,
		/* 10982 */ 251, 251, 0, 0, 0, 0, 0, 0, 488, 280, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 982, 0, 0, 0, 0, 0, 0, 0, 0, 67584,
		/* 11012 */ 67584, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1361, 0, 0, 0, 0, 286, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 11044 */ 0, 0, 532480, 557056, 557056, 557056, 557056, 557056, 907264, 557056, 557056, 557056, 557056, 557056,
		/* 11058 */ 557056, 884, 0, 0, 887, 69632, 0, 0, 219, 69632, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1601, 0, 0, 0, 0,
		/* 11085 */ 0, 219, 0, 0, 0, 0, 0, 0, 0, 0, 22528, 69921, 0, 0, 0, 0, 0, 0, 501, 0, 0, 0, 0, 0, 507, 0, 0, 0, 0, 0,
		/* 11115 */ 0, 519, 0, 0, 0, 315, 315, 315, 315, 529, 315, 0, 20480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 219, 0, 0, 0, 0, 0,
		/* 11143 */ 0, 0, 0, 0, 0, 0, 0, 1612, 0, 0, 0, 219, 219, 219, 219, 0, 0, 219, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 0,
		/* 11172 */ 0, 0, 1394, 1395, 0, 0, 1398, 0, 0, 0, 0, 0, 0, 0, 0, 1017, 0, 0, 0, 0, 0, 0, 0, 0, 0, 425984, 555008,
		/* 11199 */ 555008, 555008, 555008, 555008, 555008, 18432, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 229, 219,
		/* 11223 */ 690176, 0, 0, 702464, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 415744, 251, 0, 415744, 0, 0, 216, 216, 0, 0,
		/* 11249 */ 216, 216, 71896, 216, 216, 216, 216, 216, 216, 216, 71896, 216, 216, 216, 216, 216, 216, 216, 216, 216,
		/* 11269 */ 71896, 216, 216, 216, 216, 216, 255, 216, 216, 216, 216, 216, 216, 216, 216, 216, 216, 216, 216, 216,
		/* 11289 */ 216, 216, 216, 252, 216, 216, 216, 216, 216, 216, 71896, 216, 216, 216, 216, 216, 216, 22528, 24576,
		/* 11308 */ 216, 216, 216, 216, 71896, 71896, 216, 71896, 71896, 71896, 71896, 71896, 71896, 71935, 71935, 71935,
		/* 11324 */ 71935, 71896, 71896, 71896, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 216, 20480, 216, 216, 216, 216, 216, 216,
		/* 11345 */ 216, 216, 216, 216, 216, 71896, 71896, 71896, 71896, 71896, 216, 216, 216, 216, 216, 216, 216, 216,
		/* 11363 */ 71896, 216, 71896, 71896, 71896, 71896, 71896, 71896, 71896, 71896, 0, 0, 0, 216, 0, 796672, 0, 0, 0,
		/* 11382 */ 843776, 0, 0, 0, 0, 0, 0, 0, 0, 565710, 565710, 0, 0, 0, 0, 0, 1499, 0, 0, 0, 0, 0, 1502, 1503, 0, 0, 0,
		/* 11409 */ 0, 0, 0, 1005, 0, 495, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1624, 315, 1626, 315, 315, 315, 1629, 0, 20480, 0, 0,
		/* 11435 */ 0, 0, 0, 0, 77824, 0, 0, 77824, 0, 0, 0, 0, 77824, 77824, 0, 0, 0, 0, 0, 0, 0, 0, 0, 461, 251, 251, 251,
		/* 11462 */ 0, 0, 0, 0, 0, 77824, 0, 0, 77824, 77824, 77824, 77824, 77824, 77824, 77824, 77824, 77824, 77824, 77824,
		/* 11481 */ 0, 0, 0, 0, 0, 796672, 0, 0, 0, 843776, 0, 0, 0, 0, 0, 0, 0, 0, 251, 0, 0, 0, 0, 0, 0, 77824, 0, 77824,
		/* 11509 */ 0, 77824, 0, 0, 0, 0, 77824, 77824, 77824, 0, 0, 2, 2, 0, 47108, 5, 6, 63488, 0, 20480, 0, 0, 0, 0, 0,
		/* 11534 */ 0, 0, 0, 0, 0, 0, 79872, 0, 79872, 79872, 79872, 79872, 79872, 79872, 79872, 79872, 79872, 79872, 79872,
		/* 11553 */ 79872, 79872, 79872, 79872, 79872, 0, 0, 0, 0, 0, 45454, 79872, 0, 0, 0, 0, 79872, 0, 0, 79872, 79872,
		/* 11574 */ 45454, 45454, 45454, 45454, 45454, 79872, 79872, 45454, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 557056, 557056,
		/* 11593 */ 557056, 557056, 557056, 907264, 557056, 557056, 557056, 557056, 557056, 557056, 637, 0, 45056, 640,
		/* 11607 */ 557056, 557056, 557056, 0, 0, 0, 0, 45056, 557056, 686080, 557056, 557056, 557056, 557056, 557056,
		/* 11622 */ 557056, 557056, 923648, 681984, 557056, 557056, 708608, 557056, 557056, 557056, 745472, 0, 20480, 0, 0,
		/* 11637 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81920, 81920, 81920, 81920, 81920, 0, 81920, 81920, 81920, 81920,
		/* 11658 */ 81920, 81920, 81920, 81920, 81920, 81920, 81920, 81920, 81920, 0, 0, 0, 0, 0, 81920, 81920, 81920,
		/* 11675 */ 81920, 81920, 81920, 81920, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 1512, 0, 0, 0, 0, 1516, 0, 0, 0,
		/* 11701 */ 0, 0, 0, 0, 566, 0, 0, 569, 0, 0, 0, 0, 572, 0, 20480, 83968, 83968, 83968, 83968, 83968, 0, 83968, 0,
		/* 11724 */ 0, 0, 0, 0, 0, 83968, 83968, 83968, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 83968, 83968, 83968, 83968, 83968,
		/* 11746 */ 83968, 83968, 83968, 83968, 83968, 83968, 83968, 83968, 83968, 83968, 83968, 0, 0, 0, 0, 0, 0, 2, 3,
		/* 11765 */ 205, 5, 6, 0, 209, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 786, 315, 315, 315, 315, 315, 0, 20480, 0, 0, 0, 0, 0,
		/* 11793 */ 0, 0, 0, 0, 0, 0, 0, 0, 86016, 86016, 86016, 86016, 86016, 0, 86016, 86016, 86016, 86016, 86016, 86016,
		/* 11813 */ 86016, 86016, 86016, 86016, 86016, 86016, 86016, 0, 0, 0, 0, 0, 86016, 86016, 86016, 86016, 86016,
		/* 11830 */ 86016, 86016, 26824, 26824, 2, 2, 3, 0, 5, 6, 0, 0, 0, 0, 0, 1525, 0, 0, 0, 0, 0, 315, 1532, 315, 315,
		/* 11855 */ 315, 315, 315, 315, 1539, 0, 0, 0, 377, 377, 377, 1545, 377, 377, 427, 0, 0, 0, 0, 0, 0, 0, 528384, 218,
		/* 11879 */ 219, 0, 0, 0, 0, 0, 0, 0, 0, 528384, 431, 432, 0, 0, 0, 0, 0, 0, 0, 0, 528384, 218, 10673, 0, 0, 0, 0,
		/* 11906 */ 0, 0, 0, 0, 528384, 10670, 219, 0, 0, 0, 0, 0, 0, 0, 0, 528384, 218, 219, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 11932 */ 528384, 218, 219, 0, 0, 106496, 0, 0, 0, 0, 0, 1179, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1001, 0, 0,
		/* 11960 */ 377, 377, 377, 377, 1563, 377, 377, 377, 377, 377, 377, 0, 0, 0, 0, 399, 0, 0, 377, 377, 399, 399, 377,
		/* 11983 */ 399, 1948, 1949, 377, 399, 377, 399, 0, 0, 377, 377, 399, 399, 377, 399, 377, 399, 377, 399, 377, 399,
		/* 12004 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1847, 377, 377, 377, 377, 377, 377, 628, 377, 377, 377, 377, 377, 377, 0,
		/* 12028 */ 399, 399, 0, 0, 0, 1619, 0, 0, 0, 0, 0, 0, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315,
		/* 12052 */ 315, 315, 315, 315, 0, 0, 1705, 377, 377, 377, 377, 377, 377, 1711, 377, 377, 377, 377, 377, 377, 377,
		/* 12073 */ 850, 377, 377, 377, 377, 377, 377, 377, 377, 1723, 399, 399, 399, 399, 399, 399, 1729, 1761, 377, 1762,
		/* 12093 */ 1763, 377, 377, 377, 377, 377, 377, 399, 399, 399, 399, 399, 399, 662, 399, 399, 399, 399, 399, 399,
		/* 12113 */ 399, 399, 399, 0, 0, 1491, 0, 0, 0, 0, 399, 399, 1773, 399, 1774, 1775, 399, 399, 399, 399, 399, 399, 0,
		/* 12136 */ 0, 0, 0, 0, 949, 0, 0, 0, 955, 0, 377, 377, 377, 1797, 377, 377, 377, 399, 1801, 399, 399, 399, 399,
		/* 12159 */ 399, 399, 1807, 399, 1885, 399, 399, 399, 399, 399, 399, 399, 399, 0, 0, 0, 0, 0, 0, 0, 1816, 1817, 0,
		/* 12182 */ 377, 377, 377, 0, 0, 279, 0, 0, 0, 0, 0, 0, 0, 0, 22528, 24576, 0, 0, 0, 0, 0, 0, 708, 0, 0, 0, 0, 0, 0,
		/* 12211 */ 0, 0, 0, 0, 315, 377, 377, 377, 1792, 377, 90532, 90532, 90532, 90532, 0, 0, 90532, 26824, 26824, 2, 2,
		/* 12232 */ 3, 47108, 5, 6, 0, 0, 0, 0, 0, 1596, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 135168, 135168, 135168, 135168,
		/* 12257 */ 135168, 399, 399, 399, 92160, 0, 0, 0, 26824, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0, 315, 0, 0, 396, 396, 396,
		/* 12282 */ 396, 396, 0, 20480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 94541, 94541, 94541, 94541, 94541, 94541, 0,
		/* 12306 */ 94541, 94541, 0, 0, 0, 0, 0, 0, 0, 94541, 0, 94541, 94541, 94541, 94541, 94541, 94541, 0, 0, 0, 2, 2, 3,
		/* 12329 */ 47108, 5, 6, 0, 94541, 94541, 94541, 94541, 94541, 94541, 94541, 94541, 94541, 94541, 94541, 0, 0, 0, 0,
		/* 12348 */ 220, 555008, 555008, 555008, 555008, 555008, 555008, 555008, 555008, 555008, 555008, 555008, 0, 96256,
		/* 12362 */ 0, 0, 0, 0, 0, 0, 734, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 251, 251, 251, 0, 0, 465, 0, 0, 280, 0, 0, 0, 0, 0,
		/* 12393 */ 0, 0, 0, 22528, 24576, 0, 0, 0, 0, 0, 0, 750, 489, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 565710, 565710, 565710,
		/* 12419 */ 0, 0, 0, 0, 20480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 217, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 12450 */ 751616, 845824, 280, 280, 280, 280, 0, 0, 280, 26824, 26824, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 1746,
		/* 12473 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 240, 0, 0, 0, 0, 0, 0, 0, 0, 756, 1004, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 12505 */ 0, 421888, 0, 0, 0, 945, 1169, 0, 0, 0, 0, 951, 1171, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1185, 0, 0, 0, 0, 0,
		/* 12534 */ 377, 377, 377, 377, 1300, 0, 0, 0, 1113, 1306, 0, 0, 0, 399, 399, 399, 0, 0, 0, 0, 0, 1814, 0, 0, 0, 0,
		/* 12560 */ 377, 377, 377, 377, 1708, 1709, 1710, 377, 377, 377, 377, 377, 377, 377, 399, 399, 399, 1802, 399, 399,
		/* 12580 */ 399, 399, 399, 1169, 0, 1171, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 242, 244, 268, 377, 377, 377, 1300,
		/* 12606 */ 1452, 0, 0, 0, 0, 1306, 1454, 0, 0, 0, 0, 399, 0, 0, 377, 377, 399, 399, 1946, 1947, 377, 399, 377, 399,
		/* 12630 */ 377, 399, 0, 0, 0, 0, 1842, 0, 0, 0, 0, 377, 377, 377, 377, 377, 377, 1263, 377, 377, 377, 377, 377,
		/* 12653 */ 377, 377, 377, 1099, 377, 377, 377, 377, 377, 377, 1105, 0, 20480, 0, 0, 0, 222, 0, 0, 100352, 0, 0, 0,
		/* 12676 */ 0, 0, 0, 0, 0, 0, 568, 570, 0, 0, 0, 0, 0, 100573, 100352, 100352, 100573, 100352, 100352, 100573,
		/* 12696 */ 100352, 100352, 100352, 100352, 0, 0, 0, 0, 0, 0, 0, 0, 557056, 557056, 557056, 557056, 557056, 557056,
		/* 12714 */ 557056, 557056, 557056, 557056, 557056, 557056, 557056, 761856, 557056, 557056, 0, 0, 0, 0, 100352,
		/* 12729 */ 100573, 100352, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 65536, 0, 0, 0, 65536, 0, 0, 0, 0, 0, 0, 0,
		/* 12756 */ 0, 315, 0, 0, 377, 397, 397, 397, 377, 796672, 0, 0, 0, 843776, 0, 0, 0, 0, 0, 0, 0, 0, 0, 565711, 0, 0,
		/* 12782 */ 0, 0, 0, 67584, 0, 67584, 67584, 67584, 67584, 67584, 67584, 67584, 67584, 67584, 0, 0, 67584, 0, 0, 2,
		/* 12802 */ 2, 3, 47108, 5, 6, 0, 849920, 0, 0, 0, 796672, 0, 0, 557639, 557639, 557639, 557639, 557639, 557639,
		/* 12821 */ 557639, 557639, 557639, 557639, 557639, 557639, 557639, 638, 557695, 557695, 807495, 557639, 813639,
		/* 12834 */ 819783, 557639, 557639, 557639, 834119, 557639, 557639, 850503, 557639, 557639, 557639, 557639, 557639,
		/* 12847 */ 557639, 854599, 557639, 557639, 557639, 557639, 557639, 557639, 557639, 557695, 557695, 557695, 557695,
		/* 12860 */ 557695, 557695, 557695, 557695, 557695, 557695, 0, 0, 557695, 557695, 780927, 557695, 789119, 557695,
		/* 12874 */ 793215, 557695, 557695, 807551, 557695, 813695, 819839, 557695, 557695, 557695, 0, 0, 0, 0, 0, 2, 6, 0,
		/* 12892 */ 0, 0, 0, 0, 0, 0, 0, 377, 377, 377, 592, 377, 377, 377, 377, 834175, 557695, 557695, 850559, 557695,
		/* 12912 */ 557695, 557695, 557695, 557695, 557695, 557695, 557695, 557695, 557695, 907903, 557695, 0, 718848, 0, 0,
		/* 12927 */ 0, 0, 0, 0, 0, 557639, 557639, 557639, 557639, 557639, 557639, 766535, 557639, 557639, 795207, 557639,
		/* 12943 */ 557639, 827975, 557639, 557639, 858695, 0, 0, 0, 825344, 0, 0, 825344, 0, 0, 0, 557056, 557639, 686663,
		/* 12961 */ 557639, 557639, 557639, 0, 0, 0, 0, 0, 557695, 686719, 557695, 557695, 557695, 557695, 557695, 557695,
		/* 12977 */ 557695, 698368, 0, 0, 0, 0, 0, 0, 856064, 778240, 557639, 776775, 557639, 557639, 557639, 557639,
		/* 12993 */ 557639, 557639, 557639, 817735, 821831, 825927, 557639, 557639, 557639, 557639, 0, 0, 0, 0, 536576, 0,
		/* 13009 */ 0, 0, 0, 557695, 557695, 557695, 752199, 557639, 557639, 557639, 557639, 557639, 557639, 791111, 557639,
		/* 13024 */ 557639, 557639, 809543, 557639, 557639, 842311, 846407, 557695, 705151, 707199, 557695, 557695, 557695,
		/* 13037 */ 557695, 557695, 557695, 557695, 557695, 557695, 752255, 557695, 557695, 557695, 557695, 557695, 0, 0, 0,
		/* 13052 */ 0, 684615, 557639, 557639, 557639, 557639, 883271, 684671, 557695, 557695, 557695, 887423, 891519,
		/* 13065 */ 557695, 557695, 557695, 903807, 557695, 557695, 557695, 557695, 557695, 557695, 557695, 557695, 557695,
		/* 13078 */ 557695, 557695, 766591, 557695, 557695, 795263, 557695, 909312, 919552, 931840, 0, 0, 0, 0, 909312,
		/* 13093 */ 919552, 557639, 688711, 557639, 557639, 557639, 713287, 557639, 725575, 557639, 557639, 557639, 557639,
		/* 13106 */ 557639, 754247, 764487, 557639, 557639, 557639, 784967, 557639, 557639, 557639, 557639, 557639, 907847,
		/* 13119 */ 557639, 557639, 557639, 557639, 557639, 557639, 637, 0, 0, 640, 557639, 932423, 557639, 0, 0, 0, 0, 0,
		/* 13137 */ 0, 0, 0, 0, 0, 0, 0, 557695, 557695, 557695, 557695, 883327, 729088, 0, 0, 860160, 557639, 774727,
		/* 13155 */ 868935, 557639, 557695, 774783, 868991, 688767, 557695, 557695, 557695, 713343, 557695, 557695, 725631,
		/* 13168 */ 557695, 557695, 557695, 557695, 557695, 754303, 764543, 557695, 557695, 557695, 717439, 731775, 733823,
		/* 13181 */ 557695, 557695, 750207, 557695, 557695, 557695, 557695, 557695, 557695, 854655, 557695, 557695, 785023,
		/* 13194 */ 557695, 557695, 557695, 557695, 557695, 852607, 557695, 557695, 557695, 557695, 557695, 557695, 557695,
		/* 13207 */ 557695, 557695, 911999, 557695, 557695, 557695, 557695, 557695, 557695, 895615, 557695, 909951, 557695,
		/* 13220 */ 920191, 557695, 557695, 932479, 557695, 0, 0, 0, 0, 0, 0, 0, 0, 0, 725, 0, 0, 0, 251, 251, 0, 765952,
		/* 13242 */ 555008, 555008, 876544, 555008, 892928, 0, 765952, 0, 0, 557639, 557639, 557639, 557639, 557639, 557639,
		/* 13257 */ 557639, 924231, 682623, 557695, 557695, 709247, 557695, 557695, 557695, 746111, 557695, 828031, 557695,
		/* 13270 */ 557695, 858751, 557695, 557695, 877183, 557695, 557695, 893567, 901759, 557695, 557695, 557695, 936575,
		/* 13283 */ 802816, 0, 682567, 557639, 557639, 709191, 557639, 557639, 557639, 746055, 557639, 557639, 778823,
		/* 13296 */ 803399, 557639, 557639, 557639, 557639, 762439, 557639, 557639, 557639, 557639, 780871, 557639, 789063,
		/* 13309 */ 557639, 793159, 557639, 557639, 852551, 557639, 557639, 557639, 557639, 557639, 557639, 557639, 895559,
		/* 13322 */ 557639, 909895, 557639, 920135, 557639, 557695, 557695, 778879, 803455, 557695, 557695, 557695, 557695,
		/* 13335 */ 557695, 557695, 557695, 557695, 557695, 924287, 0, 714752, 0, 878592, 692224, 714752, 555008, 804864,
		/* 13349 */ 878592, 804864, 557639, 692807, 696903, 715335, 557639, 557639, 557639, 557639, 557639, 557639, 918087,
		/* 13362 */ 557695, 735871, 739967, 557695, 557695, 557695, 557695, 557695, 557695, 817791, 821887, 825983, 557695,
		/* 13375 */ 557695, 557695, 557695, 557695, 557695, 557695, 557695, 557695, 557695, 557695, 557695, 557695, 557695,
		/* 13388 */ 557695, 557695, 762495, 557695, 557695, 772679, 805447, 830023, 866887, 557639, 879175, 557639, 557639,
		/* 13401 */ 557639, 922183, 557695, 692863, 696959, 715391, 557695, 557695, 557695, 557695, 557695, 744063, 557695,
		/* 13414 */ 557695, 557695, 557695, 760447, 557695, 557695, 557695, 776831, 557695, 557695, 557695, 772735, 805503,
		/* 13427 */ 830079, 866943, 557695, 879231, 557695, 557695, 557695, 922239, 0, 0, 0, 0, 0, 0, 0, 1747, 1748, 0, 0,
		/* 13446 */ 0, 1752, 0, 0, 0, 837632, 0, 0, 0, 0, 0, 823296, 0, 937984, 739328, 739328, 557639, 735815, 739911,
		/* 13465 */ 557639, 557639, 877127, 557639, 557639, 893511, 901703, 557639, 557639, 557639, 936519, 0, 0, 0, 0,
		/* 13480 */ 557695, 557695, 557695, 918143, 0, 0, 0, 0, 839680, 0, 0, 0, 0, 0, 557639, 557639, 557639, 557639,
		/* 13498 */ 705095, 707143, 557639, 557639, 557639, 557639, 557639, 557639, 557639, 557639, 557639, 557639, 557639,
		/* 13511 */ 557639, 911943, 557639, 557639, 557639, 557695, 557695, 748159, 557695, 557695, 557695, 557695, 557695,
		/* 13524 */ 557695, 557695, 700416, 0, 727040, 884736, 0, 0, 0, 0, 0, 0, 557056, 557056, 747520, 557056, 557056,
		/* 13541 */ 557056, 557056, 557056, 557056, 557056, 700416, 0, 727040, 884736, 0, 0, 0, 0, 557639, 557639, 756295,
		/* 13557 */ 557639, 832071, 557639, 557639, 557639, 885319, 557695, 557695, 756351, 557695, 832127, 557695, 557695,
		/* 13570 */ 557695, 885375, 722944, 0, 0, 0, 0, 557639, 557639, 557639, 557639, 557639, 557639, 557695, 557695,
		/* 13585 */ 557695, 791167, 557695, 557695, 557695, 809599, 557695, 557695, 842367, 846463, 557695, 557695, 557695,
		/* 13598 */ 557695, 557695, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 759808, 0, 0, 0, 557695, 768000, 786432, 737863,
		/* 13620 */ 557639, 737919, 557695, 557639, 557695, 557639, 557695, 557639, 557695, 875079, 875135, 0, 0, 0, 0, 0,
		/* 13636 */ 100352, 100352, 100352, 100352, 100352, 100352, 100574, 100352, 100574, 100352, 100352, 0, 20480, 0, 0,
		/* 13651 */ 0, 0, 0, 108544, 108544, 0, 0, 0, 0, 0, 0, 0, 0, 0, 737, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 108544, 108544,
		/* 13678 */ 108544, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 108544, 108544, 108544, 108544, 108544, 108544,
		/* 13698 */ 108544, 108544, 108544, 108544, 108544, 0, 0, 0, 0, 0, 811008, 0, 0, 28672, 0, 0, 0, 14336, 0, 0,
		/* 13718 */ 776192, 0, 817152, 0, 0, 0, 0, 0, 0, 767, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 251, 251, 102400, 0, 0, 0, 218,
		/* 13745 */ 0, 0, 0, 218, 0, 219, 0, 0, 0, 219, 0, 0, 0, 704512, 0, 0, 0, 0, 0, 129024, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 13774 */ 0, 0, 1600, 0, 0, 0, 0, 218, 0, 219, 0, 0, 0, 710656, 0, 0, 0, 0, 0, 0, 0, 753664, 0, 0, 0, 0, 0,
		/* 13801 */ 145408, 145408, 145408, 145408, 145408, 145408, 145408, 145408, 145408, 145408, 145408, 0, 0, 0, 0, 0,
		/* 13817 */ 557056, 931840, 557056, 637, 0, 0, 0, 637, 0, 640, 0, 0, 0, 640, 0, 557056, 0, 718848, 0, 0, 0, 0, 0, 0,
		/* 13841 */ 0, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 698368, 0, 0, 0, 0, 0, 0, 856064, 778240,
		/* 13858 */ 557056, 557056, 876544, 557056, 557056, 892928, 901120, 557056, 557056, 557056, 935936, 637, 0, 640, 0,
		/* 13873 */ 557056, 557056, 557056, 0, 0, 0, 0, 0, 202, 1100202, 0, 0, 0, 0, 0, 0, 0, 0, 522, 0, 315, 315, 315, 315,
		/* 13897 */ 315, 315, 315, 315, 315, 315, 315, 315, 315, 1037, 315, 0, 110890, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 13922 */ 0, 110926, 110926, 0, 110926, 110926, 110926, 110926, 110926, 110926, 110926, 110926, 110926, 110926,
		/* 13936 */ 110926, 110926, 110926, 0, 0, 0, 0, 0, 111013, 111013, 111013, 111013, 110926, 110926, 111015, 0, 0, 2,
		/* 13954 */ 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 153600, 0, 0, 528384, 218, 219, 0, 0, 0, 0, 0, 0, 0, 1356, 0, 0, 0, 0,
		/* 13982 */ 0, 0, 0, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 555008, 555008, 555008, 555008, 555008, 555008, 555008, 555008,
		/* 14002 */ 555008, 555008, 555008, 0, 0, 118784, 0, 0, 0, 0, 0, 0, 557639, 557639, 748103, 557639, 557639, 557639,
		/* 14020 */ 557639, 557639, 557639, 557639, 887367, 891463, 557639, 557639, 557639, 903751, 557639, 557639, 557639,
		/* 14033 */ 557056, 557056, 557056, 0, 0, 0, 118784, 0, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0, 377, 377, 589, 377, 377, 377,
		/* 14057 */ 377, 377, 0, 2, 3, 47108, 5, 6, 0, 0, 124928, 0, 0, 0, 0, 124928, 0, 0, 0, 0, 0, 0, 710656, 0, 0, 0, 0,
		/* 14084 */ 0, 0, 0, 753664, 0, 0, 20480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 125263, 125263, 125263, 0, 0, 2, 2,
		/* 14111 */ 3, 47108, 5, 6, 0, 125263, 125263, 0, 125263, 125263, 124928, 124928, 124928, 124928, 124928, 125263,
		/* 14127 */ 124928, 125263, 124928, 125263, 125263, 125263, 125263, 125263, 125263, 125263, 125263, 125263, 125263,
		/* 14140 */ 125263, 0, 0, 0, 0, 0, 0, 0, 0, 557639, 557639, 557639, 557639, 557639, 557639, 557639, 557639, 744007,
		/* 14158 */ 557639, 557639, 557639, 557639, 760391, 557639, 557639, 555008, 555008, 555008, 555008, 555008, 555008,
		/* 14171 */ 555008, 555008, 555008, 555008, 555008, 57344, 0, 120832, 0, 131072, 557056, 557056, 557056, 0, 0, 0,
		/* 14187 */ 120832, 0, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0, 434, 0, 0, 0, 0, 0, 0, 0, 0, 0, 108544, 108544, 0, 0, 108544,
		/* 14214 */ 108544, 0, 0, 2, 3, 47108, 5, 6, 0, 0, 0, 129024, 0, 0, 0, 0, 129024, 0, 0, 0, 0, 0, 424250, 424250,
		/* 14238 */ 424250, 424250, 424250, 424250, 424250, 424250, 424250, 424250, 424250, 0, 0, 0, 0, 0, 0, 20480, 0, 0,
		/* 14256 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129360, 129360, 129360, 0, 0, 2, 2, 3, 47108, 0, 6, 0, 129360, 129360,
		/* 14281 */ 0, 129360, 129360, 129360, 129360, 129360, 129360, 129360, 129360, 129360, 129360, 129360, 129360,
		/* 14294 */ 129360, 0, 0, 0, 0, 129024, 0, 137216, 0, 0, 0, 0, 0, 0, 528384, 218, 219, 98304, 0, 0, 0, 0, 0, 0, 0,
		/* 14319 */ 26824, 26824, 2, 2, 3, 47108, 5, 6, 0, 555008, 555008, 555008, 555008, 555008, 555008, 555008, 555008,
		/* 14336 */ 555008, 555008, 555008, 0, 0, 0, 126976, 133120, 0, 2, 3, 47108, 573646, 6, 0, 0, 0, 0, 210, 0, 0, 0, 0,
		/* 14359 */ 210, 135168, 135168, 135168, 135168, 0, 0, 135168, 0, 0, 2, 2, 3, 47108, 573646, 6, 0, 0, 0, 0, 0,
		/* 14380 */ 864256, 0, 0, 0, 0, 555008, 555008, 555008, 733184, 555008, 555008, 555008, 555008, 555008, 555008,
		/* 14395 */ 555008, 555008, 555008, 555008, 555008, 0, 0, 0, 0, 0, 0, 0, 0, 135168, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 14420 */ 557056, 557056, 557056, 0, 122880, 0, 122880, 0, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0, 444, 445, 0, 0, 0, 0, 0,
		/* 14445 */ 0, 0, 0, 503, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1006, 0, 0, 0, 0, 0, 0, 139264, 139264, 139264, 139264, 0, 0,
		/* 14471 */ 139264, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 227, 228, 229, 230, 231, 232, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 14498 */ 709, 0, 0, 0, 0, 0, 0, 0, 0, 26824, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1751, 0, 0, 0,
		/* 14528 */ 0, 0, 20480, 0, 0, 0, 0, 0, 0, 0, 315, 315, 315, 315, 315, 315, 0, 0, 0, 0, 377, 377, 377, 377, 377,
		/* 14553 */ 1547, 0, 0, 315, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 251, 0, 0, 0, 1169, 0, 0, 0, 0, 0, 1171, 0, 0,
		/* 14583 */ 0, 0, 0, 0, 0, 0, 0, 0, 1199, 0, 0, 0, 0, 0, 0, 1391, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 450, 0,
		/* 14615 */ 1010, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 238, 0, 1218, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 14647 */ 0, 480, 0, 0, 20480, 0, 0, 0, 0, 0, 300, 0, 315, 315, 315, 315, 315, 315, 0, 0, 0, 0, 377, 377, 1544,
		/* 14672 */ 377, 377, 377, 400, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 400, 400, 400, 400, 400, 397, 397,
		/* 14693 */ 400, 26824, 26824, 2, 2, 3, 47108, 5, 6, 0, 26825, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 14720 */ 22528, 24576, 0, 0, 0, 0, 20480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 143360, 143360, 143360, 143360,
		/* 14744 */ 143360, 143360, 143360, 0, 143360, 143360, 0, 0, 0, 0, 0, 0, 0, 143360, 0, 143360, 143360, 143360,
		/* 14762 */ 143360, 143360, 143360, 143360, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 143360, 143360, 143360, 143360, 143360,
		/* 14780 */ 143360, 143360, 143360, 143360, 143360, 143360, 0, 0, 0, 0, 0, 0, 0, 0, 808960, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 14803 */ 0, 248, 0, 0, 0, 251, 0, 0, 557056, 557056, 557056, 557056, 557056, 0, 151552, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 14826 */ 0, 0, 251, 251, 251, 0, 0, 0, 770048, 757760, 782336, 0, 0, 870400, 0, 913408, 925696, 0, 679936,
		/* 14845 */ 872448, 114688, 0, 0, 0, 0, 0, 0, 827, 377, 377, 377, 377, 377, 377, 377, 839, 377, 0, 202, 3, 47108, 5,
		/* 14868 */ 207, 0, 0, 0, 0, 0, 211, 0, 0, 0, 0, 0, 0, 0, 65536, 65536, 0, 0, 0, 0, 0, 0, 0, 0, 0, 275, 0, 0, 0, 0,
		/* 14898 */ 0, 0, 0, 213, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 752, 752, 0, 20480, 0, 0, 0, 0, 0, 0, 145408, 0,
		/* 14928 */ 0, 0, 0, 0, 0, 0, 0, 0, 753, 0, 0, 757, 0, 0, 0, 145408, 0, 0, 0, 145408, 145408, 145408, 0, 0, 202,
		/* 14953 */ 202, 3, 47108, 5, 1100202, 0, 0, 0, 0, 234, 273, 0, 0, 0, 0, 0, 0, 0, 0, 0, 233, 0, 0, 428, 0, 0, 0, 0,
		/* 14981 */ 0, 528384, 218, 219, 0, 0, 0, 0, 0, 0, 0, 246, 0, 0, 0, 0, 0, 251, 0, 0, 0, 203, 3, 47108, 5, 6, 0, 0,
		/* 15009 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 22528, 24576, 0, 290, 290, 0, 214, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 15039 */ 760, 0, 0, 0, 422, 422, 422, 422, 0, 0, 422, 0, 0, 1083817, 203, 3, 47108, 5, 6, 0, 0, 0, 0, 235, 258,
		/* 15064 */ 237, 256, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 77824, 77824, 0, 0, 0, 0, 557056, 557056, 557056, 0, 0, 695, 0,
		/* 15089 */ 0, 696, 6, 0, 0, 149504, 0, 0, 0, 0, 0, 0, 827, 377, 377, 377, 377, 377, 377, 835, 377, 377, 223, 0, 0,
		/* 15114 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 244, 223, 257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 775, 0,
		/* 15146 */ 0, 20480, 0, 0, 0, 223, 0, 0, 308, 316, 316, 316, 316, 316, 316, 337, 337, 316, 337, 337, 358, 358, 358,
		/* 15169 */ 358, 358, 358, 369, 358, 369, 358, 358, 358, 358, 358, 358, 358, 358, 316, 358, 358, 378, 378, 378, 378,
		/* 15190 */ 378, 401, 378, 378, 378, 378, 378, 378, 378, 378, 378, 378, 401, 401, 401, 401, 401, 378, 378, 401,
		/* 15210 */ 26824, 26824, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 438, 439, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1201, 0,
		/* 15238 */ 0, 0, 0, 484, 0, 0, 0, 0, 0, 0, 490, 0, 0, 0, 494, 0, 0, 0, 0, 0, 260, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 15269 */ 235, 22528, 24576, 0, 0, 0, 0, 435, 0, 0, 0, 0, 0, 0, 0, 0, 0, 506, 0, 0, 0, 0, 0, 0, 0, 75776, 528384,
		/* 15296 */ 218, 219, 0, 104448, 0, 0, 0, 0, 513, 0, 0, 517, 0, 0, 0, 521, 0, 315, 315, 525, 315, 315, 315, 315,
		/* 15320 */ 315, 315, 810, 315, 812, 0, 0, 0, 0, 0, 0, 0, 0, 0, 997, 0, 0, 1000, 0, 0, 0, 0, 555, 0, 0, 0, 0, 0, 0,
		/* 15349 */ 452, 0, 0, 0, 0, 0, 0, 0, 0, 0, 251, 251, 251, 0, 0, 0, 555, 0, 555, 0, 0, 0, 438, 0, 0, 0, 0, 0, 0, 0,
		/* 15379 */ 578, 579, 0, 0, 0, 521, 0, 490, 521, 0, 377, 377, 588, 377, 377, 377, 377, 377, 377, 377, 1083, 377,
		/* 15401 */ 377, 377, 377, 1086, 1087, 377, 1089, 377, 613, 615, 377, 620, 377, 623, 377, 377, 634, 377, 377, 377,
		/* 15421 */ 0, 399, 399, 399, 399, 399, 928, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1738, 399, 399, 399,
		/* 15442 */ 0, 0, 399, 645, 399, 399, 399, 399, 399, 399, 670, 672, 399, 677, 399, 680, 399, 399, 399, 399, 399,
		/* 15463 */ 1144, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1666, 1667, 399, 399, 399, 399, 691, 399, 399,
		/* 15483 */ 0, 0, 0, 0, 26824, 2, 6, 0, 0, 0, 0, 698, 702, 315, 315, 315, 315, 809, 315, 315, 315, 315, 0, 0, 0, 0,
		/* 15509 */ 0, 0, 0, 0, 0, 770, 0, 0, 0, 0, 0, 0, 377, 377, 873, 377, 377, 377, 377, 377, 377, 377, 377, 377, 637,
		/* 15534 */ 45942, 827, 640, 0, 315, 315, 315, 315, 315, 1032, 315, 315, 315, 315, 315, 315, 315, 315, 315, 0, 0, 0,
		/* 15556 */ 0, 816, 0, 0, 0, 0, 0, 0, 1055, 0, 0, 0, 0, 0, 827, 377, 377, 1059, 377, 377, 377, 377, 0, 1303, 0, 0,
		/* 15582 */ 1113, 0, 1309, 0, 0, 399, 399, 399, 399, 399, 399, 1662, 399, 399, 399, 399, 399, 399, 399, 399, 399, 0,
		/* 15604 */ 0, 0, 1492, 0, 0, 0, 377, 377, 377, 1110, 1113, 45942, 1115, 1113, 399, 399, 1119, 399, 399, 399, 399,
		/* 15625 */ 399, 0, 0, 0, 0, 377, 1930, 377, 377, 377, 377, 399, 399, 1859, 399, 399, 399, 399, 399, 399, 399, 1867,
		/* 15647 */ 1868, 399, 399, 399, 1129, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 0, 1781, 0, 0,
		/* 15668 */ 1176, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 269, 0, 0, 0, 1207, 0, 1209, 0, 0, 0, 0, 0, 1004, 0,
		/* 15698 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 218, 218, 218, 218, 218, 0, 0, 315, 315, 1234, 1235, 315, 315, 315, 315,
		/* 15723 */ 315, 315, 315, 315, 1242, 315, 315, 0, 0, 0, 377, 377, 1637, 377, 377, 377, 377, 377, 377, 1642, 377,
		/* 15744 */ 377, 377, 377, 377, 377, 1828, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1134, 399, 399, 399, 399,
		/* 15764 */ 399, 399, 1252, 377, 377, 377, 377, 377, 1262, 377, 1264, 377, 377, 1267, 377, 377, 377, 377, 0, 0, 0,
		/* 15785 */ 0, 1113, 0, 0, 0, 0, 399, 399, 399, 399, 399, 1316, 399, 1318, 399, 399, 1321, 399, 399, 399, 399, 399,
		/* 15807 */ 399, 399, 399, 931, 399, 399, 399, 399, 399, 399, 399, 1169, 0, 1171, 0, 0, 1355, 0, 0, 0, 0, 0, 1360,
		/* 15830 */ 0, 0, 0, 0, 0, 0, 0, 83968, 0, 83968, 0, 0, 0, 0, 0, 0, 0, 0, 315, 0, 0, 389, 389, 389, 389, 389, 0, 0,
		/* 15858 */ 1392, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 251, 218, 218, 1450, 377, 377, 0, 1452, 0, 0, 0, 0, 0,
		/* 15885 */ 1454, 0, 0, 0, 0, 399, 0, 0, 377, 1944, 399, 1945, 377, 399, 377, 399, 377, 399, 377, 399, 0, 0, 377,
		/* 15908 */ 377, 399, 399, 377, 399, 377, 399, 1950, 1951, 377, 399, 0, 0, 0, 1841, 0, 0, 1844, 1845, 0, 377, 377,
		/* 15930 */ 377, 377, 377, 377, 377, 377, 377, 1266, 377, 377, 377, 377, 377, 0, 0, 0, 1498, 0, 0, 0, 0, 0, 0, 1501,
		/* 15954 */ 0, 0, 0, 0, 0, 0, 0, 459, 460, 0, 251, 251, 251, 0, 0, 0, 399, 399, 1583, 399, 399, 399, 399, 399, 399,
		/* 15979 */ 399, 399, 399, 399, 399, 399, 399, 681, 399, 399, 399, 399, 399, 1674, 399, 399, 399, 0, 0, 0, 0, 0, 0,
		/* 16002 */ 0, 0, 0, 0, 377, 377, 377, 399, 399, 399, 1810, 0, 1812, 0, 0, 0, 1815, 0, 0, 1818, 377, 377, 377, 0, 0,
		/* 16027 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 399, 0, 0, 1871, 0, 0, 1874, 377, 377, 377, 377, 377, 377, 377, 377, 377,
		/* 16053 */ 377, 377, 1452, 0, 1454, 0, 399, 1896, 0, 377, 377, 377, 377, 377, 377, 377, 377, 377, 399, 399, 399,
		/* 16074 */ 399, 399, 1862, 399, 399, 399, 399, 0, 0, 0, 224, 225, 226, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1214,
		/* 16101 */ 0, 0, 0, 0, 226, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 251, 219, 219, 0, 0, 315, 0, 290, 0, 0, 0, 0, 0,
		/* 16132 */ 0, 0, 0, 0, 0, 0, 219, 219, 219, 219, 219, 1008, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315,
		/* 16155 */ 315, 315, 315, 315, 1414, 315, 315, 1405, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315,
		/* 16175 */ 315, 315, 1413, 315, 315, 315, 315, 315, 1415, 0, 0, 0, 0, 0, 377, 377, 377, 1421, 1422, 377, 377, 377,
		/* 16197 */ 377, 377, 377, 1069, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1071, 377, 377, 377, 377, 377, 377,
		/* 16217 */ 399, 399, 1458, 1459, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 935, 399, 399, 399,
		/* 16237 */ 1853, 377, 1855, 377, 399, 399, 399, 399, 1861, 399, 1863, 399, 1865, 399, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 16260 */ 377, 377, 377, 377, 1851, 377, 292, 20480, 292, 299, 299, 299, 299, 0, 309, 317, 317, 317, 317, 317,
		/* 16280 */ 317, 338, 338, 317, 353, 355, 359, 359, 359, 367, 367, 368, 359, 368, 359, 368, 368, 368, 368, 368, 368,
		/* 16301 */ 368, 368, 317, 368, 368, 379, 379, 379, 379, 379, 402, 379, 379, 379, 379, 379, 379, 379, 379, 379, 379,
		/* 16322 */ 402, 402, 402, 402, 402, 379, 379, 402, 26824, 26824, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 485, 0, 0, 0, 0,
		/* 16347 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1504, 0, 0, 0, 0, 731, 713, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1613, 0,
		/* 16378 */ 0, 0, 745, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 970, 0, 0, 0, 0, 780, 0, 0, 0, 0, 0, 0, 315, 787,
		/* 16409 */ 315, 315, 315, 315, 315, 315, 315, 1044, 315, 315, 315, 315, 0, 0, 0, 0, 0, 0, 0, 528384, 0, 0, 0, 0, 0,
		/* 16434 */ 0, 0, 428032, 315, 315, 315, 315, 797, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315, 553, 0, 0,
		/* 16456 */ 0, 0, 0, 0, 0, 0, 816, 0, 0, 827, 828, 377, 831, 377, 377, 377, 377, 838, 377, 377, 377, 377, 377, 860,
		/* 16480 */ 377, 377, 862, 377, 864, 377, 377, 377, 377, 377, 377, 377, 1430, 377, 377, 377, 377, 377, 377, 377,
		/* 16500 */ 377, 851, 377, 377, 377, 377, 377, 377, 377, 842, 377, 377, 377, 377, 377, 848, 377, 377, 377, 377, 377,
		/* 16521 */ 377, 377, 377, 377, 1100, 1101, 377, 377, 377, 377, 377, 889, 399, 892, 399, 399, 399, 399, 899, 399,
		/* 16541 */ 903, 399, 399, 399, 399, 399, 909, 0, 0, 0, 960, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1689, 0, 0, 377,
		/* 16569 */ 377, 1078, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 0, 399, 399, 377, 1091,
		/* 16589 */ 1092, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1075, 377, 315, 1536, 315,
		/* 16609 */ 315, 315, 315, 0, 0, 1540, 0, 377, 377, 377, 377, 377, 377, 377, 377, 1265, 377, 377, 377, 1269, 377,
		/* 16630 */ 1271, 0, 0, 0, 1595, 0, 0, 0, 0, 0, 1598, 0, 0, 0, 0, 0, 0, 0, 0, 710, 711, 0, 0, 0, 0, 0, 0, 0, 0, 736,
		/* 16660 */ 0, 738, 0, 0, 0, 0, 0, 1630, 315, 0, 0, 1634, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 0,
		/* 16684 */ 0, 0, 0, 399, 377, 377, 377, 377, 1647, 1648, 377, 377, 377, 377, 377, 377, 377, 377, 399, 399, 1725,
		/* 16705 */ 399, 399, 399, 399, 399, 399, 1839, 0, 1840, 0, 0, 0, 0, 0, 0, 377, 377, 377, 1850, 377, 377, 377, 377,
		/* 16728 */ 377, 377, 1082, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1767, 377, 399, 399, 399, 399, 399, 399,
		/* 16748 */ 1943, 0, 0, 377, 377, 399, 399, 377, 399, 377, 399, 377, 399, 377, 399, 0, 0, 0, 0, 0, 1843, 0, 0, 1846,
		/* 16772 */ 377, 1848, 377, 377, 377, 377, 0, 0, 0, 1305, 1113, 0, 0, 0, 1311, 399, 399, 399, 0, 0, 0, 259, 0, 0, 0,
		/* 16797 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 222, 0, 0, 0, 20480, 0, 0, 0, 0, 0, 301, 310, 318, 318, 318, 318, 318,
		/* 16824 */ 318, 339, 339, 318, 339, 356, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 318, 360, 360, 380,
		/* 16845 */ 380, 380, 380, 380, 403, 380, 380, 380, 380, 380, 380, 380, 380, 380, 380, 403, 403, 403, 403, 403, 380,
		/* 16866 */ 380, 403, 26824, 26824, 2, 2, 3, 47108, 5, 6, 0, 315, 538, 315, 315, 315, 315, 315, 315, 315, 315, 315,
		/* 16888 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 561, 0, 0, 0, 0, 0, 377, 377, 377, 377, 377, 377, 377, 605, 0, 0, 719, 0, 0,
		/* 16916 */ 0, 722, 723, 0, 0, 0, 0, 0, 251, 251, 0, 0, 0, 0, 241, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 447, 0, 0, 0, 0,
		/* 16947 */ 0, 0, 0, 315, 315, 796, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315, 804, 315, 315, 0, 0, 0,
		/* 16970 */ 377, 1636, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1565, 377, 377, 0, 0, 0, 0, 399, 315, 806, 315,
		/* 16992 */ 315, 315, 315, 315, 315, 315, 813, 0, 0, 0, 0, 0, 0, 0, 0, 965, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1019, 0, 0,
		/* 17020 */ 1022, 0, 0, 0, 722, 0, 0, 0, 0, 0, 827, 829, 377, 377, 377, 377, 377, 377, 377, 377, 1098, 377, 377,
		/* 17043 */ 377, 377, 377, 377, 377, 377, 377, 377, 846, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377,
		/* 17064 */ 377, 1282, 377, 377, 890, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 907, 399, 399, 399, 0,
		/* 17085 */ 0, 0, 0, 200, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0, 519, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1358, 0, 0, 0, 0, 0, 0, 399,
		/* 17117 */ 923, 399, 925, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1350, 1351, 399, 399, 0,
		/* 17137 */ 1169, 0, 0, 0, 0, 0, 1171, 0, 0, 0, 0, 0, 1174, 0, 0, 0, 0, 0, 457, 0, 0, 0, 0, 251, 251, 251, 0, 0, 0,
		/* 17166 */ 0, 0, 0, 827, 377, 377, 377, 377, 377, 377, 836, 377, 377, 1296, 1297, 377, 377, 0, 0, 0, 0, 1113, 0, 0,
		/* 17190 */ 0, 0, 399, 399, 399, 0, 0, 0, 0, 200, 2, 6, 0, 0, 0, 0, 699, 703, 399, 399, 399, 1317, 399, 399, 399,
		/* 17215 */ 399, 399, 399, 399, 399, 399, 399, 399, 399, 1740, 399, 0, 0, 1404, 315, 315, 315, 315, 315, 315, 315,
		/* 17236 */ 315, 315, 315, 315, 315, 315, 315, 315, 0, 0, 0, 0, 0, 377, 377, 377, 377, 1441, 377, 377, 377, 377,
		/* 17258 */ 377, 377, 377, 377, 377, 377, 377, 0, 0, 0, 0, 1567, 399, 1457, 399, 399, 399, 399, 399, 399, 399, 399,
		/* 17280 */ 399, 399, 399, 399, 399, 399, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1509, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 17309 */ 251, 251, 0, 377, 377, 1550, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1559, 377, 377, 377,
		/* 17330 */ 377, 377, 1081, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1291, 377, 377, 1293, 377, 377, 399,
		/* 17350 */ 399, 399, 1584, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1780, 0, 1782, 0, 0, 20480,
		/* 17371 */ 0, 0, 236, 0, 236, 302, 311, 319, 319, 319, 319, 319, 319, 340, 350, 340, 319, 340, 340, 361, 361, 361,
		/* 17393 */ 361, 361, 361, 370, 361, 370, 361, 361, 361, 361, 361, 361, 361, 361, 319, 361, 361, 381, 381, 381, 381,
		/* 17414 */ 381, 404, 381, 381, 381, 381, 381, 381, 381, 381, 381, 381, 404, 404, 404, 404, 404, 381, 381, 404,
		/* 17434 */ 26824, 26824, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 468, 469, 0, 471, 0, 0, 474, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 17461 */ 966, 0, 0, 0, 0, 0, 0, 482, 0, 0, 0, 0, 0, 0, 489, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79872, 0, 0, 0, 0, 0,
		/* 17492 */ 0, 514, 515, 0, 0, 518, 0, 0, 0, 0, 315, 315, 315, 527, 315, 315, 0, 0, 0, 377, 377, 377, 377, 377, 377,
		/* 17517 */ 377, 377, 1641, 377, 377, 377, 377, 377, 377, 1096, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1279,
		/* 17537 */ 377, 377, 377, 377, 377, 377, 535, 315, 541, 315, 544, 315, 547, 315, 315, 315, 315, 0, 0, 0, 0, 0, 0,
		/* 17560 */ 377, 377, 1420, 377, 377, 377, 377, 0, 0, 0, 468, 0, 0, 0, 518, 0, 559, 0, 576, 0, 0, 0, 0, 0, 0, 0,
		/* 17586 */ 528384, 0, 0, 0, 0, 0, 0, 417792, 0, 611, 377, 616, 377, 377, 622, 625, 629, 377, 377, 377, 377, 377, 0,
		/* 17609 */ 399, 399, 399, 399, 399, 1158, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 918, 399, 399, 399,
		/* 17629 */ 399, 399, 399, 399, 648, 399, 399, 659, 399, 668, 399, 673, 399, 399, 679, 682, 686, 399, 377, 377, 377,
		/* 17650 */ 377, 377, 377, 377, 377, 377, 377, 399, 399, 399, 399, 399, 399, 0, 718, 0, 0, 0, 0, 0, 0, 0, 0, 726,
		/* 17674 */ 727, 0, 251, 251, 0, 0, 0, 0, 275, 0, 0, 0, 0, 275, 0, 22528, 24576, 0, 0, 0, 0, 0, 0, 1697, 0, 315,
		/* 17700 */ 315, 1700, 1701, 315, 315, 315, 0, 1416, 0, 0, 0, 0, 1419, 377, 377, 377, 377, 377, 1423, 377, 843, 377,
		/* 17722 */ 377, 377, 847, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1654, 377, 377, 399, 399, 377,
		/* 17742 */ 857, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 866, 377, 377, 377, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 17767 */ 0, 0, 1456, 399, 399, 399, 943, 399, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 223, 0, 257, 0, 223, 957, 0, 959,
		/* 17794 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 971, 0, 973, 974, 0, 976, 0, 0, 0, 0, 981, 0, 0, 0, 0, 986, 0, 0, 0,
		/* 17825 */ 0, 429, 0, 0, 0, 528384, 218, 219, 0, 0, 0, 0, 0, 0, 0, 455, 0, 0, 315, 315, 315, 315, 315, 315, 315,
		/* 17850 */ 315, 1239, 315, 315, 315, 315, 315, 0, 0, 0, 991, 0, 0, 0, 0, 0, 0, 0, 999, 0, 0, 0, 0, 0, 0, 0, 528384,
		/* 17877 */ 0, 0, 0, 0, 16384, 0, 0, 0, 0, 0, 1003, 0, 1004, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 235, 256, 0, 256, 0,
		/* 17906 */ 0, 315, 1027, 1028, 315, 315, 315, 315, 315, 1034, 315, 315, 1036, 315, 315, 315, 315, 315, 315, 1043,
		/* 17926 */ 315, 315, 315, 315, 315, 0, 0, 0, 0, 0, 0, 377, 377, 377, 377, 1878, 377, 1880, 377, 377, 377, 315,
		/* 17948 */ 1040, 315, 315, 315, 1042, 315, 315, 315, 315, 315, 315, 0, 0, 0, 1051, 0, 0, 1054, 0, 0, 0, 0, 0, 959,
		/* 17972 */ 959, 827, 1058, 377, 377, 1060, 377, 377, 377, 377, 377, 1276, 377, 377, 377, 377, 377, 377, 377, 377,
		/* 17992 */ 377, 377, 1768, 399, 399, 399, 399, 399, 1062, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1073,
		/* 18012 */ 377, 377, 377, 1076, 1090, 377, 377, 377, 377, 1095, 377, 1097, 377, 377, 377, 377, 377, 1103, 377, 377,
		/* 18032 */ 377, 377, 377, 377, 1289, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1431, 377, 377, 377, 1434, 377,
		/* 18052 */ 377, 377, 377, 1108, 0, 1113, 45942, 0, 1113, 1118, 399, 399, 1120, 399, 1122, 399, 399, 399, 399, 399,
		/* 18072 */ 1159, 399, 399, 399, 399, 399, 399, 1165, 399, 1167, 399, 399, 399, 1155, 399, 1157, 399, 399, 399, 399,
		/* 18092 */ 399, 1163, 399, 399, 399, 399, 1168, 0, 0, 1178, 0, 0, 0, 1182, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 315, 315,
		/* 18118 */ 315, 315, 315, 793, 1217, 0, 0, 0, 0, 0, 0, 0, 1225, 0, 1227, 0, 0, 1230, 0, 0, 0, 0, 0, 487, 0, 0, 0,
		/* 18145 */ 0, 0, 0, 0, 0, 0, 0, 0, 555008, 555008, 555008, 555008, 555008, 555008, 377, 377, 1285, 1286, 377, 377,
		/* 18165 */ 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1448, 377, 377, 377, 377, 1298, 377, 0, 0, 0, 0,
		/* 18187 */ 1113, 0, 0, 0, 0, 399, 399, 399, 0, 0, 0, 0, 26824, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0, 315, 0, 0, 394, 394,
		/* 18215 */ 394, 394, 394, 1169, 0, 1171, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1363, 0, 1379, 1380, 0, 0, 0, 0, 0, 0,
		/* 18243 */ 0, 0, 0, 0, 0, 0, 1390, 0, 0, 0, 0, 1393, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 249, 0, 0, 0, 0, 1437, 377,
		/* 18273 */ 1439, 377, 377, 377, 377, 377, 377, 1446, 377, 377, 377, 377, 377, 1449, 315, 315, 1537, 315, 315, 315,
		/* 18293 */ 0, 0, 0, 1541, 377, 377, 377, 377, 377, 377, 377, 878, 377, 377, 377, 377, 637, 45942, 827, 640, 1548,
		/* 18314 */ 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1557, 377, 377, 377, 377, 0, 0, 0, 0, 1113, 0, 0, 0,
		/* 18337 */ 0, 399, 399, 1314, 1582, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399,
		/* 18358 */ 922, 0, 0, 1605, 1606, 0, 1607, 0, 0, 0, 1609, 1610, 0, 0, 0, 0, 0, 0, 0, 473, 0, 475, 0, 0, 0, 0, 0, 0,
		/* 18386 */ 0, 0, 1397, 0, 0, 0, 0, 0, 0, 0, 0, 0, 77824, 0, 0, 0, 0, 0, 0, 315, 1631, 1632, 1633, 0, 377, 377, 377,
		/* 18413 */ 1638, 377, 377, 377, 377, 377, 377, 377, 399, 399, 399, 399, 1803, 399, 399, 399, 399, 1643, 377, 377,
		/* 18433 */ 1646, 377, 377, 377, 377, 377, 1651, 1653, 377, 1655, 1656, 399, 399, 399, 399, 399, 1333, 399, 399,
		/* 18452 */ 399, 399, 399, 399, 399, 399, 399, 399, 904, 399, 399, 399, 908, 399, 399, 1660, 399, 399, 399, 399,
		/* 18472 */ 399, 399, 399, 1665, 399, 399, 1668, 399, 399, 399, 0, 0, 0, 0, 26824, 2, 6, 0, 0, 0, 0, 699, 703, 399,
		/* 18496 */ 399, 1673, 1675, 399, 1677, 1678, 0, 0, 0, 0, 1682, 0, 1684, 0, 0, 0, 0, 0, 500, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 18523 */ 510, 0, 0, 0, 0, 1694, 0, 0, 0, 0, 315, 315, 315, 315, 315, 315, 315, 0, 0, 0, 0, 1542, 377, 377, 377,
		/* 18548 */ 377, 377, 0, 0, 377, 377, 1707, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1715, 0, 1784, 0, 0,
		/* 18570 */ 1787, 1788, 0, 0, 0, 0, 315, 377, 377, 377, 377, 1793, 1838, 0, 0, 0, 0, 0, 0, 0, 0, 0, 377, 377, 1849,
		/* 18595 */ 377, 377, 377, 0, 0, 0, 1453, 0, 1111, 0, 0, 0, 1455, 0, 1116, 399, 1884, 399, 399, 1886, 399, 1888,
		/* 18617 */ 399, 399, 399, 399, 0, 0, 0, 0, 0, 0, 0, 0, 0, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1921,
		/* 18641 */ 399, 399, 399, 1925, 0, 0, 0, 0, 377, 377, 377, 377, 377, 377, 399, 1858, 399, 399, 399, 399, 399, 399,
		/* 18663 */ 399, 399, 0, 0, 0, 0, 377, 377, 1931, 1932, 377, 377, 399, 293, 20480, 293, 293, 293, 293, 293, 0, 293,
		/* 18685 */ 320, 320, 320, 320, 320, 320, 0, 0, 0, 0, 466, 0, 0, 0, 466, 0, 491, 0, 0, 0, 0, 0, 0, 0, 995, 0, 0, 0,
		/* 18713 */ 0, 0, 0, 0, 0, 0, 0, 1399, 0, 0, 1402, 0, 0, 0, 0, 320, 254, 254, 293, 293, 293, 293, 293, 293, 293,
		/* 18738 */ 293, 293, 293, 293, 320, 293, 293, 382, 382, 382, 382, 382, 405, 382, 382, 382, 382, 382, 382, 382, 382,
		/* 18759 */ 382, 382, 405, 405, 405, 405, 405, 382, 382, 405, 26824, 26824, 2, 2, 3, 47108, 5, 6, 0, 0, 453, 0, 0,
		/* 18782 */ 0, 0, 0, 0, 0, 0, 251, 251, 251, 0, 0, 0, 0, 0, 0, 827, 377, 377, 377, 377, 377, 834, 377, 377, 377, 0,
		/* 18808 */ 0, 1304, 0, 0, 0, 0, 0, 1310, 0, 0, 0, 399, 0, 0, 0, 714, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 222, 0, 0,
		/* 18839 */ 0, 399, 399, 399, 1156, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 906, 399, 399, 399,
		/* 18860 */ 399, 294, 20480, 294, 294, 294, 294, 294, 303, 294, 321, 321, 321, 321, 321, 321, 341, 341, 321, 341,
		/* 18880 */ 341, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 321, 362, 362, 383, 383, 383, 383, 383, 406,
		/* 18901 */ 383, 383, 383, 383, 383, 383, 383, 383, 383, 383, 406, 406, 406, 406, 406, 383, 383, 406, 26824, 26824,
		/* 18921 */ 2, 2, 3, 47108, 5, 6, 0, 377, 377, 377, 1111, 1113, 45942, 1116, 1113, 399, 399, 399, 399, 399, 399,
		/* 18942 */ 399, 399, 1488, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1511, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 280, 280, 280,
		/* 18971 */ 280, 280, 1616, 0, 0, 0, 0, 0, 1621, 0, 0, 0, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315,
		/* 18994 */ 315, 315, 1243, 0, 1692, 0, 0, 0, 1696, 0, 0, 1699, 315, 315, 315, 315, 315, 315, 0, 0, 0, 1418, 0, 0,
		/* 19018 */ 377, 377, 377, 377, 377, 377, 377, 377, 1712, 377, 377, 377, 377, 377, 0, 0, 377, 1706, 377, 377, 377,
		/* 19039 */ 377, 377, 377, 377, 1713, 377, 377, 377, 377, 0, 0, 0, 0, 1113, 0, 0, 0, 0, 1312, 399, 399, 1716, 377,
		/* 19062 */ 377, 377, 377, 377, 377, 377, 399, 1724, 399, 399, 399, 399, 399, 399, 896, 399, 399, 399, 399, 399,
		/* 19082 */ 399, 399, 399, 399, 1489, 1490, 0, 0, 0, 0, 0, 399, 1731, 399, 399, 399, 399, 1734, 399, 399, 399, 399,
		/* 19104 */ 399, 399, 399, 0, 0, 0, 0, 377, 377, 377, 377, 399, 399, 399, 1860, 399, 399, 399, 399, 399, 399, 0, 0,
		/* 19127 */ 0, 0, 377, 377, 377, 377, 1933, 377, 399, 1754, 0, 315, 315, 1755, 315, 315, 0, 377, 377, 377, 377, 377,
		/* 19149 */ 1758, 377, 377, 377, 377, 377, 377, 1443, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1566, 377, 0, 0,
		/* 19170 */ 0, 0, 399, 377, 377, 377, 377, 1764, 377, 377, 377, 377, 377, 399, 399, 399, 399, 399, 1770, 399, 1935,
		/* 19191 */ 1936, 399, 399, 0, 0, 0, 0, 377, 377, 377, 377, 399, 399, 399, 0, 1811, 0, 0, 0, 0, 0, 0, 0, 0, 377,
		/* 19216 */ 377, 377, 377, 377, 377, 377, 606, 399, 646, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399,
		/* 19237 */ 399, 399, 689, 399, 399, 692, 399, 0, 0, 0, 0, 26824, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0, 980, 0, 0, 0, 0, 0,
		/* 19265 */ 0, 0, 0, 0, 821, 0, 0, 0, 0, 0, 0, 399, 1484, 399, 399, 399, 399, 399, 399, 399, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 19293 */ 0, 0, 0, 239, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 251, 0, 0, 0, 0, 0, 516, 0, 0, 0, 0, 563, 0, 0, 0, 0,
		/* 19325 */ 0, 0, 0, 964, 0, 0, 0, 0, 0, 0, 0, 0, 0, 218, 219, 0, 0, 0, 434, 0, 0, 238, 0, 0, 0, 0, 0, 0, 0, 263, 0,
		/* 19356 */ 0, 0, 0, 0, 0, 0, 0, 996, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1500, 0, 0, 0, 0, 0, 0, 0, 20480, 0, 0, 0, 0, 0,
		/* 19387 */ 304, 0, 322, 322, 322, 322, 322, 322, 342, 342, 322, 342, 342, 363, 342, 342, 342, 342, 342, 371, 342,
		/* 19408 */ 371, 342, 342, 342, 342, 342, 342, 342, 342, 322, 342, 342, 384, 384, 384, 384, 384, 407, 384, 384, 384,
		/* 19429 */ 384, 384, 384, 384, 384, 384, 384, 407, 407, 407, 407, 407, 384, 384, 407, 26824, 26824, 2, 2, 3, 47108,
		/* 19450 */ 5, 6, 0, 512, 0, 0, 0, 0, 0, 0, 0, 0, 0, 315, 315, 315, 528, 315, 315, 0, 0, 0, 377, 377, 377, 377,
		/* 19476 */ 1639, 377, 377, 377, 377, 377, 377, 377, 1070, 377, 377, 377, 377, 377, 377, 377, 377, 1084, 377, 377,
		/* 19496 */ 377, 377, 377, 377, 377, 0, 0, 0, 556, 0, 0, 0, 556, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 253, 0, 0,
		/* 19525 */ 399, 399, 649, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 685, 399, 399, 817, 0,
		/* 19546 */ 0, 0, 0, 0, 0, 0, 0, 0, 822, 0, 0, 0, 0, 0, 0, 0, 488, 752, 0, 0, 0, 756, 0, 0, 0, 377, 377, 377, 874,
		/* 19575 */ 377, 377, 377, 377, 879, 377, 377, 377, 637, 45942, 827, 640, 399, 940, 399, 399, 399, 0, 0, 0, 0, 0, 0,
		/* 19598 */ 0, 0, 0, 0, 0, 288, 288, 0, 0, 0, 972, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 987, 0, 1002, 0, 0, 0,
		/* 19629 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1009, 0, 0, 0, 1011, 1012, 0, 0, 1015, 0, 0, 0, 0, 0, 0, 0, 0, 1025,
		/* 19658 */ 377, 377, 377, 377, 1094, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1281, 377, 377,
		/* 19678 */ 377, 1106, 377, 377, 0, 1113, 45942, 0, 1113, 399, 399, 399, 399, 399, 399, 399, 399, 1576, 399, 399,
		/* 19698 */ 399, 399, 399, 399, 399, 399, 1154, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1166, 399,
		/* 19718 */ 399, 399, 399, 399, 1344, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1578, 399, 399, 399, 399,
		/* 19738 */ 399, 0, 1205, 0, 0, 0, 0, 0, 0, 1212, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1184, 0, 0, 0, 0, 0, 0, 0, 377, 377,
		/* 19767 */ 377, 1261, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 636, 377, 0, 399, 399, 1315, 399, 399,
		/* 19788 */ 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 938, 0, 0, 0, 1366, 0, 0, 0, 1370, 0,
		/* 19811 */ 1372, 0, 0, 0, 1375, 0, 0, 0, 0, 0, 554, 0, 0, 448, 0, 575, 0, 520, 0, 0, 0, 0, 0, 0, 970, 0, 0, 0, 827,
		/* 19840 */ 377, 377, 377, 377, 377, 377, 877, 377, 377, 377, 377, 377, 637, 45942, 827, 640, 399, 1470, 399, 399,
		/* 19860 */ 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 921, 399, 315, 315, 315, 315, 1538, 315, 0,
		/* 19881 */ 0, 0, 0, 377, 1543, 377, 377, 1546, 377, 377, 377, 377, 377, 1288, 377, 377, 377, 377, 377, 377, 377,
		/* 19902 */ 377, 1294, 377, 377, 377, 377, 377, 1428, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 635, 377,
		/* 19922 */ 377, 0, 399, 399, 1560, 377, 377, 1562, 377, 377, 377, 1564, 377, 377, 377, 0, 0, 0, 0, 399, 399, 399,
		/* 19944 */ 399, 894, 399, 399, 901, 399, 399, 905, 399, 399, 399, 399, 399, 0, 0, 0, 0, 1940, 377, 377, 377, 1942,
		/* 19966 */ 399, 399, 1568, 399, 399, 1571, 399, 399, 399, 399, 399, 399, 399, 399, 1579, 399, 399, 399, 399, 0, 0,
		/* 19987 */ 0, 0, 0, 1914, 377, 377, 377, 377, 377, 1920, 1592, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 481, 0,
		/* 20015 */ 0, 1618, 0, 0, 0, 0, 0, 1623, 0, 315, 315, 315, 315, 1628, 315, 315, 0, 0, 0, 1635, 377, 377, 377, 377,
		/* 20039 */ 377, 377, 377, 377, 377, 377, 1432, 377, 377, 377, 377, 377, 399, 1672, 399, 399, 399, 399, 399, 0, 0,
		/* 20060 */ 0, 0, 0, 0, 0, 0, 0, 0, 377, 377, 1821, 0, 0, 0, 1685, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 235, 236,
		/* 20089 */ 237, 0, 0, 0, 0, 0, 1695, 0, 0, 0, 315, 315, 315, 315, 315, 315, 315, 0, 0, 1417, 0, 0, 0, 377, 377,
		/* 20114 */ 377, 377, 377, 377, 377, 377, 377, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1742, 0, 0, 0, 0, 0, 0,
		/* 20137 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 511, 377, 1823, 377, 1825, 1826, 1827, 377, 399, 399, 399, 399, 1833, 399,
		/* 20160 */ 1835, 1836, 1837, 0, 0, 377, 377, 377, 1900, 377, 1901, 377, 377, 377, 399, 399, 399, 1906, 399, 399,
		/* 20180 */ 399, 399, 926, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1164, 399, 399, 399, 399, 1907,
		/* 20200 */ 399, 399, 399, 0, 0, 0, 0, 0, 377, 377, 377, 377, 377, 377, 399, 399, 399, 399, 944, 0, 0, 0, 0, 0, 0,
		/* 20225 */ 950, 0, 0, 0, 956, 262, 0, 0, 0, 0, 0, 0, 282, 0, 0, 0, 22528, 24576, 0, 0, 0, 0, 0, 0, 963, 0, 0, 0, 0,
		/* 20254 */ 968, 0, 0, 0, 0, 0, 0, 0, 794624, 0, 0, 0, 0, 897024, 892928, 0, 0, 295, 20480, 295, 295, 295, 295, 295,
		/* 20278 */ 0, 295, 323, 323, 323, 323, 323, 323, 343, 343, 323, 343, 343, 364, 364, 364, 364, 364, 364, 364, 364,
		/* 20299 */ 364, 364, 364, 323, 364, 374, 385, 385, 385, 385, 385, 408, 385, 385, 385, 385, 385, 385, 385, 385, 385,
		/* 20320 */ 385, 408, 408, 408, 408, 408, 385, 385, 408, 26824, 26824, 2, 2, 3, 47108, 5, 6, 0, 486, 519, 0, 480, 0,
		/* 20343 */ 0, 0, 0, 377, 377, 377, 377, 594, 377, 377, 377, 0, 0, 45942, 0, 0, 399, 399, 399, 399, 399, 399, 399,
		/* 20366 */ 399, 902, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 651, 399, 399, 399, 399, 399, 399, 399, 399,
		/* 20387 */ 399, 399, 399, 399, 934, 399, 399, 399, 399, 805, 315, 315, 315, 315, 315, 315, 315, 315, 0, 0, 0, 0, 0,
		/* 20410 */ 0, 0, 0, 0, 1386, 0, 0, 0, 0, 0, 0, 871, 377, 377, 377, 377, 377, 377, 377, 377, 881, 377, 377, 637,
		/* 20434 */ 45942, 827, 640, 910, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1328,
		/* 20454 */ 399, 399, 924, 399, 399, 399, 399, 399, 399, 932, 399, 399, 399, 399, 399, 399, 897, 399, 399, 399, 399,
		/* 20475 */ 399, 399, 399, 399, 399, 1778, 399, 399, 0, 0, 0, 0, 399, 399, 942, 399, 399, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 20501 */ 0, 0, 315, 315, 315, 315, 315, 315, 0, 315, 315, 315, 1030, 315, 315, 315, 315, 315, 315, 315, 315, 315,
		/* 20523 */ 315, 315, 802, 315, 803, 315, 315, 315, 377, 1064, 1065, 377, 377, 1068, 377, 377, 377, 377, 377, 377,
		/* 20543 */ 377, 377, 377, 377, 852, 377, 377, 377, 377, 377, 1077, 377, 377, 377, 377, 377, 377, 377, 377, 377,
		/* 20563 */ 377, 377, 377, 377, 377, 377, 870, 377, 377, 377, 1111, 1113, 45942, 1116, 1113, 399, 399, 399, 399,
		/* 20582 */ 399, 399, 1124, 1125, 399, 399, 1128, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1137, 399, 399,
		/* 20602 */ 399, 399, 399, 1460, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1468, 0, 0, 1206, 0, 0, 0, 0, 0, 0, 0,
		/* 20626 */ 0, 0, 0, 0, 0, 1216, 315, 315, 315, 315, 1247, 315, 315, 315, 315, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1515, 0,
		/* 20652 */ 0, 0, 0, 0, 0, 315, 315, 315, 315, 1407, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315, 1048,
		/* 20674 */ 315, 0, 0, 0, 0, 377, 377, 377, 1426, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377,
		/* 20696 */ 1558, 377, 377, 399, 399, 1570, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 936,
		/* 20716 */ 399, 399, 0, 0, 0, 0, 1620, 0, 0, 0, 0, 0, 315, 315, 315, 315, 315, 315, 315, 315, 315, 1240, 1241, 315,
		/* 20740 */ 315, 315, 377, 377, 377, 377, 1720, 377, 377, 377, 399, 399, 399, 399, 399, 399, 399, 399, 1736, 399,
		/* 20760 */ 399, 399, 399, 399, 1741, 0, 0, 0, 1898, 377, 377, 377, 377, 377, 377, 377, 377, 1904, 399, 399, 399,
		/* 20781 */ 399, 0, 0, 0, 0, 0, 377, 377, 1916, 1917, 377, 377, 399, 1934, 399, 399, 399, 399, 0, 0, 0, 0, 377, 377,
		/* 20805 */ 377, 377, 399, 399, 399, 399, 377, 377, 399, 26824, 26824, 2, 2, 3, 47108, 5, 6, 0, 0, 240, 0, 0, 0, 0,
		/* 20829 */ 0, 0, 0, 0, 0, 0, 0, 251, 0, 0, 0, 0, 0, 576, 0, 0, 377, 377, 377, 591, 377, 377, 602, 377, 0, 20480, 0,
		/* 20856 */ 0, 0, 0, 0, 305, 0, 324, 324, 324, 324, 324, 324, 344, 352, 324, 344, 344, 344, 344, 344, 344, 344, 344,
		/* 20879 */ 344, 344, 344, 344, 344, 324, 344, 344, 386, 386, 386, 386, 386, 409, 386, 386, 386, 386, 386, 386, 386,
		/* 20900 */ 386, 386, 386, 409, 409, 409, 409, 409, 386, 386, 409, 26824, 27048, 2, 2, 3, 47108, 5, 6, 0, 0, 483, 0,
		/* 20923 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1024, 0, 0, 447, 0, 0, 0, 0, 0, 0, 377, 377, 377, 377, 595, 377,
		/* 20952 */ 377, 607, 399, 399, 399, 652, 399, 399, 664, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1588, 399,
		/* 20972 */ 399, 399, 399, 399, 399, 0, 0, 0, 720, 0, 0, 0, 0, 0, 0, 0, 0, 0, 251, 251, 0, 0, 0, 0, 470, 0, 0, 0, 0,
		/* 21001 */ 0, 476, 477, 0, 0, 0, 0, 0, 0, 0, 530432, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 561, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 21032 */ 0, 744, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 758, 0, 0, 0, 0, 0, 714, 0, 0, 0, 0, 315, 315, 315, 315,
		/* 21061 */ 791, 315, 377, 872, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 637, 45942, 827, 640, 377, 377,
		/* 21081 */ 377, 1066, 377, 377, 377, 377, 377, 377, 1072, 377, 377, 377, 377, 377, 377, 377, 1444, 377, 377, 377,
		/* 21101 */ 377, 377, 377, 377, 377, 1278, 377, 1280, 377, 377, 377, 377, 377, 1126, 399, 399, 399, 399, 399, 399,
		/* 21121 */ 1132, 399, 399, 399, 399, 399, 399, 399, 399, 1777, 399, 399, 399, 0, 0, 0, 0, 0, 0, 0, 0, 1180, 0, 0,
		/* 21145 */ 0, 0, 0, 0, 0, 0, 0, 0, 1190, 0, 0, 1219, 0, 0, 0, 0, 0, 0, 1226, 0, 0, 0, 0, 0, 0, 0, 0, 1357, 0, 0, 0,
		/* 21176 */ 0, 0, 0, 0, 0, 0, 67584, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 399, 399, 1343, 399, 399, 399, 399, 399, 399,
		/* 21202 */ 399, 399, 399, 399, 399, 399, 399, 1326, 1327, 399, 0, 0, 1785, 0, 0, 0, 0, 0, 0, 0, 315, 377, 377, 377,
		/* 21226 */ 377, 377, 377, 377, 1554, 377, 377, 377, 377, 377, 377, 377, 377, 1445, 377, 377, 377, 377, 377, 377,
		/* 21246 */ 377, 399, 1809, 399, 0, 0, 0, 1813, 0, 0, 0, 0, 0, 0, 377, 377, 377, 377, 377, 377, 377, 1881, 377, 377,
		/* 21270 */ 0, 0, 241, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 251, 241, 0, 0, 0, 0, 481, 0, 0, 0, 377, 377, 377, 377, 377,
		/* 21298 */ 601, 377, 377, 377, 377, 377, 377, 1765, 377, 377, 377, 399, 399, 399, 399, 1769, 399, 0, 265, 0, 0, 0,
		/* 21320 */ 0, 265, 0, 265, 0, 0, 22528, 24576, 265, 0, 241, 0, 20480, 0, 0, 0, 0, 0, 0, 0, 325, 325, 325, 325, 325,
		/* 21345 */ 325, 345, 351, 351, 325, 351, 345, 351, 351, 351, 351, 351, 351, 351, 351, 351, 351, 351, 325, 351, 351,
		/* 21366 */ 387, 387, 387, 387, 387, 410, 387, 387, 387, 387, 387, 387, 387, 387, 387, 387, 410, 410, 410, 410, 410,
		/* 21387 */ 387, 387, 410, 26824, 26824, 2, 2, 3, 47108, 5, 6, 0, 315, 539, 315, 315, 315, 545, 315, 315, 315, 552,
		/* 21409 */ 315, 0, 0, 0, 0, 0, 0, 0, 502, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 915456, 28672, 0, 0, 0, 0, 554, 0, 0, 0, 0,
		/* 21439 */ 562, 0, 0, 0, 0, 0, 571, 0, 467, 0, 0, 0, 0, 472, 0, 0, 0, 0, 0, 478, 0, 0, 0, 554, 448, 581, 0, 0, 0,
		/* 21468 */ 0, 0, 377, 584, 377, 377, 596, 377, 377, 608, 377, 377, 377, 618, 377, 377, 377, 377, 633, 377, 377,
		/* 21489 */ 377, 377, 0, 399, 399, 399, 399, 399, 1473, 399, 399, 399, 399, 399, 1479, 399, 399, 399, 399, 0, 0, 0,
		/* 21511 */ 0, 0, 377, 1915, 377, 377, 377, 1919, 399, 641, 399, 399, 653, 399, 399, 665, 399, 399, 399, 675, 399,
		/* 21532 */ 399, 399, 399, 690, 710, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 776, 399, 912, 399, 399, 399, 399,
		/* 21558 */ 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1151, 1152, 0, 958, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 21583 */ 0, 0, 0, 1376, 0, 0, 315, 315, 315, 315, 1031, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315, 1411,
		/* 21605 */ 315, 315, 315, 315, 315, 399, 1127, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399,
		/* 21625 */ 399, 1339, 1340, 0, 0, 0, 0, 1221, 0, 1223, 0, 0, 0, 0, 0, 1229, 0, 0, 0, 0, 0, 0, 994, 0, 0, 0, 0, 0,
		/* 21653 */ 0, 0, 0, 0, 0, 251, 251, 251, 0, 73728, 0, 0, 0, 1233, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315,
		/* 21677 */ 315, 315, 315, 0, 0, 815, 0, 0, 0, 0, 0, 377, 377, 1260, 377, 377, 377, 377, 377, 377, 377, 377, 377,
		/* 21700 */ 377, 377, 377, 637, 0, 0, 640, 377, 1284, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377,
		/* 21721 */ 377, 1295, 0, 1365, 0, 0, 1367, 0, 0, 0, 1371, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1529, 0, 315, 315, 315, 315,
		/* 21747 */ 1535, 0, 0, 0, 0, 1381, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 492, 0, 0, 0, 0, 1424, 377, 377, 377, 1427,
		/* 21774 */ 377, 1429, 377, 377, 377, 377, 377, 377, 377, 1435, 377, 377, 377, 377, 377, 1442, 377, 377, 377, 377,
		/* 21794 */ 377, 377, 377, 377, 377, 377, 1556, 377, 377, 377, 377, 377, 1520, 1521, 0, 0, 1524, 0, 0, 0, 0, 0, 0,
		/* 21817 */ 315, 315, 315, 315, 315, 0, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1268, 377, 377, 377,
		/* 21838 */ 377, 377, 377, 1551, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 637, 45942, 827, 640,
		/* 21858 */ 377, 1644, 1645, 377, 377, 377, 377, 1649, 377, 377, 377, 377, 377, 377, 399, 1658, 1671, 399, 399, 399,
		/* 21878 */ 399, 399, 399, 0, 0, 1680, 0, 0, 0, 0, 0, 0, 0, 0, 1385, 0, 0, 0, 0, 0, 0, 0, 0, 0, 785, 315, 315, 315,
		/* 21906 */ 315, 315, 315, 377, 1717, 377, 377, 377, 377, 377, 377, 399, 399, 399, 399, 1726, 1727, 1728, 399, 399,
		/* 21926 */ 399, 399, 1130, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1138, 0, 0, 315, 315, 315, 315, 315,
		/* 21947 */ 0, 377, 377, 377, 377, 377, 377, 1759, 377, 377, 377, 377, 377, 1553, 377, 377, 377, 377, 377, 377, 377,
		/* 21968 */ 377, 377, 377, 1652, 377, 377, 377, 399, 399, 1771, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399,
		/* 21988 */ 399, 0, 0, 0, 0, 0, 1895, 377, 1795, 377, 377, 377, 377, 377, 399, 399, 399, 399, 399, 399, 1805, 399,
		/* 22010 */ 399, 399, 399, 399, 1486, 399, 399, 399, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 377, 1820, 377, 1822, 377, 377,
		/* 22034 */ 377, 377, 377, 377, 399, 399, 399, 1832, 399, 399, 399, 399, 399, 0, 0, 0, 0, 947, 0, 0, 0, 953, 0, 0,
		/* 22058 */ 377, 1854, 377, 1856, 399, 399, 399, 399, 399, 399, 399, 1864, 399, 1866, 0, 0, 0, 0, 0, 721, 0, 0, 724,
		/* 22081 */ 0, 0, 0, 0, 251, 251, 0, 399, 1922, 1923, 399, 399, 0, 0, 0, 0, 377, 377, 377, 377, 377, 377, 399, 399,
		/* 22105 */ 399, 399, 1143, 399, 399, 399, 399, 1146, 1147, 399, 1149, 1150, 399, 399, 399, 399, 399, 1319, 399,
		/* 22124 */ 399, 399, 1323, 399, 1325, 399, 399, 399, 399, 0, 0, 0, 0, 0, 377, 377, 377, 377, 1918, 377, 399, 0, 0,
		/* 22147 */ 0, 242, 243, 244, 245, 0, 0, 0, 0, 0, 0, 251, 0, 0, 0, 0, 0, 733, 0, 0, 0, 0, 0, 739, 0, 0, 0, 0, 0, 0,
		/* 22177 */ 0, 528384, 0, 0, 0, 0, 0, 493, 0, 0, 244, 20480, 244, 244, 244, 244, 244, 0, 312, 326, 326, 326, 326,
		/* 22200 */ 326, 326, 346, 346, 326, 354, 357, 365, 365, 365, 365, 365, 365, 365, 365, 365, 365, 365, 326, 365, 365,
		/* 22221 */ 388, 388, 388, 388, 388, 411, 388, 388, 388, 388, 388, 388, 388, 388, 388, 388, 411, 411, 411, 411, 411,
		/* 22242 */ 388, 388, 411, 26824, 26824, 2, 2, 3, 47108, 5, 6, 0, 436, 0, 0, 0, 440, 441, 442, 443, 0, 0, 0, 0, 0,
		/* 22267 */ 0, 0, 451, 0, 436, 497, 498, 499, 0, 0, 0, 0, 0, 505, 0, 0, 0, 0, 0, 315, 315, 526, 315, 315, 534, 315,
		/* 22293 */ 315, 315, 543, 315, 315, 315, 315, 550, 315, 315, 0, 0, 0, 0, 0, 0, 0, 735, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 22320 */ 0, 565711, 75776, 565711, 0, 75776, 0, 442, 0, 573, 0, 0, 0, 505, 0, 0, 0, 0, 0, 0, 569, 505, 505, 377,
		/* 22344 */ 614, 617, 377, 377, 377, 626, 630, 377, 377, 377, 377, 377, 0, 399, 399, 399, 399, 399, 1573, 399, 399,
		/* 22365 */ 399, 399, 399, 399, 399, 399, 399, 399, 933, 399, 399, 399, 399, 399, 399, 647, 650, 399, 657, 399, 399,
		/* 22386 */ 399, 671, 674, 399, 399, 399, 683, 687, 399, 399, 399, 399, 1332, 399, 1334, 399, 399, 399, 399, 399,
		/* 22406 */ 1337, 399, 399, 399, 399, 399, 768, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1400, 1401, 0, 0, 0, 0, 0, 0, 764,
		/* 22433 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 774, 0, 0, 0, 0, 0, 749, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 111013, 111013,
		/* 22462 */ 111013, 111013, 111013, 399, 399, 399, 913, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399,
		/* 22481 */ 1135, 399, 399, 399, 399, 399, 941, 399, 399, 399, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 713, 0, 0, 0, 0,
		/* 22507 */ 399, 399, 1141, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1338, 399, 399, 0, 0,
		/* 22528 */ 0, 1170, 0, 699, 0, 0, 0, 1172, 0, 703, 0, 0, 0, 0, 0, 0, 0, 528872, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 967,
		/* 22557 */ 0, 0, 969, 0, 0, 0, 0, 1191, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 495, 0, 0, 377, 377, 377, 377, 1275,
		/* 22586 */ 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 883, 637, 45942, 827, 640, 1329, 399, 399, 399,
		/* 22606 */ 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1581, 0, 0, 1594, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 22631 */ 0, 0, 0, 0, 496, 0, 0, 399, 399, 1661, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399,
		/* 22654 */ 1467, 399, 399, 0, 0, 1744, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 509, 0, 0, 0, 0, 315, 315, 315, 315,
		/* 22682 */ 315, 0, 1756, 377, 377, 377, 377, 377, 377, 377, 399, 399, 1831, 399, 399, 399, 399, 399, 399, 377, 377,
		/* 22703 */ 1824, 377, 377, 377, 377, 399, 1830, 399, 399, 399, 1834, 399, 399, 399, 399, 399, 0, 1938, 1939, 0,
		/* 22723 */ 377, 377, 377, 377, 399, 399, 399, 399, 399, 399, 1586, 399, 399, 399, 399, 399, 399, 399, 399, 399,
		/* 22743 */ 1346, 399, 399, 399, 399, 399, 399, 399, 399, 1133, 399, 399, 399, 1136, 399, 399, 399, 267, 0, 0, 0, 0,
		/* 22765 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 717, 0, 278, 0, 0, 0, 0, 278, 0, 278, 0, 0, 22528, 24576, 278, 0, 0, 0,
		/* 22794 */ 0, 0, 754, 827, 377, 830, 377, 377, 377, 377, 377, 377, 377, 632, 377, 377, 377, 377, 377, 0, 399, 399,
		/* 22816 */ 0, 20480, 0, 0, 0, 0, 0, 306, 0, 315, 315, 315, 315, 315, 315, 0, 0, 0, 377, 377, 377, 377, 377, 377,
		/* 22840 */ 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 856, 412, 389, 389, 389, 389, 389, 389, 389, 389, 389,
		/* 22861 */ 389, 412, 412, 412, 412, 412, 389, 389, 412, 26824, 26824, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 454, 0, 0, 0,
		/* 22885 */ 0, 0, 0, 0, 251, 251, 251, 0, 0, 0, 0, 0, 0, 1195, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 315, 315, 315, 315,
		/* 22913 */ 533, 315, 0, 454, 0, 0, 454, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 772, 0, 0, 0, 0, 0, 0, 746, 0, 0, 0, 0, 0,
		/* 22944 */ 0, 0, 0, 755, 0, 759, 0, 0, 0, 0, 0, 760, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 139264, 139264, 139264,
		/* 22970 */ 139264, 139264, 712, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 773, 0, 0, 0, 0, 0, 0, 1210, 0, 0, 0, 0, 0, 0, 0,
		/* 22999 */ 0, 0, 0, 315, 315, 315, 790, 315, 315, 315, 795, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315,
		/* 23021 */ 315, 315, 315, 0, 814, 0, 0, 0, 0, 0, 377, 377, 845, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377,
		/* 23044 */ 377, 854, 377, 377, 377, 377, 377, 1721, 377, 377, 399, 399, 399, 399, 399, 399, 399, 399, 1162, 399,
		/* 23064 */ 399, 399, 399, 399, 399, 399, 939, 399, 399, 399, 399, 0, 0, 0, 0, 948, 0, 0, 0, 954, 0, 0, 0, 0, 0,
		/* 23089 */ 766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83968, 0, 0, 0, 0, 0, 0, 989, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 23121 */ 0, 0, 1403, 0, 0, 0, 949, 0, 0, 0, 0, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1688, 0, 0, 0, 0, 0, 0, 1204,
		/* 23151 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1215, 0, 0, 0, 0, 486, 0, 0, 0, 486, 0, 0, 0, 0, 495, 0, 0, 0, 0,
		/* 23183 */ 0, 563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 222, 222, 222, 0, 0, 0, 377, 377, 377, 1274, 377, 377, 1277, 377,
		/* 23209 */ 377, 377, 377, 377, 377, 377, 377, 377, 1650, 377, 377, 377, 377, 377, 399, 399, 399, 399, 1331, 399,
		/* 23229 */ 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1481, 399, 399, 1364, 0, 0, 0, 0, 0, 0, 0,
		/* 23252 */ 0, 0, 0, 0, 0, 0, 0, 0, 743, 377, 1438, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377,
		/* 23276 */ 377, 377, 1436, 0, 0, 0, 1786, 0, 0, 0, 1789, 0, 0, 315, 377, 377, 377, 377, 377, 377, 377, 1829, 399,
		/* 23299 */ 399, 399, 399, 399, 399, 399, 399, 916, 399, 399, 399, 399, 399, 399, 399, 0, 0, 0, 557, 0, 0, 0, 0, 0,
		/* 23323 */ 0, 0, 0, 0, 557, 0, 0, 0, 0, 0, 0, 0, 0, 557, 0, 0, 0, 0, 0, 0, 377, 377, 377, 377, 597, 377, 377, 377,
		/* 23351 */ 0, 1113, 45942, 0, 1113, 399, 399, 399, 399, 399, 399, 399, 399, 917, 399, 399, 919, 399, 399, 399, 399,
		/* 23372 */ 399, 399, 399, 654, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1148, 399, 399, 399,
		/* 23392 */ 399, 399, 399, 693, 0, 0, 0, 0, 26824, 2, 6, 0, 0, 0, 0, 700, 704, 377, 377, 377, 1112, 1113, 45942,
		/* 23415 */ 1117, 1113, 399, 399, 399, 399, 399, 399, 399, 399, 0, 1679, 0, 0, 0, 0, 0, 0, 0, 0, 0, 560, 0, 565, 0,
		/* 23440 */ 0, 0, 0, 0, 0, 0, 0, 0, 1730, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 0, 0, 0,
		/* 23465 */ 1783, 0, 246, 0, 0, 0, 0, 0, 246, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 256, 0, 258, 0, 246, 20480, 246,
		/* 23493 */ 246, 246, 246, 246, 0, 246, 327, 327, 327, 327, 327, 327, 0, 0, 0, 0, 559, 0, 564, 0, 567, 0, 0, 0, 0,
		/* 23518 */ 0, 567, 0, 0, 0, 0, 254, 0, 0, 0, 0, 254, 254, 22528, 24576, 0, 0, 0, 0, 0, 0, 827, 377, 377, 377, 377,
		/* 23544 */ 377, 377, 837, 377, 377, 0, 0, 327, 0, 0, 246, 246, 246, 246, 246, 246, 246, 246, 246, 246, 246, 327,
		/* 23566 */ 246, 246, 390, 390, 390, 390, 390, 413, 390, 390, 390, 390, 390, 390, 390, 390, 390, 390, 413, 413, 413,
		/* 23587 */ 413, 413, 390, 390, 413, 26824, 26824, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 455, 456, 0, 0, 0, 0, 0, 251,
		/* 23612 */ 251, 251, 0, 0, 0, 0, 0, 0, 1369, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 315, 377, 1791, 377, 377, 377, 536, 315,
		/* 23639 */ 315, 315, 315, 546, 315, 315, 551, 315, 315, 0, 0, 0, 0, 0, 0, 0, 769, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 23666 */ 1373, 0, 0, 0, 0, 0, 0, 568, 0, 0, 574, 0, 0, 0, 0, 500, 0, 0, 577, 0, 0, 0, 0, 0, 0, 1513, 0, 0, 0, 0,
		/* 23696 */ 0, 0, 0, 0, 0, 0, 315, 315, 315, 315, 532, 315, 377, 377, 377, 619, 621, 377, 377, 631, 377, 377, 377,
		/* 23719 */ 377, 377, 0, 399, 399, 399, 399, 399, 1585, 399, 399, 1587, 399, 399, 399, 1589, 399, 399, 399, 399, 0,
		/* 23740 */ 1910, 0, 0, 1913, 377, 377, 377, 377, 377, 377, 399, 642, 399, 399, 399, 399, 660, 399, 399, 399, 399,
		/* 23761 */ 676, 678, 399, 399, 688, 399, 399, 399, 399, 1472, 399, 399, 399, 399, 399, 399, 399, 1480, 399, 399,
		/* 23781 */ 399, 399, 399, 0, 1927, 1928, 0, 377, 377, 377, 377, 377, 377, 399, 0, 0, 0, 747, 0, 0, 0, 0, 0, 0, 754,
		/* 23806 */ 0, 0, 0, 0, 0, 0, 0, 783, 0, 0, 315, 315, 315, 789, 315, 315, 0, 0, 763, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 23835 */ 0, 0, 0, 715, 0, 0, 0, 778, 779, 0, 0, 0, 0, 0, 0, 0, 315, 315, 315, 315, 315, 315, 1238, 315, 315, 315,
		/* 23861 */ 315, 315, 315, 315, 399, 891, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399,
		/* 23881 */ 1352, 399, 911, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1482, 399,
		/* 23901 */ 1026, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315, 800, 315, 315, 315,
		/* 23921 */ 315, 315, 315, 377, 1107, 377, 0, 1113, 45942, 0, 1113, 399, 399, 399, 399, 1121, 399, 399, 399, 399,
		/* 23941 */ 399, 399, 1663, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1463, 399, 399, 399, 399, 399, 399, 0, 0,
		/* 23962 */ 0, 0, 1193, 0, 0, 0, 0, 1198, 0, 0, 1200, 0, 1202, 0, 0, 0, 0, 570, 0, 0, 570, 377, 585, 377, 377, 377,
		/* 23988 */ 377, 603, 377, 377, 377, 377, 377, 1799, 377, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1892, 0, 0,
		/* 24009 */ 0, 0, 1894, 0, 0, 0, 0, 0, 1208, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1004, 0, 0, 0, 0, 315, 1244, 1245,
		/* 24037 */ 315, 315, 315, 315, 315, 315, 0, 0, 0, 0, 1255, 0, 0, 0, 0, 0, 785, 827, 377, 377, 377, 377, 377, 377,
		/* 24061 */ 377, 377, 377, 863, 377, 377, 377, 377, 377, 377, 1283, 377, 377, 377, 1287, 377, 377, 377, 377, 377,
		/* 24081 */ 377, 377, 377, 377, 377, 377, 1292, 377, 377, 377, 377, 377, 377, 377, 1299, 0, 0, 0, 0, 1113, 0, 0, 0,
		/* 24104 */ 0, 399, 399, 399, 399, 399, 399, 1776, 399, 399, 399, 399, 399, 0, 0, 0, 0, 377, 377, 377, 377, 377,
		/* 24126 */ 377, 399, 1341, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1353, 1378, 0, 0,
		/* 24147 */ 0, 0, 0, 1383, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 315, 377, 377, 377, 377, 377, 377, 377, 1425, 377, 377,
		/* 24172 */ 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1088, 377, 0, 0, 0, 1510, 0, 0, 0, 0, 0, 0,
		/* 24196 */ 0, 0, 0, 0, 0, 0, 267, 0, 0, 0, 0, 1604, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1518, 0, 0, 0, 0, 0,
		/* 24228 */ 1686, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1007, 0, 0, 0, 0, 377, 377, 377, 377, 1798, 377, 377, 1800, 399,
		/* 24254 */ 399, 399, 399, 399, 399, 399, 399, 900, 399, 399, 399, 399, 399, 399, 399, 399, 1462, 399, 399, 399,
		/* 24274 */ 399, 399, 399, 399, 1808, 399, 399, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 377, 377, 377, 377, 598, 377, 377,
		/* 24298 */ 377, 0, 0, 0, 1872, 1873, 0, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1270, 377,
		/* 24320 */ 399, 399, 399, 1924, 399, 1926, 0, 0, 1929, 377, 377, 377, 377, 377, 377, 399, 399, 399, 399, 1572, 399,
		/* 24341 */ 1574, 399, 399, 1577, 399, 399, 399, 399, 399, 399, 1320, 399, 399, 399, 399, 399, 399, 399, 399, 399,
		/* 24361 */ 1735, 399, 399, 399, 399, 399, 399, 0, 0, 0, 0, 377, 377, 377, 1941, 399, 399, 399, 270, 0, 271, 0, 0,
		/* 24384 */ 0, 0, 0, 271, 0, 0, 276, 0, 0, 0, 0, 0, 0, 0, 530432, 751, 0, 0, 0, 0, 0, 0, 0, 0, 0, 504, 0, 0, 0, 0,
		/* 24414 */ 0, 0, 0, 0, 0, 271, 0, 0, 0, 283, 0, 0, 0, 22528, 24576, 0, 0, 0, 0, 0, 0, 1597, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 24444 */ 0, 0, 249, 250, 0, 251, 0, 0, 296, 20480, 296, 296, 296, 296, 296, 0, 313, 328, 328, 328, 328, 328, 328,
		/* 24467 */ 0, 0, 0, 0, 707, 781, 782, 0, 0, 0, 315, 315, 788, 315, 792, 315, 315, 315, 315, 315, 1248, 1249, 315,
		/* 24490 */ 315, 0, 0, 0, 0, 0, 1256, 0, 0, 0, 0, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 742, 0, 0, 0, 0, 569, 0, 0, 569,
		/* 24520 */ 377, 377, 590, 593, 377, 600, 377, 377, 377, 377, 377, 377, 1722, 377, 399, 399, 399, 399, 399, 399,
		/* 24540 */ 399, 399, 1335, 399, 399, 399, 399, 399, 399, 399, 0, 247, 328, 0, 0, 313, 313, 313, 313, 313, 313, 313,
		/* 24562 */ 313, 313, 313, 313, 328, 372, 375, 391, 391, 391, 391, 391, 414, 391, 391, 391, 391, 391, 391, 391, 391,
		/* 24583 */ 391, 391, 414, 414, 414, 414, 414, 391, 391, 414, 26824, 26824, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 516,
		/* 24606 */ 0, 0, 0, 0, 0, 0, 315, 524, 315, 315, 315, 315, 315, 315, 315, 1250, 315, 0, 0, 0, 0, 0, 0, 1257, 315,
		/* 24631 */ 540, 315, 315, 315, 315, 315, 315, 315, 315, 315, 0, 0, 0, 0, 0, 0, 0, 962, 0, 0, 827, 377, 377, 377,
		/* 24655 */ 377, 377, 377, 624, 377, 377, 377, 377, 377, 377, 0, 399, 399, 516, 0, 563, 0, 0, 0, 0, 0, 377, 586,
		/* 24678 */ 377, 377, 377, 377, 377, 609, 643, 399, 399, 399, 399, 399, 666, 399, 399, 399, 399, 399, 399, 399, 399,
		/* 24699 */ 399, 915, 399, 399, 399, 399, 399, 920, 399, 399, 0, 0, 705, 0, 0, 707, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 24725 */ 223, 0, 223, 277, 223, 0, 794, 315, 315, 315, 315, 315, 315, 315, 315, 315, 801, 315, 315, 315, 315,
		/* 24746 */ 315, 315, 315, 799, 315, 315, 315, 315, 315, 315, 315, 315, 1045, 315, 315, 315, 0, 0, 0, 0, 0, 818, 0,
		/* 24769 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1614, 0, 0, 825, 826, 0, 818, 0, 827, 377, 377, 377, 377, 833,
		/* 24796 */ 377, 377, 840, 377, 377, 377, 377, 859, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1102,
		/* 24816 */ 377, 377, 377, 377, 377, 844, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 855, 0,
		/* 24837 */ 0, 990, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 741, 0, 0, 1231, 0, 315, 315, 315, 315, 315, 315, 315,
		/* 24864 */ 315, 315, 315, 315, 315, 315, 315, 1038, 315, 315, 315, 1246, 315, 315, 315, 315, 315, 0, 0, 0, 0, 0, 0,
		/* 24887 */ 0, 0, 0, 116736, 0, 0, 0, 0, 0, 0, 0, 1258, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377,
		/* 24911 */ 377, 377, 399, 399, 399, 1342, 399, 399, 399, 399, 399, 399, 399, 399, 1348, 399, 399, 399, 399, 399, 0,
		/* 24932 */ 0, 0, 945, 0, 0, 0, 951, 0, 0, 0, 0, 949, 0, 955, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 448, 449, 0, 0,
		/* 24962 */ 1507, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 761, 0, 0, 0, 1523, 0, 0, 0, 0, 0, 0, 0, 315, 315,
		/* 24992 */ 315, 315, 315, 0, 377, 377, 377, 377, 377, 377, 377, 1760, 377, 1561, 377, 377, 377, 377, 377, 377, 377,
		/* 25013 */ 377, 377, 0, 1304, 0, 1310, 399, 399, 399, 399, 1676, 399, 399, 0, 0, 0, 1681, 0, 0, 0, 0, 0, 0, 0,
		/* 25037 */ 1211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 218, 219, 0, 0, 0, 0, 435, 0, 0, 1693, 0, 0, 0, 0, 1698, 315, 315, 315,
		/* 25065 */ 315, 315, 315, 1703, 0, 0, 0, 0, 748, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 286, 286, 0, 0, 0, 377, 377,
		/* 25092 */ 1718, 377, 377, 377, 377, 377, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 0, 0, 0, 1743, 0, 0, 0,
		/* 25115 */ 0, 0, 0, 0, 1749, 1750, 0, 0, 0, 0, 0, 0, 0, 979, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1599, 0, 0, 1602, 0, 0,
		/* 25145 */ 1794, 377, 1796, 377, 377, 377, 377, 399, 399, 399, 399, 399, 1804, 399, 1806, 399, 399, 399, 399, 1732,
		/* 25165 */ 399, 399, 399, 399, 1737, 399, 399, 399, 399, 0, 0, 0, 0, 0, 377, 377, 377, 377, 377, 377, 399, 377,
		/* 25187 */ 377, 377, 377, 1857, 399, 399, 399, 399, 399, 399, 399, 399, 399, 0, 0, 0, 0, 1493, 0, 0, 0, 0, 377,
		/* 25210 */ 1899, 377, 377, 377, 377, 377, 377, 377, 399, 1905, 399, 399, 399, 399, 399, 895, 399, 399, 399, 399,
		/* 25230 */ 399, 399, 399, 399, 399, 399, 1324, 399, 399, 399, 399, 399, 0, 0, 272, 0, 0, 0, 0, 0, 272, 0, 0, 0, 0,
		/* 25255 */ 0, 0, 0, 0, 0, 122880, 0, 0, 0, 0, 0, 0, 0, 0, 0, 272, 0, 0, 0, 284, 0, 0, 0, 22528, 24576, 0, 0, 0, 0,
		/* 25284 */ 0, 0, 1687, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 251, 251, 251, 464, 0, 0, 0, 20480, 0, 0, 0, 0, 0, 0, 0, 329,
		/* 25313 */ 329, 329, 329, 329, 329, 347, 347, 329, 347, 347, 366, 366, 347, 347, 347, 347, 366, 347, 366, 347, 347,
		/* 25334 */ 347, 347, 347, 347, 347, 347, 329, 373, 376, 392, 392, 392, 392, 392, 415, 392, 392, 392, 392, 392, 392,
		/* 25355 */ 392, 392, 392, 392, 415, 415, 415, 415, 415, 392, 392, 415, 26824, 26824, 2, 2, 3, 47108, 5, 6, 0, 466,
		/* 25377 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 479, 0, 0, 0, 0, 0, 820, 0, 0, 0, 0, 0, 823, 0, 723, 0, 0, 0, 0, 0,
		/* 25409 */ 281, 257, 0, 257, 0, 0, 22528, 24576, 257, 0, 0, 0, 0, 0, 220, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1517, 0,
		/* 25437 */ 0, 0, 0, 537, 315, 542, 315, 315, 315, 315, 549, 315, 315, 315, 0, 0, 0, 0, 0, 0, 0, 1183, 0, 0, 0, 0,
		/* 25463 */ 0, 0, 0, 0, 0, 231, 229, 22528, 24576, 0, 291, 291, 466, 0, 0, 522, 0, 565, 582, 0, 377, 587, 377, 377,
		/* 25487 */ 377, 377, 604, 610, 612, 377, 377, 377, 377, 377, 627, 377, 377, 377, 377, 377, 377, 0, 399, 399, 399,
		/* 25508 */ 399, 399, 1733, 399, 399, 399, 399, 399, 399, 399, 399, 0, 0, 0, 0, 0, 1683, 0, 0, 0, 644, 399, 399,
		/* 25531 */ 399, 399, 661, 667, 669, 399, 399, 399, 399, 399, 684, 399, 399, 399, 399, 658, 399, 399, 399, 399, 399,
		/* 25552 */ 399, 399, 399, 399, 399, 399, 1739, 399, 399, 0, 0, 730, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 25579 */ 1175, 777, 0, 0, 0, 708, 0, 0, 0, 784, 0, 315, 315, 315, 315, 315, 315, 1033, 315, 315, 315, 315, 315,
		/* 25602 */ 315, 315, 315, 315, 1252, 0, 0, 1254, 0, 0, 0, 315, 315, 807, 808, 315, 315, 315, 315, 315, 0, 0, 0, 0,
		/* 25626 */ 0, 0, 0, 0, 0, 135168, 0, 135168, 0, 135168, 0, 0, 0, 819, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 819, 765,
		/* 25654 */ 0, 0, 0, 730, 819, 0, 827, 377, 377, 377, 832, 377, 377, 377, 377, 377, 377, 861, 377, 377, 377, 377,
		/* 25676 */ 377, 377, 377, 377, 377, 1290, 377, 377, 377, 377, 377, 377, 377, 377, 858, 377, 377, 377, 377, 377,
		/* 25696 */ 377, 377, 377, 377, 377, 868, 869, 377, 377, 377, 377, 875, 377, 377, 377, 377, 377, 377, 377, 637,
		/* 25716 */ 45942, 827, 640, 399, 399, 399, 893, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1349,
		/* 25736 */ 399, 399, 399, 399, 988, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1506, 0, 315, 315, 1029, 315, 315,
		/* 25763 */ 315, 315, 315, 315, 1035, 315, 315, 315, 315, 315, 315, 315, 811, 315, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1018,
		/* 25787 */ 0, 0, 0, 0, 0, 0, 1039, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315, 315, 0, 1050, 0, 0, 0, 0, 0,
		/* 25812 */ 962, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 233, 234, 0, 0, 0, 0, 0, 1053, 0, 0, 0, 0, 0, 963, 1057, 1050, 827,
		/* 25840 */ 377, 377, 377, 377, 377, 377, 876, 377, 377, 377, 882, 377, 637, 45942, 827, 640, 1063, 377, 377, 377,
		/* 25860 */ 377, 377, 377, 377, 377, 377, 377, 377, 1074, 377, 377, 377, 0, 1113, 45942, 0, 1113, 399, 399, 399,
		/* 25880 */ 399, 399, 1123, 399, 399, 399, 399, 399, 1142, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399,
		/* 25900 */ 399, 1465, 399, 399, 399, 399, 0, 1177, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1690, 1691, 0, 0, 0,
		/* 25927 */ 1192, 0, 0, 0, 1196, 1197, 0, 0, 0, 0, 0, 0, 0, 0, 217, 218, 219, 0, 0, 0, 0, 0, 0, 0, 0, 1220, 0, 0, 0,
		/* 25956 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 508, 0, 0, 0, 0, 1232, 315, 315, 315, 315, 1236, 315, 315, 315, 315, 315,
		/* 25981 */ 315, 315, 315, 315, 1047, 315, 315, 0, 0, 0, 0, 399, 1330, 399, 399, 399, 399, 399, 399, 399, 399, 399,
		/* 26003 */ 399, 399, 399, 399, 399, 1591, 399, 315, 315, 1406, 315, 315, 315, 315, 1409, 315, 315, 315, 315, 315,
		/* 26023 */ 315, 315, 315, 1046, 315, 315, 1049, 0, 0, 0, 0, 377, 377, 377, 1440, 377, 377, 377, 377, 377, 377, 377,
		/* 26045 */ 377, 377, 377, 377, 377, 853, 377, 377, 377, 399, 399, 399, 1471, 399, 399, 399, 399, 399, 1477, 399,
		/* 26065 */ 399, 399, 399, 399, 399, 1131, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1160, 1161, 399, 399, 399,
		/* 26085 */ 399, 399, 399, 399, 399, 1575, 399, 399, 399, 399, 399, 399, 399, 399, 1322, 399, 399, 399, 399, 399,
		/* 26105 */ 399, 399, 1496, 1497, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1505, 0, 0, 0, 0, 765, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 26135 */ 0, 0, 0, 1021, 0, 1023, 0, 0, 0, 0, 1522, 0, 0, 0, 1526, 0, 0, 0, 0, 315, 315, 315, 1534, 315, 315, 315,
		/* 26161 */ 315, 315, 1408, 315, 315, 315, 1410, 315, 315, 1412, 315, 315, 315, 315, 315, 798, 315, 315, 315, 315,
		/* 26181 */ 315, 315, 315, 315, 315, 315, 0, 1253, 0, 0, 0, 0, 0, 377, 1549, 377, 377, 1552, 377, 377, 377, 377,
		/* 26203 */ 377, 377, 377, 377, 377, 377, 377, 1433, 377, 377, 377, 377, 1659, 399, 399, 399, 399, 399, 399, 1664,
		/* 26223 */ 399, 399, 399, 399, 399, 399, 399, 399, 1890, 399, 399, 0, 1893, 0, 0, 0, 0, 0, 1704, 377, 377, 377,
		/* 26245 */ 377, 377, 377, 377, 377, 377, 377, 377, 377, 1714, 377, 377, 377, 377, 1067, 377, 377, 377, 377, 377,
		/* 26265 */ 377, 377, 377, 377, 377, 377, 865, 377, 377, 377, 377, 377, 377, 377, 1719, 377, 377, 377, 377, 399,
		/* 26285 */ 399, 399, 399, 399, 399, 399, 399, 1345, 399, 399, 1347, 399, 399, 399, 399, 399, 399, 898, 399, 399,
		/* 26305 */ 399, 399, 399, 399, 399, 399, 399, 929, 930, 399, 399, 399, 399, 399, 399, 399, 399, 1475, 399, 399,
		/* 26325 */ 399, 399, 399, 399, 399, 399, 1891, 399, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1745, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 26353 */ 1753, 0, 0, 0, 0, 961, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 422, 422, 422, 422, 422, 0, 0, 315, 315, 315,
		/* 26380 */ 315, 315, 0, 377, 377, 377, 377, 1757, 377, 377, 377, 0, 1452, 0, 0, 0, 0, 0, 1454, 0, 0, 0, 0, 399,
		/* 26404 */ 1869, 1870, 0, 0, 0, 0, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1883, 0, 1897, 377, 377, 377, 377,
		/* 26426 */ 377, 377, 1902, 1903, 377, 399, 399, 399, 399, 399, 0, 0, 0, 946, 0, 0, 0, 952, 0, 0, 0, 399, 1908,
		/* 26449 */ 1909, 399, 0, 0, 1911, 1912, 0, 377, 377, 377, 377, 377, 377, 399, 399, 399, 399, 1887, 399, 1889, 399,
		/* 26470 */ 399, 399, 0, 0, 0, 0, 0, 0, 0, 0, 0, 377, 377, 377, 377, 377, 1852, 0, 20480, 0, 0, 0, 0, 0, 0, 0, 330,
		/* 26497 */ 330, 330, 330, 330, 330, 348, 348, 330, 348, 348, 348, 348, 348, 348, 348, 348, 348, 348, 348, 348, 348,
		/* 26518 */ 330, 348, 348, 393, 393, 393, 393, 393, 416, 393, 393, 393, 393, 393, 393, 393, 393, 393, 393, 416, 416,
		/* 26539 */ 416, 416, 416, 393, 393, 416, 26824, 26824, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 706, 0, 0, 0, 0, 0, 0, 0,
		/* 26565 */ 0, 0, 0, 0, 0, 712, 0, 0, 0, 716, 0, 0, 762, 0, 0, 0, 0, 0, 0, 762, 0, 0, 0, 0, 0, 0, 0, 0, 247, 0, 0,
		/* 26596 */ 0, 0, 251, 0, 0, 0, 0, 0, 975, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 714, 0, 0, 0, 377, 377, 377, 1079,
		/* 26625 */ 377, 377, 377, 377, 377, 377, 377, 1085, 377, 377, 377, 377, 0, 0, 1304, 0, 1113, 0, 0, 1310, 0, 399,
		/* 26647 */ 399, 399, 377, 377, 377, 1093, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 867, 377,
		/* 26667 */ 377, 377, 1139, 399, 399, 399, 399, 399, 399, 399, 1145, 399, 399, 399, 399, 399, 399, 399, 1461, 399,
		/* 26687 */ 399, 399, 1464, 399, 1466, 399, 399, 399, 1153, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399,
		/* 26707 */ 399, 399, 399, 399, 1580, 399, 399, 0, 0, 315, 315, 315, 315, 315, 1237, 315, 315, 315, 315, 315, 315,
		/* 26728 */ 315, 315, 1251, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1354, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1186, 0, 0, 0,
		/* 26758 */ 0, 399, 1569, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1590, 399, 399, 399,
		/* 26779 */ 1772, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 0, 0, 0, 0, 0, 0, 1495, 399, 399, 399, 1937,
		/* 26801 */ 399, 0, 0, 0, 0, 377, 377, 377, 377, 399, 399, 399, 399, 399, 914, 399, 399, 399, 399, 399, 399, 399,
		/* 26823 */ 399, 399, 399, 1478, 399, 399, 399, 399, 399, 260, 0, 315, 275, 275, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 26848 */ 1228, 0, 0, 0, 0, 417, 394, 394, 394, 394, 394, 394, 394, 394, 394, 394, 417, 417, 417, 417, 417, 394,
		/* 26870 */ 394, 417, 26824, 26824, 2, 2, 3, 47108, 5, 6, 0, 399, 399, 399, 655, 399, 399, 399, 399, 399, 399, 399,
		/* 26892 */ 399, 399, 399, 399, 399, 1779, 399, 0, 0, 0, 0, 1052, 0, 0, 0, 0, 0, 0, 0, 0, 0, 827, 377, 377, 377,
		/* 26917 */ 377, 377, 377, 377, 377, 841, 377, 377, 377, 377, 1080, 377, 377, 377, 377, 377, 377, 377, 377, 377,
		/* 26937 */ 377, 377, 1447, 377, 377, 377, 377, 399, 1140, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399,
		/* 26957 */ 399, 399, 399, 1669, 1670, 399, 0, 1508, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53248, 0, 0, 249, 0,
		/* 26984 */ 0, 0, 0, 249, 0, 249, 0, 0, 22528, 24576, 249, 0, 0, 0, 0, 0, 977, 978, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 27012 */ 315, 315, 1627, 315, 315, 315, 297, 20480, 297, 297, 297, 297, 297, 0, 297, 331, 331, 331, 331, 331,
		/* 27032 */ 331, 0, 0, 0, 0, 992, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 983, 0, 985, 0, 0, 0, 0, 331, 0, 0, 297, 297,
		/* 27061 */ 297, 297, 297, 297, 297, 297, 297, 297, 297, 331, 297, 297, 395, 395, 395, 395, 395, 418, 395, 395, 395,
		/* 27082 */ 395, 395, 395, 395, 395, 395, 395, 418, 418, 418, 418, 418, 395, 395, 418, 26824, 26824, 2, 2, 3, 47108,
		/* 27103 */ 5, 6, 0, 1469, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1474, 399,
		/* 27124 */ 1476, 399, 399, 399, 399, 399, 399, 1483, 399, 399, 399, 1485, 399, 399, 399, 399, 399, 0, 0, 0, 0, 0,
		/* 27146 */ 0, 0, 0, 0, 0, 1819, 377, 377, 419, 396, 396, 396, 396, 396, 396, 396, 396, 396, 396, 419, 419, 419,
		/* 27168 */ 419, 419, 396, 396, 419, 26824, 26824, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 558, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 27195 */ 558, 0, 0, 0, 0, 0, 0, 0, 0, 580, 0, 0, 0, 0, 0, 0, 377, 377, 377, 377, 599, 377, 377, 377, 377, 0,
		/* 27221 */ 1302, 0, 0, 1113, 0, 1308, 0, 0, 399, 399, 399, 399, 377, 377, 399, 26824, 27048, 2, 2, 3, 47108, 5, 6,
		/* 27244 */ 0, 399, 399, 399, 656, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 399, 1487, 399, 399, 0, 0,
		/* 27266 */ 0, 0, 0, 1494, 0, 377, 377, 377, 377, 1301, 0, 0, 0, 1113, 1307, 0, 0, 0, 399, 399, 399, 399, 399, 927,
		/* 27290 */ 399, 399, 399, 399, 399, 399, 399, 399, 399, 937, 0, 437, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 27316 */ 108544, 0, 315, 315, 315, 315, 1041, 315, 315, 315, 315, 315, 315, 315, 0, 0, 0, 0, 377, 377, 377, 377,
		/* 27338 */ 377, 377, 0, 377, 1259, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1104, 377,
		/* 27359 */ 377, 1272, 1273, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 377, 1657, 399, 377,
		/* 27379 */ 377, 1451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 399, 399, 399, 488, 0, 0, 0, 26824, 2, 6, 0, 0, 0, 0, 0,
		/* 27408 */ 0, 0, 0, 315, 315, 315, 315, 315, 1702, 315, 0, 0, 1593, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		/* 27435 */ 704512, 0, 0, 1617, 0, 0, 0, 0, 0, 0, 0, 0, 315, 315, 315, 315, 315, 315, 315, 0, 0, 20480, 0, 0, 0, 0,
		/* 27461 */ 0, 307, 0, 315, 315, 315, 315, 315, 315, 0, 0, 0, 377, 377, 377, 377, 377, 377, 377, 377, 1640, 377,
		/* 27483 */ 377, 0, 415744, 0, 0, 415744, 0, 415744, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 315, 1790, 377, 377, 377, 377, 0,
		/* 27508 */ 0, 0, 415744, 0, 0, 415744, 415744, 0, 0, 0, 0, 0, 0, 415744, 0, 0, 0, 0, 415744, 415744, 0, 415744, 0,
		/* 27531 */ 0, 0, 0, 0, 0, 0, 1224, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 915456, 0, 0, 0, 0, 0, 415744, 0, 0, 415744, 0, 0,
		/* 27560 */ 0, 415744, 0, 0, 0, 416031, 416031, 415744, 0, 0, 0, 0, 0, 993, 0, 0, 0, 0, 998, 0, 0, 0, 0, 0, 0, 0,
		/* 27586 */ 489, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1359, 0, 0, 1362, 0, 0, 0, 416031, 0, 0, 0, 0, 415744, 0, 0, 0,
		/* 27613 */ 415744, 0, 415744, 0, 415744, 0, 0, 0, 415744, 415744, 0, 0, 0, 0, 0, 415744, 415744, 0, 0, 0, 0, 0, 0,
		/* 27636 */ 0, 0, 0, 0, 0, 0, 728, 251, 251, 729, 0, 415744, 0, 0, 415744, 415744, 0, 0, 0, 2, 1083392, 3, 47108, 5,
		/* 27660 */ 6, 0, 0, 0, 0, 1004, 0, 0, 0, 0, 0, 0, 0, 0, 1008, 0, 0, 0, 0, 0, 274, 0, 0, 0, 0, 0, 0, 0, 238, 0, 0,
		/* 27691 */ 0, 0, 0, 22528, 24576, 0, 0, 0, 557056, 557056, 557056, 0, 0, 0, 0, 0, 1083392, 6, 0, 0, 0, 0, 0, 0, 0,
		/* 27716 */ 0, 1514, 0, 0, 0, 0, 0, 0, 1519, 557056, 557056, 557056, 557056, 557056, 907264, 557056, 557056, 557056,
		/* 27734 */ 557056, 557056, 557056, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 557056, 557056, 557056, 557056, 557056,
		/* 27755 */ 0, 0, 1083392, 0, 0, 0, 0, 0, 0, 0, 0, 0, 243, 244, 22528, 24576, 0, 245, 245, 0, 419840, 0, 419840, 0,
		/* 27779 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 740, 0, 0, 0, 0, 20480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 420189,
		/* 27810 */ 420189, 420189, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 420189, 420189, 0, 420189, 420189, 420189, 420189,
		/* 27828 */ 420189, 420189, 420189, 420189, 420189, 420189, 420189, 420189, 420189, 0, 0, 0, 0, 0, 0, 288, 0, 0, 0,
		/* 27847 */ 0, 0, 0, 424250, 0, 0, 0, 0, 0, 0, 0, 0, 261, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22528, 24576, 0, 0, 0, 0, 0,
		/* 27877 */ 423936, 314, 424250, 424250, 424250, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 1013, 0, 0, 0, 0, 0, 1020,
		/* 27901 */ 0, 0, 0, 0, 0, 0, 0, 768, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 827, 377, 377, 377, 377, 377, 377, 377, 377,
		/* 27928 */ 377, 557056, 557056, 557056, 557056, 557056, 907264, 557056, 557056, 557056, 557056, 557056, 557056,
		/* 27941 */ 885, 0, 0, 888, 53248, 53248, 0, 53248, 53248, 53248, 53248, 53248, 53248, 53248, 53248, 53248, 53248,
		/* 27958 */ 53248, 53248, 53248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53248, 53248, 53248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 446,
		/* 27984 */ 0, 0, 0, 0, 0, 796672, 0, 0, 0, 843776, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1374, 0, 0, 0, 1377,
	];

	private static EXPECTED: number[] = [
		/*    0 */ 427, 432, 431, 436, 440, 444, 448, 1516, 560, 452, 459, 632, 465, 471, 850, 480, 454, 486, 582, 583, 542,
		/*   21 */ 499, 1515, 1244, 461, 492, 521, 496, 542, 467, 1515, 474, 455, 520, 503, 542, 507, 1515, 852, 519, 525,
		/*   41 */ 542, 529, 698, 535, 540, 548, 1265, 554, 544, 703, 536, 558, 564, 568, 572, 576, 580, 587, 591, 595, 599,
		/*   62 */ 605, 603, 609, 613, 617, 621, 1084, 1515, 666, 946, 1515, 1515, 625, 1515, 488, 1515, 1515, 1515, 1515,
		/*   81 */ 1515, 476, 1515, 1237, 1515, 1515, 1515, 1515, 1515, 1515, 1515, 1262, 1515, 1515, 1515, 1515, 1515,
		/*   98 */ 1515, 1264, 1515, 1515, 1515, 1515, 909, 1515, 1515, 1515, 1260, 1515, 1515, 924, 1515, 1515, 1515, 1515,
		/*  116 */ 1515, 1515, 1515, 1515, 1515, 1515, 1435, 631, 636, 800, 643, 647, 651, 655, 482, 760, 1119, 659, 513,
		/*  135 */ 663, 675, 672, 681, 687, 691, 1291, 697, 958, 702, 1533, 943, 896, 707, 683, 1515, 737, 1285, 712, 716,
		/*  155 */ 720, 726, 725, 668, 1418, 510, 730, 721, 736, 741, 1549, 747, 1429, 1432, 1366, 753, 757, 764, 768, 1166,
		/*  175 */ 772, 776, 780, 791, 784, 993, 788, 1515, 1515, 804, 810, 817, 821, 825, 829, 835, 879, 839, 639, 843,
		/*  195 */ 1149, 806, 1359, 1095, 847, 1130, 856, 1515, 866, 1515, 876, 883, 1098, 887, 893, 1538, 900, 1515, 906,
		/*  214 */ 917, 921, 1198, 1515, 930, 902, 936, 940, 952, 1515, 956, 962, 966, 970, 550, 627, 979, 1201, 983, 987,
		/*  234 */ 997, 1337, 1001, 1510, 1005, 1009, 1013, 1017, 1021, 1025, 1515, 1032, 1036, 1040, 1044, 1048, 1052,
		/*  251 */ 1057, 1475, 1063, 1067, 1071, 693, 1286, 1075, 1477, 1112, 1491, 1079, 1083, 743, 1515, 1472, 1442, 1088,
		/*  269 */ 1092, 749, 1515, 872, 1515, 1102, 1109, 1484, 531, 1515, 862, 708, 1498, 1116, 1123, 1515, 1127, 1449,
		/*  287 */ 1134, 1138, 1191, 926, 813, 990, 1526, 1105, 1142, 1146, 1156, 1160, 1170, 1028, 1163, 1174, 1515, 1515,
		/*  305 */ 1515, 932, 515, 1178, 1182, 1186, 1190, 869, 1257, 797, 1195, 1207, 1211, 1515, 1215, 1219, 1228, 1232,
		/*  323 */ 1236, 1241, 1053, 1248, 1254, 1269, 1222, 1276, 1203, 1284, 889, 1290, 1295, 1299, 1303, 830, 1307, 889,
		/*  341 */ 1313, 794, 1317, 1321, 1325, 831, 1250, 1331, 1272, 1335, 1341, 1345, 1224, 1349, 1353, 1363, 1370, 1356,
		/*  359 */ 1374, 1381, 1385, 1377, 1389, 1393, 1397, 1515, 677, 1401, 1405, 1409, 1413, 1417, 1309, 1422, 1507,
		/*  376 */ 1426, 1515, 1280, 1515, 1439, 1460, 1515, 1446, 1515, 1278, 1515, 1453, 1327, 1459, 1464, 1469, 1515,
		/*  393 */ 1481, 1515, 1488, 1152, 973, 732, 1515, 1495, 1515, 1488, 1504, 975, 1514, 1481, 1465, 1520, 1530, 1515,
		/*  411 */ 1537, 1542, 1500, 911, 859, 1546, 1455, 913, 948, 1523, 1515, 1515, 1515, 1515, 1515, 1059, 1553, 1647,
		/*  429 */ 1561, 1568, 1565, 1568, 1568, 1568, 1583, 1577, 1567, 1575, 1572, 1581, 1587, 1594, 1597, 1591, 1601,
		/*  446 */ 1605, 1609, 1613, 1617, 1621, 1625, 2399, 2876, 2876, 1639, 1733, 1733, 1752, 1733, 1645, 2876, 2876,
		/*  463 */ 1732, 1733, 1699, 1759, 1703, 1703, 1662, 1798, 1651, 1657, 1626, 2876, 1681, 2876, 2876, 1996, 2876,
		/*  480 */ 2125, 2365, 2876, 2876, 1943, 2996, 1733, 1752, 2876, 2876, 1948, 2876, 1733, 1641, 2876, 1672, 1699,
		/*  497 */ 1699, 1677, 1703, 1703, 1705, 1662, 1699, 1699, 1709, 1713, 1703, 1703, 1798, 2876, 1684, 2025, 2876,
		/*  514 */ 1719, 2876, 2876, 2437, 2763, 1751, 1698, 1699, 1699, 1699, 1699, 1699, 1699, 1723, 1727, 1703, 1765,
		/*  531 */ 2876, 2876, 2028, 2699, 1640, 1672, 1699, 1699, 1703, 1699, 1738, 1703, 1703, 1703, 1703, 1704, 2876,
		/*  548 */ 1703, 1703, 2876, 2876, 2083, 2425, 1742, 1699, 1699, 1700, 1703, 1716, 2876, 2876, 2151, 2846, 1749,
		/*  565 */ 1699, 1699, 1702, 1703, 1717, 2876, 1757, 1673, 1703, 1764, 2498, 1673, 1703, 1765, 1672, 1701, 1716,
		/*  582 */ 2604, 1699, 1699, 1699, 1668, 1703, 1718, 1672, 1745, 1717, 2500, 1763, 2500, 1763, 1744, 1770, 1773,
		/*  599 */ 2143, 2279, 1777, 1781, 1785, 1789, 1662, 1662, 1662, 1664, 1808, 1796, 1660, 1806, 1812, 1792, 1816,
		/*  616 */ 1820, 1824, 1827, 1831, 1835, 1839, 1753, 2669, 3185, 1857, 1865, 2876, 2876, 2388, 2369, 1874, 2876,
		/*  633 */ 2876, 2876, 1699, 2059, 1980, 1998, 2876, 1753, 2220, 3199, 1901, 1905, 1909, 1913, 1916, 1920, 1921,
		/*  650 */ 1925, 1929, 2093, 1936, 2723, 1875, 2876, 2876, 2819, 1965, 2324, 1766, 1972, 2752, 1977, 1984, 2876,
		/*  667 */ 1848, 2876, 2876, 2216, 2876, 2580, 2005, 2754, 2876, 1849, 2876, 2876, 2513, 3044, 1988, 1994, 2876,
		/*  684 */ 2876, 2518, 2044, 2588, 2004, 2876, 2595, 2009, 2017, 2876, 2876, 2612, 2876, 2040, 2876, 2876, 2876,
		/*  701 */ 1731, 1875, 2876, 2876, 2876, 1734, 2058, 2876, 2876, 2876, 1968, 2579, 2876, 2876, 1842, 2048, 2876,
		/*  718 */ 2221, 1878, 2055, 2876, 2876, 2876, 2100, 2057, 2876, 2876, 2876, 2101, 2099, 2012, 2876, 2876, 2650,
		/*  735 */ 2292, 2013, 2876, 2876, 2876, 2244, 2430, 2064, 2876, 2876, 2654, 2658, 2621, 2080, 2876, 2876, 2673,
		/*  752 */ 2680, 2088, 2092, 2876, 2000, 2058, 2876, 1844, 2995, 1947, 1952, 1959, 2876, 2732, 2706, 2097, 2105,
		/*  769 */ 2876, 1999, 2106, 2110, 2114, 2876, 2113, 2876, 2911, 2876, 2470, 2468, 2876, 2994, 2469, 2667, 2140,
		/*  786 */ 2666, 2665, 2467, 2468, 2467, 2468, 2774, 2995, 2668, 3074, 2824, 2158, 2890, 2448, 2876, 1882, 1932,
		/*  803 */ 1889, 2299, 2123, 2876, 2876, 2733, 2241, 2149, 2129, 2134, 2876, 1938, 2876, 2076, 2147, 2155, 2164,
		/*  820 */ 1885, 2168, 2179, 2172, 2177, 2173, 2183, 2183, 2183, 2185, 2876, 2876, 2876, 2251, 2953, 2387, 2124,
		/*  837 */ 2876, 2357, 2196, 2201, 2207, 2213, 2225, 2900, 2026, 2229, 2263, 2270, 2277, 2876, 1990, 2876, 2876,
		/*  854 */ 1733, 1733, 2298, 2304, 2308, 2876, 2026, 2632, 2876, 2026, 2697, 1877, 2966, 2350, 2995, 2876, 2026,
		/*  871 */ 2759, 2876, 2027, 2686, 1877, 2387, 2124, 2294, 2191, 2878, 2876, 2733, 2878, 2876, 1897, 1556, 2876,
		/*  888 */ 3085, 2876, 2876, 2733, 2253, 2328, 2338, 2995, 2876, 2032, 2187, 2038, 2347, 2354, 2876, 2876, 2733,
		/*  905 */ 2392, 2361, 2876, 2369, 2876, 2050, 2876, 2876, 2400, 2876, 2865, 2875, 1626, 2374, 2257, 2385, 3008,
		/*  922 */ 2912, 2774, 2876, 2051, 2876, 2876, 2431, 2450, 2766, 2770, 2876, 2876, 2758, 2729, 3016, 2092, 2879,
		/*  939 */ 2374, 2257, 2398, 2404, 2876, 2130, 2024, 2876, 1853, 2876, 2876, 2286, 2876, 2777, 2947, 2420, 2773,
		/*  956 */ 2948, 2421, 2876, 2876, 2873, 1866, 2876, 3201, 3015, 2370, 2879, 2506, 2160, 2413, 2140, 1800, 2331,
		/*  973 */ 2876, 2137, 2751, 2876, 2876, 2649, 2878, 2915, 1894, 2435, 1802, 2150, 2876, 2441, 2876, 3154, 1895,
		/*  990 */ 2399, 2582, 2743, 2876, 2142, 2668, 2470, 2572, 2333, 2876, 2573, 1896, 3145, 2876, 3144, 3143, 2460,
		/* 1007 */ 3152, 2484, 2119, 2466, 2455, 2459, 2458, 2300, 2457, 1973, 2460, 2455, 2465, 2475, 2482, 2623, 2507,
		/* 1024 */ 2623, 2488, 2492, 2496, 2876, 2142, 2876, 2776, 2876, 3191, 2664, 2504, 2876, 3188, 2792, 2511, 2517,
		/* 1041 */ 2522, 2534, 2538, 2541, 2544, 2548, 2551, 2552, 2556, 2556, 2556, 2559, 2876, 2876, 2876, 2299, 2876,
		/* 1058 */ 3192, 2876, 2876, 2876, 3223, 2577, 1939, 3171, 2830, 2587, 2876, 2592, 2525, 2599, 2615, 2603, 2608,
		/* 1075 */ 2619, 2876, 2020, 2115, 2638, 2876, 2733, 2643, 2676, 2876, 2876, 2876, 2407, 2932, 2570, 2876, 3134,
		/* 1092 */ 2681, 2840, 1892, 2876, 2203, 2197, 2257, 2312, 2318, 2322, 2906, 1877, 2019, 2466, 2931, 2876, 1691,
		/* 1109 */ 3211, 2876, 2932, 3141, 2876, 2867, 2646, 2932, 2876, 2583, 2876, 2259, 2876, 2192, 2710, 2876, 2876,
		/* 1126 */ 2716, 2876, 2913, 2717, 2876, 2283, 2876, 2292, 3071, 2930, 2876, 2075, 1689, 2876, 1557, 2721, 2876,
		/* 1143 */ 2742, 2876, 2582, 2743, 2430, 2704, 2876, 2334, 2235, 2876, 1955, 1626, 3177, 2749, 2852, 2876, 2851,
		/* 1160 */ 2728, 3173, 1842, 2775, 2876, 2774, 2876, 2394, 2876, 2705, 2876, 2777, 2098, 2139, 2777, 2876, 2141,
		/* 1177 */ 2776, 2782, 2712, 2790, 2796, 2799, 2811, 2805, 2808, 2801, 2815, 2815, 2815, 2818, 2876, 2876, 2876,
		/* 1194 */ 2416, 2828, 2876, 2314, 2026, 2768, 2772, 2876, 2084, 2876, 2876, 2876, 3162, 2876, 2834, 2838, 2941,
		/* 1211 */ 2844, 2876, 2231, 2850, 2856, 2876, 2342, 2920, 2861, 2876, 2159, 3022, 2528, 2876, 2876, 2981, 2876,
		/* 1228 */ 1653, 2876, 2876, 2561, 2341, 2876, 3131, 2865, 2871, 2876, 2876, 2876, 2461, 2237, 2883, 2888, 2876,
		/* 1245 */ 2471, 3219, 2138, 2894, 2904, 2876, 2876, 2957, 2343, 2876, 3206, 2466, 3073, 2823, 2992, 2876, 2427,
		/* 1262 */ 2876, 2876, 2429, 2876, 2876, 2876, 1639, 2823, 2910, 2876, 2159, 2876, 2876, 2252, 2563, 2293, 2876,
		/* 1279 */ 2876, 3062, 2876, 2876, 3054, 2884, 1877, 2876, 2876, 2876, 2034, 2897, 2876, 2876, 2876, 2682, 2876,
		/* 1296 */ 2857, 2876, 2919, 2972, 2158, 2376, 2924, 2876, 2745, 2946, 2929, 2936, 2940, 2876, 2876, 3138, 2878,
		/* 1313 */ 2938, 2876, 2876, 2288, 2376, 2925, 2744, 2945, 2149, 2876, 2876, 2250, 2952, 1877, 2876, 2876, 3159,
		/* 1330 */ 2059, 2824, 1633, 2378, 1694, 2963, 2876, 2876, 2299, 2914, 1894, 3164, 2876, 2285, 2342, 2970, 2778,
		/* 1347 */ 2976, 1961, 2876, 2985, 2876, 2287, 2989, 3178, 2977, 2380, 2381, 3013, 2876, 2530, 2248, 2669, 2876,
		/* 1364 */ 3000, 1877, 2876, 2581, 2705, 1687, 3001, 2876, 2786, 3005, 3012, 2477, 2117, 2066, 2785, 2118, 2069,
		/* 1381 */ 3014, 3034, 3020, 3212, 3028, 3027, 2363, 2067, 2068, 2363, 3026, 2067, 1635, 3032, 1635, 3032, 3081,
		/* 1398 */ 3083, 3038, 3050, 3059, 3046, 3041, 3068, 3078, 3089, 3093, 3097, 3101, 3105, 3112, 3109, 3115, 3120,
		/* 1415 */ 3118, 3124, 3128, 2876, 2876, 2876, 2732, 2059, 2116, 2876, 3149, 2649, 2876, 2209, 2876, 2634, 2091,
		/* 1432 */ 2876, 1866, 1876, 2876, 1870, 2876, 2722, 1954, 2669, 2026, 1634, 2730, 2876, 1752, 2650, 2876, 2265,
		/* 1449 */ 2876, 2639, 2092, 2451, 2876, 3053, 2876, 2876, 3216, 2876, 2116, 2876, 2876, 2138, 2873, 2873, 2876,
		/* 1466 */ 2876, 2876, 2866, 2959, 2733, 2876, 2876, 2662, 2876, 2567, 1634, 2579, 2876, 1752, 2932, 2876, 3168,
		/* 1483 */ 2876, 2876, 2690, 2026, 1693, 2734, 3064, 2876, 2876, 2693, 2273, 2627, 2876, 3182, 2876, 2876, 2703,
		/* 1500 */ 3071, 2876, 2875, 2876, 1861, 2060, 2117, 2137, 2873, 2478, 2876, 2630, 3155, 2445, 2266, 2876, 2876,
		/* 1517 */ 2876, 2876, 1631, 3055, 2876, 1860, 2285, 2876, 2874, 2876, 2727, 2876, 2738, 2117, 2876, 2753, 2876,
		/* 1534 */ 2731, 2876, 2877, 2410, 2876, 2876, 2876, 2947, 2026, 3196, 2876, 3205, 3210, 2872, 2876, 2876, 2732,
		/* 1551 */ 1627, 2073, 3588, 3391, 3475, 3529, 3532, 3532, 3543, 3517, 3515, 3233, 3239, 3252, 3251, 3253, 3254,
		/* 1568 */ 3746, 3746, 3746, 3746, 3254, 3795, 3259, 3746, 3257, 3746, 3746, 3235, 3252, 3665, 3746, 3746, 3746,
		/* 1585 */ 3374, 3234, 3236, 3237, 3261, 3266, 3272, 3274, 3275, 3273, 3262, 3267, 3268, 3268, 3270, 3274, 3277,
		/* 1602 */ 3263, 3279, 3290, 3281, 3287, 3283, 3282, 3289, 3284, 3285, 3292, 3285, 3285, 3294, 3296, 3588, 3728,
		/* 1619 */ 3653, 3302, 3532, 3744, 3532, 3747, 3760, 3546, 3532, 3532, 3532, 3225, 3532, 3699, 3375, 3532, 3532,
		/* 1636 */ 3543, 3532, 3516, 3532, 3659, 3659, 3659, 3532, 3532, 3659, 3305, 3532, 3532, 3224, 3240, 3314, 3336,
		/* 1653 */ 3532, 3732, 3598, 3532, 3741, 3532, 3226, 3761, 3344, 3761, 3761, 3761, 3761, 3378, 3762, 3692, 3692,
		/* 1670 */ 3322, 3333, 3532, 3692, 3692, 3692, 3690, 3692, 3707, 3322, 3334, 3532, 3655, 3372, 3532, 3225, 3532,
		/* 1687 */ 3402, 3515, 3532, 3532, 3517, 3532, 3517, 3532, 3532, 3532, 3721, 3696, 3692, 3692, 3692, 3692, 3314,
		/* 1704 */ 3314, 3314, 3314, 3315, 3316, 3692, 3692, 3708, 3708, 3338, 3334, 3335, 3314, 3314, 3314, 3532, 3532,
		/* 1721 */ 3532, 3362, 3692, 3707, 3708, 3708, 3338, 3334, 3334, 3335, 3532, 3662, 3659, 3659, 3659, 3659, 3734,
		/* 1738 */ 3692, 3707, 3338, 3335, 3659, 3532, 3696, 3692, 3690, 3314, 3314, 3532, 3659, 3659, 3734, 3532, 3532,
		/* 1755 */ 3532, 3298, 3532, 3660, 3692, 3692, 3308, 3312, 3314, 3314, 3315, 3532, 3532, 3532, 3361, 3315, 3696,
		/* 1772 */ 3690, 3691, 3691, 3691, 3315, 3226, 3227, 3343, 3762, 3347, 3422, 3414, 3358, 3359, 3761, 3394, 3399,
		/* 1789 */ 3396, 3413, 3415, 3761, 3400, 3426, 3428, 3398, 3412, 3761, 3761, 3532, 3532, 3226, 3717, 3381, 3881,
		/* 1806 */ 3418, 3535, 3761, 3761, 3762, 3761, 3420, 3421, 3424, 3416, 3429, 3431, 3433, 3433, 3434, 3436, 3438,
		/* 1823 */ 3454, 3442, 3441, 3440, 3453, 3532, 3226, 3343, 3348, 3762, 3444, 3345, 3446, 3448, 3451, 3450, 3451,
		/* 1840 */ 3452, 3456, 3532, 3225, 3532, 3532, 3390, 3600, 3458, 3532, 3532, 3532, 3373, 3532, 3662, 3464, 3591,
		/* 1857 */ 3532, 3905, 3573, 3532, 3246, 3532, 3546, 3532, 3298, 3532, 3532, 3532, 3386, 3471, 3532, 3540, 3300,
		/* 1874 */ 3329, 3888, 3528, 3591, 3532, 3532, 3532, 3403, 3589, 3694, 3479, 3532, 3247, 3248, 3641, 3515, 3373,
		/* 1891 */ 3482, 3532, 3318, 3532, 3532, 3751, 3532, 3532, 3532, 3626, 3576, 3577, 3480, 3484, 3487, 3487, 3488,
		/* 1908 */ 3489, 3485, 3491, 3492, 3494, 3496, 3500, 3499, 3499, 3498, 3499, 3499, 3502, 3503, 3503, 3503, 3503,
		/* 1925 */ 3504, 3505, 3505, 3507, 3505, 3509, 3511, 3532, 3325, 3747, 3255, 3246, 3715, 3532, 3532, 3243, 3225,
		/* 1942 */ 3532, 3532, 3695, 3532, 3326, 3480, 3532, 3532, 3532, 3467, 3744, 3520, 3532, 3532, 3243, 3246, 3532,
		/* 1959 */ 3331, 3566, 3532, 3532, 3297, 3532, 3555, 3331, 3559, 3532, 3327, 3828, 3591, 3363, 3532, 3532, 3532,
		/* 1976 */ 3472, 3516, 3750, 3532, 3316, 3373, 3316, 3664, 3386, 3653, 3523, 3303, 3744, 3575, 3532, 3532, 3327,
		/* 1993 */ 3375, 3669, 3899, 3532, 3532, 3330, 3532, 3532, 3532, 3404, 3831, 3324, 3532, 3532, 3532, 3529, 3406,
		/* 2010 */ 3532, 3705, 3697, 3831, 3570, 3525, 3532, 3898, 3561, 3532, 3532, 3371, 3476, 3743, 3405, 3515, 3532,
		/* 2027 */ 3532, 3532, 3535, 3245, 3715, 3532, 3936, 3532, 3532, 3379, 3700, 3657, 3660, 3698, 3569, 3562, 3532,
		/* 2044 */ 3697, 3898, 3570, 3525, 3368, 3882, 3532, 3532, 3512, 3532, 3532, 3697, 3887, 3552, 3524, 3532, 3532,
		/* 2061 */ 3532, 3536, 3532, 3600, 3303, 3532, 3532, 3516, 3676, 3661, 3532, 3532, 3744, 3527, 3532, 3532, 3516,
		/* 2078 */ 3750, 3516, 3404, 3831, 3524, 3532, 3349, 3683, 3727, 3552, 3743, 3657, 3698, 3527, 3525, 3532, 3532,
		/* 2095 */ 3532, 3540, 3515, 3532, 3526, 3532, 3532, 3657, 3697, 3887, 3404, 3831, 3515, 3532, 3532, 3514, 3532,
		/* 2112 */ 3532, 3579, 3581, 3532, 3532, 3532, 3542, 3532, 3532, 3516, 3588, 3594, 3596, 3532, 3532, 3532, 3547,
		/* 2129 */ 3512, 3744, 3532, 3532, 3662, 3603, 3745, 3605, 3532, 3372, 3532, 3532, 3532, 3309, 3532, 3532, 3532,
		/* 2146 */ 3340, 3243, 3546, 3532, 3389, 3532, 3532, 3532, 3548, 3607, 3512, 3611, 3532, 3375, 3532, 3532, 3532,
		/* 2163 */ 3750, 3560, 3532, 3532, 3893, 3249, 3249, 3613, 3618, 3620, 3618, 3618, 3618, 3618, 3622, 3622, 3618,
		/* 2180 */ 3618, 3615, 3617, 3624, 3624, 3624, 3624, 3532, 3532, 3530, 3568, 3629, 3532, 3532, 3532, 3550, 3626,
		/* 2197 */ 3529, 3532, 3535, 3543, 3376, 3392, 3532, 3532, 3533, 3626, 3535, 3631, 3532, 3532, 3533, 3656, 3535,
		/* 2214 */ 3633, 3627, 3532, 3386, 3523, 3303, 3635, 3532, 3532, 3532, 3551, 3640, 3535, 3633, 3628, 3648, 3650,
		/* 2231 */ 3532, 3532, 3533, 3862, 3649, 3628, 3532, 3532, 3533, 3875, 3229, 3595, 3747, 3532, 3386, 3888, 3528,
		/* 2248 */ 3242, 3525, 3532, 3532, 3533, 3884, 3720, 3722, 3664, 3652, 3591, 3532, 3532, 3533, 3936, 3532, 3668,
		/* 2265 */ 3532, 3532, 3534, 3532, 3532, 3532, 3667, 3676, 3596, 3816, 3532, 3364, 3328, 3523, 3529, 3532, 3528,
		/* 2282 */ 3535, 3886, 3600, 3532, 3532, 3535, 3532, 3532, 3532, 3866, 3533, 3532, 3532, 3532, 3560, 3513, 3672,
		/* 2299 */ 3532, 3532, 3532, 3583, 3543, 3532, 3674, 3380, 3685, 3374, 3386, 3388, 3528, 3751, 3734, 3532, 3532,
		/* 2316 */ 3563, 3532, 3532, 3712, 3715, 3660, 3678, 3557, 3532, 3532, 3565, 3572, 3535, 3349, 3718, 3381, 3738,
		/* 2333 */ 3552, 3532, 3532, 3532, 3647, 3383, 3385, 3323, 3889, 3532, 3532, 3532, 3752, 3744, 3717, 3380, 3382,
		/* 2350 */ 3384, 3700, 3387, 3570, 3386, 3937, 3609, 3532, 3389, 3654, 3241, 3583, 3594, 3661, 3532, 3542, 3532,
		/* 2367 */ 3371, 3585, 3890, 3225, 3525, 3532, 3532, 3532, 3681, 3532, 3543, 3349, 3532, 3732, 3532, 3532, 3532,
		/* 2384 */ 3885, 3532, 3935, 3532, 3532, 3583, 3594, 3532, 3229, 3595, 3532, 3532, 3600, 3529, 3532, 3750, 3532,
		/* 2401 */ 3532, 3532, 3228, 3712, 3689, 3679, 3532, 3401, 3231, 3532, 3228, 3750, 3532, 3243, 3725, 3532, 3245,
		/* 2418 */ 3830, 3354, 3717, 3381, 3686, 3323, 3609, 3323, 3389, 3532, 3532, 3654, 3532, 3532, 3532, 3390, 3532,
		/* 2435 */ 3532, 3713, 3532, 3532, 3655, 3751, 3583, 3532, 3890, 3670, 3748, 3587, 3864, 3532, 3407, 3532, 3532,
		/* 2452 */ 3789, 3743, 3532, 3583, 3543, 3392, 3532, 3472, 3864, 3532, 3532, 3532, 3653, 3740, 3743, 3532, 3532,
		/* 2469 */ 3532, 3655, 3532, 3532, 3532, 3544, 3516, 3864, 3532, 3532, 3696, 3532, 3532, 3533, 3702, 3591, 3516,
		/* 2486 */ 3588, 3743, 3532, 3702, 3591, 3764, 3532, 3764, 3532, 3392, 3246, 3246, 3532, 3532, 3696, 3692, 3692,
		/* 2503 */ 3690, 3532, 3729, 3532, 3532, 3702, 3591, 3516, 3892, 3591, 3532, 3532, 3709, 3299, 3701, 3532, 3532,
		/* 2520 */ 3532, 3658, 3226, 3590, 3607, 3532, 3469, 3644, 3532, 3473, 3532, 3532, 3890, 3744, 3226, 3369, 3605,
		/* 2537 */ 3591, 3512, 3390, 3769, 3768, 3771, 3773, 3774, 3777, 3779, 3781, 3783, 3774, 3774, 3775, 3774, 3774,
		/* 2554 */ 3774, 3785, 3786, 3786, 3786, 3786, 3787, 3532, 3532, 3730, 3473, 3389, 3532, 3655, 3789, 3891, 3532,
		/* 2571 */ 3515, 3532, 3532, 3749, 3737, 3552, 3532, 3734, 3532, 3532, 3730, 3532, 3532, 3532, 3516, 3518, 3703,
		/* 2588 */ 3532, 3532, 3532, 3662, 3792, 3794, 3797, 3532, 3531, 3532, 3567, 3645, 3532, 3533, 3799, 3310, 3532,
		/* 2605 */ 3532, 3532, 3692, 3532, 3806, 3808, 3810, 3533, 3807, 3809, 3704, 3532, 3532, 3804, 3553, 3591, 3532,
		/* 2622 */ 3532, 3743, 3532, 3516, 3743, 3638, 3818, 3531, 3532, 3533, 3539, 3532, 3532, 3532, 3657, 3698, 3821,
		/* 2639 */ 3532, 3532, 3532, 3700, 3228, 3755, 3838, 3819, 3801, 3601, 3532, 3533, 3372, 3532, 3532, 3753, 3541,
		/* 2656 */ 3756, 3839, 3693, 3365, 3802, 3601, 3298, 3700, 3465, 3532, 3532, 3532, 3656, 3532, 3532, 3532, 3546,
		/* 2673 */ 3754, 3517, 3676, 3317, 3366, 3523, 3531, 3460, 3341, 3532, 3532, 3532, 3706, 3715, 3663, 3365, 3523,
		/* 2690 */ 3535, 3517, 3341, 3532, 3533, 3814, 3904, 3245, 3715, 3353, 3523, 3591, 3532, 3371, 3742, 3532, 3532,
		/* 2707 */ 3744, 3532, 3402, 3516, 3750, 3532, 3532, 3757, 3878, 3543, 3517, 3353, 3591, 3532, 3353, 3532, 3532,
		/* 2724 */ 3532, 3728, 3329, 3517, 3354, 3532, 3532, 3532, 3731, 3532, 3532, 3532, 3533, 3228, 3390, 3532, 3532,
		/* 2741 */ 3521, 3516, 3833, 3532, 3532, 3532, 3730, 3352, 3751, 3751, 3532, 3532, 3758, 3532, 3532, 3532, 3480,
		/* 2758 */ 3535, 3370, 3743, 3532, 3532, 3532, 3835, 3877, 3532, 3535, 3349, 3683, 3382, 3686, 3323, 3609, 3532,
		/* 2775 */ 3532, 3532, 3599, 3532, 3532, 3532, 3545, 3532, 3877, 3532, 3661, 3532, 3661, 3532, 3543, 3758, 3837,
		/* 2792 */ 3532, 3532, 3766, 3887, 3759, 3841, 3355, 3356, 3843, 3846, 3846, 3851, 3853, 3848, 3846, 3846, 3849,
		/* 2809 */ 3846, 3846, 3846, 3409, 3845, 3410, 3853, 3853, 3853, 3853, 3532, 3532, 3532, 3747, 3367, 3525, 3532,
		/* 2826 */ 3661, 3895, 3730, 3408, 3532, 3532, 3792, 3800, 3461, 3532, 3532, 3857, 3462, 3859, 3532, 3532, 3823,
		/* 2843 */ 3826, 3867, 3869, 3532, 3532, 3824, 3532, 3868, 3532, 3532, 3532, 3751, 3354, 3532, 3866, 3871, 3532,
		/* 2860 */ 3532, 3758, 3532, 3599, 3529, 3536, 3532, 3532, 3532, 3753, 3756, 3873, 3532, 3532, 3532, 3757, 3532,
		/* 2877 */ 3532, 3532, 3532, 3226, 3532, 3532, 3721, 3880, 3597, 3475, 3570, 3938, 3591, 3532, 3532, 3855, 3532,
		/* 2894 */ 3876, 3722, 3664, 3474, 3790, 3341, 3532, 3535, 3536, 3643, 3522, 3939, 3532, 3532, 3886, 3828, 3757,
		/* 2911 */ 3532, 3679, 3532, 3532, 3532, 3543, 3392, 3532, 3752, 3468, 3670, 3532, 3696, 3532, 3732, 3729, 3532,
		/* 2928 */ 3532, 3560, 3532, 3532, 3532, 3812, 3532, 3532, 3722, 3664, 3700, 3475, 3306, 3532, 3532, 3532, 3861,
		/* 2945 */ 3352, 3687, 3532, 3532, 3532, 3760, 3717, 3720, 3722, 3700, 3608, 3591, 3866, 3656, 3532, 3532, 3931,
		/* 2962 */ 3532, 3887, 3591, 3532, 3532, 3535, 3675, 3684, 3744, 3525, 3696, 3758, 3679, 3532, 3230, 3532, 3297,
		/* 2979 */ 3532, 3532, 3533, 3885, 3722, 3591, 3532, 3901, 3351, 3723, 3750, 3525, 3661, 3757, 3532, 3599, 3529,
		/* 2996 */ 3532, 3532, 3532, 3459, 3532, 3748, 3351, 3660, 3591, 3546, 3532, 3297, 3532, 3535, 3713, 3660, 3885,
		/* 3013 */ 3733, 3264, 3532, 3532, 3532, 3890, 3225, 3532, 3696, 3532, 3543, 3360, 3532, 3532, 3710, 3660, 3532,
		/* 3030 */ 3532, 3532, 3676, 3532, 3516, 3676, 3264, 3532, 3298, 3719, 3719, 3719, 3532, 3243, 3298, 3298, 3532,
		/* 3047 */ 3299, 3299, 3226, 3719, 3532, 3532, 3532, 3537, 3584, 3750, 3532, 3532, 3299, 3532, 3532, 3532, 3538,
		/* 3064 */ 3586, 3532, 3532, 3532, 3711, 3732, 3735, 3532, 3543, 3532, 3532, 3751, 3534, 3367, 3719, 3543, 3532,
		/* 3081 */ 3532, 3543, 3532, 3710, 3532, 3298, 3309, 3532, 3299, 3716, 3298, 3542, 3350, 3244, 3319, 3320, 3532,
		/* 3098 */ 3932, 3585, 3585, 3903, 3907, 3917, 3917, 3919, 3921, 3908, 3909, 3910, 3910, 3923, 3910, 3910, 3911,
		/* 3115 */ 3911, 3923, 3912, 3913, 3913, 3913, 3913, 3915, 3913, 3913, 3914, 3925, 3927, 3929, 3532, 3532, 3532,
		/* 3132 */ 3556, 3389, 3532, 3535, 3517, 3677, 3532, 3709, 3532, 3532, 3576, 3532, 3532, 3748, 3587, 3881, 3532,
		/* 3149 */ 3863, 3532, 3532, 3532, 3583, 3532, 3702, 3591, 3532, 3714, 3709, 3532, 3226, 3532, 3583, 3885, 3721,
		/* 3166 */ 3897, 3477, 3753, 3584, 3750, 3532, 3592, 3532, 3532, 3742, 3532, 3535, 3532, 3532, 3543, 3546, 3533,
		/* 3183 */ 3228, 3586, 3532, 3596, 3375, 3532, 3226, 3226, 3532, 3226, 3886, 3687, 3465, 3934, 3532, 3532, 3532,
		/* 3200 */ 3637, 3532, 3533, 3229, 3656, 3546, 3532, 3532, 3535, 3370, 3536, 3542, 3532, 3532, 3532, 3710, 3228,
		/* 3217 */ 3532, 3532, 3532, 3655, 3371, 3585, 3590, 1073872896, 131072, 0, 16, 2, 4, 32, 0, 24, 262146, 262160,
		/* 3235 */ 262160, 33816576, 278528, 278544, 268566528, 131072, 131072, 36, 0, 32, 8, 128, 0, 37, 1140850690,
		/* 3250 */ 1140883458, 537133056, 537133056, -2147221504, -2147221504, 262144, 0x80000000, 262174, -2147221504,
		/* 3259 */ 10560, -2147221504, 537149440, 278530, 772014080, 32768, 0x80000000, 537149440, 772014080, 168034304,
		/* 3269 */ 168034304, 235143168, 168034304, 235143168, 772014080, 772014080, 235143168, -1375469568, 772030464,
		/* 3278 */ -1375469568, 32800, 163872, 2392096, 294944, -2147188704, 294944, -2145091522, -2145091522, 294944,
		/* 3288 */ 537165856, 294944, 294944, 163840, -2111537090, -2145091522, 772046880, 772046880, -1910210498, 4096, 0,
		/* 3299 */ 1024, 0, 1280, 16777216, 1073741824, 0x80000000, 16384, 134217728, 0x80000000, 32800, 2097152, 0, 55296,
		/* 3312 */ 2129920, 2129952, 2129920, 2129920, 0, 65536, 786432, 0, 68608, 1056, 32, 2097152, 50331648, 0, 329728,
		/* 3327 */ 0, 524288, 2097152, 4194304, 0, 147456, 2129920, 2097184, 2097184, 2129920, 12, 32, 2097184, 1024,
		/* 3341 */ 268435456, 0x80000000, 1073774592, 16, 21, 53, 48, 80, 16, 32, 1024, 4096, 524288, 3145728, 0, 526336,
		/* 3357 */ 526336, 268435472, 16, 48, 0, 716800, 998244352, 0, 786432, 3145728, 4194304, 131072, 8388608, 2048,
		/* 3371 */ 8192, 64, 0, 262144, 524288, 0, 520, 131088, 16, 1024, 6144, 8192, 16384, 98304, 262144, 1048576,
		/* 3387 */ 2097152, 117440512, 134217728, 0, 1048576, 4194304, 0x80000000, 17, 24, 1048848, 1572880, 17, 304, 48,
		/* 3401 */ 16, 131072, 33554432, 12288, 131072, 58720256, 0, 1576960, 201326592, 201326592, 201326594, 48, 524304,
		/* 3414 */ 524304, 1048592, 1048592, 1114416, 17, 16, 165675008, 272, 272, 262160, 524560, 272, 84, 20, -165649452,
		/* 3429 */ -165649452, 372, -165649451, -165649451, -701430800, -701430800, -164559888, -700906512, -164535312,
		/* 3438 */ -700906508, -164535312, -164535308, -164273164, -164535308, -164535312, 21, 112, 85, 117, 140515349,
		/* 3449 */ 140539925, 140540605, 140540573, 140540573, -164535308, -164535308, -164273168, -164273164, -26141771,
		/* 3458 */ 163577856, 0, 3145728, 67108864, 0, 3674112, 100663296, 536870912, 0x80000000, 12582912, 0, 4194304,
		/* 3470 */ 786432, 4, 128, 4096, 1572864, 8388608, 16777216, 8388608, 0x80000000, 65536, 268435456, 16, 1076887552,
		/* 3483 */ 1076887552, 344064064, 327303168, -2097135583, 327303168, 327303168, 50348065, 50348065, -1020248031,
		/* 3492 */ 276971585, 276971585, 310526017, 310526019, 327303233, 277235779, 327303267, 327303265, 327303265,
		/* 3501 */ 277235779, 327303265, 998961152, 998961152, 998961706, 998961706, 998961770, 998961706, 998961249,
		/* 3510 */ 998961249, 998961771, 0, 8388608, 131072, 268435456, 0, 128, 256, 0x80000000, 343932928, 0, 16777216,
		/* 3523 */ 67108864, 268435456, 536870912, 0, 33554432, 268435456, 1073741824, 0, -1073741824, 0, 0, 1, 0, 2, 0, 3,
		/* 3539 */ 4, 0, 4, 8, 0, 8, 8, 16, 0, 12, 14, -2097152000, 0, 50331648, 134217728, 536870912, -1023410176, 0,
		/* 3557 */ 67108864, 1073741824, 276824064, 0, 134217728, 805306368, 0, 201326592, 310378496, 327155712, 0,
		/* 3568 */ 41943040, 58720256, 134217728, 268435456, 411648, 0, 239075328, 75497472, 0, 268435456, 268500992, 8192,
		/* 3580 */ 131072, 524288, 268435456, 1, 4, 64, 64, 256, 4096, 65536, 0, 0x80000000, 0, -1879048192, 32, 8192,
		/* 3596 */ 32768, 262144, 1572864, 0, 2097152, 268435456, -1073741824, 36, 134225920, 8388608, 536870912, 8192,
		/* 3608 */ 8388608, 134217728, 1073741824, 4, 536870912, -2143288824, 1141162274, 271057920, 271188992, 271057920,
		/* 3618 */ 1412220194, 1412220194, 405275648, 405275685, 1420608802, 1412220194, 1597898226, 1597898226, 2,
		/* 3627 */ 67108864, 1342177280, 0, 536870912, 288, 311296, 1312, 2932736, 2621440, 268435456, 2752512, 0,
		/* 3639 */ 1073741824, 1060, 0, 1140850690, 11321344, 0, 1610612736, 0, 2, 7664, 4055040, 251658240, 1342177280,
		/* 3652 */ 512, 4194304, 8388608, 0, 8192, 0, 12288, 16384, 16384, 32768, 0, 16384, 65536, 262144, 8768, 2, 288,
		/* 3669 */ 16384, 131072, 536870912, 10485760, 0, 2, 496, 1024, 16384, 262144, 2097152, 1073741824, 2, 1073741824,
		/* 3683 */ 448, 6144, 24576, 98304, 1048576, 134217728, 256, 32768, 2129920, 32768, 32768, 65536, 264192, 0, 32768,
		/* 3698 */ 131072, 524288, 524288, 1048576, 8, 4194304, -805306368, 0, 28672, 32768, 32, 32, 128, 1024, 2, 32, 256,
		/* 3715 */ 256, 1024, 32, 448, 1024, 1024, 2048, 4096, 49152, 0x80000000, 256, 2097152, 8192, 65536, 1048576, 0,
		/* 3731 */ 2048, 0, 4096, 16384, 0, 5120, 6144, 65536, 2097152, 128, 65536, 16777216, 33554432, 0, 131072, 262144,
		/* 3747 */ 262144, 0, 192, 256, 0, 256, 1, 2, 8, 384, 512, 0, 512, 2, 16, 16, 20, 128, 33554432, 8192, 16777280,
		/* 3768 */ -2147467264, -2147467264, 0, -2147467264, 131104, -1879031808, -800795773, -800795773, -800795757,
		/* 3777 */ -800795773, 1079284611, 1078236035, 1078760323, -800795773, 1615106947, 1616155523, -800795901,
		/* 3785 */ -800793725, -729950321, -729950321, 0, 64, 16777216, 134217728, 1, 898, 36864, 262144, 268444864,
		/* 3797 */ 5242880, 1073741824, 770, 53248, 262144, 4194304, 67108864, 914, 0, 1, 1934, 53248, 851968, 74448896,
		/* 3811 */ -805306368, 32, 131072, 2, 384, 4194304, 1073741824, 256, 20480, 32768, 400, 0, 2, 128, 8256, 256,
		/* 3827 */ 262144, 1048576, 536870912, 256, 524288, 33554432, 256, 3145728, 1, 4194560, 1075838976, 512, 1024,
		/* 3840 */ 20480, 2, 526336, 56, 1579008, 201334784, 202905600, 202905600, 68687872, 68687872, 202905600, 739907584,
		/* 3852 */ 1278744576, -1650598715, -1650598715, 56, 0, 1708032, 738197504, 1275068416, 0, 1, 1220, 2048, 65536,
		/* 3865 */ 33554432, 2, 2048, 10342400, -1660944384, 0, 8192, 33554432, 3670016, 0, 4, 1216, 2048, 537001984, 0,
		/* 3880 */ 49152, 65536, 50331648, 268435456, 4, 192, 1024, 524288, 8388608, 67108864, 134217728, 8388608, 33554432,
		/* 3893 */ 134217728, 134225924, 512, 2097152, 49152, 524288, 58720256, 268435456, 1, 192, 1088, 512, 4096,
		/* 3906 */ 138412032, 49216, 65, 12297, 61505, 61505, 62529, 327, 327, 1351, 1351, 1089, 65, 1089, 12289, 12305,
		/* 3922 */ 12289, 62529, 61505, 16711, 33095, 62791, 62791, 61767, 0, 1, 64, 68608, 4, 256, 16384, 50331648,
		/* 3938 */ 67108864, 402653184, 0x80000000,
	];

	private static TOKEN: string[] = [
		"%ERROR",
		"IntegerLiteral",
		"DecimalLiteral",
		"DoubleLiteral",
		"StringLiteral",
		"URIQualifiedName",
		"PredefinedEntityRef",
		"'\"\"'",
		"EscapeApos",
		"ElementContentChar",
		"QuotAttrContentChar",
		"AposAttrContentChar",
		"PITarget",
		"CharRef",
		"NCName",
		"QName",
		"StringConstructorChars",
		"S",
		"S",
		"CommentContents",
		"PragmaContents",
		"Wildcard",
		"DirCommentContents",
		"DirPIContents",
		"CDataSectionContents",
		"EOF",
		"'!'",
		"'!='",
		"'\"'",
		"'#'",
		"'#)'",
		"'$'",
		"'%'",
		"''''",
		"'('",
		"'(#'",
		"'(:'",
		"')'",
		"'*'",
		"'+'",
		"','",
		"'-'",
		"'-->'",
		"'.'",
		"'..'",
		"'/'",
		"'//'",
		"'/>'",
		"':'",
		"':)'",
		"'::'",
		"':='",
		"';'",
		"'<'",
		"'<!--'",
		"'<![CDATA['",
		"'</'",
		"'<<'",
		"'<='",
		"'<?'",
		"'='",
		"'=>'",
		"'>'",
		"'>='",
		"'>>'",
		"'?'",
		"'?>'",
		"'@'",
		"'NaN'",
		"'['",
		"']'",
		"']]>'",
		"']``'",
		"'``['",
		"'`{'",
		"'allowing'",
		"'ancestor'",
		"'ancestor-or-self'",
		"'and'",
		"'array'",
		"'as'",
		"'ascending'",
		"'at'",
		"'attribute'",
		"'base-uri'",
		"'boundary-space'",
		"'by'",
		"'case'",
		"'cast'",
		"'castable'",
		"'catch'",
		"'child'",
		"'collation'",
		"'comment'",
		"'construction'",
		"'context'",
		"'copy-namespaces'",
		"'count'",
		"'decimal-format'",
		"'decimal-separator'",
		"'declare'",
		"'default'",
		"'descendant'",
		"'descendant-or-self'",
		"'descending'",
		"'digit'",
		"'div'",
		"'document'",
		"'document-node'",
		"'element'",
		"'else'",
		"'empty'",
		"'empty-sequence'",
		"'encoding'",
		"'end'",
		"'eq'",
		"'every'",
		"'except'",
		"'exponent-separator'",
		"'external'",
		"'following'",
		"'following-sibling'",
		"'for'",
		"'function'",
		"'ge'",
		"'greatest'",
		"'group'",
		"'grouping-separator'",
		"'gt'",
		"'idiv'",
		"'if'",
		"'import'",
		"'in'",
		"'infinity'",
		"'inherit'",
		"'instance'",
		"'intersect'",
		"'is'",
		"'item'",
		"'lax'",
		"'le'",
		"'least'",
		"'let'",
		"'lt'",
		"'map'",
		"'minus-sign'",
		"'mod'",
		"'module'",
		"'namespace'",
		"'namespace-node'",
		"'ne'",
		"'next'",
		"'no-inherit'",
		"'no-preserve'",
		"'node'",
		"'of'",
		"'only'",
		"'option'",
		"'or'",
		"'order'",
		"'ordered'",
		"'ordering'",
		"'parent'",
		"'pattern-separator'",
		"'per-mille'",
		"'percent'",
		"'preceding'",
		"'preceding-sibling'",
		"'preserve'",
		"'previous'",
		"'processing-instruction'",
		"'return'",
		"'satisfies'",
		"'schema'",
		"'schema-attribute'",
		"'schema-element'",
		"'self'",
		"'sliding'",
		"'some'",
		"'stable'",
		"'start'",
		"'strict'",
		"'strip'",
		"'switch'",
		"'text'",
		"'then'",
		"'to'",
		"'treat'",
		"'try'",
		"'tumbling'",
		"'type'",
		"'typeswitch'",
		"'union'",
		"'unordered'",
		"'validate'",
		"'variable'",
		"'version'",
		"'when'",
		"'where'",
		"'window'",
		"'xquery'",
		"'zero-digit'",
		"'{'",
		"'{{'",
		"'|'",
		"'||'",
		"'}'",
		"'}`'",
		"'}}'",
	];
}

export class TopDownTreeBuilder implements ParsingEventHandler {
	private input: string = null;
	private stack: Nonterminal[] = null;

	public reset(input: string): void {
		this.input = input;
		this.stack = [];
	}

	public startNonterminal(name: string, begin: number): void {
		var nonterminal = new Nonterminal(name, begin, begin, []);
		if (this.stack.length > 0) this.addChild(nonterminal);
		this.stack.push(nonterminal);
	}

	public endNonterminal(name: string, end: number): void {
		this.stack[this.stack.length - 1].end = end;
		if (this.stack.length > 1) this.stack.pop();
	}

	public terminal(name: string, begin: number, end: number): void {
		this.addChild(new Terminal(name, begin, end));
	}

	public whitespace(begin: number, end: number): void {}

	private addChild(s: Symbol): void {
		var current = this.stack[this.stack.length - 1];
		current.children.push(s);
	}

	public serialize(e: ParsingEventHandler): void {
		e.reset(this.input);
		this.stack[0].send(e);
	}
}

export abstract class Symbol {
	public name: string;
	public begin: number;
	public end: number;

	constructor(name: string, begin: number, end: number) {
		this.name = name;
		this.begin = begin;
		this.end = end;
	}

	public abstract send(e: ParsingEventHandler): void;
}

export class Terminal extends Symbol {
	constructor(name: string, begin: number, end: number) {
		super(name, begin, end);
	}

	public send(e: ParsingEventHandler): void {
		e.terminal(this.name, this.begin, this.end);
	}
}

export class Nonterminal extends Symbol {
	public children: Symbol[];

	constructor(name: string, begin: number, end: number, children: Symbol[]) {
		super(name, begin, end);
		this.children = children;
	}

	public send(e: ParsingEventHandler): void {
		e.startNonterminal(this.name, this.begin);
		var pos = this.begin;
		this.children.forEach(function (c): void {
			if (pos < c.begin) e.whitespace(pos, c.begin);
			c.send(e);
			pos = c.end;
		});
		if (pos < this.end) e.whitespace(pos, this.end);
		e.endNonterminal(this.name, this.end);
	}
}

// End

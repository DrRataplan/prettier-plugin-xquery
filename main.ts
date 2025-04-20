import prettier from 'prettier';
import type { Printer, Parser, Plugin, AstPath, Doc } from 'prettier';

import { Parser as XQueryParser, ParseException } from './parser.ts';
import { Tree, Node, LeafNode, NonTerminalNode, CommentNode } from './tree.ts';

const { join, line, ifBreak, group, indent, softline, hardline } = prettier.doc.builders;

const xqueryParser: Parser<Node> = {
	parse(text, _options) {
		const handler = new Tree();
		var parser = new XQueryParser(text, handler);
		try {
			parser.parse_XQuery();
		} catch (pe) {
			if (!(pe instanceof ParseException)) {
				throw pe;
			} else {
				throw parser.getErrorMessage(pe);
			}
		}

		return handler.root;
	},
	astFormat: 'xquery-ast',
	locStart(node) {
		return node.begin;
	},
	locEnd(node) {
		return node.end;
	},
};

const space = ' ';

const makePairs = (rest: Doc[]): [Doc, Doc][] => {
	const pairs: [Doc, Doc][] = [];
	for (let i = 0; i < rest.length; ++i) {
		pairs.push([rest[i], rest[++i]]);
	}
	return pairs;
};

const xqueryPrinter: Printer<Node> = {
	canAttachComment(node: Node) {
		return node.name !== 'Comment' && node.name !== 'WhiteSpace' && node.name !== "'('" && node.name !== "')'";
	},
	isBlockComment(node: CommentNode) {
		return node.value.startsWith('(:~') || node.value.includes('\n');
	},
	printComment(path: AstPath<Node>) {
		const value = path.getNode() as CommentNode;
		return value.value;
	},
	print(path: AstPath<Node>, options, print, args) {
		if (path.node instanceof LeafNode) {
			switch (path.node.name) {
				case "'function'":
					return group(['function', line]);
				case "','":
					return group([',', line]);
				case "';'":
				//return group([';', hardline, hardline]);
				default:
					return path.node.value;
			}
		}

		const value = path.node as NonTerminalNode;
		const _path = path as AstPath<NonTerminalNode>;

		switch (value.name) {
			case 'VersionDecl':
				return group([join(space, _path.map(print, 'children')), hardline, hardline]);
			case 'LibraryModule': {
				return group([join(hardline, _path.map(print, 'children')), hardline, hardline]);
			}
			case 'ModuleDecl':
				const prefixPart = _path.map(print, 'childrenByName', 'NCName');
				const uriPart = _path.map(print, 'childrenByName', 'URILiteral');
				return group(['module', space, 'namespace', space, prefixPart, space, '=', space, uriPart, ';']);
			case 'ModuleImport': {
				const prefixPart = value.childrenByName['NCName']
					? ['namespace', space, _path.map(print, 'childrenByName', 'NCName'), space, '=', space]
					: [];
				// First is the module URI, the rest are location hints
				const [uriPart, ...locationHints] = _path.map(print, 'childrenByName', 'URILiteral');
				const locationHintParts = locationHints.length
					? [
							space,
							'at',
							space,
							join(
								',',
								locationHints.map((locationHint) => ['space', locationHint]),
							),
						]
					: [];
				return group(['import', space, 'module', space, prefixPart, uriPart, locationHintParts, ';']);
			}
			case 'Prolog':
				if (!value.children.length) {
					return [];
				}
				return group([join(hardline, _path.map(print, 'children')), hardline, hardline]);
			case 'TypeDeclaration': {
				const sequenceTypePart = _path.map(print, 'childrenByName', 'SequenceType');
				return group(['as', space, sequenceTypePart]);
			}
			case 'Param': {
				const namePart = _path.map(print, 'childrenByName', 'EQName');
				if (!value.childrenByName['TypeDeclaration']) {
					return group(['$', namePart]);
				}
				const typeDeclarationPart = _path.map(print, 'childrenByName', 'TypeDeclaration');
				return group(['$', namePart, space, typeDeclarationPart]);
			}
			case 'FunctionCall': {
				const functionEQNamePart = _path.map(print, 'childrenByName', 'FunctionEQName');
				const argumentListPart = _path.map(print, 'childrenByName', 'ArgumentList');

				return group([functionEQNamePart, argumentListPart]);
			}
			case 'ArgumentList': {
				if (!value.childrenByName['Argument']) {
					return '()';
				}
				const argumentsPart = _path.map(print, 'childrenByName', 'Argument');

				return group(['(', indent([softline, join([',', line], argumentsPart)]), softline,')']);
			}
			case 'IfExpr': {
				const conditionPart = _path.map(print, 'childrenByName', 'Expr');
				const [thenPart, elsePart] = _path.map(print, 'childrenByName', 'ExprSingle');
				const ifKeyword = _path.map(print, 'childrenByName', "'if'");
				const elseKeyword = _path.map(print, 'childrenByName', "'else'");
				const thenKeyword = _path.map(print, 'childrenByName', "'then'");
				return group([
					ifKeyword,
					space,
					'(',
					indent([softline, conditionPart]),
					softline,
					')',
					space,
					thenKeyword,
					indent([hardline, thenPart]),
					hardline,
					elseKeyword,
					indent([hardline, elsePart]),
				]);
			}
			case 'StringConcatExpr':
			case 'ComparisonExpr':
			case 'IntersectExceptExpr':
			case 'UnionExpr':
			case 'OrExpr':
			case 'AndExpr':
			case 'MultiplicativeExpr':
			case 'AdditiveExpr': {
				const [lhs, ...rest] = _path.map(print, 'children');

				const pairs = makePairs(rest);
				return group([lhs, indent([pairs.map(([op, rhs]) => [space, op, line, rhs])])]);
			}
			case 'ParenthesizedExpr': {
				if (!value.childrenByName['Expr']) {
					return group(_path.map(print, 'children'));
				}
				return group(['(', indent([softline, _path.map(print, 'childrenByName', 'Expr')]), softline, ')']);
			}
			case 'Expr': {
				const exprSingles = _path.map(print, 'childrenByName', 'ExprSingle');

				if (value.childrenByName['ExprSingle'].length === 1) {
					return exprSingles;
				}
				return group([indent([softline, join([',', line], exprSingles)]), softline]);
			}
			case 'EnclosedExpr': {
				return group([
					'{',
					indent([hardline, _path.map(print, 'childrenByName', 'Expr')]),
					hardline,
					'}',
				]);
			}
			case 'RangeExpr': {
				return join([space, 'to', space], _path.map(print, 'childrenByName', 'AdditiveExpr'));
			}
			case 'FLWORExpr': {
				const initialClausePart = _path.map(print, 'childrenByName', 'InitialClause');
				const intermediateClausePart = value.childrenByName['IntermediateClause']
					? _path.map(print, 'childrenByName', 'IntermediateClause')
					: [];
				const returnClausePart = _path.map(print, 'childrenByName', 'ReturnClause');

				return group([join(hardline, initialClausePart), intermediateClausePart, indent(returnClausePart)]);
			}
			case 'InitialClause': {
				return group([_path.map(print, 'children'), hardline]);
			}
			case 'ForClause': {
				return group(['for', space, indent([join(line, _path.map(print, 'childrenByName', 'ForBinding'))])]);
			}
			case 'LetClause': {
				return group(['let', space, indent([join(line, _path.map(print, 'childrenByName', 'LetBinding'))])]);
			}
			case 'LetBinding': {
				const varNamePart = _path.map(print, 'childrenByName', 'VarName');
				const exprSinglePart = _path.map(print, 'childrenByName', 'ExprSingle');
				// TODO typings
				return group(['$', varNamePart, space, ':=', line, exprSinglePart]);
			}
			case 'ForBinding': {
				const varNamePart = _path.map(print, 'childrenByName', 'VarName');
				const exprSinglePart = _path.map(print, 'childrenByName', 'ExprSingle');
				// TODO typings
				return group(['$', varNamePart, space, 'in', line, exprSinglePart]);
			}
			case 'ReturnClause': {
				const exprSinglePart = _path.map(print, 'childrenByName', 'ExprSingle');
				return group(['return', space, exprSinglePart]);
			}
			case 'AnnotatedDecl': {
				return group([join(space, _path.map(print, 'children')), hardline, hardline])
			}
			case 'FunctionDecl': {
				const eQNamePart = _path.map(print, 'childrenByName', 'EQName');
				const paramListPart = value.childrenByName['ParamList'] ? _path.map(print, 'childrenByName', 'ParamList') : [];
				const typeDeclarationPart = value.childrenByName['SequenceType']
					? ['as', space, _path.map(print, 'childrenByName', 'SequenceType'), space]
					: [];

				const functionBodyPart = _path.map(print, 'childrenByName', 'FunctionBody');

				return group([
					'function',
					space,
					eQNamePart,
					'(',
					indent([softline, paramListPart]),
					softline,
					')',
					space,
					typeDeclarationPart,
					functionBodyPart,
				]);
			}
			case 'SwitchExpr': {
				const switchPart = _path.map(print, 'childrenByName', "'switch'");
				const exprPart = _path.map(print, 'childrenByName', 'Expr');
				const switchCaseClausePart = _path.map(print, 'childrenByName', 'SwitchCaseClause');
				const defaultPart = _path.map(print, 'childrenByName', "'default'");
				const returnPart = _path.map(print, 'childrenByName', "'return'");
				const exprSinglePart = _path.map(print, 'childrenByName', 'ExprSingle');

				return group([
					switchPart,
					space,
					'(',
					exprPart,
					')',
					indent([
						hardline,
						switchCaseClausePart,
						hardline,
						defaultPart,
						space,
						returnPart,
						indent([hardline, exprSinglePart]),
					]),
				]);
			}
			case 'TryCatchExpr': {
				const tryClausePart = _path.map(print, 'childrenByName', "TryClause");
				const catchClausePart = _path.map(print, 'childrenByName', "CatchClause");
				return group([tryClausePart, hardline, catchClausePart])

			}
			case 'TryClause': {
				const tryKeyword = _path.map(print, 'childrenByName', "'try'");
				const expr = 			 _path.map(print, 'childrenByName', "EnclosedTryTargetExpr");
				return group([tryKeyword, space, expr])
			}
			case 'SwitchCaseClause': {
				const caseParts = _path.map(print, 'childrenByName', "'case'");
				const switchCaseOperandParts = _path.map(print, 'childrenByName', 'SwitchCaseOperand');
				const returnParts = _path.map(print, 'childrenByName', "'return'");
				const exprSingleParts = _path.map(print, 'childrenByName', 'ExprSingle');

				const cases = caseParts.map((casePart, i) => {
					const operand = switchCaseOperandParts[i];
					const returnPart = returnParts[i];
					const exprSinglePart = exprSingleParts[i];

					return group([casePart, space, operand, space, returnPart, indent([hardline, exprSinglePart]), hardline]);
				});

				return join(hardline, cases)
			}
			default:
				//				console.log(`Got passed a ${value.name}`);
				return group(_path.map(print, 'children'));
		}
	},
};

const pluginDefinition: Plugin<Node> = {
	languages: [
		{
			name: 'XQuery',
			parsers: ['xquery-parser'],
		},
	],
	parsers: {
		'xquery-parser': xqueryParser,
	},
	printers: {
		'xquery-ast': xqueryPrinter,
	},
};

export default pluginDefinition;

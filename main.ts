import prettier from 'prettier';
import type { Printer, Parser, Plugin, AstPath, Doc } from 'prettier';

import { Parser as XQueryParser, ParseException } from './parser.ts';
import { Tree, Node, LeafNode, NonTerminalNode } from './tree.ts';

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

const makeTriplets = (rest: Doc[]): [Doc, Doc, Doc][] => {
	const triplets: [Doc, Doc, Doc][] = [];
	for (let i = 0; i < rest.length; i+=3) {
		triplets.push([rest[i], rest[i+1], rest[i+2]]);
	}
	return triplets;
};

const xqueryPrinter: Printer<Node> = {
	print(path: AstPath<Node>, options, print, args) {
		if (path.node instanceof LeafNode) {
			switch (path.node.name) {
				case "'declare'":
					return group(['declare', line]);
				case "'function'":
					return group(['function', line]);
				case "','":
					return group([',', line]);
				case "';'":
					return group([';', hardline, hardline]);
				default:
					return path.node.value;
			}
		}

		const value = path.node as NonTerminalNode;
		const _path = path as AstPath<NonTerminalNode>;

		switch (value.name) {
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
			case 'MultiplicativeExpr':
			case 'AdditiveExpr': {
				const [lhs, ...rest] = _path.map(print, 'children');

				const pairs = makePairs(rest);
				return group([lhs, indent([pairs.map(([op, rhs]) => [space, op, line, rhs])])]);
			}
			case 'FunctionBody': {
				return group([
					'{',
					indent([hardline, _path.map(print, 'childrenByName', 'EnclosedExpr', '0', 'childrenByName', 'Expr')]),
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
			case 'ArrowExpr': {
				const [lhs, ...rest] = _path.map(print, 'children');

				const triplets = makeTriplets(rest);
				const choice = triplets.length == 2 ? line : hardline
				return group([
					lhs,
					indent([triplets.map(([op, arr, args]) => [choice, op, space, arr, args])])]);
			}
			default:
				//                console.log(`Got passed a ${value.name}`)
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

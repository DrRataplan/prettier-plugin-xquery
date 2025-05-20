import prettier from "prettier";
import type { Printer, Parser, Plugin, AstPath, Doc } from "prettier";

import { Parser as XQueryParser, ParseException } from "./parser.ts";
import { Tree, Node, LeafNode, NonTerminalNode, CommentNode } from "./tree.ts";
import printIfExist from "./printIfExists.ts";
import type { Print } from "./util/Print.ts";
import flworExpressions from "./flworExpressions.ts";
import prologPartHandlers from "./prologParts.ts";
import nodeConstructorHandlers from "./nodeConstructors.ts";
import expressionsOnSequenceTypesHandlers from "./expressionsOnSequenceTypes.ts";
import conditionalExpressionHandlers from "./conditionalExpressions.ts";
import quantifiedExpressionHandlers from "./quantifiedExpressions.ts";

const { join, line, ifBreak, group, indent, softline, hardline } = prettier.doc.builders;
const { makeString, getPreferredQuote } = prettier.util;

const xqueryParser: Parser<Node> = {
	parse(text, _options) {
		const handler = new Tree();
		var parser = new XQueryParser(text, handler);
		try {
			parser.parse_XQuery();
		} catch (pe) {
			if (!(pe instanceof ParseException)) {
				throw pe;
			}
			const offset = pe.getBegin();
			const before = text.substring(0, offset);
			const lines = before.split("\n");
			const line = lines.length;
			const column = lines[lines.length - 1].length;

			throw new SyntaxError(`${parser.getErrorMessage(pe)} (${line}:${column})`);
		}

		return handler.root;
	},
	astFormat: "xquery",
	locStart(node) {
		return node.begin;
	},
	locEnd(node) {
		return node.end;
	},
};

const space = " ";

const makePairs = (rest: Doc[]): [Doc, Doc][] => {
	const pairs: [Doc, Doc][] = [];
	for (let i = 0; i < rest.length; ++i) {
		pairs.push([rest[i], rest[++i]]);
	}
	return pairs;
};

const xqueryPrinter: Printer<Node> = {
	canAttachComment(node: Node) {
		// Terminal nodes are sometimes not printed. Refrain from adding comments to them.
		// TODO: always print terminal nodes to optimize comments
		return (
			node.name !== "Comment" &&
			node.name !== "WhiteSpace" &&
			node.name !== "'('" &&
			node.name !== "')'" &&
			node.name !== "'{'" &&
			node.name !== "'}'" &&
			node.name !== "';'" &&
			node.name !== "','"
		);
	},
	isBlockComment(node: CommentNode) {
		return node.value.startsWith("(:~") || node.value.includes("\n");
	},
	printComment(path: AstPath<Node>) {
		const value = path.getNode() as CommentNode;
		return value.value;
	},
	print(path: AstPath<Node>, options, print: Print, _args) {
		if (path.node instanceof LeafNode) {
			switch (path.node.name) {
				case "','":
					return group([",", line]);
				case '"':
					return [];
				case "'":
					return [];

				case "StringLiteral": {
					let stringValue = path.node.value;

					const currentQuoteStyle = stringValue[0];
					// Remove current qoutes
					stringValue = stringValue.substring(1, stringValue.length - 1);

					// Remove unneeded escaping

					if (currentQuoteStyle === '"' && stringValue.includes('""')) {
						stringValue = stringValue.replace(/""/g, '"');
					}
					if (currentQuoteStyle === "'" && stringValue.includes("''")) {
						stringValue = stringValue.replace(/''/g, "'");
					}

					const preferredQuote = getPreferredQuote(stringValue, options.singleQuote);

					// Re-escape quotes
					const str = stringValue.replace(RegExp(`${preferredQuote}`, "g"), `${preferredQuote}${preferredQuote}`);
					return [preferredQuote, str, preferredQuote];
				}

				default:
					return path.node.value;
			}
		}

		const value = path.node as NonTerminalNode;
		const _path = path as AstPath<NonTerminalNode>;

		if (flworExpressions[value.name]) {
			return flworExpressions[value.name](_path, print);
		}
		if (prologPartHandlers[value.name]) {
			return prologPartHandlers[value.name](_path, print);
		}
		if (nodeConstructorHandlers[value.name]) {
			return nodeConstructorHandlers[value.name](_path, print);
		}
		if (expressionsOnSequenceTypesHandlers[value.name]) {
			return expressionsOnSequenceTypesHandlers[value.name](_path, print);
		}
		if (quantifiedExpressionHandlers[value.name]) {
			return quantifiedExpressionHandlers[value.name](_path, print);
		}
		if (conditionalExpressionHandlers[value.name]) {
			return conditionalExpressionHandlers[value.name](_path, print);
		}

		// TODO: Move the contents of this switch to their own files, based on the grouping in the XQuery spec
		switch (value.name) {
			case "TypeDeclaration": {
				const sequenceTypePart = _path.map(print, "childrenByName", "SequenceType");
				return group(["as", space, sequenceTypePart]);
			}
			case "Param": {
				const namePart = _path.map(print, "childrenByName", "EQName");
				if (!value.childrenByName["TypeDeclaration"]) {
					return group(["$", namePart]);
				}
				const typeDeclarationPart = _path.map(print, "childrenByName", "TypeDeclaration");
				return group(["$", namePart, space, typeDeclarationPart]);
			}
			case "ParamList": {
				const params = _path.map(print, "childrenByName", "Param");
				return join([",", line], params);
			}
			case "FunctionCall": {
				const functionEQNamePart = _path.map(print, "childrenByName", "FunctionEQName");
				const argumentListPart = _path.map(print, "childrenByName", "ArgumentList");

				return group([functionEQNamePart, argumentListPart]);
			}
			case "ArgumentList": {
				if (!value.childrenByName["Argument"]) {
					return "()";
				}
				const argumentsPart = _path.map(print, "childrenByName", "Argument");

				return group(["(", indent([softline, join([",", line], argumentsPart)]), softline, ")"]);
			}
			case "MapConstructor": {
				const mapKeyword = _path.map(print, "childrenByName", "'map'");
				const mapConstructorEntries = printIfExist(_path, print, "MapConstructorEntry") ?? [];

				return group([
					mapKeyword,
					space,
					"{",
					indent([softline, join([",", line], mapConstructorEntries)]),
					softline,
					"}",
				]);
			}
			case "MapConstructorEntry": {
				const mapKeyExprPart = _path.map(print, "childrenByName", "MapKeyExpr");
				const mapValueExprPart = _path.map(print, "childrenByName", "MapValueExpr");

				return group([mapKeyExprPart, ":", group(indent([line, mapValueExprPart]))]);
			}
			case "MapConstructorEntry":
			case "StringConcatExpr":
			case "ComparisonExpr":
			case "IntersectExceptExpr":
			case "UnionExpr":
			case "OrExpr":
			case "AndExpr":
			case "MultiplicativeExpr":
			case "AdditiveExpr": {
				const [lhs, ...rest] = _path.map(print, "children");

				const pairs = makePairs(rest);
				return group([lhs, indent([pairs.map(([op, rhs]) => [space, op, line, rhs])])]);
			}
			case "ParenthesizedExpr": {
				if (!value.childrenByName["Expr"]) {
					return group(_path.map(print, "children"));
				}
				return group(["(", indent([softline, _path.map(print, "childrenByName", "Expr")]), softline, ")"]);
			}
			case "ArrowExpr": {
				const unaryExprPart = _path.map(print, "childrenByName", "UnaryExpr");
				const arrowFunctionSpecifierPart = printIfExist(_path, print, "ArrowFunctionSpecifier");
				const argumentListPart = printIfExist(_path, print, "ArgumentList");

				const arrowKeywords = printIfExist(_path, print, "'=>'");

				if (!arrowFunctionSpecifierPart) {
					return unaryExprPart;
				}

				return group([
					unaryExprPart,
					indent(arrowFunctionSpecifierPart.map((afs, i) => [line, arrowKeywords[i], space, afs, argumentListPart[i]])),
				]);
			}
			case "Expr": {
				const exprSingles = _path.map(print, "childrenByName", "ExprSingle");

				if (value.childrenByName["ExprSingle"].length === 1) {
					return exprSingles;
				}
				return group([indent([join([",", line], exprSingles)])]);
			}
			case "EnclosedExpr": {
				const exprPart = printIfExist(_path, print, "Expr");
				if (!exprPart) {
					return "{}";
				}
				return group(["{", indent([hardline, _path.map(print, "childrenByName", "Expr")]), hardline, "}"]);
			}
			case "RangeExpr": {
				return join([space, "to", space], _path.map(print, "childrenByName", "AdditiveExpr"));
			}
			case "AnnotatedDecl": {
				const declareKeyword = _path.map(print, "childrenByName", "'declare'");
				const annotationsPart = printIfExist(_path, print, "Annotation") ?? [];
				const actualDeclaration =
					printIfExist(_path, print, "VarDecl") ?? printIfExist(_path, print, "FunctionDecl") ?? [];

				return group([
					group([declareKeyword, annotationsPart.length ? space : [], indent([join(line, annotationsPart), line])]),
					actualDeclaration,
				]);
			}

			case "FunctionDecl": {
				const functionKeyword = _path.map(print, "childrenByName", "'function'");
				const eQNamePart = _path.map(print, "childrenByName", "EQName");
				const paramListPart = value.childrenByName["ParamList"] ? _path.map(print, "childrenByName", "ParamList") : [];
				const asKeyword = printIfExist(_path, print, "'as'");
				const typeDeclarationPart = value.childrenByName["SequenceType"]
					? [asKeyword, space, _path.map(print, "childrenByName", "SequenceType"), space]
					: [];

				const functionBodyPart = printIfExist(_path, print, "FunctionBody") ?? printIfExist(_path, print, "'external'");

				return group([
					group([
						functionKeyword,
						space,
						eQNamePart,
						space,
						"(",
						indent([softline, paramListPart]),
						softline,
						")",
						space,
						typeDeclarationPart,
					]),
					functionBodyPart,
				]);
			}

			case "InlineFunctionExpr": {
				const annotationsPart = printIfExist(_path, print, "Annotation");
				const functionKeyword = _path.map(print, "childrenByName", "'function'");
				const paramListPart = value.childrenByName["ParamList"] ? _path.map(print, "childrenByName", "ParamList") : [];
				const asKeyword = printIfExist(_path, print, "'as'");
				const sequenceTypePart = printIfExist(_path, print, "SequenceType");
				const functionBodyPart = _path.map(print, "childrenByName", "FunctionBody");

				return group([
					group([annotationsPart ? [join(line, annotationsPart), space] : []]),
					functionKeyword,
					space,
					"(",
					group([softline, indent([softline, paramListPart]), softline]),
					")",
					space,
					asKeyword ? [asKeyword, space, sequenceTypePart, space] : [],
					functionBodyPart,
				]);
			}

			case "FunctionTest": {
				return group(join(line, _path.map(print, "children")));
			}
			case "TypedFunctionTest": {
				const functionKeyword = _path.map(print, "childrenByName", "'function'");
				const asKeyword = _path.map(print, "childrenByName", "'as'");
				const sequenceTypes = _path.map(print, "childrenByName", "SequenceType");
				const returnType = sequenceTypes.pop();
				return group([
					functionKeyword,
					space,
					"(",
					group([softline, join([",", line], sequenceTypes)]),
					softline,
					")",
					line,
					asKeyword,
					space,
					returnType,
				]);
			}

			case "VarDecl": {
				const variableKeyword = printIfExist(_path, print, "'variable'");
				const eQNamePart = _path.map(print, "childrenByName", "VarName");
				const asKeyword = printIfExist(_path, print, "'as'");
				const typeDeclarationPart = value.childrenByName["SequenceType"]
					? [asKeyword, space, _path.map(print, "childrenByName", "SequenceType"), space]
					: [];

				const varValuePart = printIfExist(_path, print, "VarValue");
				const toReturn = [variableKeyword, space, "$", eQNamePart, space, typeDeclarationPart];
				const externalKeyword = printIfExist(_path, print, "'external'");
				if (externalKeyword) {
					toReturn.push(externalKeyword);
					if (varValuePart) {
						toReturn.push(space);
					}
				}
				if (varValuePart) {
					const walrusKeyword = printIfExist(_path, print, "':='");
					toReturn.push(walrusKeyword, space, varValuePart);
				}

				return group(toReturn);
			}

			case "SwitchExpr": {
				const switchPart = _path.map(print, "childrenByName", "'switch'");
				const exprPart = _path.map(print, "childrenByName", "Expr");
				const switchCaseClausePart = _path.map(print, "childrenByName", "SwitchCaseClause");
				const defaultPart = _path.map(print, "childrenByName", "'default'");
				const returnPart = _path.map(print, "childrenByName", "'return'");
				const exprSinglePart = _path.map(print, "childrenByName", "ExprSingle");

				return group([
					switchPart,
					space,
					"(",
					exprPart,
					")",
					indent([
						hardline,
						join(hardline, switchCaseClausePart),
						hardline,
						defaultPart,
						space,
						returnPart,
						indent([hardline, exprSinglePart]),
					]),
				]);
			}

			case "TryCatchExpr": {
				const tryClausePart = _path.map(print, "childrenByName", "TryClause");
				const catchClausePart = _path.map(print, "childrenByName", "CatchClause");
				return group([tryClausePart, hardline, catchClausePart]);
			}
			case "TryClause": {
				const tryKeyword = _path.map(print, "childrenByName", "'try'");
				const expr = _path.map(print, "childrenByName", "EnclosedTryTargetExpr");
				return group([tryKeyword, space, expr]);
			}
			case "CatchClause": {
				const catchKeyword = _path.map(print, "childrenByName", "'catch'");
				const catchErrorListPart = _path.map(print, "childrenByName", "CatchErrorList");
				const expr = _path.map(print, "childrenByName", "EnclosedExpr");
				return group([catchKeyword, space, catchErrorListPart, space, expr]);
			}

			case "SwitchCaseClause": {
				const caseParts = _path.map(print, "childrenByName", "'case'");
				const switchCaseOperandParts = _path.map(print, "childrenByName", "SwitchCaseOperand");
				const returnPart = _path.map(print, "childrenByName", "'return'");
				const exprSinglePart = _path.map(print, "childrenByName", "ExprSingle");

				const cases = caseParts.map((casePart, i) => {
					const operand = switchCaseOperandParts[i];

					return group([casePart, space, operand]);
				});

				return group([join(hardline, cases), space, returnPart, indent([hardline, exprSinglePart])]);
			}
			case "ValidateExpr": {
				const validateKeyword = _path.map(print, "childrenByName", "'validate'");
				const validationMode = printIfExist(_path, print, "ValidationMode");
				const exprPart = _path.map(print, "childrenByName", "Expr");
				const parts: Doc = [validateKeyword, space];
				if (validationMode) {
					parts.push(validationMode, space);
				}

				const typeKeyword = printIfExist(_path, print, "'type'");
				const typeNamePart = printIfExist(_path, print, "TypeName");
				if (typeNamePart) {
					parts.push(typeKeyword, space, typeNamePart, space);
				}

				parts.push("{", indent([line, exprPart, line]), "}");
				return group([parts]);
			}
			default:
				//								console.log(`Got passed a ${value.name}`, Object.keys(value.childrenByName));
				return _path.map(print, "children");
		}
	},
};

const pluginDefinition: Plugin<Node> = {
	languages: [
		{
			name: "XQuery",
			parsers: ["xquery"],
			extensions: ["xqm", "xqy", "xq", "xql"],
		},
	],
	parsers: {
		xquery: xqueryParser,
	},
	printers: {
		xquery: xqueryPrinter,
	},
};

export default pluginDefinition;

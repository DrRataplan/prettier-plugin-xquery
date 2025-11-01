import { doc, util, type Doc } from "prettier";
import printIfExist from "./util/printIfExists.ts";
import space from "./util/space.ts";
import type { Handler } from "./util/Handler.ts";

const { join, line, group, indent, hardline, softline, hardlineWithoutBreakParent } = doc.builders;

const primaryExpressionHandlers: Record<string, Handler> = {
	ParenthesizedExpr: (path, print, options) => {
		const shouldBreakAndIndent = options.breakNextParenthesizedExpr;
		options.breakNextParenthesizedExpr = false;
		const parenOpenKeyword = path.map(print, "childrenByName", "'('");
		const parenCloseKeyword = path.map(print, "childrenByName", "')'");
		const lineType = shouldBreakAndIndent ? hardline : softline;

		const children = printIfExist(path, print, "Expr");
		const positionAfterSpaces = util.skipWhitespace(options.originalText, path.node.begin + 1);
		const parenthesizedExpressionIsEmpty = positionAfterSpaces && positionAfterSpaces === path.node.end! - 1;

		if (parenthesizedExpressionIsEmpty) {
			return group([parenOpenKeyword, lineType, parenCloseKeyword]);
		}
		return group([
			parenOpenKeyword,
			indent([lineType, children ?? []]),
			children ? lineType : [],
			parenCloseKeyword,
		]);
	},
	FunctionCall: (path, print, options) => {
		// XQuery 4 differs significantly from XQuery 3 here
		let functionEQNamePart: Doc;
		if (options.parser === "xquery4") {
			functionEQNamePart = path.map(print, "childrenByName", "UnreservedFunctionEQName");
		} else {
			functionEQNamePart = path.map(print, "childrenByName", "FunctionEQName");
		}
		const argumentListPart = path.map(print, "childrenByName", "ArgumentList");

		return group([functionEQNamePart, argumentListPart]);
	},
	ArgumentList: (path, print, options) => {
		const parenOpenKeyword = path.map(print, "childrenByName", "'('");
		const parenCloseKeyword = path.map(print, "childrenByName", "')'");

		let argumentsPart: Doc;
		if (options.parser === "xquery4") {
			if (!path.node.childrenByName["PositionalArguments"]) {
				return [parenOpenKeyword, parenCloseKeyword];
			}
			argumentsPart = path.map(print, "childrenByName", "PositionalArguments");
		} else {
			if (!path.node.childrenByName["Argument"]) {
				return [parenOpenKeyword, parenCloseKeyword];
			}
			argumentsPart = path.map(print, "childrenByName", "Argument");
		}

		return group([
			parenOpenKeyword,
			indent([softline, join([",", line], argumentsPart)]),
			softline,
			parenCloseKeyword,
		]);
	},
	InlineFunctionExpr: (path, print) => {
		const annotationsPart = printIfExist(path, print, "Annotation");
		const functionKeyword = path.map(print, "childrenByName", "'function'");
		const paramListPart = path.node.childrenByName["ParamList"]
			? path.map(print, "childrenByName", "ParamList")
			: [];
		const asKeyword = printIfExist(path, print, "'as'");
		const sequenceTypePart = printIfExist(path, print, "SequenceType");
		const functionBodyPart = path.map(print, "childrenByName", "FunctionBody");

		const parenOpenKeyword = path.map(print, "childrenByName", "'('");
		const parenCloseKeyword = path.map(print, "childrenByName", "')'");

		return group([
			group([annotationsPart ? [join(line, annotationsPart), space] : []]),
			functionKeyword,
			space,
			parenOpenKeyword,
			group([softline, indent([softline, paramListPart]), softline]),
			parenCloseKeyword,
			space,
			asKeyword ? [asKeyword, space, sequenceTypePart!, space] : [],
			functionBodyPart,
		]);
	},

	EnclosedExpr: (path, print, options) => {
		const lineType = options.forceNewLineInfunctionBody ? hardline : line;
		delete options.forceNewLineInfunctionBody;

		const exprPart = printIfExist(path, print, "Expr");
		const braceOpenKeyword = path.map(print, "childrenByName", "'{'");
		const braceCloseKeyword = path.map(print, "childrenByName", "'}'");
		if (!exprPart) {
			const braceCloseNode = path.node.childrenByName["'}'"][0];
			if (braceCloseNode.hasComments()) {
				// There are comments: add spaces to make the contents not look so squashed
				return group([braceOpenKeyword, line, braceCloseKeyword]);
			}
			return group([braceOpenKeyword, braceCloseKeyword]);
		}
		return group([
			braceOpenKeyword,
			indent([lineType, path.map(print, "childrenByName", "Expr")]),
			lineType,
			braceCloseKeyword,
		]);
	},
};

export default primaryExpressionHandlers;

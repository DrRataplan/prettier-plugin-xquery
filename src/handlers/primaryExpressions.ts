import { doc } from "prettier";
import printIfExist from "./util/printIfExists.ts";
import space from "./util/space.ts";
import type { Handler } from "./util/Handler.ts";

const { join, line, group, indent, hardline, softline } = doc.builders;

const primaryExpressionHandlers: Record<string, Handler> = {
	ParenthesizedExpr: (path, print, options) => {
		const parenOpenKeyword = path.map(print, "childrenByName", "'('");
		const parenCloseKeyword = path.map(print, "childrenByName", "')'");
		let lineType = options.breakNextParenthesizedExpr ? hardline : softline;
		const children = printIfExist(path, print, "Expr");
		return group([parenOpenKeyword, indent([lineType, children ?? []]), children ? lineType : [], parenCloseKeyword]);
	},
	FunctionCall: (path, print) => {
		const functionEQNamePart = path.map(print, "childrenByName", "FunctionEQName");
		const argumentListPart = path.map(print, "childrenByName", "ArgumentList");

		return group([functionEQNamePart, argumentListPart]);
	},
	ArgumentList: (path, print) => {
		const parenOpenKeyword = path.map(print, "childrenByName", "'('");
		const parenCloseKeyword = path.map(print, "childrenByName", "')'");

		if (!path.node.childrenByName["Argument"]) {
			return [parenOpenKeyword, parenCloseKeyword];
		}
		const argumentsPart = path.map(print, "childrenByName", "Argument");

		return group([parenOpenKeyword, indent([softline, join([",", line], argumentsPart)]), softline, parenCloseKeyword]);
	},
	InlineFunctionExpr: (path, print) => {
		const annotationsPart = printIfExist(path, print, "Annotation");
		const functionKeyword = path.map(print, "childrenByName", "'function'");
		const paramListPart = path.node.childrenByName["ParamList"] ? path.map(print, "childrenByName", "ParamList") : [];
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

	EnclosedExpr: (path, print) => {
		const exprPart = printIfExist(path, print, "Expr");
		if (!exprPart) {
			return "{}";
		}
		return group(["{", indent([hardline, path.map(print, "childrenByName", "Expr")]), hardline, "}"]);
	},
};

export default primaryExpressionHandlers;

import { doc } from "prettier";
import type { AstPath, Doc } from "prettier";
import printIfExist from "./util/printIfExists.ts";
import type { NonTerminalNode } from "../tree.ts";
import space from "./util/space.ts";
import { type Print } from "./util/Print.ts";

const { join, line, group, indent, hardline, softline } = doc.builders;

const primaryExpressionHandlers: Record<string, (path: AstPath<NonTerminalNode>, print: Print) => Doc> = {
	ParenthesizedExpr: (path, print) => {
		if (!path.node.childrenByName["Expr"]) {
			return group(path.map(print, "children"));
		}
		return group(["(", indent([softline, path.map(print, "childrenByName", "Expr")]), softline, ")"]);
	},
	FunctionCall: (path, print) => {
		const functionEQNamePart = path.map(print, "childrenByName", "FunctionEQName");
		const argumentListPart = path.map(print, "childrenByName", "ArgumentList");

		return group([functionEQNamePart, argumentListPart]);
	},
	ArgumentList: (path, print) => {
		if (!path.node.childrenByName["Argument"]) {
			return "()";
		}
		const argumentsPart = path.map(print, "childrenByName", "Argument");

		return group(["(", indent([softline, join([",", line], argumentsPart)]), softline, ")"]);
	},
	InlineFunctionExpr: (path, print) => {
		const annotationsPart = printIfExist(path, print, "Annotation");
		const functionKeyword = path.map(print, "childrenByName", "'function'");
		const paramListPart = path.node.childrenByName["ParamList"] ? path.map(print, "childrenByName", "ParamList") : [];
		const asKeyword = printIfExist(path, print, "'as'");
		const sequenceTypePart = printIfExist(path, print, "SequenceType");
		const functionBodyPart = path.map(print, "childrenByName", "FunctionBody");

		return group([
			group([annotationsPart ? [join(line, annotationsPart), space] : []]),
			functionKeyword,
			space,
			"(",
			group([softline, indent([softline, paramListPart]), softline]),
			")",
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

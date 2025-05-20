import { doc } from "prettier";
import type { AstPath, Doc } from "prettier";
import type { NonTerminalNode } from "./tree.ts";
import space from "./space.ts";
import { type Print } from "./util/Print.ts";

const { softline, group, indent, hardline } = doc.builders;

const conditionalExpressionHandlers: Record<string, (path: AstPath<NonTerminalNode>, print: Print) => Doc> = {
	IfExpr: (path, print) => {
		const conditionPart = path.map(print, "childrenByName", "Expr");
		const [thenPart, elsePart] = path.map(print, "childrenByName", "ExprSingle");
		const ifKeyword = path.map(print, "childrenByName", "'if'");
		const elseKeyword = path.map(print, "childrenByName", "'else'");
		const thenKeyword = path.map(print, "childrenByName", "'then'");

		const elseAstNode = path.node.childrenByName["ExprSingle"][1] as NonTerminalNode;
		const nestedIfInElse = elseAstNode.childrenByName["IfExpr"];

		/*
		  Format nested else if expressions: if the else contains an if, print `else if (..)`, otherwise print `else \n EXPR`
		*/
		const formattedElsePart = nestedIfInElse
			? [elseKeyword, space, elsePart]
			: [elseKeyword, indent([hardline, elsePart])];

		return group([
			group([ifKeyword, space, "(", indent([softline, conditionPart]), softline, ")", space, thenKeyword]),
			indent([hardline, thenPart]),
			hardline,
			formattedElsePart,
		]);
	},
};

export default conditionalExpressionHandlers;

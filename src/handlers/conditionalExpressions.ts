import { doc } from "prettier";
import space from "./util/space.ts";
import type { Handler } from "./util/Handler.ts";

const { softline, group, indent, hardline } = doc.builders;

const conditionalExpressionHandlers: Record<string, Handler> = {
	IfExpr: (path, print, options) => {
		const conditionPart = path.map(print, "childrenByName", "Expr");
		const ifKeyword = path.map(print, "childrenByName", "'if'");
		const elseKeyword = path.map(print, "childrenByName", "'else'");
		const thenKeyword = path.map(print, "childrenByName", "'then'");

		const thenAstNode = path.node.childrenByName["ExprSingle"][0];
		const elseAstNode = path.node.childrenByName["ExprSingle"][1];
		const nestedIfInElse = elseAstNode.childrenByName["IfExpr"];

		const thenPartIsParenthesized = thenAstNode.childrenByName["ParenthesizedExpr"];
		const elsePartIsParenthesized = elseAstNode.childrenByName["ParenthesizedExpr"];

		const parenOpenKeyword = path.map(print, "childrenByName", "'('");
		const parenCloseKeyword = path.map(print, "childrenByName", "')'");

		// Break the parenthesized expression in the parenthesized expression here, to align with
		// the One True Brace style prettier uses.

		// TODO: enforce these parens

		/*
		 * if (1) then (
		 *   2
		 * ) else (
		 *   3
		 * )
		 */
		options.breakNextParenthesizedExpr = thenPartIsParenthesized;
		const thenPart = path.call(print, "childrenByName", "ExprSingle", 0);
		options.breakNextParenthesizedExpr = elsePartIsParenthesized;

		const elsePart = path.call(print, "childrenByName", "ExprSingle", 1);
		options.breakNextParenthesizedExpr = false;

		// For parenthesized 'then' expressions, the parenthesized expression will handle the
		// hardlines.
		const formattedThenPart = thenPartIsParenthesized
			? [space, thenPart, space]
			: [indent([hardline, thenPart]), hardline];

		/*
		  Format nested else if expressions: if the else contains an if, print `else if (..)`,
		  otherwise print `else \n EXPR`
		*/
		const formattedElsePart =
			nestedIfInElse || elsePartIsParenthesized
				? [elseKeyword, space, elsePart]
				: [elseKeyword, indent([hardline, elsePart])];
		return group([
			group([
				ifKeyword,
				space,
				parenOpenKeyword,
				indent([softline, conditionPart]),
				softline,
				parenCloseKeyword,
				space,
				thenKeyword,
			]),
			formattedThenPart,
			formattedElsePart,
		]);
	},
};

export default conditionalExpressionHandlers;

import { doc } from "prettier";
import type { AstPath, Doc } from "prettier";
import type { NonTerminalNode } from "../tree.ts";
import space from "./util/space.ts";
import { type Print } from "./util/Print.ts";

const { join, group, indent, line } = doc.builders;

const sequenceExpressionHandlers: Record<string, (path: AstPath<NonTerminalNode>, print: Print) => Doc> = {
	RangeExpr: (path, print) => {
		return join([space, "to", space], path.map(print, "childrenByName", "AdditiveExpr"));
	},
	Expr: (path, print) => {
		const exprSingles = path.map(print, "childrenByName", "ExprSingle");

		if (path.node.childrenByName["ExprSingle"].length === 1) {
			return exprSingles;
		}
		return group([indent([join([",", line], exprSingles)])]);
	},
};

export default sequenceExpressionHandlers;

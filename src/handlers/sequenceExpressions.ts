import { doc } from "prettier";
import type { Handler } from "./util/Handler.ts";

const { join, group, indent, line } = doc.builders;

const sequenceExpressionHandlers: Record<string, Handler> = {
	Expr: (path, print) => {
		const exprSingles = path.map(print, "childrenByName", "ExprSingle");

		if (path.node.childrenByName["ExprSingle"].length === 1) {
			return exprSingles;
		}
		return group([indent([join([",", line], exprSingles)])]);
	},
};

export default sequenceExpressionHandlers;

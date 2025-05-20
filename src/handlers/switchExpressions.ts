import { doc } from "prettier";
import type { AstPath, Doc } from "prettier";
import type { NonTerminalNode } from "../tree.ts";
import space from "./util/space.ts";
import { type Print } from "./util/Print.ts";

const { join, group, indent, hardline } = doc.builders;

const switchExpressionHandlers: Record<string, (path: AstPath<NonTerminalNode>, print: Print) => Doc> = {
	SwitchExpr: (path, print) => {
		const switchPart = path.map(print, "childrenByName", "'switch'");
		const exprPart = path.map(print, "childrenByName", "Expr");
		const switchCaseClausePart = path.map(print, "childrenByName", "SwitchCaseClause");
		const defaultPart = path.map(print, "childrenByName", "'default'");
		const returnPart = path.map(print, "childrenByName", "'return'");
		const exprSinglePart = path.map(print, "childrenByName", "ExprSingle");

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
	},
	SwitchCaseClause: (path, print) => {
		const caseParts = path.map(print, "childrenByName", "'case'");
		const switchCaseOperandParts = path.map(print, "childrenByName", "SwitchCaseOperand");
		const returnPart = path.map(print, "childrenByName", "'return'");
		const exprSinglePart = path.map(print, "childrenByName", "ExprSingle");

		const cases = caseParts.map((casePart, i) => {
			const operand = switchCaseOperandParts[i];

			return group([casePart, space, operand]);
		});

		return group([join(hardline, cases), space, returnPart, indent([hardline, exprSinglePart])]);
	},
};

export default switchExpressionHandlers;

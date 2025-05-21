import { doc } from "prettier";
import space from "./util/space.ts";
import type { Handler } from "./util/Handler.ts";

const { join, group, indent, hardline } = doc.builders;

const switchExpressionHandlers: Record<string, Handler> = {
	SwitchExpr: (path, print) => {
		const switchPart = path.map(print, "childrenByName", "'switch'");
		const exprPart = path.map(print, "childrenByName", "Expr");
		const switchCaseClausePart = path.map(print, "childrenByName", "SwitchCaseClause");
		const defaultPart = path.map(print, "childrenByName", "'default'");
		const returnPart = path.map(print, "childrenByName", "'return'");
		const exprSinglePart = path.map(print, "childrenByName", "ExprSingle");

		const parenOpenKeyword = path.map(print, "childrenByName", "'('");
		const parenCloseKeyword = path.map(print, "childrenByName", "')'");

		return group([
			switchPart,
			space,
			parenOpenKeyword,
			exprPart,
			parenCloseKeyword,
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

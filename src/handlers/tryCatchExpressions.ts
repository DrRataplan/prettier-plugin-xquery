import { doc } from "prettier";
import type { AstPath, Doc } from "prettier";
import type { NonTerminalNode } from "../tree.ts";
import space from "./util/space.ts";
import { type Print } from "./util/Print.ts";

const { group, hardline } = doc.builders;

const tryCatchExpressionHandlers: Record<string, (path: AstPath<NonTerminalNode>, print: Print) => Doc> = {
	TryCatchExpr: (path, print) => {
		const tryClausePart = path.map(print, "childrenByName", "TryClause");
		const catchClausePart = path.map(print, "childrenByName", "CatchClause");
		return group([tryClausePart, hardline, catchClausePart]);
	},
	TryClause: (path, print) => {
		const tryKeyword = path.map(print, "childrenByName", "'try'");
		const expr = path.map(print, "childrenByName", "EnclosedTryTargetExpr");
		return group([tryKeyword, space, expr]);
	},
	CatchClause: (path, print) => {
		const catchKeyword = path.map(print, "childrenByName", "'catch'");
		const catchErrorListPart = path.map(print, "childrenByName", "CatchErrorList");
		const expr = path.map(print, "childrenByName", "EnclosedExpr");
		return group([catchKeyword, space, catchErrorListPart, space, expr]);
	},
};
export default tryCatchExpressionHandlers;

import { doc } from "prettier";
import space from "./util/space.ts";
import type { Handler } from "./util/Handler.ts";

const { group, hardline } = doc.builders;

const tryCatchExpressionHandlers: Record<string, Handler> = {
	TryCatchExpr: (path, print) => {
		const tryClausePart = path.map(print, "childrenByName", "TryClause");
		const catchClausePart = path.map(print, "childrenByName", "CatchClause");
		return group([tryClausePart, space, catchClausePart]);
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

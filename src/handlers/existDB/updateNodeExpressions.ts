import type { Handler } from "../util/Handler.ts";
import joinChildrenWithSpaces from "../util/joinChildrenWithSpaces.ts";

/**
 * The ExistDB update node expressions are all quite simple. Just some keywords. Not expected top get long by
 * themselves, so just join with spaces
 */
const existDBUpdateNodeHandlers: Record<string, Handler> = {
	ExistDB_UpdateExpr: joinChildrenWithSpaces,
	ExistDB_UpdateInsertExpr: joinChildrenWithSpaces,
	ExistDB_UpdateDeleteExpr: joinChildrenWithSpaces,
	ExistDB_UpdateRenameExpr: joinChildrenWithSpaces,
	ExistDB_UpdateReplacExpr: joinChildrenWithSpaces,
	ExistDB_UpdateValueExpr: joinChildrenWithSpaces,
};

export default existDBUpdateNodeHandlers;

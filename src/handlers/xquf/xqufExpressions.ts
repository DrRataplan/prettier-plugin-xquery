import { doc } from "prettier";
import type { Handler } from "../util/Handler.ts";
import joinChildrenWithSpaces from "../util/joinChildrenWithSpaces.ts";
import space from "../util/space.ts";

const { group, line, indent } = doc.builders;

const XQUF_Handlers: Record<string, Handler> = {
	XQUF_DeleteExpr: joinChildrenWithSpaces,
	XQUF_RenameExpr: joinChildrenWithSpaces,
	XQUF_ReplaceExpr: joinChildrenWithSpaces,
	XQUF_ReplaceTarget: joinChildrenWithSpaces,
	XQUF_CopyBindingList: joinChildrenWithSpaces,
	XQUF_CopyBinding: (path, print, _options) => {
		const varNamePart = path.map(print, "childrenByName", "VarName");
		const exprSinglePart = path.map(print, "childrenByName", "ExprSingle");

		return group(["$", varNamePart, space, ":=", indent(group([line, exprSinglePart]))]);
	},
	XQUF_AsFirstInto: joinChildrenWithSpaces,
	XQUF_AsLastInto: joinChildrenWithSpaces,
	XQUF_TransformExpr: joinChildrenWithSpaces,
	XQUF_InsertExpr: joinChildrenWithSpaces,
	XQUF_CompatibilityAnnotatedDecl: joinChildrenWithSpaces,
	XQUF_UpdatingFunctionCall: joinChildrenWithSpaces,
	XQUF_UpdatingFunctionDecl: joinChildrenWithSpaces,
};

export default XQUF_Handlers;

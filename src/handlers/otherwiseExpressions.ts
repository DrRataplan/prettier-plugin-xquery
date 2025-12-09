import type { Handler } from "./util/Handler.ts";
import { handleBinaryOperator } from "./util/handleBinaryOperator.ts";

/**
 * Otherwise expression. New in XQ4
 */
const otherwiseExpressionHandlers: Record<string, Handler> = {
	OtherwiseExpr: handleBinaryOperator,
};

export default otherwiseExpressionHandlers;

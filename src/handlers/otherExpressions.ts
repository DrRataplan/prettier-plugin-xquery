import type { Handler } from "./util/Handler.ts";
import { handleBinaryOperator } from "./util/handleBinaryOperator.ts";
/**
 * Other expressions, those who fall in the pattern of {LHS} (operator {RHS})*
 */
const otherExpressionHandlers: Record<string, Handler> = {
	StringConcatExpr: handleBinaryOperator,
	ComparisonExpr: handleBinaryOperator,
	IntersectExceptExpr: handleBinaryOperator,
	UnionExpr: handleBinaryOperator,
	OrExpr: handleBinaryOperator,
	AndExpr: handleBinaryOperator,
	MultiplicativeExpr: handleBinaryOperator,
	AdditiveExpr: handleBinaryOperator,
	RangeExpr: handleBinaryOperator,
	OtherwiseExpr: handleBinaryOperator,
};

export default otherExpressionHandlers;

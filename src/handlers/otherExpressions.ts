import { doc } from "prettier";
import type { Doc } from "prettier";
import space from "./util/space.ts";
import type { Handler } from "./util/Handler.ts";

const { group, indent, line } = doc.builders;

const makePairs = (rest: Doc[]): [Doc, Doc][] => {
	const pairs: [Doc, Doc][] = [];
	for (let i = 0; i < rest.length; ++i) {
		pairs.push([rest[i], rest[++i]]);
	}
	return pairs;
};

const handleBinaryOperator: Handler = (path, print) => {
	const [lhs, ...rest] = path.map(print, "children");

	const pairs = makePairs(rest);
	return group([lhs, indent([pairs.map(([op, rhs]) => [space, op, line, rhs])])]);
};

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
};

export default otherExpressionHandlers;

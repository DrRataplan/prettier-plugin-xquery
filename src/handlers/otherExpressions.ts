import { doc } from "prettier";
import type { AstPath, Doc } from "prettier";
import type { NonTerminalNode } from "../tree.ts";
import space from "./util/space.ts";
import { type Print } from "./util/Print.ts";

const { group, indent, line } = doc.builders;

const makePairs = (rest: Doc[]): [Doc, Doc][] => {
	const pairs: [Doc, Doc][] = [];
	for (let i = 0; i < rest.length; ++i) {
		pairs.push([rest[i], rest[++i]]);
	}
	return pairs;
};

const handleBinaryOperator = (path: AstPath<NonTerminalNode>, print: Print): Doc => {
	const [lhs, ...rest] = path.map(print, "children");

	const pairs = makePairs(rest);
	return group([lhs, indent([pairs.map(([op, rhs]) => [space, op, line, rhs])])]);
};

/**
 * Other expressions, those who fall in the pattern of {LHS} (operator {RHS})*
 */
const otherExpressionHandlers: Record<string, (path: AstPath<NonTerminalNode>, print: Print) => Doc> = {
	StringConcatExpr: handleBinaryOperator,
	ComparisonExpr: handleBinaryOperator,
	IntersectExceptExpr: handleBinaryOperator,
	UnionExpr: handleBinaryOperator,
	OrExpr: handleBinaryOperator,
	AndExpr: handleBinaryOperator,
	MultiplicativeExpr: handleBinaryOperator,
	AdditiveExpr: handleBinaryOperator,
};

export default otherExpressionHandlers;

import { doc } from "prettier";
import type { Doc } from "prettier";

import space from "./space.ts";
import type { Handler } from "./Handler.ts";

const { group, indent, line } = doc.builders;

const makePairs = (rest: Doc[]): [Doc, Doc][] => {
	const pairs: [Doc, Doc][] = [];
	for (let i = 0; i < rest.length; ++i) {
		pairs.push([rest[i], rest[++i]]);
	}
	return pairs;
};

export const handleBinaryOperator: Handler = (path, print) => {
	const [lhs, ...rest] = path.map(print, "children");

	const pairs = makePairs(rest);
	return group([lhs, indent([pairs.map(([op, rhs]) => [space, op, line, rhs])])]);
};

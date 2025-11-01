import type { AstPath, Doc } from "prettier";
import type { NonTerminalNode } from "../../tree.js";
import type { Print } from "./Print.ts";

const printIfExist = (path: AstPath<NonTerminalNode>, print: Print, ...items: string[]): Doc[] | null => {
	const [head, ...rest] = items;
	if (!path.node.childrenByName[head]) {
		return null;
	}

	if (rest.length === 0) {
		return path.map(print, "childrenByName", head);
	}

	return path
		.map((p) => printIfExist(p, print, ...rest), "childrenByName", head)
		.filter((result) => result !== null) as Doc[];
};

export default printIfExist;

import type { AstPath, Doc } from "prettier";
import type { NonTerminalNode } from "./tree.js";
import type { Print } from "./util/Print.ts";

const printIfExist = (path: AstPath<NonTerminalNode>, print: Print, item: string): Doc[] | null => {
	if (!path.node.childrenByName[item]) {
		return null;
	}
	return path.map(print, "childrenByName", item);
};

export default printIfExist;

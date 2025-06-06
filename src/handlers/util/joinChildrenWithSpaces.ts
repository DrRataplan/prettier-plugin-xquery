import { doc } from "prettier";
import type { AstPath, Doc } from "prettier";
import space from "./space.ts";
import type { Print } from "./Print.ts";
import { NonTerminalNode } from "../../tree.ts";

const { join } = doc.builders;

const joinChildrenWithSpaces = (path: AstPath<NonTerminalNode>, print: Print): Doc =>{
	return join(space, path.map(print, "children"));
}

export default joinChildrenWithSpaces;

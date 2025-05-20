import type { AstPath, Doc } from "prettier";
import type { Node, NonTerminalNode } from "../tree.ts";

export type Print = (path: AstPath<Node>) => Doc[];


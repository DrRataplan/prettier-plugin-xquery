import type { AstPath, Doc } from "prettier";
import type { Node } from "../../tree.ts";

export type Print = (path: AstPath<Node>) => Doc[];

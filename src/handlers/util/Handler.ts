import type { AstPath, Doc, Options, ParserOptions } from "prettier";
import type { NonTerminalNode } from "../../tree.ts";
import type { Print } from "./Print.ts";

export type Handler = (path: AstPath<NonTerminalNode>, print: Print, options: ParserOptions) => Doc;

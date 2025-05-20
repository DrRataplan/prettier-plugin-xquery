import { doc } from "prettier";
import type { AstPath, Doc } from "prettier";
import type { NonTerminalNode } from "../tree.ts";
import space from "./util/space.ts";
import { type Print } from "./util/Print.ts";
import printIfExist from "./util/printIfExists.ts";

const { join, softline, line, group, indent } = doc.builders;

const mapsAndArrayHandlers: Record<string, (path: AstPath<NonTerminalNode>, print: Print) => Doc> = {
	MapConstructor: (path, print) => {
		const mapKeyword = path.map(print, "childrenByName", "'map'");
		const mapConstructorEntries = printIfExist(path, print, "MapConstructorEntry") ?? [];

		return group([mapKeyword, space, "{", indent([softline, join([",", line], mapConstructorEntries)]), softline, "}"]);
	},
	MapConstructorEntry: (path, print) => {
		const mapKeyExprPart = path.map(print, "childrenByName", "MapKeyExpr");
		const mapValueExprPart = path.map(print, "childrenByName", "MapValueExpr");

		return group([mapKeyExprPart, ":", group(indent([line, mapValueExprPart]))]);
	},
};

export default mapsAndArrayHandlers;

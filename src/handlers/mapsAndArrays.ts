import { doc } from "prettier";
import space from "./util/space.ts";
import printIfExist from "./util/printIfExists.ts";
import type { Handler } from "./util/Handler.ts";

const { join, softline, line, group, indent } = doc.builders;

const mapsAndArrayHandlers: Record<string, Handler> = {
	MapConstructor: (path, print) => {
		const mapKeyword = path.map(print, "childrenByName", "'map'");
		const mapConstructorEntries = printIfExist(path, print, "MapConstructorEntry") ?? [];

		return group([
			mapKeyword,
			space,
			"{",
			indent([softline, join([",", line], mapConstructorEntries)]),
			softline,
			"}",
		]);
	},
	MapConstructorEntry: (path, print) => {
		const mapKeyExprPart = path.map(print, "childrenByName", "MapKeyExpr");
		const mapValueExprPart = path.map(print, "childrenByName", "MapValueExpr");

		return group([mapKeyExprPart, ":", group(indent([line, mapValueExprPart]))]);
	},

	SquareArrayConstructor: (path, print) => {
		const bracketOpenKeyword = path.map(print, "childrenByName", "'['");
		const bracketCloseKeyword = path.map(print, "childrenByName", "']'");

		const exprSingles = printIfExist(path, print, "ExprSingle");
		if (!exprSingles) {
			return group([bracketOpenKeyword, bracketCloseKeyword]);
		}

		return group([
			bracketOpenKeyword,
			indent([softline, join([",", line], exprSingles)]),
			softline,
			bracketCloseKeyword,
		]);
	},

	CurlyArrayConstructor: (path, print) => {
		const arrayKeyword = path.map(print, "childrenByName", "'array'");

		const enclosedExpr = path.map(print, "childrenByName", "EnclosedExpr");

		return group([arrayKeyword, indent([line, enclosedExpr])]);
	},
};

export default mapsAndArrayHandlers;

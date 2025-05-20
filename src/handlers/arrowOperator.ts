import { doc } from "prettier";
import type { AstPath, Doc } from "prettier";
import printIfExist from "./util/printIfExists.ts";
import type { NonTerminalNode } from "../tree.ts";
import space from "./util/space.ts";
import { type Print } from "./util/Print.ts";

const { line, group, indent } = doc.builders;

const arrowOperatorHandlers: Record<string, (path: AstPath<NonTerminalNode>, print: Print) => Doc> = {
	ArrowExpr: (path, print) => {
		const unaryExprPart = path.map(print, "childrenByName", "UnaryExpr");
		const arrowFunctionSpecifierPart = printIfExist(path, print, "ArrowFunctionSpecifier");
		const argumentListPart = printIfExist(path, print, "ArgumentList");

		const arrowKeywords = printIfExist(path, print, "'=>'");

		if (!arrowFunctionSpecifierPart) {
			return unaryExprPart;
		}

		return group([
			unaryExprPart,
			indent(arrowFunctionSpecifierPart.map((afs, i) => [line, arrowKeywords![i], space, afs, argumentListPart![i]])),
		]);
	},
};

export default arrowOperatorHandlers;

import { doc } from "prettier";
import printIfExist from "./util/printIfExists.ts";
import space from "./util/space.ts";
import type { Handler } from "./util/Handler.ts";

const { line, group, indent } = doc.builders;

const arrowOperatorHandlers: Record<string, Handler> = {
	ArrowExpr: (path, print) => {
		const arrowFunctionSpecifierPart = printIfExist(path, print, "ArrowFunctionSpecifier");
		const argumentListPart = printIfExist(path, print, "ArgumentList");

		// The unary expression in here might be a different expression because the chain was cleaned up.
		const unaryExprPart = path.call(print, "children", 0);
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

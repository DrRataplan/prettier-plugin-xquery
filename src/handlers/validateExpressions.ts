import { doc } from "prettier";
import type { Doc } from "prettier";
import printIfExist from "./util/printIfExists.ts";
import space from "./util/space.ts";
import type { Handler } from "./util/Handler.ts";

const { line, group, indent } = doc.builders;

const validateExpressionHandlers: Record<string, Handler> = {
	ValidateExpr: (path, print) => {
		const validateKeyword = path.map(print, "childrenByName", "'validate'");
		const validationMode = printIfExist(path, print, "ValidationMode");
		const exprPart = path.map(print, "childrenByName", "Expr");
		const parts: Doc = [validateKeyword, space];
		if (validationMode) {
			parts.push(validationMode, space);
		}

		const typeKeyword = printIfExist(path, print, "'type'");
		if (typeKeyword) {
			const typeNamePart = path.map(print, "childrenByName", "TypeName");
			parts.push(typeKeyword, space, typeNamePart, space);
		}

		parts.push("{", indent([line, exprPart, line]), "}");
		return group([parts]);
	},
};
export default validateExpressionHandlers;

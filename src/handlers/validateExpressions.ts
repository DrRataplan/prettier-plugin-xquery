import { doc } from "prettier";
import type { AstPath, Doc } from "prettier";
import printIfExist from "./util/printIfExists.ts";
import type { NonTerminalNode } from "../tree.ts";
import space from "./util/space.ts";
import { type Print } from "./util/Print.ts";

const { line, group, indent } = doc.builders;

const validateExpressionHandlers: Record<string, (path: AstPath<NonTerminalNode>, print: Print) => Doc> = {
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

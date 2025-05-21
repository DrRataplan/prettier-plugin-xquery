import { doc, type Doc } from "prettier";
import printIfExist from "./util/printIfExists.ts";
import space from "./util/space.ts";
import type { Handler } from "./util/Handler.ts";

const { group, indent, softline } = doc.builders;

const nodeConstructorHandlers: Record<string, Handler> = {
	CompAttrConstructor: (path, print) => {
		const attributeKeyword = path.map(print, "childrenByName", "'attribute'");
		const eqNamePart = printIfExist(path, print, "EQName");
		const enclosedExprPart = path.map(print, "childrenByName", "EnclosedExpr");

		const toReturn: Doc[] = [attributeKeyword, space];
		if (eqNamePart) {
			toReturn.push(eqNamePart);
		} else {
			const exprPart = path.map(print, "childrenByName", "Expr");
			toReturn.push("{", group(indent([softline, exprPart, softline])), "}");
		}
		toReturn.push([space, enclosedExprPart]);
		return group(toReturn);
	},

	CompElemConstructor: (path, print) => {
		const elementKeyword = path.map(print, "childrenByName", "'element'");
		const eqNamePart = printIfExist(path, print, "EQName");
		const enclosedExprPart = path.map(print, "childrenByName", "EnclosedContentExpr");

		const toReturn: Doc[] = [elementKeyword, space];
		if (eqNamePart) {
			toReturn.push(eqNamePart);
		} else {
			const exprPart = path.map(print, "childrenByName", "Expr");
			toReturn.push("{", group(indent([softline, exprPart, softline])), "}");
		}
		toReturn.push([space, enclosedExprPart]);
		return group(toReturn);
	},
	CompPIConstructor: (path, print) => {
		const piKeyword = path.map(print, "childrenByName", "'processing-instruction'");
		const ncNamePart = printIfExist(path, print, "NCName");
		const enclosedExprPart = path.map(print, "childrenByName", "EnclosedExpr");

		const toReturn: Doc[] = [piKeyword, space];
		if (ncNamePart) {
			toReturn.push(ncNamePart);
		} else {
			const exprPart = path.map(print, "childrenByName", "Expr");
			toReturn.push("{", group(indent([softline, exprPart, softline])), "}");
		}
		toReturn.push([space, enclosedExprPart]);
		return group(toReturn);
	},
	CompCommentConstructor: (path, print) => {
		const commentKeyword = path.map(print, "childrenByName", "'comment'");
		const enclosedExprPart = path.map(print, "childrenByName", "EnclosedExpr");

		return group([commentKeyword, space, enclosedExprPart]);
	},
	CompDocConstructor: (path, print) => {
		const documentKeyword = path.map(print, "childrenByName", "'document'");
		const enclosedExprPart = path.map(print, "childrenByName", "EnclosedExpr");

		return group([documentKeyword, space, enclosedExprPart]);
	},
	CompTextConstructor: (path, print) => {
		const textKeyword = path.map(print, "childrenByName", "'text'");
		const enclosedExprPart = path.map(print, "childrenByName", "EnclosedExpr");

		return group([textKeyword, space, enclosedExprPart]);
	},
	CompNamespaceConstructor: (path, print) => {
		const namespaceKeyword = path.map(print, "childrenByName", "'namespace'");
		const prefixPart = printIfExist(path, print, "Prefix") ?? path.map(print, "childrenByName", "EnclosedPrefixExpr");
		const enclosedURIExprPart = path.map(print, "childrenByName", "EnclosedURIExpr");

		return group([namespaceKeyword, space, prefixPart, space, enclosedURIExprPart]);
	},
};

export default nodeConstructorHandlers;

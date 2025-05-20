import { doc, type AstPath, type Doc } from "prettier";
import printIfExist from "./printIfExists.ts";
import type { NonTerminalNode } from "./tree.ts";
import space from "./space.ts";
import { type Print } from "./util/Print.ts";

const { group, indent, softline } = doc.builders;

const nodeConstructorHandlers: Record<string, (path: AstPath<NonTerminalNode>, print: Print) => Doc> = {
	CompAttrConstructor: (path, print) => {
		const attributeKeyword = path.map(print, "childrenByName", "'attribute'");
		const eqNamePart = printIfExist(path, print, "EQName");
		const exprPart = printIfExist(path, print, "Expr");
		const enclosedExprPart = path.map(print, "childrenByName", "EnclosedExpr");

		const toReturn: Doc[] = [attributeKeyword, space];
		if (eqNamePart) {
			toReturn.push(eqNamePart);
		} else {
			toReturn.push("{", group(indent([softline, exprPart, softline])), "}");
		}
		toReturn.push([space, enclosedExprPart]);
		return group(toReturn);
	},

	CompElemConstructor: (path, print) => {
		const elementKeyword = path.map(print, "childrenByName", "'element'");
		const eqNamePart = printIfExist(path, print, "EQName");
		const exprPart = printIfExist(path, print, "Expr");
		const enclosedExprPart = path.map(print, "childrenByName", "EnclosedContentExpr");

		const toReturn: Doc[] = [elementKeyword, space];
		if (eqNamePart) {
			toReturn.push(eqNamePart);
		} else {
			toReturn.push("{", group(indent([softline, exprPart, softline])), "}");
		}
		toReturn.push([space, enclosedExprPart]);
		return group(toReturn);
	},
	CompPIConstructor: (path, print) => {
		const piKeyword = path.map(print, "childrenByName", "'processing-instruction'");
		const ncNamePart = printIfExist(path, print, "NCName");
		const exprPart = printIfExist(path, print, "Expr");
		const enclosedExprPart = path.map(print, "childrenByName", "EnclosedExpr");

		const toReturn: Doc[] = [piKeyword, space];
		if (ncNamePart) {
			toReturn.push(ncNamePart);
		} else {
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
		const enclosedPrefixExprPart = printIfExist(path, print, "EnclosedPrefixExpr");
		const prefixPart = printIfExist(path, print, "Prefix");
		const enclosedURIExprPart = path.map(print, "childrenByName", "EnclosedURIExpr");

		return group([namespaceKeyword, space, prefixPart ?? enclosedPrefixExprPart, space, enclosedURIExprPart]);
	},
};

export default nodeConstructorHandlers;

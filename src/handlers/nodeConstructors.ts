import { doc, type Doc } from "prettier";
import printIfExist from "./util/printIfExists.ts";
import space from "./util/space.ts";
import type { Handler } from "./util/Handler.ts";

const { group, indent, softline, line, join } = doc.builders;

const nodeConstructorHandlers: Record<string, Handler> = {
	CompAttrConstructor: (path, print) => {
		const attributeKeyword = path.map(print, "childrenByName", "'attribute'");
		const eqNamePart = printIfExist(path, print, "EQName");
		const enclosedExprPart = path.map(print, "childrenByName", "EnclosedExpr");

		const toReturn: Doc[] = [attributeKeyword, space];
		if (eqNamePart) {
			toReturn.push(eqNamePart);
		} else {
			const braceOpenKeyword = path.map(print, "childrenByName", "'{'");
			const exprPart = path.map(print, "childrenByName", "Expr");
			const braceCloseKeyword = path.map(print, "childrenByName", "'}'");
			toReturn.push(braceOpenKeyword, group(indent([softline, exprPart, softline])), braceCloseKeyword);
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
			const braceOpenKeyword = path.map(print, "childrenByName", "'{'");
			const exprPart = path.map(print, "childrenByName", "Expr");
			const braceCloseKeyword = path.map(print, "childrenByName", "'}'");
			toReturn.push(braceOpenKeyword, group(indent([softline, exprPart, softline])), braceCloseKeyword);
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
			const braceOpenKeyword = path.map(print, "childrenByName", "'{'");
			const exprPart = path.map(print, "childrenByName", "Expr");
			const braceCloseKeyword = path.map(print, "childrenByName", "'}'");
			toReturn.push(braceOpenKeyword, group(indent([softline, exprPart, softline])), braceCloseKeyword);
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
		const prefixPart =
			printIfExist(path, print, "Prefix") ?? path.map(print, "childrenByName", "EnclosedPrefixExpr");
		const enclosedURIExprPart = path.map(print, "childrenByName", "EnclosedURIExpr");

		return group([namespaceKeyword, space, prefixPart, space, enclosedURIExprPart]);
	},
	DirElemConstructor: (path, print) => {
		const angleBracketOpen = path.map(print, "childrenByName", "'<'");
		const [qnamePartOpen, qnamePartClose] = path.map(print, "childrenByName", "QName");
		const dirAttributeList = path.map(print, "childrenByName", "DirAttributeList");
		const selfClose = printIfExist(path, print, "'/>'");

		const hasAttributes =
			path.node.childrenByName["DirAttributeList"][0].children.filter(({ name }) => name !== "S").length > 0;
		if (selfClose) {
			return group([
				angleBracketOpen,
				qnamePartOpen,
				hasAttributes ? indent([line, dirAttributeList]) : [],
				space,
				selfClose,
			]);
		}

		const dirElemContent = printIfExist(path, print, "DirElemContent");

		if (!dirElemContent) {
			// No content. If there would be comments for instance, the comments would show up as DirElemContent.
			// Safe to collapse.
			return group([
				angleBracketOpen,
				qnamePartOpen,
				hasAttributes ? indent([line, dirAttributeList]) : [],
				space,
				"/>",
			]);
		}

		const [firstAngleBracketClose, secondAngleBracketClose] = path.map(print, "childrenByName", "'>'");
		const closeElementStart = path.map(print, "childrenByName", "'</'");

		const indentDirElemContent = path.node.childrenByName.DirElemContent.length !== 1;

		return group([
			angleBracketOpen,
			qnamePartOpen,
			hasAttributes ? indent([line, dirAttributeList, softline]) : [],
			firstAngleBracketClose,
			indentDirElemContent ? indent(dirElemContent) : dirElemContent,
			closeElementStart,
			qnamePartClose,
			secondAngleBracketClose,
		]);
	},
	DirAttributeList: (path, print) => {
		if (!path.node.children.some(({ name }) => name !== "S")) {
			// Attribute list is empty
			return [];
		}
		// Whitespace is absolutely not significant here
		const attributeNames = path.map(print, "childrenByName", "QName");
		const attributeValues = path.map(print, "childrenByName", "DirAttributeValue");
		const equalitySigns = path.map(print, "childrenByName", "'='");

		const rawAttributeNames = path.node.childrenByName.QName;

		const tuples: { rawName: string; formatted: Doc }[] = [];

		for (let i = 0; i < rawAttributeNames.length; ++i) {
			const formatted = group([attributeNames[i], equalitySigns[i], attributeValues[i]]);
			tuples.push({ rawName: rawAttributeNames[i].getStringRepresentation(), formatted });
		}
		tuples.sort((a, b) => {
			if (a.rawName === b.rawName) {
				return 0;
			}
			const aIsDefaulNamespaceDeclaration = a.rawName === "xmlns";
			const bIsDefaulNamespaceDeclaration = b.rawName == "xmlns";

			if (aIsDefaulNamespaceDeclaration) {
				// xmlns is always first
				return -1;
			}

			if (bIsDefaulNamespaceDeclaration) {
				// xmlns is always first
				return 1;
			}

			const aIsNamespaceDeclaration = a.rawName.startsWith("xmlns");
			const bIsNamespaceDeclaration = b.rawName.startsWith("xmlns");
			if (aIsNamespaceDeclaration && !bIsNamespaceDeclaration) {
				// A before B
				return -1;
			}
			if (bIsNamespaceDeclaration && !aIsNamespaceDeclaration) {
				// B before A
				return 1;
			}

			return a.rawName < b.rawName ? -1 : 1;
		});

		return group(
			join(
				line,
				tuples.map(({ formatted }) => formatted),
			),
		);
	},
};

export default nodeConstructorHandlers;

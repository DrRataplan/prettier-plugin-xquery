import { type AstPath, doc, type Doc } from "prettier";
import printIfExist from "./util/printIfExists.ts";
import space from "./util/space.ts";
import type { Handler } from "./util/Handler.ts";
import type { NonTerminalNode } from "../tree.ts";

const { group, indent, softline, line, join, literallineWithoutBreakParent, dedent } = doc.builders;

const isContentChar = (node: NonTerminalNode): boolean => {
	if (node.childrenByName["ElementContentChar"]) {
		return true;
	}
	if (!node.childrenByName["CommonContent"]) {
		return false;
	}
	if (node.childrenByName["CommonContent"][0].childrenByName.EnclosedExpr) {
		return false;
	}
	return true;
};

const isWhitespace = (node: NonTerminalNode): boolean => {
	if (!node.childrenByName["ElementContentChar"]) {
		return false;
	}
	return /^\s$/.test(node.getStringRepresentation());
};

const isBoundaryPosition = (siblings: NonTerminalNode[], offset: number): boolean => {
	let isBoundaryToStart = true;
	let isBoundaryToEnd = true;

	for (let i = offset - 1; i >= 0; i--) {
		const node = siblings[i];
		if (!isContentChar(node)) {
			// An element ended here
			isBoundaryToStart = true;
			break;
		}
		if (!isWhitespace(node)) {
			isBoundaryToStart = false;
			break;
		}
	}
	for (let i = offset; i < siblings.length; i++) {
		const node = siblings[i];
		if (!isContentChar(node)) {
			// An element starts here
			isBoundaryToEnd = true;
			break;
		}
		if (!isWhitespace(node)) {
			isBoundaryToEnd = false;
			break;
		}
	}
	return isBoundaryToStart && isBoundaryToEnd;
};

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
	DirElemConstructor: (path, print, options) => {
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

		const dirElemContentNodes = path.node.childrenByName.DirElemContent;
		const hasContent =
			dirElemContent &&
			(options.boundarySpace === "preserve" || dirElemContentNodes.some((child) => !isWhitespace(child)));

		if (!hasContent) {
			// No content. If there would be comments for instance, the comments would show up as DirElemContent.
			// Safe to collapse.
			return group([
				group([angleBracketOpen, qnamePartOpen, hasAttributes ? indent([line, dirAttributeList]) : []]),
				space,
				"/>",
			]);
		}

		const [firstAngleBracketClose, secondAngleBracketClose] = path.map(print, "childrenByName", "'>'");
		const closeElementStart = path.map(print, "childrenByName", "'</'");

		let formattedDirElemContents: Doc = dirElemContent;

		// Indent the contents once, always

		if (options.boundarySpace === "strip") {
			if (isBoundaryPosition(dirElemContentNodes, 0)) {
				formattedDirElemContents = [softline, formattedDirElemContents];
			}
			formattedDirElemContents = [indent(formattedDirElemContents)];
			if (isBoundaryPosition(dirElemContentNodes, dirElemContentNodes.length)) {
				formattedDirElemContents = [formattedDirElemContents, softline];
			}
		} else {
			formattedDirElemContents = [indent(formattedDirElemContents)];
		}

		return group([
			group([
				angleBracketOpen,
				qnamePartOpen,
				hasAttributes ? indent([line, dirAttributeList]) : [],
				softline,
				firstAngleBracketClose,
			]),
			group(formattedDirElemContents),
			group([closeElementStart, qnamePartClose, secondAngleBracketClose]),
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
			const formatted = [attributeNames[i], equalitySigns[i], attributeValues[i]];
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

		// Note: do not group these: the grouping should happen in the DirElemConstructor
		return join(
			line,
			tuples.map(({ formatted }) => formatted),
		);
	},
	DirElemContent: (path, print, options) => {
		// If we're preserving boundary spaces, output verbatim
		if (options.boundarySpace === "preserve") {
			if (path.node.childrenByName["ElementContentChar"]) {
				if (path.node.getStringRepresentation() === "\n") {
					// Do not just output a `\n` because that makes prettier continue counting the line-width, causing
					// things to break too early.
					return literallineWithoutBreakParent;
				}
			}
			return path.map(print, "children");
		}

		// Strip boundary space and rebuild it from indentation levels
		if (path.node.childrenByName["ElementContentChar"]) {
			if (isWhitespace(path.node)) {
				if (isBoundaryPosition(path.siblings!, path.index!)) {
					// Strip boundary whitespace and replace it with a softline.
					if (path.isFirst) {
						return [];
					}
					if (isWhitespace(path.previous!)) {
						// Multiple consecutive boundary space: replace them with just one
						return [];
					}
					let isOnlyWhitespaceToEnd = true;
					const siblings = path.siblings!;
					for (let i = path.index!; i < siblings.length; i++) {
						if (!isWhitespace(siblings[i])) {
							isOnlyWhitespaceToEnd = false;
							break;
						}
					}
					if (isOnlyWhitespaceToEnd) {
						// The DirElemConstructor will take care of the softline in here.
						return [];
					}
					return softline;
				}
				if (path.previous && isContentChar(path.previous!)) {
					// Whitespace in the middle of character data: great place for a soft-wrap. return group(line)
					//	instead to wrap long lines. Disabled because that does change significant whitespace TODO? Make
					//	this an option?
					return path.map(print, "children");
				}
			}
			// Normal character, likely in the middle of a word. Just output
			return path.map(print, "children");
		}
		// Another node constructor. Add a softline in from of it to make it look nice, but not if we're at the start of the element
		if (isBoundaryPosition(path.siblings!, path.index!) && path.previous && !isWhitespace(path.previous)) {
			return [softline, path.map(print, "children")];
		}
		return path.map(print, "children");
	},
};

export default nodeConstructorHandlers;

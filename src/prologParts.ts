import { doc, type AstPath, type Doc } from "prettier";
import printIfExist from "./printIfExists.ts";
import type { NonTerminalNode } from "./tree.ts";
import space from "./space.ts";
import { type Print } from "./util/Print.ts";
import joinChildrenWithSpaces from "./util/joinChildrenWithSpaces.ts";

const { join, group, hardline } = doc.builders;

const prologPartHandlers: Record<string, (path: AstPath<NonTerminalNode>, print: Print) => Doc> = {
	VersionDecl: (path, print) => {
		const xqueryKeyword = printIfExist(path, print, "'xquery'");
		const encodingKeyword = printIfExist(path, print, "'encoding'");
		const versionKeyword = printIfExist(path, print, "'version'");
		const [firstStringLiteral, secondStringLiteral] = printIfExist(path, print, "StringLiteral");

		const items: Doc = [xqueryKeyword, space];
		if (versionKeyword) {
			items.push(versionKeyword, space, firstStringLiteral);
			if (encodingKeyword) {
				items.push(space, encodingKeyword, space, secondStringLiteral);
			}
		} else {
			items.push(encodingKeyword, space, firstStringLiteral);
		}

		return group([items, ";", hardline, hardline]);
	},
	LibraryModule: (path, print) => {
		return group([join(hardline, path.map(print, "children")), hardline, hardline]);
	},
	ModuleDecl: (path, print) => {
		const prefixPart = path.map(print, "childrenByName", "NCName");
		const uriPart = path.map(print, "childrenByName", "URILiteral");
		return group(["module", space, "namespace", space, prefixPart, space, "=", space, uriPart, ";"]);
	},
	NamespaceDecl: (path, print) => {
		const prefixPart = path.map(print, "childrenByName", "NCName");
		const uriPart = path.map(print, "childrenByName", "URILiteral");
		return group(["declare", space, "namespace", space, prefixPart, space, "=", space, uriPart]);
	},

	SchemaImport: (path, print) => {
		const prefixPart = printIfExist(path, print, "SchemaPrefix");
		// First is the module URI, the rest are location hints
		const [uriPart, ...locationHints] = path.map(print, "childrenByName", "URILiteral");
		const atKeyword = printIfExist(path, print, "'at'");
		const locationHintParts = locationHints.length
			? [
					space,
					atKeyword,
					space,
					join(
						",",
						locationHints.map((locationHint) => [space, locationHint]),
					),
				]
			: [];
		return group([
			"import",
			space,
			"schema",
			space,
			prefixPart ? [prefixPart, space] : [],
			space,
			uriPart,
			locationHintParts,
		]);
	},
	SchemaPrefix: (path, print) => {
		const ncNamePart = printIfExist(path, print, "NCName");
		const namespaceKeyword = printIfExist(path, print, "'namespace'");

		if (ncNamePart) {
			return group([namespaceKeyword, space, ncNamePart, space, "="]);
		}
		const defaultKeyword = printIfExist(path, print, "'default'");
		const elementKeyword = printIfExist(path, print, "'element'");
		return group([defaultKeyword, space, elementKeyword, space, namespaceKeyword]);
	},
	ContextItemDecl: joinChildrenWithSpaces,
	DefaultCollationDecl: joinChildrenWithSpaces,
	BaseURIDecl: joinChildrenWithSpaces,
	ConstructionDecl: joinChildrenWithSpaces,
	OrderingModeDecl: joinChildrenWithSpaces,
	EmptyOrderDecl: joinChildrenWithSpaces,
	CopyNamespacesDecl: joinChildrenWithSpaces,
	DecimalFormatDecl: joinChildrenWithSpaces,
	BoundarySpaceDecl: joinChildrenWithSpaces,
	DefaultNamespaceDecl: joinChildrenWithSpaces,
	ModuleImport: (path, print) => {
		const prefixPart = path.node.childrenByName["NCName"]
			? ["namespace", space, path.map(print, "childrenByName", "NCName"), space, "=", space]
			: [];
		// First is the module URI, the rest are location hints
		const [uriPart, ...locationHints] = path.map(print, "childrenByName", "URILiteral");
		const atKeyword = printIfExist(path, print, "'at'");
		const locationHintParts = locationHints.length
			? [
					space,
					atKeyword,
					join(
						",",
						locationHints.map((locationHint) => [space, locationHint]),
					),
				]
			: [];
		return group(["import", space, "module", space, prefixPart, uriPart, locationHintParts]);
	},
	Prolog: (path, print) => {
		if (!path.node.children.length) {
			return [];
		}
		const endWithSeparator = (part: Doc[] | null, joinWithHardlines = false) =>
			part
				? [part.map((p) => [p, ";", hardline, joinWithHardlines ? hardline : []]), !joinWithHardlines ? hardline : []]
				: [];

		const defaultNamespaceDeclPart = endWithSeparator(printIfExist(path, print, "DefaultNamespaceDecl"));
		const setterPart = endWithSeparator(printIfExist(path, print, "Setter"));
		const namespaceDeclPart = endWithSeparator(printIfExist(path, print, "NamespaceDecl"));
		const importPart = endWithSeparator(printIfExist(path, print, "Import"));
		const contextItemDeclPart = endWithSeparator(printIfExist(path, print, "ContextItemDecl"));
		const annotatedDeclPart = endWithSeparator(printIfExist(path, print, "AnnotatedDecl"), true);
		const optionDeclPart = endWithSeparator(printIfExist(path, print, "OptionDecl"));

		return group([
			defaultNamespaceDeclPart,
			setterPart,
			namespaceDeclPart,
			importPart,
			contextItemDeclPart,
			annotatedDeclPart,
			optionDeclPart,
		]);
	},
	OptionDecl: (path, print) => {
		const declareKeyword = path.map(print, "childrenByName", "'declare'");
		const optionKeyword = path.map(print, "childrenByName", "'option'");
		const namePart = path.map(print, "childrenByName", "EQName");
		const stringLiteralPart = path.map(print, "childrenByName", "StringLiteral");
		return group([declareKeyword, space, optionKeyword, space, namePart, space, stringLiteralPart]);
	},
};

export default prologPartHandlers;

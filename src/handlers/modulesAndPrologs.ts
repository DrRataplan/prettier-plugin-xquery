import { doc } from "prettier";
import type { AstPath, Doc } from "prettier";
import type { NonTerminalNode } from "../tree.ts";
import space from "./util/space.ts";
import { type Print } from "./util/Print.ts";
import printIfExist from "./util/printIfExists.ts";
import joinChildrenWithSpaces from "./util/joinChildrenWithSpaces.ts";

const { join, group, hardline, softline, indent, line } = doc.builders;

const modulesAndPrologsHandlers: Record<string, (path: AstPath<NonTerminalNode>, print: Print) => Doc> = {
	VersionDecl: (path, print) => {
		const xqueryKeyword = path.map(print, "childrenByName", "'xquery'");
		const encodingKeyword = printIfExist(path, print, "'encoding'");
		const versionKeyword = printIfExist(path, print, "'version'");
		const [firstStringLiteral, secondStringLiteral] = path.map(print, "childrenByName", "StringLiteral");

		const items: Doc = [xqueryKeyword, space];
		if (versionKeyword) {
			items.push(versionKeyword, space, firstStringLiteral);
			if (encodingKeyword) {
				items.push(space, encodingKeyword, space, secondStringLiteral);
			}
		} else {
			items.push(encodingKeyword!, space, firstStringLiteral);
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
					atKeyword!,
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
		const namespaceKeyword = path.map(print, "childrenByName", "'namespace'");

		if (ncNamePart) {
			return group([namespaceKeyword, space, ncNamePart, space, "="]);
		}
		const defaultKeyword = path.map(print, "childrenByName", "'default'");
		const elementKeyword = path.map(print, "childrenByName", "'element'");
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
					atKeyword!,
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
	AnnotatedDecl: (path, print) => {
		const declareKeyword = path.map(print, "childrenByName", "'declare'");
		const annotationsPart = printIfExist(path, print, "Annotation") ?? [];
		const actualDeclaration = printIfExist(path, print, "VarDecl") ?? printIfExist(path, print, "FunctionDecl") ?? [];

		return group([
			group([declareKeyword, annotationsPart.length ? space : [], indent([join(line, annotationsPart), line])]),
			actualDeclaration,
		]);
	},

	FunctionDecl: (path, print) => {
		const functionKeyword = path.map(print, "childrenByName", "'function'");
		const eQNamePart = path.map(print, "childrenByName", "EQName");
		const paramListPart = path.node.childrenByName["ParamList"] ? path.map(print, "childrenByName", "ParamList") : [];
		const asKeyword = printIfExist(path, print, "'as'");
		const typeDeclarationPart = path.node.childrenByName["SequenceType"]
			? [asKeyword!, space, path.map(print, "childrenByName", "SequenceType"), space]
			: [];

		const functionBodyPart =
			printIfExist(path, print, "FunctionBody") ?? path.map(print, "childrenByName", "'external'");

		return group([
			group([
				functionKeyword,
				space,
				eQNamePart,
				space,
				"(",
				indent([softline, paramListPart]),
				softline,
				")",
				space,
				typeDeclarationPart,
			]),
			functionBodyPart,
		]);
	},

	VarDecl: (path, print) => {
		const variableKeyword = path.map(print, "childrenByName", "'variable'");
		const eQNamePart = path.map(print, "childrenByName", "VarName");
		const asKeyword = printIfExist(path, print, "'as'");
		const typeDeclarationPart = path.node.childrenByName["SequenceType"]
			? [asKeyword!, space, path.map(print, "childrenByName", "SequenceType"), space]
			: [];

		const varValuePart = printIfExist(path, print, "VarValue");
		const toReturn: Doc[] = [variableKeyword, space, "$", eQNamePart, space, typeDeclarationPart];
		const externalKeyword = printIfExist(path, print, "'external'");
		if (externalKeyword) {
			toReturn.push(externalKeyword);
			if (varValuePart) {
				toReturn.push(space);
			}
		}
		if (varValuePart) {
			const walrusKeyword = path.map(print, "childrenByName", "':='");
			toReturn.push(walrusKeyword, space, varValuePart);
		}

		return group(toReturn);
	},
	Param: (path, print) => {
		const namePart = path.map(print, "childrenByName", "EQName");
		if (!path.node.childrenByName["TypeDeclaration"]) {
			return group(["$", namePart]);
		}
		const typeDeclarationPart = path.map(print, "childrenByName", "TypeDeclaration");
		return group(["$", namePart, space, typeDeclarationPart]);
	},
	ParamList: (path, print) => {
		const params = path.map(print, "childrenByName", "Param");
		return join([",", line], params);
	},
};

export default modulesAndPrologsHandlers;

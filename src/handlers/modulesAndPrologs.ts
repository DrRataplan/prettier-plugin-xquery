import { doc, util } from "prettier";
import type { Doc } from "prettier";
import space from "./util/space.ts";
import printIfExist from "./util/printIfExists.ts";
import joinChildrenWithSpaces from "./util/joinChildrenWithSpaces.ts";
import type { Handler } from "./util/Handler.ts";
import type { Node, NonTerminalNode } from "../tree.ts";

const { join, group, hardline, softline, indent, line } = doc.builders;

const modulesAndPrologsHandlers: Record<string, Handler> = {
	VersionDecl: (path, print) => {
		const xqueryKeyword = path.map(print, "childrenByName", "'xquery'");
		const encodingKeyword = printIfExist(path, print, "'encoding'");
		const versionKeyword = printIfExist(path, print, "'version'");
		const separator = path.map(print, "childrenByName", "Separator");
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

		return group([items, separator]);
	},
	Module: (path, print) => {
		const versionDeclPart = printIfExist(path, print, "VersionDecl");
		const libraryModulePart = printIfExist(path, print, "LibraryModule");

		const formatted: Doc[] = [];

		if (versionDeclPart) {
			formatted.push(versionDeclPart, hardline, hardline);
		}
		if (libraryModulePart) {
			formatted.push(libraryModulePart);
		} else {
			const mainModulePart = path.map(print, "childrenByName", "MainModule");
			formatted.push(mainModulePart);
		}
		return group([formatted, hardline]);
	},

	LibraryModule: (path, print) => {
		const moduleDeclPart = path.map(print, "childrenByName", "ModuleDecl");
		const prologPart = path.map(print, "childrenByName", "Prolog");
		return group([moduleDeclPart.length ? [moduleDeclPart, hardline, hardline] : [], prologPart]);
	},
	ModuleDecl: (path, print) => {
		const moduleKeyword = path.map(print, 'childrenByName', "'module'");
		const namespaceKeyword = path.map(print, 'childrenByName', "'namespace'");
		const prefixPart = path.map(print, "childrenByName", "NCName");
		const uriPart = path.map(print, "childrenByName", "URILiteral");
		const separatorPart = path.map(print, "childrenByName", "Separator");

		return group([moduleKeyword, space, namespaceKeyword, space, prefixPart, space, "=", space, uriPart, separatorPart]);
	},
	NamespaceDecl: (path, print) => {
		const declareKeyword = path.map(print, 'childrenByName', "'declare'");
		const namespaceKeyword = path.map(print, 'childrenByName', "'namespace'");
		const prefixPart = path.map(print, "childrenByName", "NCName");
		const uriPart = path.map(print, "childrenByName", "URILiteral");
		return group([declareKeyword, space, namespaceKeyword, space, prefixPart, space, "=", space, uriPart]);
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
	BoundarySpaceDecl: (path, print, options) => {
		const boundarySpaceOption = path.node.childrenByName["'strip'"] ? 'strip' : 'preserve';
		options.boundarySpace = boundarySpaceOption;
		return joinChildrenWithSpaces(path, print)
	},
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

		const endWithSeparator = (part: Doc[] | null, astNodes: Node[], joinWithHardlines = false): Doc | null => {
			if (!part) {
				return null;
			}
			const transformed = part.map((p, i) => [p, separatorByPart.get(astNodes[i])!]);

			return join(joinWithHardlines ? [hardline, hardline] : [hardline], transformed);
		};

		const separatorByPart = path.node.children.reduce<Map<Node, Doc>>((map, part, i) => {
			if (part.name === "Separator") {
				return map;
			}
			return map.set(part, path.call(print, "children", i + 1));
		}, new Map<Node, Doc>());

		const defaultNamespaceDeclPart = endWithSeparator(
			printIfExist(path, print, "DefaultNamespaceDecl"),
			path.node.childrenByName.DefaultNamespaceDecl,
		);

		const setterPart = endWithSeparator(printIfExist(path, print, "Setter"), path.node.childrenByName.Setter);

		const namespaceDeclPart = endWithSeparator(
			printIfExist(path, print, "NamespaceDecl"),
			path.node.childrenByName.NamespaceDecl,
		);

		const importPart = endWithSeparator(printIfExist(path, print, "Import"), path.node.childrenByName.Import);

		const contextItemDeclPart = endWithSeparator(
			printIfExist(path, print, "ContextItemDecl"),
			path.node.childrenByName.ContextItemDecl,
		);

		const annotatedDeclPart = endWithSeparator(
			printIfExist(path, print, "AnnotatedDecl"),
			path.node.childrenByName.AnnotatedDecl,
			true,
		);

		const optionDeclPart = endWithSeparator(
			printIfExist(path, print, "OptionDecl"),
			path.node.childrenByName.OptionDecl,
		);

		return group([
			join(
				[hardline, hardline],
				[
					defaultNamespaceDeclPart,
					setterPart,
					namespaceDeclPart,
					importPart,
					contextItemDeclPart,
					annotatedDeclPart,
					optionDeclPart,
				]
					.filter((p) => p !== null)
					.map((p) => p!),
			),
		]);
	},
	MainModule: (path, print) => {
		const prologPart = path.map(print, "childrenByName", "Prolog");
		const queryBodyPart = path.map(print, "childrenByName", "QueryBody");

		// Skip newlines after empty prologs. But still print them in case they have comments
		if ((path.node.childrenByName.Prolog[0] as NonTerminalNode).children.length === 0) {
			return group([prologPart, queryBodyPart]);
		}

		return group([prologPart.length ? [prologPart, hardline, hardline] : [], queryBodyPart]);
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

		const parenOpenKeyword = path.map(print, "childrenByName", "'('");
		const parenCloseKeyword = path.map(print, "childrenByName", "')'");

		return group([
			group([
				functionKeyword,
				space,
				eQNamePart,
				space,
				parenOpenKeyword,
				indent([softline, paramListPart]),
				softline,
				parenCloseKeyword,
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

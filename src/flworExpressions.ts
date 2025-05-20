import { doc } from "prettier";
import type { AstPath, Doc } from "prettier";
import printIfExist from "./printIfExists.ts";
import type { NonTerminalNode } from "./tree.ts";
import space from "./space.ts";
import { type Print } from "./util/Print.ts";
import joinChildrenWithSpaces from "./util/joinChildrenWithSpaces.ts";

const { join, line, group, indent, hardline } = doc.builders;

const flworExpressionHandlers: Record<string, (path: AstPath<NonTerminalNode>, print: Print) => Doc> = {
	FLWORExpr: (path, print) => {
		const initialClausePart = path.map(print, "childrenByName", "InitialClause");
		const intermediateClausePart = printIfExist(path, print, "IntermediateClause") ?? [];
		const returnClausePart = path.map(print, "childrenByName", "ReturnClause");

		return group([
			initialClausePart,
			hardline,
			join(hardline, intermediateClausePart),
			intermediateClausePart.length ? hardline : [],
			indent(returnClausePart),
		]);
	},
	GroupByClause: (path, print) => {
		const groupKeyword = path.map(print, "childrenByName", "'group'");
		const byKeyword = path.map(print, "childrenByName", "'by'");

		const specListPart = path.map(print, "childrenByName", "GroupingSpecList");

		return group([groupKeyword, space, byKeyword, space, specListPart]);
	},
	GroupingSpecList: (path, print) => {
		const specs = path.map(print, "childrenByName", "GroupingSpec");
		return indent(join([",", line], specs));
	},
	GroupingSpec: (path, print) => {
		const variablePart = path.map(print, "childrenByName", "GroupingVariable");
		const typeDeclPart = printIfExist(path, print, "TypeDeclaration");
		const exprSinglePart = printIfExist(path, print, "ExprSingle");
		const collationKeyword = printIfExist(path, print, "'collation'");
		const uriLiteralPart = printIfExist(path, print, "URILiteral");

		const parts: Doc[] = [variablePart];
		if (exprSinglePart) {
			if (typeDeclPart) {
				parts.push(space, typeDeclPart, space);
			}
			const walrusKeyword = printIfExist(path, print, "':='");
			parts.push(walrusKeyword, indent([line, exprSinglePart]));
		}
		if (collationKeyword) {
			parts.push(collationKeyword, uriLiteralPart);
		}
		return group(parts);
	},
	OrderByClause: (path, print) => {
		const orderKeyword = path.map(print, "childrenByName", "'order'");
		const byKeyword = path.map(print, "childrenByName", "'by'");
		const stableKeyword = printIfExist(path, print, "'stable'");

		const specListPart = path.map(print, "childrenByName", "OrderSpecList");

		return group([stableKeyword ? [stableKeyword, space] : [], orderKeyword, space, byKeyword, space, specListPart]);
	},
	OrderSpecList: (path, print) => {
		const specs = path.map(print, "childrenByName", "OrderSpec");
		return indent(join([",", line], specs));
	},
	OrderSpec: (path, print) => {
		const exprSinglePart = path.map(print, "childrenByName", "ExprSingle");
		const orderModifierPart = path.map(print, "childrenByName", "OrderModifier");

		return group([exprSinglePart, space, orderModifierPart]);
	},
	OrderModifier: (path, print) => {
		if (path.node.children.length === 0) {
			return [];
		}
		return join(space, path.map(print, "children"));
	},
	WhereClause: (path, print) => {
		const whereKeyword = path.map(print, "childrenByName", "'where'");
		const exprSinglePart = path.map(print, "childrenByName", "ExprSingle");
		return group([whereKeyword, space, exprSinglePart]);
	},
	IntermediateClause: joinChildrenWithSpaces,
	InitialClause: (path, print) => {
		return group([path.map(print, "children")]);
	},
	ForClause: (path, print) => {
		return group(["for", space, indent([join([",", line], path.map(print, "childrenByName", "ForBinding"))])]);
	},
	LetClause: (path, print) => {
		return group(["let", space, indent([join([",", line], path.map(print, "childrenByName", "LetBinding"))])]);
	},
	LetBinding: (path, print) => {
		const varNamePart = path.map(print, "childrenByName", "VarName");
		const exprSinglePart = path.map(print, "childrenByName", "ExprSingle");
		const typeDeclPart = printIfExist(path, print, "TypeDeclaration");
		const walrusKeyword = printIfExist(path, print, "':='");
		return group([
			"$",
			varNamePart,
			space,
			typeDeclPart ? [typeDeclPart, space] : [],
			walrusKeyword,
			line,
			exprSinglePart,
		]);
	},
	ForBinding: (path, print) => {
		const varNamePart = path.map(print, "childrenByName", "VarName");
		const exprSinglePart = path.map(print, "childrenByName", "ExprSingle");
		const typeDeclPart = printIfExist(path, print, "TypeDeclaration");
		return group(["$", varNamePart, space, typeDeclPart ? [typeDeclPart, space] : [], "in", line, exprSinglePart]);
	},
	TumblingWindowClause: (path, print) => {
		const tumblingKeyword = path.map(print, "childrenByName", "'tumbling'");
		const windowKeyword = path.map(print, "childrenByName", "'window'");
		const varNamePart = path.map(print, "childrenByName", "VarName");
		const typeDeclPart = printIfExist(path, print, "TypeDeclaration");

		const inKeyword = path.map(print, "childrenByName", "'in'");
		const exprSinglePart = printIfExist(path, print, "ExprSingle");
		const windowStartConditionPart = printIfExist(path, print, "WindowStartCondition");
		const windowEndConditionPart = printIfExist(path, print, "WindowEndCondition");

		return group([
			tumblingKeyword,
			space,
			windowKeyword,
			space,
			"$",
			varNamePart,
			space,
			typeDeclPart ? [typeDeclPart, space] : [],
			inKeyword,
			space,
			exprSinglePart,
			indent([hardline, windowStartConditionPart, hardline, windowEndConditionPart ?? []]),
		]);
	},
	SlidingWindowClause: (path, print) => {
		const slidingKeyword = path.map(print, "childrenByName", "'sliding'");
		const windowKeyword = path.map(print, "childrenByName", "'window'");
		const varNamePart = path.map(print, "childrenByName", "VarName");
		const typeDeclPart = printIfExist(path, print, "TypeDeclaration");

		const inKeyword = path.map(print, "childrenByName", "'in'");
		const exprSinglePart = printIfExist(path, print, "ExprSingle");
		const windowStartConditionPart = printIfExist(path, print, "WindowStartCondition");
		const windowEndConditionPart = printIfExist(path, print, "WindowEndCondition");

		return group([
			slidingKeyword,
			space,
			windowKeyword,
			space,
			"$",
			varNamePart,
			space,
			typeDeclPart ? [typeDeclPart, space] : [],
			inKeyword,
			space,
			exprSinglePart,
			indent([hardline, windowStartConditionPart, hardline, windowEndConditionPart]),
		]);
	},
	PositionalVar: (path, print) => {
		const varNamePart = path.map(print, "childrenByName", "VarName");
		return group(["at", space, "$", varNamePart]);
	},
	WindowClause: joinChildrenWithSpaces,
	WindowStartCondition: joinChildrenWithSpaces,
	WindowEndCondition: joinChildrenWithSpaces,
	WindowVars: (path, print) => {
		const currentItemPart = printIfExist(path, print, "CurrentItem");
		const positionalVarPart = printIfExist(path, print, "PositionalVar");
		const previousItemPart = printIfExist(path, print, "PreviousItem");
		const nextItemPart = printIfExist(path, print, "NextItem");

		const parts: Doc[] = [];
		if (currentItemPart) {
			parts.push(["$", currentItemPart]);
		}
		if (positionalVarPart) {
			parts.push([positionalVarPart]);
		}
		if (previousItemPart) {
			parts.push(["previous", space, "$", previousItemPart]);
		}
		if (nextItemPart) {
			parts.push(["next", space, "$", nextItemPart]);
		}

		return join(line, parts);
	},
	ReturnClause: (path, print) => {
		const returnKeyword = path.map(print, "childrenByName", "'return'");
		const exprSinglePart = path.map(print, "childrenByName", "ExprSingle");
		return group([returnKeyword, space, exprSinglePart]);
	},
};

export default flworExpressionHandlers;

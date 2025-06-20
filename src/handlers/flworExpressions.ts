import { doc, type Doc, util } from "prettier";
import space from "./util/space.ts";
import printIfExist from "./util/printIfExists.ts";
import joinChildrenWithSpaces from "./util/joinChildrenWithSpaces.ts";
import type { Handler } from "./util/Handler.ts";
import isPreviousLineEmpty from "./util/isPreviousLineEmpty.ts";
import printComment from "./util/printComment.ts";

const { join, line, group, indent, hardline, ifBreak } = doc.builders;

const flworExpressionHandlers: Record<string, Handler> = {
	FLWORExpr: (path, print) => {
		const initialClausePart = path.map(print, "childrenByName", "InitialClause");
		const intermediateClausePart = printIfExist(path, print, "IntermediateClause") ?? [];
		const returnClausePart = path.map(print, "childrenByName", "ReturnClause");

		return group([
			initialClausePart,
			hardline,
			join(hardline, intermediateClausePart),
			intermediateClausePart.length ? hardline : [],
			returnClausePart,
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

		const parts: Doc[] = [variablePart];
		if (exprSinglePart) {
			const thisPart = [];
			if (typeDeclPart) {
				thisPart.push(typeDeclPart, space);
			}

			const walrusKeyword = path.map(print, "childrenByName", "':='");
			thisPart.push(walrusKeyword, indent([line, exprSinglePart]));
			parts.push([thisPart]);
		}
		if (collationKeyword) {
			const uriLiteralPart = path.map(print, "childrenByName", "URILiteral");
			parts.push([collationKeyword, indent([line, uriLiteralPart])]);
		}
		return group(indent(join(line, parts)));
	},
	OrderByClause: (path, print) => {
		const orderKeyword = path.map(print, "childrenByName", "'order'");
		const byKeyword = path.map(print, "childrenByName", "'by'");
		const stableKeyword = printIfExist(path, print, "'stable'");

		const specListPart = path.map(print, "childrenByName", "OrderSpecList");

		return group([
			stableKeyword ? [stableKeyword, space] : [],
			orderKeyword,
			space,
			byKeyword,
			space,
			specListPart,
		]);
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
	IntermediateClause: (path, print, options) => {
		const result: Doc[] = [];
		if (isPreviousLineEmpty(path.node, options)) {
			result.unshift(hardline);
		}
		if (path.node.comments) {
			for (const comment of path.node.comments) {
				result.push(printComment(comment));
				comment.printed = true;
			}
			result.push(line);
		}

		result.push(path.map(print, "children"));
		return result;
	},
	InitialClause: (path, print) => {
		const result: Doc[] = path.map(print, "children");
		return result;
	},
	ForClause: (path, print) => {
		const forKeyword = path.map(print, "childrenByName", "'for'");
		const result: Doc[] = [
			forKeyword,
			space,
			indent([join([",", line], path.map(print, "childrenByName", "ForBinding"))]),
		];
		return group(result);
	},
	LetClause: (path, print) => {
		const letKeyword = path.map(print, "childrenByName", "'let'");

		const formattedLetBindings = path.map(print, "childrenByName", "LetBinding");

		const result: Doc[] = [
			letKeyword,
			space,
			formattedLetBindings.length > 1 ? indent([join([",", line], formattedLetBindings)]) : formattedLetBindings,
		];
		return group(result);
	},
	LetBinding: (path, print) => {
		const toReturn: Doc[] = [];
		const varNamePart = path.map(print, "childrenByName", "VarName");
		const typeDeclPart = printIfExist(path, print, "TypeDeclaration");
		const walrusKeyword = path.map(print, "childrenByName", "':='");

		const exprSinglePart = path.map(print, "childrenByName", "ExprSingle");

		toReturn.push("$", varNamePart, space);
		if (typeDeclPart) {
			toReturn.push(typeDeclPart, space);
		}
		// If we are outputting a nested FLWOR expression, force an indent. those indents are needed for readability
		const childIsFLWOR = path.node.childrenByName.ExprSingle[0].childrenByName.FLWORExpr;
		// Break here as a last resort, if the variable value really cannot be cut down. Just output a space otherwise
		const valuePart = childIsFLWOR ? [indent([line, exprSinglePart])] : [group(line), exprSinglePart];
		toReturn.push(walrusKeyword, valuePart);

		return toReturn;
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
		const exprSinglePart = path.map(print, "childrenByName", "ExprSingle");
		const windowStartConditionPart = path.map(print, "childrenByName", "WindowStartCondition");
		const windowEndConditionPart = printIfExist(path, print, "WindowEndCondition");

		const conditionParts: Doc[] = [windowStartConditionPart];
		if (windowEndConditionPart) {
			conditionParts.push(windowEndConditionPart);
		}
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
			indent([hardline, join(hardline, conditionParts)]),
		]);
	},
	SlidingWindowClause: (path, print) => {
		const slidingKeyword = path.map(print, "childrenByName", "'sliding'");
		const windowKeyword = path.map(print, "childrenByName", "'window'");
		const varNamePart = path.map(print, "childrenByName", "VarName");
		const typeDeclPart = printIfExist(path, print, "TypeDeclaration");

		const inKeyword = path.map(print, "childrenByName", "'in'");
		const exprSinglePart = path.map(print, "childrenByName", "ExprSingle");
		const windowStartConditionPart = path.map(print, "childrenByName", "WindowStartCondition");
		const windowEndConditionPart = path.map(print, "childrenByName", "WindowEndCondition");

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
	ReturnClause: (path, print, options) => {
		const returnKeyword = path.map(print, "childrenByName", "'return'");
		const exprSinglePart = path.map(print, "childrenByName", "ExprSingle");
		const result: Doc[] = [];

		if (isPreviousLineEmpty(path.node, options)) {
			result.unshift(hardline);
		}
		if (path.node.comments) {
			for (const comment of path.node.comments) {
				result.push(printComment(comment));
				comment.printed = true;
			}
			result.push(line);
		}

		result.push(returnKeyword, space, indent(exprSinglePart));
		return group(result);
	},
};

export default flworExpressionHandlers;

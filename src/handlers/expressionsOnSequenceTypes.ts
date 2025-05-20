import { doc } from "prettier";
import type { AstPath, Doc } from "prettier";
import type { NonTerminalNode } from "../tree.ts";
import space from "./util/space.ts";
import { type Print } from "./util/Print.ts";
import printIfExist from "./util/printIfExists.ts";

const { join, group, indent, hardline } = doc.builders;

const expressionsOnSequenceTypesHandlers: Record<string, (path: AstPath<NonTerminalNode>, print: Print) => Doc> = {
	InstanceofExpr: (path, print) => {
		const treatExprPart = path.map(print, "childrenByName", "TreatExpr");
		const instanceKeyword = printIfExist(path, print, "'instance'");

		if (!instanceKeyword) {
			return treatExprPart;
		}
		const ofKeyword = path.map(print, "childrenByName", "'of'");
		const sequenceTypePart = path.map(print, "childrenByName", "SequenceType");

		return [treatExprPart, space, instanceKeyword, space, ofKeyword, space, sequenceTypePart];
	},
	CastExpr: (path, print) => {
		const arrowExprPart = path.map(print, "childrenByName", "ArrowExpr");
		const castKeyword = printIfExist(path, print, "'cast'");

		if (!castKeyword) {
			return arrowExprPart;
		}
		const asKeyword = path.map(print, "childrenByName", "'as'");
		const singleTypePart = path.map(print, "childrenByName", "SingleType");

		return [arrowExprPart, space, castKeyword, space, asKeyword, space, singleTypePart];
	},
	TreatExpr: (path, print) => {
		const castableExprPart = path.map(print, "childrenByName", "CastableExpr");
		const treatKeyword = printIfExist(path, print, "'treat'");

		if (!treatKeyword) {
			return castableExprPart;
		}
		const asKeyword = path.map(print, "childrenByName", "'as'");
		const sequenceTypePart = path.map(print, "childrenByName", "SequenceType");

		return [castableExprPart, space, treatKeyword, space, asKeyword, space, sequenceTypePart];
	},
	CastableExpr: (path, print) => {
		const castExprPart = path.map(print, "childrenByName", "CastExpr");
		const castableKeyword = printIfExist(path, print, "'castable'");

		if (!castableKeyword) {
			return castExprPart;
		}
		const asKeyword = path.map(print, "childrenByName", "'as'");
		const singleTypePart = path.map(print, "childrenByName", "SingleType");

		return [castExprPart, space, castableKeyword, space, asKeyword, space, singleTypePart];
	},
	TypeswitchExpr: (path, print) => {
		const switchPart = path.map(print, "childrenByName", "'typeswitch'");
		const exprPart = path.map(print, "childrenByName", "Expr");
		const switchCaseClausePart = path.map(print, "childrenByName", "CaseClause");
		const defaultPart = path.map(print, "childrenByName", "'default'");
		const returnPart = path.map(print, "childrenByName", "'return'");
		const exprSinglePart = path.map(print, "childrenByName", "ExprSingle");

		return group([
			switchPart,
			space,
			"(",
			exprPart,
			")",
			indent([
				hardline,
				join(hardline, switchCaseClausePart),
				hardline,
				hardline,
				defaultPart,
				space,
				returnPart,
				indent([hardline, exprSinglePart]),
			]),
		]);
	},
	CaseClause: (path, print) => {
		const caseKeyword = path.map(print, "childrenByName", "'case'");
		const varNamePart = printIfExist(path, print, "VarName");
		const sequenceTypeUnionPart = path.map(print, "childrenByName", "SequenceTypeUnion");
		const returnKeyword = path.map(print, "childrenByName", "'return'");
		const exprSingleParts = path.map(print, "childrenByName", "ExprSingle");

		return group([
			caseKeyword,
			space,
			varNamePart ? ["$", varNamePart, space, "as", space] : [],
			sequenceTypeUnionPart,
			space,
			returnKeyword,
			indent([hardline, exprSingleParts]),
		]);
	},
};

export default expressionsOnSequenceTypesHandlers;

import { doc } from "prettier";
import type { AstPath, Doc } from "prettier";
import type { NonTerminalNode } from "../tree.ts";
import space from "./util/space.ts";
import { type Print } from "./util/Print.ts";

const { line, group, softline, join } = doc.builders;

/**
 * Corresponds with everything introduced in the Types section in the XQuery specification
 */
const typeHandlers: Record<string, (path: AstPath<NonTerminalNode>, print: Print) => Doc> = {
	TypeDeclaration: (path, print) => {
		const sequenceTypePart = path.map(print, "childrenByName", "SequenceType");
		return group(["as", space, sequenceTypePart]);
	},
	FunctionTest: (path, print) => {
		return group(join(line, path.map(print, "children")));
	},
	TypedFunctionTest: (path, print) => {
		const functionKeyword = path.map(print, "childrenByName", "'function'");
		const asKeyword = path.map(print, "childrenByName", "'as'");
		const sequenceTypes = path.map(print, "childrenByName", "SequenceType");
		const returnType = sequenceTypes.pop()!;
		return group([
			functionKeyword,
			space,
			"(",
			group([softline, join([",", line], sequenceTypes)]),
			softline,
			")",
			line,
			asKeyword,
			space,
			returnType,
		]);
	},
};

export default typeHandlers;

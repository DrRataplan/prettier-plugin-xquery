import { doc } from "prettier";
import space from "./util/space.ts";
import type { Handler } from "./util/Handler.ts";

const { line, group, softline, join } = doc.builders;

/**
 * Corresponds with everything introduced in the Types section in the XQuery specification
 */
const typeHandlers: Record<string, Handler> = {
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

		const parenOpenKeyword = path.map(print, "childrenByName", "'('");
		const parenCloseKeyword = path.map(print, "childrenByName", "')'");

		return group([
			functionKeyword,
			space,
			parenOpenKeyword,
			group([softline, join([",", line], sequenceTypes)]),
			softline,
			parenCloseKeyword,
			line,
			asKeyword,
			space,
			returnType,
		]);
	},
};

export default typeHandlers;

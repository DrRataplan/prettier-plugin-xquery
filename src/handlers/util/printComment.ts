import { doc, type Doc } from "prettier";
import type { CommentNode } from "../../tree.ts";

const { literallineWithoutBreakParent, join, group } = doc.builders;

export default function printComment(node: CommentNode) {
	const result: Doc[] = [join(literallineWithoutBreakParent, node.value.split("\n"))];
	return group(result);
}

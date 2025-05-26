import { CommentNode } from "./tree.ts";

export default function findCommentsInWhitespace(input: string, startOffsetInScript: number): CommentNode[] {
	// XQuery comments can be nested.
	let nestedLevel = 0;
	let offset = 0;
	let currentComment = "";
	const foundComments: CommentNode[] = [];
	let commentStartOffset = 0;
	while (offset < input.length) {
		if (input[offset] === "(" && input[offset + 1] === ":") {
			// Comment start!
			nestedLevel++;
			if (nestedLevel === 1) {
				// Just started a comment
				commentStartOffset = offset;
			}
			offset += 2;
			continue;
		}
		if (input[offset] === ":" && input[offset + 1] === ")") {
			// Comment end!
			offset += 2;
			nestedLevel--;
			if (nestedLevel === 0) {
				foundComments.push(
					new CommentNode(
						startOffsetInScript + commentStartOffset,
						startOffsetInScript + offset,
						input.substring(commentStartOffset, offset),
					),
				);
			}
		}
		if (nestedLevel > 0) {
			// We are in a comment: add this to the current comment
			currentComment += input[offset];
		}
		offset++;
	}
	return foundComments;
}

import { doc, type Doc } from "prettier";
import type { CommentNode } from "../../tree.ts";

const { literallineWithoutBreakParent, join, hardlineWithoutBreakParent } = doc.builders;

function determineTypeOfComment(lines: string[]): "xqdoc" | "singleline" | "block" | "other" {
	if (lines[0].startsWith("(:~")) {
		// XQDoc block
		/**
		 * (:~
		 *  : A comment about the function or something
		 *  :)
		 */
		return "xqdoc";
	}

	if (lines.length === 1) {
		// (: A single line comment :)
		return "singleline";
	}

	for (let i = 1; i < lines.length; ++i) {
		const line = lines[i];
		if (!line.trimStart().startsWith(":")) {
			return "other";
		}
	}

	/**
	 * (:
	 *  : A normal block comment
	 *  :)
	 */
	return "block";
}

function ensureLeadingSpaceColon(lines: string[]) {
	const toReturn = [];
	for (let i = 0; i < lines.length; ++i) {
		const line = lines[i];
		// Remove all cruft
		let trimmedLine = line.trim();
		if (i === lines.length - 1) {
			if (trimmedLine === ":)") {
				// We're done!
				break;
			} else {
				// Block comments should always end their content with a newline:
				/**
				 * (:~
				 *  : contents
				 *  :)
				 */
				trimmedLine = trimmedLine.substring(0, trimmedLine.length - 2).trim();
			}
		}
		if (trimmedLine[0] === ":") {
			trimmedLine = trimmedLine.substring(1).trim();
		}

		// Normalize to correct format
		toReturn.push(` : ${trimmedLine}`);
	}

	toReturn.push(" :)");
	return toReturn;
}

export default function printComment(node: CommentNode): Doc {
	const lines = node.value.split("\n");
	switch (determineTypeOfComment(lines)) {
		case "xqdoc": {
			const [firstLine, ...rest] = lines;
			const trimmedFirstLine = firstLine.trim();
			if (trimmedFirstLine !== "(:~") {
				// Add the rest of the first line to the second line
				rest.unshift(trimmedFirstLine.substring(3));
			}

			return join(hardlineWithoutBreakParent, ["(:~", ...ensureLeadingSpaceColon(rest)]);
		}
		case "singleline": {
			const contentsWithoutCommentMarkers = node.value.substring(2, node.value.length - 2).trim();
			return `(: ${contentsWithoutCommentMarkers} :)`;
		}
		case "block": {
			const [firstLine, ...rest] = lines;
			const trimmedFirstLine = firstLine.trim();
			if (trimmedFirstLine !== "(:") {
				// Add the rest of the first line to the second line
				rest.unshift(trimmedFirstLine.substring(2));
			}
			return join(hardlineWithoutBreakParent, ["(:", ...ensureLeadingSpaceColon(rest)]);
		}
		case "other": {
			const [firstLine, ...rest] = lines;
			const fixedFirstLine = `(: ${firstLine.substring(2).trim()}`;
			const lastLine = rest.pop()!;

			// Ensure <space>:) for the last line
			const fixedLastLine = lastLine.endsWith(" :)")
				? lastLine
				: `${lastLine.substring(0, lastLine.length - 2)} :)`;
			return join(
				literallineWithoutBreakParent,
				[fixedFirstLine, ...rest, fixedLastLine].map((line) => line.trimEnd()),
			);
		}
	}
}

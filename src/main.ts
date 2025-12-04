import { type Printer, type Parser, type Plugin, type AstPath, doc, util } from "prettier";

import {
	LeafNode,
	NonTerminalNode,
	CommentNode,
	NonCommentNode,
	Node,
	type NonTerminalName,
	type TerminalName,
} from "./tree.ts";
import type { Print } from "./handlers/util/Print.ts";
import flworExpressions from "./handlers/flworExpressions.ts";
import otherExpressionHandlers from "./handlers/otherExpressions.ts";
import nodeConstructorHandlers from "./handlers/nodeConstructors.ts";
import expressionsOnSequenceTypesHandlers from "./handlers/expressionsOnSequenceTypes.ts";
import conditionalExpressionHandlers from "./handlers/conditionalExpressions.ts";
import quantifiedExpressionHandlers from "./handlers/quantifiedExpressions.ts";
import mapsAndArrayHandlers from "./handlers/mapsAndArrays.ts";
import primaryExpressionHandlers from "./handlers/primaryExpressions.ts";
import tryCatchExpressionHandlers from "./handlers/tryCatchExpressions.ts";
import switchExpressionHandlers from "./handlers/switchExpressions.ts";
import modulesAndPrologsHandlers from "./handlers/modulesAndPrologs.ts";
import arrowOperatorHandlers from "./handlers/arrowOperator.ts";
import sequenceExpressionHandlers from "./handlers/sequenceExpressions.ts";
import existDBUpdateNodeHandlers from "./handlers/existDB/updateNodeExpressions.ts";
import typeHandlers from "./handlers/types.ts";
import validateExpressionHandlers from "./handlers/validateExpressions.ts";
import type { Handler } from "./handlers/util/Handler.ts";
import printComment from "./handlers/util/printComment.ts";
import { XQuery31Full, XQuery4Full, type Node as ParserNode } from "xq-parser";

const { line, group } = doc.builders;
const { getPreferredQuote } = util;

// Handlers are split up based on their placement in the XQuery specification. FLWOR by FLWOR,
// expressions on sequence types in their own group, etcetera.
const allHandlers: Record<string, Handler> = {
	...flworExpressions,
	...otherExpressionHandlers,
	...nodeConstructorHandlers,
	...expressionsOnSequenceTypesHandlers,
	...conditionalExpressionHandlers,
	...quantifiedExpressionHandlers,
	...mapsAndArrayHandlers,
	...primaryExpressionHandlers,
	...tryCatchExpressionHandlers,
	...switchExpressionHandlers,
	...modulesAndPrologsHandlers,
	...arrowOperatorHandlers,
	...sequenceExpressionHandlers,
	...typeHandlers,
	...validateExpressionHandlers,
	...existDBUpdateNodeHandlers,
};

function findFirstCommentBlock(text: string): string | null {
	const result = text.match(/^\s*(?<comment>\(:([^:]|(:(?!\))))*:\))/);
	if (!result) {
		return null;
	}
	return result.groups!.comment;
}

const simplifyNode = (node: ParserNode): NonCommentNode[] => {
	if (node.isTerminal) {
		return [new LeafNode(node.type as TerminalName, node.start, node.end!, node.value)];
	}

	const children = node.children.flatMap(simplifyNode);
	if (
		[
			"RangeExpr",
			"StringConcatExpr",
			"ComparisonExpr",
			"IntersectExceptExpr",
			"UnionExpr",
			"OrExpr",
			"AndExpr",
			"MultiplicativeExpr",
			"AdditiveExpr",
			"InstanceofExpr",
			"TreatExpr",
			"CastableExpr",
			"CastExpr",
			"ArrowExpr",
			"UnaryExpr",
			"ValueExpr",
			"SimpleMapExpr",
			"PathExpr",
			"RelativePathExpr",
			"StepExpr",
			"PostfixExpr",
			"PrimaryExpr",
		].includes(node.type) &&
		node.children.length === 1
	) {
		// This is just a fallthrough. Remove the node.
		return children;
	}

	return [new NonTerminalNode(node.type as NonTerminalName, node.start, node.end!, children)];
};

const commonParser = {
	astFormat: "xquery",
	locStart(node: Node) {
		return node.begin;
	},
	locEnd(node: Node) {
		return node.end!;
	},
	preprocess(text: string) {
		return text.trimStart();
	},
	hasIgnorePragma(text: string) {
		// A noprettier or noformat can occur anywhere in the first comment block
		const commentBlock = findFirstCommentBlock(text);
		if (!commentBlock) {
			return false;
		}
		return commentBlock.includes("@noprettier") || commentBlock.includes("@noformat");
	},
	hasPragma(text: string) {
		// A format pragma can occur anywhere in the first comment block
		const commentBlock = findFirstCommentBlock(text);
		if (!commentBlock) {
			return false;
		}
		return commentBlock.includes("@format");
	},
};

const xqueryParser: Parser<Node> = {
	parse(text, _options) {
		const result = XQuery31Full(text);

		const [newRoot] = simplifyNode(result.ast);
		newRoot.comments = result.comments.map(
			(commentNode) => new CommentNode(commentNode.start, commentNode.end!, commentNode.value),
		);

		return newRoot;
	},
	...commonParser,
};

const xquery4Parser: Parser<Node> = {
	parse(text, _options) {
		const result = XQuery4Full(text);

		const [newRoot] = simplifyNode(result.ast);
		newRoot.comments = result.comments.map(
			(commentNode) => new CommentNode(commentNode.start, commentNode.end!, commentNode.value),
		);

		return newRoot;
	},
	...commonParser,
};

const hasPrettierIgnore = (path: AstPath<Node>): boolean => {
	const node = path.node as NonCommentNode;

	return node.hasComments() && node.comments!.some((c) => c.value.includes("prettier-ignore"));
};

const xqueryPrinter: Printer<Node> = {
	getVisitorKeys(_node, _nonTraversableKeys) {
		// Only traverse into children, not childrenByName
		return ["children"];
	},
	willPrintOwnComments(path: AstPath<Node>) {
		if (hasPrettierIgnore(path)) {
			return false;
		}
		if (path.node.name === "IntermediateClause") {
			return true;
		}
		if (path.node.name === "ReturnClause") {
			return true;
		}
		return false;
	},
	canAttachComment(node: Node) {
		// Terminal nodes are sometimes not printed. Refrain from adding comments to them.
		// TODO: always print terminal nodes to optimize comments
		if (node.name === "Comment" || node.name === "WhiteSpace" || node.name === "','") {
			return false;
		}

		if (node instanceof LeafNode) {
			return true;
		}

		// These all insert their own whitespace. Let them handle comments
		if (node.name === "QueryBody") {
			return true;
		}
		if (node.name === "IntermediateClause") {
			return true;
		}
		if (node.name === "AnnotatedDecl") {
			return true;
		}
		if (node.name === "ReturnClause") {
			return true;
		}
		if (node.name === "Expr") {
			return true;
		}

		if (node.begin === node.end) {
			// Rather not on empty nodes, Place it on either side
			return false;
		}

		const nonTerminal = node as NonTerminalNode;
		if (nonTerminal.children.length === 1) {
			// Place one more down
			return false;
		}
		return true;
	},
	isBlockComment(node: Node) {
		// In XQuery all comments are block comments, There is no line comment, like `//`
		return node instanceof CommentNode;
	},
	printComment(path: AstPath<Node>, options) {
		const node = path.node as CommentNode;
		return printComment(node);
	},
	insertPragma(text) {
		const firstCommentBlock = findFirstCommentBlock(text);
		if (firstCommentBlock) {
			const textWithoutCommentBlock = text.substring(firstCommentBlock.length);
			return firstCommentBlock.replace(/\(:~?\n?/, "(:~\n@format\n") + textWithoutCommentBlock;
		}
		return `(: @format :)\n${text.trimStart()}`;
	},
	hasPrettierIgnore,
	print(path: AstPath<Node>, options, print: Print, _args) {
		if (path.node instanceof LeafNode) {
			switch (path.node.name) {
				case "','":
					return group([",", line]);

				case "StringLiteral": {
					let stringValue = path.node.value;

					const currentQuoteStyle = stringValue[0];
					// Remove current qoutes
					stringValue = stringValue.substring(1, stringValue.length - 1);

					// Remove unneeded escaping

					if (currentQuoteStyle === '"' && stringValue.includes('""')) {
						stringValue = stringValue.replace(/""/g, '"');
					}
					if (currentQuoteStyle === "'" && stringValue.includes("''")) {
						stringValue = stringValue.replace(/''/g, "'");
					}

					const preferredQuote = getPreferredQuote(stringValue, options.singleQuote);

					// Re-escape quotes
					const str = stringValue.replace(
						RegExp(`${preferredQuote}`, "g"),
						`${preferredQuote}${preferredQuote}`,
					);
					return [preferredQuote, str, preferredQuote];
				}

				default:
					return path.node.value;
			}
		}

		const value = path.node as NonTerminalNode;
		const _path = path as AstPath<NonTerminalNode>;

		const handler = allHandlers[value.name];
		if (handler) {
			return handler(_path, print, options);
		}

		// Fallthrough: just recurse as-is
		return _path.map(print, "children");
	},
};

const pluginDefinition: Plugin<Node> = {
	languages: [
		{
			name: "XQuery",
			parsers: ["xquery", "xquery4"],
			extensions: ["xq", "xqm", "xqy", "xql", "xquery"],
		},
	],
	options: {
		boundarySpace: {
			description:
				"How to handle boundary spaces. Will be overruled if `declare boundary-space strip|preserve` is set in the script",
			default: "strip",
			category: "global",
			type: "choice",
			choices: [
				{
					value: "strip",
					description:
						"Assume boundary spaces will be stripped by the processor, so they can be added for formatting",
				},
				{
					value: "preserve",
					description:
						"Assume boundary spaces will be preserved by the processor, so they can not be added for formatting",
				},
			],
		},
	},
	parsers: {
		xquery: xqueryParser,
		xquery4: xquery4Parser,
	},
	printers: {
		xquery: xqueryPrinter,
	},
};

export default pluginDefinition;

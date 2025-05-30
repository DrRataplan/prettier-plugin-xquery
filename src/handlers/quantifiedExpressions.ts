import { doc, type AstPath, type Doc } from "prettier";
import type { Node } from "../tree.ts";
import space from "./util/space.ts";
import type { Handler } from "./util/Handler.ts";

const { line, group, indent } = doc.builders;

const quantifiedExpressionHandlers: Record<string, Handler> = {
	QuantifiedExpr: (path, print) => {
		const toReturn: Doc = [];
		path.each((child: AstPath<Node>) => {
			switch (child.node.name) {
				case "'some'":
				case "'every'":
					toReturn.push(print(child), indent(line));
					break;
				case "'$'":
					toReturn.push(print(child));
					break;
				case "VarName":
					toReturn.push(print(child), space);
					break;
				case "TypeDeclaration":
					toReturn.push(print(child), space);
					break;
				case "'in'":
					toReturn.push(print(child));
					break;
				case "ExprSingle":
					toReturn.push(indent([line, print(child)]));
					break;
				case "','":
					toReturn.push(print(child));
					break;
				case "'satisfies'":
					toReturn.push(space, print(child));
					break;
			}
		}, "children");

		return group(toReturn);
	},
};

export default quantifiedExpressionHandlers;

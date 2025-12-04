import findCommentsInWhitespace from "./findCommentsInWhitespace.ts";

export abstract class Node<NameType extends NonTerminalName | TerminalName = NonTerminalName | TerminalName> {
	public readonly name: NameType;
	public readonly begin: number;
	public end: number | undefined;

	constructor(type: NameType, begin: number, end?: number) {
		this.name = type;
		this.begin = begin;
		this.end = end;
	}
}

export type TerminalName = `'${string}'` | "StringLiteral";
export type NonTerminalName = Capitalize<string>;

export abstract class NonCommentNode<
	T extends NonTerminalName | TerminalName = NonTerminalName | TerminalName,
> extends Node<T> {
	// Prettier may add a comments key at some points
	public comments: undefined | CommentNode[] = undefined;

	public abstract getStringRepresentation(): string;

	public hasComments(): boolean {
		return !!this.comments?.length;
	}
}

export class NonTerminalNode extends NonCommentNode<NonTerminalName> {
	public children: NonCommentNode[];

	constructor(type: NonTerminalName, begin: number, end?: number, children: NonCommentNode[] = []) {
		super(type, begin, end);
		this.children = children;
	}

	/**
	 * Returns a string representation of this node. Not formatted and may not be valid XQuery but can be used for sorting.
	 */
	getStringRepresentation() {
		return this.children.map((child) => child.getStringRepresentation()).join("");
	}

	/**
	 * Get an indexed view of children. Used by prettier to check which items are there and to
	 * recurse with a target.
	 *
	 * @todo: would be great if this can be typed so it's known that
	 * FunctionDecl nodes have an EQName a ParamList a SequenceType and a FunctionBody.
	 */
	get childrenByName(): { [K in string]: K extends TerminalName ? LeafNode[] : NonTerminalNode[] } {
		return this.children.reduce((childrenByName, child) => {
			childrenByName[child.name] = [...(childrenByName[child.name] ?? []), child];
			return childrenByName;
		}, Object.create(null));
	}
}

export class LeafNode extends NonCommentNode<TerminalName> {
	public readonly value: string;

	constructor(type: TerminalName, begin: number, end: number, value: string) {
		super(type, begin, end);
		this.value = value;
	}

	public getStringRepresentation() {
		return this.value;
	}
}

export class CommentNode extends Node {
	public readonly value: string;

	/**
	 * Annotated by Prettier
	 */
	public placement?: "endOfLine" | "ownLine" | "remaining" = undefined;
	public printed?: boolean = undefined;
	constructor(begin: number, end: number, value: string) {
		super("Comment", begin, end);
		this.value = value;
	}
}

import findCommentsInWhitespace from "./findCommentsInWhitespace.ts";

export abstract class Node<NameType extends NonTerminalName | TerminalName = NonTerminalName | TerminalName> {
	public readonly name: NameType;
	public readonly begin: number;
	public end: number | undefined;

	constructor(name: NameType, begin: number, end?: number) {
		this.name = name;
		this.begin = begin;
		this.end = end;
	}
}

type TerminalName = `'${string}'` | "StringLiteral";
type NonTerminalName = Capitalize<string>;

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

	constructor(name: NonTerminalName, begin: number, end?: number, children: NonCommentNode[] = []) {
		super(name, begin, end);
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

	constructor(name: TerminalName, begin: number, end: number, value: string) {
		super(name, begin, end);
		this.value = value;
	}

	public getStringRepresentation() {
		return this.value;
	}
}

export class RootNode extends NonTerminalNode {
	public readonly comments: CommentNode[] = [];
	constructor(begin: number, end?: number) {
		super("Root", begin, end);
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

export class Tree {
	public stack: NonTerminalNode[];
	public code: string;
	public root: RootNode;
	constructor() {
		this.code = "";
		this.root = new RootNode(0);
		this.stack = [this.root];
	}

	reset(code: string) {
		this.code = code;
		this.root = new RootNode(0, code.length);
		this.stack = [this.root];
	}

	startNonterminal(name: string, begin: number) {
		const current = new NonTerminalNode(name as NonTerminalName, begin);

		const parent = this.peek();
		parent.children.push(current);
		this.stack.push(current);
	}
	endNonterminal(_name: string, end: number) {
		const current = this.stack.pop()!;
		current.end = end;
	}

	terminal(name: string, begin: number, end: number) {
		const leaf = new LeafNode(name as TerminalName, begin, end, this.code.substring(begin, end));
		const parent = this.peek();
		parent.children.push(leaf);
	}

	whitespace(begin: number, end: number) {
		const contents = this.code.substring(begin, end);
		const comments = findCommentsInWhitespace(contents, begin);
		for (const comment of comments) {
			this.root.comments.push(comment);
		}
	}

	peek(): NonTerminalNode {
		return this.stack[this.stack.length - 1];
	}
}

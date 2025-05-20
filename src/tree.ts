export abstract class Node {
	name: string;
	begin: number;
	end: number | undefined;

	constructor(name: string, begin: number, end?: number) {
		this.name = name;
		this.begin = begin;
		this.end = end;
	}
}

export class NonTerminalNode extends Node {
	children: Node[];

	constructor(name: string, begin: number, end?: number, children: Node[] = []) {
		super(name, begin, end);
		this.children = children;
	}

	/**
	 * Get an indexed view of children. Used by prettier to check which items are there and to
	 * recurse with a target.
	 *
	 * @todo: would be great if this can be typed so it's known that
	 * FunctionDecl nodes have an EQName a ParamList a SequenceType and a FunctionBody.
	 */
	get childrenByName(): Record<string, Node[]> {
		return this.children.reduce((childrenByName, child) => {
			childrenByName[child.name] = [...(childrenByName[child.name] ?? []), child];
			return childrenByName;
		}, Object.create(null));
	}
}

export class LeafNode extends Node {
	value: string;

	constructor(name: string, begin: number, end: number) {
		super(name, begin, end);
		this.value = "";
	}
}

export class RootNode extends NonTerminalNode {
	public readonly comments: CommentNode[] = [];
	constructor(begin: number, end?: number) {
		super("root", begin, end);
	}
}
export class CommentNode extends Node {
	public readonly value: string;
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
		const current = new NonTerminalNode(name, begin);

		const parent = this.peek() as NonTerminalNode;
		parent.children.push(current);
		this.stack.push(current);
	}
	endNonterminal(name: string, end: number) {
		const current = this.stack.pop()!;
		if (current.name !== name) {
			console.error("mismatch", current.name, name);
		}
		current.end = end;
	}

	terminal(name: string, begin: number, end: number) {
		const leaf = new LeafNode(name, begin, end);
		leaf.value = this.code.substring(begin, end);
		const parent = this.peek();
		parent.children.push(leaf);
	}

	whitespace(begin: number, end: number) {
		const contents = this.code.substring(begin, end);
		if (contents.includes("(:")) {
			const clean = contents.trim();
			const actualBegin = begin + contents.indexOf("(:");
			this.root.comments.push(new CommentNode(actualBegin, actualBegin + clean.length, clean));
		}
		// this.terminal('WhiteSpace', begin, end)
	}

	peek(): NonTerminalNode {
		return this.stack[this.stack.length - 1];
	}
}

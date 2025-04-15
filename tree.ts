export abstract class Node {
	name: string;
	begin: number;
	end: number;

    constructor(name: string, begin: number, end?: number) {
        this.name = name
        this.begin = begin
        this.end = end
    }
}

export class NonTerminalNode extends Node {
	children: Node[]

    constructor(name: string, begin: number, end?: number, children: Node[] = []) {
		super(name, begin, end)
        this.children = children
    }

	getChildren(name: string): Node[] {
		return this.children.filter(child => child.name == name);
	}
}

export class LeafNode extends Node {

	value: string;

    constructor(name: string, begin: number, end: number) {
		super(name, begin, end)
        this.value = ''
    }
}

export class Tree {
	stack: Node[];
	code: string;
	root: Node
    constructor() {
        this.code = null;
		this.root = new NonTerminalNode('root', 0);
        this.stack = [this.root];
    }

    reset (code: string) {
		console.log(code);
        this.code = code
		this.root = new NonTerminalNode('root', 0, code.length);
        this.stack = [this.root];
    }

    startNonterminal(name: string, begin: number) {
        console.log('startNonterminal', name, begin)
        const current = new NonTerminalNode(name, begin)

		const parent = this.peek() as NonTerminalNode;
		parent.children.push(current);
        this.stack.push(current)
    }
    endNonterminal(name: string, end: number) {
        const current = this.stack.pop();
        if (current.name !== name) {
            console.error('mismatch', current.name, name)
        }
        current.end = end;
    }

	terminal(name: string, begin: number, end: number) {
        const leaf = new LeafNode(name, begin, end)
        leaf.value = this.code.substring(begin, end)
		console.log('Leaf', name, leaf.value);
		const parent = this.peek();
		parent.children.push(leaf);
    }

	whitespace(begin: number, end: number) {
		return;
		this.terminal('WhiteSpace', begin, end)
    }

	peek (): NonTerminalNode {
		return this.stack[this.stack.length - 1] as NonTerminalNode;
	}
}

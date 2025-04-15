export { Node, LeafNode, Tree }

class Node {
	name: string;
	begin: number;
	end: number;
	children: Node[]
    constructor(name: string, begin: number, end?: number, children: Node[] = []) {
        this.name = name
        this.begin = begin
        this.end = end
        this.children = children
    }
}

class LeafNode extends Node {
	value: string;

    constructor(name: string, begin: number, end: number) {
		super(name, begin, end, [])
        this.value = ''
    }
}

class Tree {
	stack: Node[];
	code: string;
	root: Node
    constructor() {
        this.code = null;
		this.root = new Node('root', 0);
        this.stack = [this.root];
    }

    reset (code: string) {
		console.log(code);
        this.code = code
		this.root = new Node('root', 0, code.length);
        this.stack = [this.root];
    }

    startNonterminal(name: string, begin: number) {
        console.log('startNonterminal', name, begin)
        const current = new Node(name, begin)

		const parent = this.peek();
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
		console.log('Leaf', name);
        const leaf = new LeafNode(name, begin, end)
        leaf.value = this.code.substring(begin, end)
		const parent = this.peek();
		parent.children.push(leaf);
    }

	whitespace(begin: number, end: number) {
		return;
		this.terminal('WhiteSpace', begin, end)
    }

	peek () {
		return this.stack[this.stack.length - 1];
	}
}

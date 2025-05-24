import * as REx from './ebnfparser.ts';

export abstract class Node {
	public readonly name: string;
	public readonly start: number;
	public readonly end: number;
	constructor(name: string, start: number, end: number) {
		this.name = name;

		this.start = start;
		this.end = end
	}
}

 export class Terminal extends Node {
	public readonly value: string;
	constructor(value: string, start: number, end: number) {
		super('Terminal', start, end);
		this.value = value;
	}
	toString() {
		if (this.value === '<?TOKENS?>') {
			return this.value + '\n'
		}

		return this.value;
	}
}

export class NonTerminal extends Node {
	public readonly children: Node[] = []
	constructor(name: string, start: number, end: number) {
		super(name, start, end);
	}
	getChildren(name: string): Node[] {
		return this.children.filter(child => child.name === name);
	}
	toString() {
		
		const childContent = this.children.map(child => child.toString()).join('');
		if (this.name === 'SyntaxProduction' || this.name === 'LexicalProduction') {
			return childContent + '\n'
		}
		return childContent;
	}
}


export class Handler implements REx.BottomUpEventHandler {
	root: NonTerminal;
	stack: NonTerminal[];
	code: string;

	scratchPad: Node[] = [];
	constructor() {
		this.reset('')
	}

	reset(code: string) {
		this.root = new NonTerminal('ROOT', 0, code.length);
		this.stack = [this.root];
		this.code = code;
		this.scratchPad = [];
	}
	terminal(_name: string, start: number, end: number) {
		const value = this.code.substring(start, end)
		const terminalNode = new Terminal(value, start, end);
		this.scratchPad.push(terminalNode)
	}
	nonterminal(name: string, start: number, end: number) {
		const terminalNode = new NonTerminal(name, start, end);
		this.scratchPad.push(terminalNode);
	}

	getResult() {
		for (const node of this.scratchPad.reverse()) {
			let parent = this.peek();
			while (parent.start > node.start) {
				// We moved past the end of this node already
				this.stack.pop();
				parent = this.peek();
			}
			parent.children.unshift(node)
			if (node instanceof NonTerminal) {
				this.stack.push(node);
			}
		}
		return this.root
	}

	peek(): NonTerminal {
		return this.stack[this.stack.length - 1];
	}
	

}
/*
(async () => {
	const xqueryEbnf = await readFile('../xquery-31.ebnf', 'utf-8');

	const handler = new Handler();
	const parser = new REx.Parser(xqueryEbnf, handler);

	parser.parse_Grammar();

	const roundtrip = handler.root.toString()
	console.log(roundtrip)

	
	
})();
*/

import { Document } from 'slimdom';

import * as REx from './ebnfparser.ts';
import { readFile } from 'fs/promises';
import { Handler, Node, NonTerminal, Terminal } from './parseEbnfToXml.ts';
import { describe, it } from 'node:test';

describe('Combining EBNFs', async () => {
	it('works', async () => {
		const simpleEbnf = await readFile('./simple.ebnf', 'utf8')

	const handler = new Handler();
	const parser = new REx.Parser(simpleEbnf, handler);

	parser.parse_Grammar();

		const result = handler.getResult();
	const roundtrip = result.toString()
	console.log(roundtrip)

	const mutations = [{
		where: 'B',
		newRule: 'C',
		additionalRules: `C ::= 'c' | B`
	}]


		const followPath = (root: NonTerminal, parts: string[]): NonTerminal[] => {
			const nodes = [root];
			const [part, ...rest] = parts;
			if (!part) {
				return nodes;
			}
			return root.getChildren(part).flatMap((child: Node) => {
				if (child instanceof Terminal) {
					return [];
				}
				return followPath(child as NonTerminal, rest)
			})
			
		}

		const syntaxDefinition = followPath(result, ['Grammar', 'SyntaxDefinition'])[0];
		const syntaxProductions = followPath(syntaxDefinition, ['SyntaxProduction']);
		for (const mutation of mutations) {
			parser.initialize(mutation.additionalRules, handler);

			parser.parse_Grammar();

			const newParseResult = handler.getResult();
			const additionalRules = followPath(newParseResult, ['Grammar', 'SyntaxDefinition', 'SyntaxProduction'])
			
			syntaxDefinition.children.push(...additionalRules)

			const ruleToAmend = syntaxProductions.find(syntaxProduction => {
				const name = syntaxProduction.getChildren('Terminal')[0] as Terminal;

				return name.value === mutation.where
			})!;

			const choice = ruleToAmend.getChildren('SyntaxChoice')[0] as NonTerminal;
			choice.children.push(new Terminal('|', -1, -1));
			choice.children.push(new Terminal(mutation.newRule, -1, -1));
		}

		console.log(result.toString())
	});
});

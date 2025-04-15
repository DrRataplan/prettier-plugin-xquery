import fontoxpath from 'fontoxpath'
import  prettier from 'prettier';
import type {Printer, Parser, Plugin, AstPath, Doc} from 'prettier'

import {Parser as XQueryParser, ParseException} from './parser.ts';
import {Tree, Node, LeafNode, NonTerminalNode} from './tree.ts';

const evaluateXPathToString = fontoxpath.evaluateXPathToString;

const { join, line, ifBreak, group, indent } = prettier.doc.builders;

const xqueryParser: Parser<Node> = {
    parse(text, options) {
		const handler= new Tree();
		var parser = new XQueryParser(text, handler);
		try
		{
			parser.parse_XQuery();
		}
		catch (pe)
		{
			if (! (pe instanceof ParseException))
			{
				throw pe;
			}
			else
			{
				throw parser.getErrorMessage(pe);
			}
		}

		return handler.root;
    },
    astFormat: 'xquery-ast',
    locStart(node) {
        const start = fontoxpath.evaluateXPathToNumber('ancestor-or-self::*/fontoxpath:stackTrace/@start', node);
        return isNaN(start) ? -1 : start;
    },
    locEnd(node) {
        const end = fontoxpath.evaluateXPathToNumber('ancestor-or-self::*/fontoxpath:stackTrace/@end', node);
        return isNaN(end) ? -1 : end;
    },
};

const space = ' ';

const makePairs = (rest: Doc[]): [Doc, Doc][] => {
	const pairs: [Doc,Doc][] = [];
	for (let i = 0; i < rest.length; ++i) {
		pairs.push([rest[i], rest[++i]])
	}
	return pairs
};


const xqueryPrinter: Printer<Node> = {
    print(path: AstPath<Node>, options, print, args) {

		if (path.node instanceof LeafNode ) {
			switch(path.node.name) {
				case "'declare'":
					return group(['declare', line])
				case "'function'":
					return group(['function', line])
				default:
					return path.node.value;
			}
		}

        const value = path.node as NonTerminalNode;
		const _path = path as AstPath<NonTerminalNode>

        switch (value.name) {
            case 'AdditiveExpr': {
				const [lhs, ...rest] = _path.map(print, 'children');

				const pairs= makePairs(rest);
				return group([lhs, indent([pairs.map(([op, rhs]) => [space , op, line, rhs])])]);
			}
			// case 'FunctionDecl': {
			// 	const [lhs, ...rest] = _path.map(print, 'children');

			// 	const pairs: Doc[][] = [];
			// 	for (let i = 0; i < rest.length; ++i) {
			// 		pairs.push([rest[i], rest[++i]])
			// 	}
			// 	return group([lhs, indent([pairs.map(([op, rhs]) => [space , op, line, rhs])]), line]);

			// }
            default:
//                console.log(`Got passed a ${value.name}`)
                return group(_path.map(print, 'children'))
        }
    },
}

const pluginDefinition: Plugin<Node> = {
    languages: [{
        name: 'XQuery',
        parsers: ['xquery-parser']
    }],
    parsers: {
        'xquery-parser': xqueryParser
    },
    printers: {
        'xquery-ast': xqueryPrinter
    }
}

export default pluginDefinition;

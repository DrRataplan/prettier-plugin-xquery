import fontoxpath from 'fontoxpath'
import  prettier from 'prettier';
import type {Printer, Parser, Plugin, AstPath, Doc} from 'prettier'

import {Parser as XQueryParser, ParseException} from './parser.ts';
import {Tree, Node, LeafNode} from './tree.ts';

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

//        return fontoxpath.parseScript(text, {debug: true}, new Document()) as Element;
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

const opByOpName = {
	'addOp': '+',
	'minOp': '-'
}

const space = ' ';

const xqueryPrinter: Printer<Node> = {
    print(path: AstPath<Node>, options, print, args) {
        const value = path.node;

        switch (value.name) {
            case 'AdditiveExpr': {
				const [lhs, ...rest] = path.map(print, 'children');
				console.log(value.children.map(c=>c.name));

				const pairs: Doc[][] = [];
				for (let i = 0; i < rest.length; ++i) {
					pairs.push([rest[i], rest[++i]])
				}

				return group([lhs, indent([pairs.map(([op, rhs]) => [space , op, line, rhs])])]);
			}
			case "'+'":
				return '+';
            case 'IntegerLiteral':
				return (value as LeafNode).value;
			case 'WhiteSpace':
				return null;
            default:
//                console.log(`Got passed a ${value.name}`)
                return group(path.map(print, 'children'))
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

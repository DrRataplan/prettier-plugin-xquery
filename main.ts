import fontoxpath from 'fontoxpath'
import {Document, Element} from 'slimdom'
import  prettier from 'prettier';
import type {Printer, Parser, Plugin} from 'prettier'

const evaluateXPathToString = fontoxpath.evaluateXPathToString;

const { join, line, ifBreak, group, indent } = prettier.doc.builders;

const xqueryParser: Parser<Element> = {
    parse(text, options) {
        return fontoxpath.parseScript(text, {debug: true}, new Document()) as Element;
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

const xqueryPrinter: Printer<Element|null> = {
    print(path, options, print, args) {
        const value = path.node;

		if (!value) {
			return '';
		}

        if (value.nodeType === value.TEXT_NODE) {
            return (value as Node as Text).data;
        }

        switch (value.localName) {
            case 'addOp':
                const lhs = path.call(print, 'firstElementChild');
                const rhs = path.call(print, 'lastElementChild');

                return group([lhs, ' +', indent([line, rhs])]);
            case 'value':

                return evaluateXPathToString('.', value)
            default:
                console.log('Got passed a ' + value.nodeName)
                return group(path.map(print, 'children'))
        }
    },
}

const pluginDefinition: Plugin<Element> = {
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

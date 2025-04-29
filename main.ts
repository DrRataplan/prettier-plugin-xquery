import prettier from 'prettier';
import type { Printer, Parser, Plugin, AstPath, Doc } from 'prettier';

import { Parser as XQueryParser, ParseException } from './parser.ts';
import { Tree, Node, LeafNode, NonTerminalNode, CommentNode } from './tree.ts';

const { join, line, ifBreak, group, indent, softline, hardline } = prettier.doc.builders;
const { makeString, getPreferredQuote } = prettier.util;

const xqueryParser: Parser<Node> = {
	parse(text, _options) {
		const handler = new Tree();
		var parser = new XQueryParser(text, handler);
		try {
			parser.parse_XQuery();
		} catch (pe) {
			if (!(pe instanceof ParseException)) {
				throw pe;
			} else {
				throw parser.getErrorMessage(pe);
			}
		}

		return handler.root;
	},
	astFormat: 'xquery-ast',
	locStart(node) {
		return node.begin;
	},
	locEnd(node) {
		return node.end;
	},
};

const space = ' ';

const makePairs = (rest: Doc[]): [Doc, Doc][] => {
	const pairs: [Doc, Doc][] = [];
	for (let i = 0; i < rest.length; ++i) {
		pairs.push([rest[i], rest[++i]]);
	}
	return pairs;
};

const xqueryPrinter: Printer<Node> = {
	canAttachComment(node: Node) {
		// Terminal nodes are sometimes not printed. Refrain from adding comments to them.
		// TODO: always print terminal nodes to optimize comments
		return node instanceof NonTerminalNode;
		return node.name !== 'Comment' && node.name !== 'WhiteSpace' && node.name !== "'('" && node.name !== "')'";
	},
	isBlockComment(node: CommentNode) {
		return node.value.startsWith('(:~') || node.value.includes('\n');
	},
	printComment(path: AstPath<Node>) {
		const value = path.getNode() as CommentNode;
		return value.value;
	},
	print(path: AstPath<Node>, options, print, args) {
		if (path.node instanceof LeafNode) {
			switch (path.node.name) {
				case "'function'":
					return group(['function', line]);
				case "','":
					return group([',', line]);
				case '"':
					return [];
				case "'":
					return [];

				case 'StringLiteral': {
					let stringValue = path.node.value;

					const currentQuoteStyle = stringValue[0];
					// Remove current qoutes
					stringValue = stringValue.substring(1, stringValue.length - 1);

					// Remove unneeded escaping

					if (currentQuoteStyle === '"' && stringValue.includes('""')) {
						stringValue = stringValue.replace(/""/g, '"');
					}
					if (currentQuoteStyle === "'" && stringValue.includes("''")) {
						stringValue = stringValue.replace(/''/g, "'");
					}

					const preferredQuote = getPreferredQuote(stringValue, options.singleQuote);

					// Re-escape quotes
					const str = stringValue.replace(RegExp(`${preferredQuote}`, 'g'), `${preferredQuote}${preferredQuote}`);
					return [preferredQuote, str, preferredQuote];
				}

				//return group([';', hardline, hardline]);
				default:
					return path.node.value;
			}
		}

		const value = path.node as NonTerminalNode;
		const _path = path as AstPath<NonTerminalNode>;

		const printIfExist = (
			path: AstPath<NonTerminalNode>,
			print: (path: AstPath<NonTerminalNode>) => Doc,
			item: string,
		): Doc[] | null => {
			if (!path.node.childrenByName[item]) {
				return null;
			}
			return path.map(print, 'childrenByName', item);
		};

		switch (value.name) {
			case 'VersionDecl':
				const xqueryKeyword = printIfExist(_path, print, "'xquery'");
				const encodingKeyword = printIfExist(_path, print, "'encoding'");
				const versionKeyword = printIfExist(_path, print, "'version'");
				const [firstStringLiteral, secondStringLiteral] = printIfExist(_path, print, 'StringLiteral');

				const items: Doc = [xqueryKeyword, space];
				if (versionKeyword) {
					items.push(versionKeyword, space, firstStringLiteral);
					if (encodingKeyword) {
						items.push(space, encodingKeyword, space, secondStringLiteral);
					}
				} else {
					items.push(encodingKeyword, space, firstStringLiteral);
				}

				return group([items, ';', hardline, hardline]);
			case 'LibraryModule': {
				return group([join(hardline, _path.map(print, 'children')), hardline, hardline]);
			}
			case 'ModuleDecl': {
				const prefixPart = _path.map(print, 'childrenByName', 'NCName');
				const uriPart = _path.map(print, 'childrenByName', 'URILiteral');
				return group(['module', space, 'namespace', space, prefixPart, space, '=', space, uriPart, ';']);
			}
			case 'NamespaceDecl': {
				const prefixPart = _path.map(print, 'childrenByName', 'NCName');
				const uriPart = _path.map(print, 'childrenByName', 'URILiteral');
				return group(['declare', space, 'namespace', space, prefixPart, space, '=', space, uriPart]);
			}
			case 'ModuleImport': {
				const prefixPart = value.childrenByName['NCName']
					? ['namespace', space, _path.map(print, 'childrenByName', 'NCName'), space, '=', space]
					: [];
				// First is the module URI, the rest are location hints
				const [uriPart, ...locationHints] = _path.map(print, 'childrenByName', 'URILiteral');
				const locationHintParts = locationHints.length
					? [
							space,
							'at',
							space,
							join(
								',',
								locationHints.map((locationHint) => ['space', locationHint]),
							),
						]
					: [];
				return group(['import', space, 'module', space, prefixPart, uriPart, locationHintParts]);
			}
			case 'Prolog':
				if (!value.children.length) {
					return [];
				}
				const endWithSeparator = (part: Doc[] | null, joinWithHardlines = false) =>
					part
						? [
								part.map((p) => [p, ';', hardline, joinWithHardlines ? hardline : []]),
								!joinWithHardlines ? hardline : [],
							]
						: [];

				const defaultNamespaceDeclPart = endWithSeparator(printIfExist(_path, print, 'DefaultNamespaceDecl'));
				const setterPart = endWithSeparator(printIfExist(_path, print, 'Setter'));
				const namespaceDeclPart = endWithSeparator(printIfExist(_path, print, 'NamespaceDecl'));
				const importPart = endWithSeparator(printIfExist(_path, print, 'Import'));
				const contextItemDeclPart = endWithSeparator(printIfExist(_path, print, 'ContextItemDecl'));
				const annotatedDeclPart = endWithSeparator(printIfExist(_path, print, 'AnnotatedDecl'), true);
				const optionDeclPart = endWithSeparator(printIfExist(_path, print, 'OptionDecl'));

				return group([
					defaultNamespaceDeclPart,
					setterPart,
					namespaceDeclPart,
					importPart,
					contextItemDeclPart,
					annotatedDeclPart,
					optionDeclPart,
				]);
			case 'OptionDecl': {
				const declareKeyword = _path.map(print, 'childrenByName', "'declare'");
				const optionKeyword = _path.map(print, 'childrenByName', "'option'");
				const namePart = _path.map(print, 'childrenByName', 'EQName');
				const stringLiteralPart = _path.map(print, 'childrenByName', 'StringLiteral');
				return group([declareKeyword, space, optionKeyword, space, namePart, space, stringLiteralPart]);
			}
			case 'TypeDeclaration': {
				const sequenceTypePart = _path.map(print, 'childrenByName', 'SequenceType');
				return group(['as', space, sequenceTypePart]);
			}
			case 'Param': {
				const namePart = _path.map(print, 'childrenByName', 'EQName');
				if (!value.childrenByName['TypeDeclaration']) {
					return group(['$', namePart]);
				}
				const typeDeclarationPart = _path.map(print, 'childrenByName', 'TypeDeclaration');
				return group(['$', namePart, space, typeDeclarationPart]);
			}
			case 'ParamList': {
				const params = _path.map(print, 'childrenByName', 'Param');
				return join([',', line], params);
			}
			case 'FunctionCall': {
				const functionEQNamePart = _path.map(print, 'childrenByName', 'FunctionEQName');
				const argumentListPart = _path.map(print, 'childrenByName', 'ArgumentList');

				return group([functionEQNamePart, argumentListPart]);
			}
			case 'ArgumentList': {
				if (!value.childrenByName['Argument']) {
					return '()';
				}
				const argumentsPart = _path.map(print, 'childrenByName', 'Argument');

				return group(['(', indent([softline, join([',', line], argumentsPart)]), softline, ')']);
			}
			case 'IfExpr': {
				const conditionPart = _path.map(print, 'childrenByName', 'Expr');
				const [thenPart, elsePart] = _path.map(print, 'childrenByName', 'ExprSingle');
				const ifKeyword = _path.map(print, 'childrenByName', "'if'");
				const elseKeyword = _path.map(print, 'childrenByName', "'else'");
				const thenKeyword = _path.map(print, 'childrenByName', "'then'");
				return group([
					group([ifKeyword, space, '(', indent([softline, conditionPart]), softline, ')', space, thenKeyword]),
					indent([hardline, thenPart]),
					hardline,
					elseKeyword,
					indent([hardline, elsePart]),
				]);
			}
			case 'MapConstructor': {
				const mapKeyword = _path.map(print, 'childrenByName', "'map'");
				const mapConstructorEntries = printIfExist(_path, print, 'MapConstructorEntry') ?? [];

				return group([
					mapKeyword,
					space,
					'{',
					indent([softline, join([',', line], mapConstructorEntries)]),
					softline,
					'}',
				]);
			}
			case 'MapConstructorEntry': {
				const mapKeyExprPart = _path.map(print, 'childrenByName', 'MapKeyExpr');
				const mapValueExprPart = _path.map(print, 'childrenByName', 'MapValueExpr');

				return group([mapKeyExprPart, ':', group(indent([line, mapValueExprPart]))]);
			}
			case 'InstanceofExpr': {
				const treatExprPart = _path.map(print, 'childrenByName', 'TreatExpr');
				const instanceKeyword = printIfExist(_path, print, "'instance'");

				if (!instanceKeyword) {
					return treatExprPart;
				}
				const ofKeyword = printIfExist(_path, print, "'of'");
				const sequenceTypePart = _path.map(print, 'childrenByName', 'SequenceType');

				return [treatExprPart, space, instanceKeyword, space, ofKeyword, space, sequenceTypePart];
			}
			case 'MapConstructorEntry':
			case 'StringConcatExpr':
			case 'ComparisonExpr':
			case 'IntersectExceptExpr':
			case 'UnionExpr':
			case 'OrExpr':
			case 'AndExpr':
			case 'MultiplicativeExpr':
			case 'AdditiveExpr': {
				const [lhs, ...rest] = _path.map(print, 'children');

				const pairs = makePairs(rest);
				return group([lhs, indent([pairs.map(([op, rhs]) => [space, op, line, rhs])])]);
			}
			case 'ParenthesizedExpr': {
				if (!value.childrenByName['Expr']) {
					return group(_path.map(print, 'children'));
				}
				return group(['(', indent([softline, _path.map(print, 'childrenByName', 'Expr')]), softline, ')']);
			}
			case 'ArrowExpr': {
				const unaryExprPart = _path.map(print, 'childrenByName', 'UnaryExpr');
				const arrowFunctionSpecifierPart = printIfExist(_path, print, 'ArrowFunctionSpecifier');
				const argumentListPart = printIfExist(_path, print, 'ArgumentList');

				if (!arrowFunctionSpecifierPart) {
					return unaryExprPart;
				}

				return group([
					unaryExprPart,
					space,
					indent([
						'=>',
						line,
						join(
							[space, '=>', line],
							arrowFunctionSpecifierPart.map((afs, i) => [afs, argumentListPart[i]]),
						),
					]),
				]);
			}
			case 'Expr': {
				const exprSingles = _path.map(print, 'childrenByName', 'ExprSingle');

				if (value.childrenByName['ExprSingle'].length === 1) {
					return exprSingles;
				}
				return group([indent([join([',', line], exprSingles)])]);
			}
			case 'EnclosedExpr': {
				return group(['{', indent([hardline, _path.map(print, 'childrenByName', 'Expr')]), hardline, '}']);
			}
			case 'RangeExpr': {
				return join([space, 'to', space], _path.map(print, 'childrenByName', 'AdditiveExpr'));
			}
			case 'FLWORExpr': {
				const initialClausePart = _path.map(print, 'childrenByName', 'InitialClause');
				const intermediateClausePart = printIfExist(_path, print, 'IntermediateClause') ?? [];
				const returnClausePart = _path.map(print, 'childrenByName', 'ReturnClause');

				return group([
					initialClausePart,
					hardline,
					join(hardline, intermediateClausePart),
					intermediateClausePart.length ? hardline : [],
					indent(returnClausePart),
				]);
			}
			case 'GroupByClause': {
				const groupKeyword = _path.map(print, 'childrenByName', "'group'");
				const byKeyword = _path.map(print, 'childrenByName', "'by'");

				const specListPart = _path.map(print, 'childrenByName', 'GroupingSpecList');

				return group([
					groupKeyword,
					space,
					byKeyword,
					space,
					specListPart,
				]);
			}
			case 'GroupingSpecList': {
				const specs = _path.map(print, 'childrenByName', 'GroupingSpec');
				return indent(join([',', line], specs));
			}
			case 'GroupingSpec': {
				const variablePart = _path.map(print, 'childrenByName', 'GroupingVariable');
				const typeDeclPart = printIfExist(_path, print, 'TypeDeclaration');
				const exprSinglePart = printIfExist(_path, print, 'ExprSingle');
				const collationKeyword = printIfExist(_path, print, "'collation'");
				const uriLiteralPart = printIfExist(_path, print, 'URILiteral');

				const parts: Doc[] = [variablePart];
				if (exprSinglePart) {
					if (typeDeclPart) {
						parts.push(space, typeDeclPart, space)
					}
					parts.push(':=', indent([line, exprSinglePart]))
				}
				if (collationKeyword) {
					parts.push(collationKeyword, uriLiteralPart)
				}
				return group(parts);

			}
			case 'OrderByClause': {
				const orderKeyword = _path.map(print, 'childrenByName', "'order'");
				const byKeyword = _path.map(print, 'childrenByName', "'by'");
				const stableKeyword = printIfExist(_path, print, "'stable'");

				const specListPart = _path.map(print, 'childrenByName', 'OrderSpecList');

				return group([
					stableKeyword ? [stableKeyword, space] : [],
					orderKeyword,
					space,
					byKeyword,
					space,
					specListPart,
				]);
			}
			case 'OrderSpecList': {
				const specs = _path.map(print, 'childrenByName', 'OrderSpec');
				return indent(join([',', line], specs));
			}
			case 'OrderSpec': {
				const exprSinglePart = _path.map(print, 'childrenByName', 'ExprSingle');
				const orderModifierPart = _path.map(print, 'childrenByName', 'OrderModifier');

				return group([exprSinglePart, space, orderModifierPart]);
			}
			case 'OrderModifier': {
				if (value.children.length === 0) {
					return [];
				}
				return join(space, _path.map(print, 'children'));
			}
			case 'WhereClause': {
				const whereKeyword = _path.map(print, 'childrenByName', "'where'");
				const exprSinglePart = _path.map(print, 'childrenByName', 'ExprSingle');
				return group([whereKeyword, space, exprSinglePart]);
			}
			case 'IntermediateClause':
				return group([_path.map(print, 'children')]);
			case 'InitialClause': {
				return group([_path.map(print, 'children')]);
			}
			case 'ForClause': {
				return group(['for', space, indent([join([',', line], _path.map(print, 'childrenByName', 'ForBinding'))])]);
			}
			case 'LetClause': {
				return group(['let', space, indent([join([',', line], _path.map(print, 'childrenByName', 'LetBinding'))])]);
			}
			case 'LetBinding': {
				const varNamePart = _path.map(print, 'childrenByName', 'VarName');
				const exprSinglePart = _path.map(print, 'childrenByName', 'ExprSingle');
				const typeDeclPart = printIfExist(_path, print, 'TypeDeclaration');
				return group(['$', varNamePart, space, typeDeclPart ? [typeDeclPart, space] : [], ':=', line, exprSinglePart]);
			}
			case 'ForBinding': {
				const varNamePart = _path.map(print, 'childrenByName', 'VarName');
				const exprSinglePart = _path.map(print, 'childrenByName', 'ExprSingle');
				const typeDeclPart = printIfExist(_path, print, 'TypeDeclaration');
				return group(['$', varNamePart, space, typeDeclPart ? [typeDeclPart, space] : [], 'in', line, exprSinglePart]);
			}
			case 'TumblingWindowClause': {
				const tumblingKeyword = _path.map(print, 'childrenByName', "'tumbling'");
				const windowKeyword = _path.map(print, 'childrenByName', "'window'");
				const varNamePart = _path.map(print, 'childrenByName', 'VarName');
				const typeDeclPart = printIfExist(_path, print, 'TypeDeclaration');

				const inKeyword = _path.map(print, 'childrenByName', "'in'");
				const exprSinglePart = printIfExist(_path, print, 'ExprSingle');
				const windowStartConditionPart = printIfExist(_path, print, 'WindowStartCondition');
				const windowEndConditionPart = printIfExist(_path, print, 'WindowEndCondition');

				return group([
					tumblingKeyword,
					space,
					windowKeyword,
					space,
					'$',
					varNamePart,
					space,
					typeDeclPart ? [typeDeclPart, space] : [],
					inKeyword,
					space,
					exprSinglePart,
					indent([hardline, windowStartConditionPart, hardline, windowEndConditionPart]),
				]);
			}
			case 'PositionalVar': {
				const varNamePart = _path.map(print, 'childrenByName', 'VarName');
				return group(['at', space, '$', varNamePart])
			}
			case 'WindowClause':
			case 'WindowStartCondition':
			case 'WindowEndCondition':
				return join(space, _path.map(print, 'children'));
			case 'WindowVars': {
				const currentItemPart = printIfExist(_path, print, 'CurrentItem');
				const positionalVarPart = printIfExist(_path, print, 'PositionalVar');
				const previousItemPart = printIfExist(_path, print, 'PreviousItem');
				const nextItemPart = printIfExist(_path, print, 'NextItem');

				const parts: Doc[] = [];
				if (currentItemPart) {
					parts.push(['$', currentItemPart])
				}
				if (positionalVarPart) {
					parts.push([positionalVarPart])
				}
				if (previousItemPart) {
					parts.push(['previous', space, '$', previousItemPart])
				}
				if (nextItemPart) {
					parts.push(['next', space, '$', nextItemPart])
				}

				return join(line, parts);
			}
			case 'ReturnClause': {
				const exprSinglePart = _path.map(print, 'childrenByName', 'ExprSingle');
				return group(['return', space, exprSinglePart]);
			}
			case 'AnnotatedDecl': {
				const declareKeyword = _path.map(print, 'childrenByName', "'declare'");
				const annotationsPart = printIfExist(_path, print, 'Annotation') ?? [];
				const actualDeclaration =
					printIfExist(_path, print, 'VarDecl') ?? printIfExist(_path, print, 'FunctionDecl') ?? [];

				return group([group([declareKeyword, indent([join(line, annotationsPart), line])]), actualDeclaration]);
			}

			case 'FunctionDecl': {
				const eQNamePart = _path.map(print, 'childrenByName', 'EQName');
				const paramListPart = value.childrenByName['ParamList'] ? _path.map(print, 'childrenByName', 'ParamList') : [];
				const typeDeclarationPart = value.childrenByName['SequenceType']
					? ['as', space, _path.map(print, 'childrenByName', 'SequenceType'), space]
					: [];

				const functionBodyPart = _path.map(print, 'childrenByName', 'FunctionBody');

				return group([
					group([
						'function',
						space,
						eQNamePart,
						'(',
						indent([softline, paramListPart]),
						softline,
						')',
						space,
						typeDeclarationPart,
					]),
					functionBodyPart,
				]);
			}

			case 'InlineFunctionExpr': {
				const annotationsPart = printIfExist(_path, print, 'Annotation');
				const functionKeyword = _path.map(print, 'childrenByName', "'function'");
				const paramListPart = value.childrenByName['ParamList'] ? _path.map(print, 'childrenByName', 'ParamList') : [];
				const asKeyword = printIfExist(_path, print, "'as'");
				const sequenceTypePart = printIfExist(_path, print, 'SequenceType');
				const functionBodyPart = _path.map(print, 'childrenByName', 'FunctionBody');

				return group([
					group([annotationsPart ? [join(line, annotationsPart), space] : []]),
					functionKeyword,
					'(',
					group([softline, indent([softline, paramListPart]), softline]),
					')',
					space,
					asKeyword ? [asKeyword, space, sequenceTypePart, space] : [],
					functionBodyPart,
				]);
			}

			case 'FunctionTest': {
				return group(join(line, _path.map(print, 'children')));
			}
			case 'TypedFunctionTest': {
				const functionKeyword = _path.map(print, 'childrenByName', "'function'");
				const asKeyword = _path.map(print, 'childrenByName', "'as'");
				const sequenceTypes = _path.map(print, 'childrenByName', 'SequenceType');
				const returnType = sequenceTypes.pop();
				return group([
					functionKeyword,
					space,
					'(',
					group([softline, join([',', line], sequenceTypes)]),
					softline,
					')',
					line,
					asKeyword,
					space,
					returnType,
				]);
			}

			case 'VarDecl': {
				const variableKeyword = printIfExist(_path, print, "'variable'");
				const eQNamePart = _path.map(print, 'childrenByName', 'VarName');
				const typeDeclarationPart = value.childrenByName['SequenceType']
					? ['as', space, _path.map(print, 'childrenByName', 'SequenceType'), space]
					: [];

				const varValuePart = _path.map(print, 'childrenByName', 'VarValue');

				return group([variableKeyword, space, '$', eQNamePart, space, typeDeclarationPart, ':=', space, varValuePart]);
			}

			case 'SwitchExpr': {
				const switchPart = _path.map(print, 'childrenByName', "'switch'");
				const exprPart = _path.map(print, 'childrenByName', 'Expr');
				const switchCaseClausePart = _path.map(print, 'childrenByName', 'SwitchCaseClause');
				const defaultPart = _path.map(print, 'childrenByName', "'default'");
				const returnPart = _path.map(print, 'childrenByName', "'return'");
				const exprSinglePart = _path.map(print, 'childrenByName', 'ExprSingle');

				return group([
					switchPart,
					space,
					'(',
					exprPart,
					')',
					indent([
						hardline,
						switchCaseClausePart,
						hardline,
						defaultPart,
						space,
						returnPart,
						indent([hardline, exprSinglePart]),
					]),
				]);
			}

			case 'TypeswitchExpr': {
				const switchPart = _path.map(print, 'childrenByName', "'typeswitch'");
				const exprPart = _path.map(print, 'childrenByName', 'Expr');
				const switchCaseClausePart = _path.map(print, 'childrenByName', 'CaseClause');
				const defaultPart = _path.map(print, 'childrenByName', "'default'");
				const returnPart = _path.map(print, 'childrenByName', "'return'");
				const exprSinglePart = _path.map(print, 'childrenByName', 'ExprSingle');

				return group([
					switchPart,
					space,
					'(',
					exprPart,
					')',
					indent([
						hardline,
						join(hardline, switchCaseClausePart),
						hardline,
						hardline,
						defaultPart,
						space,
						returnPart,
						indent([hardline, exprSinglePart]),
					]),
				]);
			}

			case 'TryCatchExpr': {
				const tryClausePart = _path.map(print, 'childrenByName', 'TryClause');
				const catchClausePart = _path.map(print, 'childrenByName', 'CatchClause');
				return group([tryClausePart, hardline, catchClausePart]);
			}
			case 'TryClause': {
				const tryKeyword = _path.map(print, 'childrenByName', "'try'");
				const expr = _path.map(print, 'childrenByName', 'EnclosedTryTargetExpr');
				return group([tryKeyword, space, expr]);
			}
			case 'CatchClause': {
				const catchKeyword = _path.map(print, 'childrenByName', "'catch'");
				const catchErrorListPart = _path.map(print, 'childrenByName', 'CatchErrorList');
				const expr = _path.map(print, 'childrenByName', 'EnclosedExpr');
				return group([catchKeyword, space, catchErrorListPart, space, expr]);
			}

			case 'CaseClause': {
				const caseKeyword = _path.map(print, 'childrenByName', "'case'");
				const varNamePart = printIfExist(_path, print, 'VarName');
				const sequenceTypeUnionPart = _path.map(print, 'childrenByName', 'SequenceTypeUnion');
				const returnKeyword = _path.map(print, 'childrenByName', "'return'");
				const exprSingleParts = _path.map(print, 'childrenByName', 'ExprSingle');

				return group([
					caseKeyword,
					space,
					varNamePart ? ['$', varNamePart, space, 'as', space] : [],
					sequenceTypeUnionPart,
					space,
					returnKeyword,
					indent([hardline, exprSingleParts]),
				]);
			}
			case 'SwitchCaseClause': {
				const caseParts = _path.map(print, 'childrenByName', "'case'");
				const switchCaseOperandParts = _path.map(print, 'childrenByName', 'SwitchCaseOperand');
				const returnParts = _path.map(print, 'childrenByName', "'return'");
				const exprSingleParts = _path.map(print, 'childrenByName', 'ExprSingle');

				const cases = caseParts.map((casePart, i) => {
					const operand = switchCaseOperandParts[i];
					const returnPart = returnParts[i];
					const exprSinglePart = exprSingleParts[i];

					return group([casePart, space, operand, space, returnPart, indent([hardline, exprSinglePart]), hardline]);
				});

				return join(hardline, cases);
			}
			case 'ValidateExpr': {
				const validateKeyword = _path.map(print, 'childrenByName', "'validate'");
				const validationMode = printIfExist(_path, print, 'ValidationMode');
				const exprPart = _path.map(print, 'childrenByName', 'Expr');
				const parts: Doc = [validateKeyword, space];
				if (validationMode) {
					parts.push(validationMode, space);
				}

				const typeKeyword = printIfExist(_path, print, "'type'");
				const typeNamePart = printIfExist(_path, print, 'TypeName');
				if (typeNamePart) {
					parts.push(typeKeyword, space, typeNamePart, space);
				}

				parts.push('{', indent([line, exprPart, line]), '}');
				return group([parts]);
			}
			case 'QuantifiedExpr': {
				const toReturn: Doc = [];
				_path.each((child: AstPath<Node>) => {
					switch (child.node.name) {
						case "'some'":
						case "'every'":
							toReturn.push(print(child), indent(line));
							break;
						case "'$'":
							toReturn.push(print(child));
							break;
						case 'VarName':
							toReturn.push(print(child), space);
							break;
						case 'TypeDeclaration':
							toReturn.push(print(child), space);
							break;
						case "'in'":
							toReturn.push(print(child));
							break;
						case 'ExprSingle':
							toReturn.push(indent([line, print(child)]));
							break;
						case "','":
							toReturn.push(print(child));
							break;
						case "'satisfies'":
							toReturn.push(space, print(child));
							break;
					}
				}, 'children');

				return group(toReturn);
			
			}
			case 'BoundarySpaceDecl': {
				return group(join(space, _path.map(print, 'children')));
			}
			default:
//								console.log(`Got passed a ${value.name}`, Object.keys(value.childrenByName));
				return _path.map(print, 'children');
		}
	},
};

const pluginDefinition: Plugin<Node> = {
	languages: [
		{
			name: 'XQuery',
			parsers: ['xquery-parser'],
		},
	],
	parsers: {
		'xquery-parser': xqueryParser,
	},
	printers: {
		'xquery-ast': xqueryPrinter,
	},
};

export default pluginDefinition;

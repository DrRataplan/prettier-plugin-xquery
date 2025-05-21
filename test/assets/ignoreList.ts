/**
* Automatically generated test report from running prettier over all 31821 test cases in the QT3 tests.
*
* The ignore list contains 88 known failing tests.
* Tests that fail because a comment failed to be printed: 52
* Tests that fail because of a type error: 0
* Tests that fail because the prettified result is not stable: 26
*
* Other failures: 10
*/
export default {
	"fn-contains": {
		"fn-contains-34": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"  'fn:contains(\\n' +",
			"    '  \"abc-def\",\\n' +",
			"    '  \"abcdef\",\\n' +",
			"    '  \"http://www.w3.org/2013/collation/UCA?lang=en;alternate=blanked\"\\n' +",
			"+   ')(::)\\n'",
			"-   ') (::)'",
			""
		]
	},
	"fn-matches": {
		"fn-matches-50": [
			"AssertionError [ERR_ASSERTION]: Got unwanted rejection: The second prettification should also work3.",
			"Input: ",
			"        declare namespace err=\"http://www.w3.org/2005/xqt-errors\";",
			"      \t<results>{",
			"      \t\tfor $t in /tests/test",
			"      \t\treturn try {",
			"      \t\t    let $matches := matches($t/@input, $t/@regex, string($t/@flags))",
			"      \t\t    return",
			"      \t\t       if ($matches (:trace($matches, $t/@id):) and $t/@result ne 'y')",
			"      \t\t         then <fail>{$t}</fail>",
			"      \t\t       else if (not($matches) and $t/@result ne 'n') ",
			"      \t\t         then <fail>{$t}</fail>",
			"      \t\t       else ()",
			"      \t    } catch * {",
			"      \t        if ($t/@result = ('y', 'n'))",
			"      \t        then <fail error=\"{$err:code}\">{$t}</fail>",
			"      \t        else ()",
			"      \t    }   ",
			"      \t}</results>",
			"      ",
			"Result of first round: declare namespace err = \"http://www.w3.org/2005/xqt-errors\";",
			"",
			"<results>{",
			"  for $t in /tests/test",
			"  return try {",
			"      let $matches := matches($t/@input, $t/@regex, string($t/@flags))",
			"      return if (",
			"          $matches (:trace($matches, $t/@id):)",
			"            and",
			"            $t/@result ne \"y\"",
			"        ) then",
			"          <fail>{",
			"            $t",
			"          }</fail>",
			"        else if (not($matches) and $t/@result ne \"n\") then",
			"          <fail>{",
			"            $t",
			"          }</fail>",
			"        else (",
			"          )",
			"    }",
			"    catch * {",
			"      if ($t/@result = (\"y\", \"n\")) then",
			"        <fail error=\"{",
			"          $err:code",
			"        }\">{",
			"          $t",
			"        }</fail>",
			"      else (",
			"        )",
			"    }",
			"}</results>",
			"Actual message: \"Comment \"(:trace($matches, $t/@id):)\" was not printed. Please report this error!\""
		]
	},
	"fn-unparsed-text": {
		"fn-unparsed-text-054": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"  'for $t1 in unparsed-text(\"http://date.jsontest.com\")\\n' +",
			"    'return every\\n' +",
			"    '    $i in\\n' +",
			"    '    1 to 50 satisfies\\n' +",
			"    '    (\\n' +",
			"+   '      parse-xml(\"<a><b><c>\" || $i || \"</c></b></a>\")//c(:waste some time:)\\n' +",
			"+   '       and\\n' +",
			"-   '      parse-xml(\"<a><b><c>\" || $i || \"</c></b></a>\")//c and (:waste some time:)\\n' +",
			"    '        unparsed-text(\\n' +",
			"    '          translate(concat(\"http://date.jsontest.com\", $i), \"0123456789\", \"\")\\n' +",
			"    '        ) eq\\n' +",
			"    '          $t1\\n' +",
			"    '    )'",
			""
		]
	},
	"prod-BaseURIDecl": {
		"K-BaseURIProlog-1": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"+ 'declare (::)\\n' +",
			"+   'base-uri (::)\\n' +",
			"+   '\"http://example.com/declareBaseURITest\";\\n' +",
			"- 'declare base-uri \"http://example.com/declareBaseURITest\"; (::) (::)\\n' +",
			"    '\\n' +",
			"    'static-base-uri() eq \"http://example.com/declareBaseURITest\"'",
			""
		],
		"K-BaseURIProlog-2": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"+ 'declare (::)\\n' +",
			"+   'base-uri (::)\\n' +",
			"+   '\"http://example.com/declareBaseURITest\";\\n' +",
			"+   'declare (::)\\n' +",
			"+   'base-uri (::)\\n' +",
			"+   '\"http://example.com/declareBaseURITest2\";\\n' +",
			"- 'declare base-uri \"http://example.com/declareBaseURITest\"; (::) (::)\\n' +",
			"-   'declare base-uri \"http://example.com/declareBaseURITest2\"; (::) (::)\\n' +",
			"    '\\n' +",
			"    '1 eq 1'",
			""
		],
		"K-BaseURIProlog-3": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		]
	},
	"prod-BoundarySpaceDecl": {
		"K-BoundarySpaceProlog-1": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		],
		"K-BoundarySpaceProlog-2": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		],
		"K-BoundarySpaceProlog-3": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		]
	},
	"prod-Comment": {
		"XQueryComment012": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"  '(: Name: XQueryComment012 :)\\n' +",
			"    '(: Description: Comments that looks like a function call :)\\n' +",
			"    '\\n' +",
			"+   '/south (: test :)'",
			"-   '/south(: test :)\\n'",
			""
		],
		"XQueryComment014": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"  '(: Name: XQueryComment014 :)\\n' +",
			"    '(: Description: Comments inside a cast expression :)\\n' +",
			"    '\\n' +",
			"+   '\"10\" cast as (: type comment :)\\n' +",
			"+   'xs:integer?'",
			"-   '\"10\" cast as xs:integer? (: type comment :)'",
			""
		],
		"K-XQueryComment-1": [
			"AssertionError [ERR_ASSERTION]: Got unwanted rejection: The second prettification should also work3.",
			"Input: (:*******************************************************:)",
			"(: Test: K-XQueryComment-1                               :)",
			"(: Written by: Frans Englich                             :)",
			"(: Date: 2007-11-22T11:31:22+01:00                       :)",
			"(: Purpose: A test whose essence is: `(3(: comment inbetween :)- 1) eq 2`. :)",
			"(:*******************************************************:)",
			"(3(: comment inbetween :)- 1) eq 2",
			"Result of first round: (:*******************************************************:)",
			"(: Test: K-XQueryComment-1                               :)",
			"(: Written by: Frans Englich                             :)",
			"(: Date: 2007-11-22T11:31:22+01:00                       :)",
			"(: Purpose: A test whose essence is: `(3(: comment inbetween :)- 1) eq 2`. :)",
			"(:*******************************************************:)",
			"(",
			"  3 (: comment inbetween :)",
			"    -",
			"    1",
			") eq",
			"  2",
			"Actual message: \"Comment \"(: comment inbetween :)\" was not printed. Please report this error!\""
		],
		"K-XQueryComment-2": [
			"AssertionError [ERR_ASSERTION]: Got unwanted rejection: The second prettification should also work3.",
			"Input: (:*******************************************************:)",
			"(: Test: K-XQueryComment-2                               :)",
			"(: Written by: Frans Englich                             :)",
			"(: Date: 2007-11-22T11:31:22+01:00                       :)",
			"(: Purpose: A test whose essence is: `1 (: a (: nested :) comment :) eq 1`. :)",
			"(:*******************************************************:)",
			"1 (: a (: nested :) comment :) eq 1",
			"Result of first round: (:*******************************************************:)",
			"(: Test: K-XQueryComment-2                               :)",
			"(: Written by: Frans Englich                             :)",
			"(: Date: 2007-11-22T11:31:22+01:00                       :)",
			"(: Purpose: A test whose essence is: `1 (: a (: nested :) comment :) eq 1`. :)",
			"(:*******************************************************:)",
			"1 (: a (: nested :) comment :)",
			"  eq",
			"  1",
			"Actual message: \"Comment \"(: a (: nested :) comment :)\" was not printed. Please report this error!\""
		],
		"K-XQueryComment-3": [
			"AssertionError [ERR_ASSERTION]: Got unwanted rejection: The second prettification should also work3.",
			"Input: (:*******************************************************:)",
			"(: Test: K-XQueryComment-3                               :)",
			"(: Written by: Frans Englich                             :)",
			"(: Date: 2007-11-22T11:31:22+01:00                       :)",
			"(: Purpose: A test whose essence is: `1 (: comment (: inside :) comment :) eq 1`. :)",
			"(:*******************************************************:)",
			"1 (: comment (: inside :) comment :) eq 1",
			"Result of first round: (:*******************************************************:)",
			"(: Test: K-XQueryComment-3                               :)",
			"(: Written by: Frans Englich                             :)",
			"(: Date: 2007-11-22T11:31:22+01:00                       :)",
			"(: Purpose: A test whose essence is: `1 (: comment (: inside :) comment :) eq 1`. :)",
			"(:*******************************************************:)",
			"1 (: comment (: inside :) comment :)",
			"  eq",
			"  1",
			"Actual message: \"Comment \"(: comment (: inside :) comment :)\" was not printed. Please report this error!\""
		],
		"K-XQueryComment-5": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"  '(:*******************************************************:)\\n' +",
			"    '(: Test: K-XQueryComment-5                               :)\\n' +",
			"    '(: Written by: Frans Englich                             :)\\n' +",
			"    '(: Date: 2007-11-22T11:31:22+01:00                       :)\\n' +",
			"    '(: Purpose: A test whose essence is: `5 instance (: strange place for a comment :) of item()`. :)\\n' +",
			"    '(:*******************************************************:)\\n' +",
			"+   '5 instance (: strange place for a comment :)\\n' +",
			"+   'of item()'",
			"-   '5 instance of item() (: strange place for a comment :)'",
			""
		],
		"K-XQueryComment-6": [
			"AssertionError [ERR_ASSERTION]: Got unwanted rejection: The second prettification should also work3.",
			"Input: (:*******************************************************:)",
			"(: Test: K-XQueryComment-6                               :)",
			"(: Written by: Frans Englich                             :)",
			"(: Date: 2007-11-22T11:31:22+01:00                       :)",
			"(: Purpose: A test whose essence is: `1 (: simple comment :) eq 1`. :)",
			"(:*******************************************************:)",
			"1 (: simple comment :) eq 1",
			"Result of first round: (:*******************************************************:)",
			"(: Test: K-XQueryComment-6                               :)",
			"(: Written by: Frans Englich                             :)",
			"(: Date: 2007-11-22T11:31:22+01:00                       :)",
			"(: Purpose: A test whose essence is: `1 (: simple comment :) eq 1`. :)",
			"(:*******************************************************:)",
			"1 (: simple comment :)",
			"  eq",
			"  1",
			"Actual message: \"Comment \"(: simple comment :)\" was not printed. Please report this error!\""
		],
		"K-XQueryComment-11": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"  '(:*******************************************************:)\\n' +",
			"    '(: Test: K-XQueryComment-11                              :)\\n' +",
			"    '(: Written by: Frans Englich                             :)\\n' +",
			"    '(: Date: 2007-11-22T11:31:22+01:00                       :)\\n' +",
			"    \"(: Purpose: An empty comment after a function's paranteses. :)\\n\" +",
			"    '(:*******************************************************:)\\n' +",
			"+   'true()(::)\\n'",
			"-   'true() (::)'",
			""
		],
		"K-XQueryComment-12": [
			"AssertionError [ERR_ASSERTION]: Got unwanted rejection: The second prettification should also work3.",
			"Input: (:*******************************************************:)",
			"(: Test: K-XQueryComment-12                              :)",
			"(: Written by: Frans Englich                             :)",
			"(: Date: 2007-11-22T11:31:22+01:00                       :)",
			"(: Purpose: A for loop with a comment inbetween.         :)",
			"(:*******************************************************:)",
			"for (: set up loop :) $i in 3 return $i eq 3",
			"Result of first round: (:*******************************************************:)",
			"(: Test: K-XQueryComment-12                              :)",
			"(: Written by: Frans Englich                             :)",
			"(: Date: 2007-11-22T11:31:22+01:00                       :)",
			"(: Purpose: A for loop with a comment inbetween.         :)",
			"(:*******************************************************:)",
			"for (: set up loop :)",
			"  $i in 3",
			"return $i eq 3",
			"Actual message: \"Comment \"(: set up loop :)\" was not printed. Please report this error!\""
		],
		"K-XQueryComment-17": [
			"AssertionError [ERR_ASSERTION]: Got unwanted rejection: The second prettification should also work3.",
			"Input: (:*******************************************************:)",
			"(: Test: K-XQueryComment-17                              :)",
			"(: Written by: Frans Englich                             :)",
			"(: Date: 2007-11-22T11:31:22+01:00                       :)",
			"(: Purpose: Colons and paranteses appearing freely in comment content. :)",
			"(:*******************************************************:)",
			"1(: ((( : )) ))ladl:  :(): ()()(dahsi ()()( dad: ) :) eq 1",
			"Result of first round: (:*******************************************************:)",
			"(: Test: K-XQueryComment-17                              :)",
			"(: Written by: Frans Englich                             :)",
			"(: Date: 2007-11-22T11:31:22+01:00                       :)",
			"(: Purpose: Colons and paranteses appearing freely in comment content. :)",
			"(:*******************************************************:)",
			"1 (: ((( : )) ))ladl:  :(): ()()(dahsi ()()( dad: ) :)",
			"  eq",
			"  1",
			"Actual message: \"Comment \"(: ((( : )) ))ladl:  :(): ()()(dahsi ()()( dad: ) :)\" was not printed. Please report this error!\""
		],
		"K-XQueryComment-19": [
			"AssertionError [ERR_ASSERTION]: Got unwanted rejection: The second prettification should also work3.",
			"Input: (:*******************************************************:)",
			"(: Test: K-XQueryComment-19                              :)",
			"(: Written by: Frans Englich                             :)",
			"(: Date: 2007-11-22T11:31:22+01:00                       :)",
			"(: Purpose: A test stressing many nested comments.       :)",
			"(:*******************************************************:)",
			"1(:(:(:(:(:(:(:(::):):):):):):):) eq 1",
			"Result of first round: (:*******************************************************:)",
			"(: Test: K-XQueryComment-19                              :)",
			"(: Written by: Frans Englich                             :)",
			"(: Date: 2007-11-22T11:31:22+01:00                       :)",
			"(: Purpose: A test stressing many nested comments.       :)",
			"(:*******************************************************:)",
			"1 (:(:(:(:(:(:(:(::):):):):):):):)",
			"  eq",
			"  1",
			"Actual message: \"Comment \"(:(:(:(:(:(:(:(::):):):):):):):)\" was not printed. Please report this error!\""
		],
		"K2-XQueryComment-3": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"... Skipped lines",
			"",
			"  '(:*******************************************************:)\\n' +",
			"    '(: Test: K2-XQueryComment-3                              :)\\n' +",
			"    '(: Written by: Frans Englich                             :)\\n' +",
			"    '(: Date: 2007-11-22T11:31:21+01:00                       :)\\n' +",
			"    '(: Purpose: Have a computed comment constructor as a last step. :)\\n' +",
			"...",
			"    '                                        </e>\\n' +",
			"+   'return $i/b/comment (: some : content (:some content:):)\\n' +",
			"+   '  {\\n' +",
			"-   'return $i/b/comment { (: some : content (:some content:):)\\n' +",
			"    '    \"content\"\\n' +",
			"    '  }'",
			""
		],
		"K2-XQueryComment-4": [
			"Error: Comment \"(: some : content (:some content:):)\" was not printed. Please report this error!"
		],
		"K2-XQueryComment-5": [
			"Error: Comment \"(: some : content (:some content:):)\" was not printed. Please report this error!"
		],
		"XQueryComment009": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"  '(: Name: XQueryComment009 :)\\n' +",
			"    '(: Description: Comments inside a conditional expression :)\\n' +",
			"    '\\n' +",
			"+   'if (:test (: yada (: neato :) :) :)\\n' +",
			"+   '(\\n' +",
			"-   'if ( (:test (: yada (: neato :) :) :)\\n' +",
			"    '  /fs:MyComputer\\n' +",
			"    ') then\\n' +",
			"    '  (: yada :)\\n' +",
			"    '  \"true\"\\n' +",
			"    'else\\n' +",
			""
		],
		"XQueryComment010": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"  '(: Name: XQueryComment010 :)\\n' +",
			"    '(: Description: Comments inside a conditional expression :)\\n' +",
			"    'if ( (: comment :)\\n' +",
			"    '  //fs:Folder[1]/fs:FolderName/text() = \"Folder00000000000\"\\n' +",
			"+   ') then (: this is the then case :)\\n' +",
			"+   '(\\n' +",
			"-   ') then ( (: this is the then case :)\\n' +",
			"    '  true()\\n' +",
			"+   ') else (: this is the else case :)\\n' +",
			"+   '(\\n' +",
			"-   ') else ( (: this is the else case :)\\n' +",
			"    '  false()\\n' +",
			"    ')'",
			""
		],
		"XQueryComment011": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"  '(: Name: XQueryComment011 :)\\n' +",
			"    '(: Description: Comments inside a conditional expression :)\\n' +",
			"    '\\n' +",
			"+   'if (:test:)(:t2:)(:t3:)\\n' +",
			"+   '(\\n' +",
			"-   'if ( (:test:)(:t2:)(:t3:)\\n' +",
			"    '  /fs:MyComputer\\n' +",
			"    ') then\\n' +",
			"    '  \"true\"\\n' +",
			"    'else\\n' +",
			"    '  \"false\"'",
			""
		],
		"K-XQueryComment-9": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		],
		"K-XQueryComment-18": [
			"Error: Comment \"(: (:one comment:) content (:another comment:) content (:a third:):)\" was not printed. Please report this error!"
		]
	},
	"prod-ConstructionDecl": {
		"K-ConstructionProlog-1": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		],
		"K-ConstructionProlog-3": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		],
		"K-ConstructionProlog-4": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		]
	},
	"prod-DefaultNamespaceDecl": {
		"K-DefaultNamespaceProlog-1": [
			"Error: Comment \"(:..:)\" was not printed. Please report this error!"
		],
		"K-DefaultNamespaceProlog-2": [
			"Error: Comment \"(:..:)\" was not printed. Please report this error!"
		],
		"K-DefaultNamespaceProlog-3": [
			"Error: Comment \"(:..:)\" was not printed. Please report this error!"
		],
		"K-DefaultNamespaceProlog-4": [
			"Error: Comment \"(:..:)\" was not printed. Please report this error!"
		],
		"K-DefaultNamespaceProlog-5": [
			"Error: Comment \"(:..:)\" was not printed. Please report this error!"
		]
	},
	"prod-DirAttributeList": {
		"Constr-attr-enclexpr-12": [
			"Error: Comment \"(:comment:)\" was not printed. Please report this error!"
		]
	},
	"prod-DirElemContent": {
		"Constr-cont-document-3": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"... Skipped lines",
			"",
			"  'declare variable $codepoints := (\\n' +",
			"    '  9, 10, 13, 32 to 55295, 57344 to 65532, 65536 to 1114111\\n' +",
			"    ');\\n' +",
			"    '\\n' +",
			"    'declare variable $count := count($codepoints);\\n' +",
			"...",
			"    '  codepoints-to-string($codepoints)\\n' +",
			"+   '}</r></allCodepoints>(:<allCodepoints>{ \\n' +",
			"-   '}</r></allCodepoints> (:<allCodepoints>{ \\n' +",
			"    '            for $i in (1 to $count idiv $lineWidth) \\n' +",
			"    '            let $startOffset := (($i - 1) * $lineWidth) + 1 \\n' +",
			"    '            return (<r s=\"{$codepoints[$startOffset]}\" e=\"{$codepoints[$startOffset] + $lineWidth}\"> { \\n' +",
			"    '                codepoints-to-string(subsequence($codepoints, $startOffset, $lineWidth)) } </r>, \"&#xA;\") \\n' +",
			"+   '                } </allCodepoints>:)\\n'",
			"-   '                } </allCodepoints>:)'",
			""
		],
		"K2-DirectConElemContent-26b": [
			"Error: Comment \"(:comment:)\" was not printed. Please report this error!"
		]
	},
	"prod-EmptyOrderDecl": {
		"K-EmptyOrderProlog-1": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"actual expected",
			"",
			"'declare (::)\\ndefault order empty (::)\\ngreatest; (::) (::)\\n\\n1 eq 1'",
			""
		],
		"K-EmptyOrderProlog-2": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"actual expected",
			"",
			"'declare (::)\\ndefault order empty (::)\\nleast; (::) (::)\\n\\n1 eq 1'",
			""
		],
		"K-EmptyOrderProlog-3": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"+ 'declare (::)\\n' +",
			"+   'default order empty (::)\\n' +",
			"+   'greatest;\\n' +",
			"+   'declare (::)\\n' +",
			"+   'default order empty (::)\\n' +",
			"+   'least;\\n' +",
			"- 'declare default order empty greatest; (::) (::)\\n' +",
			"-   'declare default order empty least; (::) (::)\\n' +",
			"    '\\n' +",
			"    '1 eq 1'",
			""
		]
	},
	"prod-ExtensionExpr": {
		"K-ExtensionExpression-8": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		]
	},
	"prod-FunctionCall": {
		"FunctionCall-046": [
			"Error: Comment \"(: there's nothing here :)\" was not printed. Please report this error!"
		],
		"FunctionCall-047": [
			"Error: Comment \"(: there's nothing here :)\" was not printed. Please report this error!"
		],
		"FunctionCall-048": [
			"Error: Comment \"(: there's nothing here :)\" was not printed. Please report this error!"
		],
		"FunctionCall-055": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"  'declare function local:product ($s as xs:double+) as xs:double {\\n' +",
			"    '  if (not($s[2])) then\\n' +",
			"    '    $s[1]\\n' +",
			"    '  else\\n' +",
			"    '    $s[1] * local:product($s[position() > 1])\\n' +",
			"    '};\\n' +",
			"    '\\n' +",
			"+   `local:product((1, \"2\", 3)) (: '2' is not xs:double, error should be raised :)`",
			"-   `local:product((1, \"2\", 3))(: '2' is not xs:double, error should be raised :)\\n`",
			""
		]
	},
	"prod-FunctionDecl": {
		"function-declaration-029": [
			"Error: Comment \"(:there is nothing here:)\" was not printed. Please report this error!"
		],
		"function-declaration-030": [
			"Error: Comment \"(:there is nothing here:)\" was not printed. Please report this error!"
		]
	},
	"prod-GroupByClause": {
		"group-009": [
			"AssertionError [ERR_ASSERTION]: Got unwanted rejection: The second prettification should also work3.",
			"Input: ",
			"        <out>{ ",
			"            for $x in //employee ",
			"            let $key := $x/empnum ",
			"            group by $key collation \"http://www.w3.org/2005/xpath-functions/collation/codepoint\" ",
			"            order by $key ",
			"            return <group count=\"{count($x)}\" key=\"{$key}\"> {string-join($x/pnum, '|')} </group> ",
			"        }</out>",
			"      ",
			"Result of first round: <out>{",
			"  for $x in //employee",
			"  let $key := $x/empnum",
			"  group by $keycollation\"http://www.w3.org/2005/xpath-functions/collation/codepoint\"",
			"  order by $key",
			"  return <group count=\"{",
			"      count($x)",
			"    }\" key=\"{",
			"      $key",
			"    }\"> {",
			"      string-join($x/pnum, \"|\")",
			"    } </group>",
			"}</out>",
			"Actual message: \"lexical analysis failed",
			"while expecting [S, '(:', ',', ':=', 'as', 'collation', 'count', 'for', 'group', 'let', 'order', 'return', 'stable', 'where']",
			"at line 4, column 25:",
			"...\"http://www.w3.org/2005/xpath-functions/collation/codepoint\"",
			"  o... (4:24)\""
		],
		"group-009a": [
			"AssertionError [ERR_ASSERTION]: Got unwanted rejection: The second prettification should also work3.",
			"Input: ",
			"        <out>{ ",
			"            for $x in //employee ",
			"            group by $key := $x/empnum collation \"http://www.w3.org/2005/xpath-functions/collation/codepoint\" ",
			"            order by $key ",
			"            return <group count=\"{count($x)}\" key=\"{$key}\"> {string-join($x/pnum, '|')} </group> ",
			"        }</out>",
			"      ",
			"Result of first round: <out>{",
			"  for $x in //employee",
			"  group by $key:=",
			"      $x/empnumcollation\"http://www.w3.org/2005/xpath-functions/collation/codepoint\"",
			"  order by $key",
			"  return <group count=\"{",
			"      count($x)",
			"    }\" key=\"{",
			"      $key",
			"    }\"> {",
			"      string-join($x/pnum, \"|\")",
			"    } </group>",
			"}</out>",
			"Actual message: \"lexical analysis failed",
			"while expecting [S, EOF, '!', '!=', '#', '(', '(:', ')', '*', '+', ',', '-', '/', '//', ':', ';', '<', '<<', '<=', '=', '=>', '>', '>=', '>>', '[', ']', 'and', 'ascending', 'case', 'cast', 'castable', 'collation', 'count', 'default', 'descending', 'div', 'else', 'empty', 'end', 'eq', 'except', 'for', 'ge', 'group', 'gt', 'idiv', 'instance', 'intersect', 'is', 'le', 'let', 'lt', 'mod', 'ne', 'only', 'or', 'order', 'return', 'satisfies', 'stable', 'start', 'to', 'treat', 'union', 'where', '|', '||', '}', '}`']",
			"at line 4, column 25:",
			"...\"http://www.w3.org/2005/xpath-functions/collation/codepoint\"",
			"  o... (4:24)\""
		]
	},
	"prod-Lookup": {
		"Lookup-044": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"  '(\\n' +",
			"    '  map {\"a-1\": 1, \"b-1\": 2, \"c-1\": 3}, map {\"a-1\": 2, \"b-1\": 3, \"c-1\": 4}\\n' +",
			"+   ')[.?(:confusing.?:)\\n' +",
			"+   'b-1 eq\\n' +",
			"-   ')[.?b-1 eq (:confusing.?:)\\n' +",
			"    '  3]'",
			""
		],
		"Lookup-144": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"+ '(\\n' +",
			"+   '  map {\"a-1\": 1, \"b-1\": 2, \"c-1\": 3}, map {\"a-1\": 2, \"b-1\": 3, \"c-1\": 4}\\n' +",
			"+   ')?(:confusing.?:)\\n' +",
			"+   'b-1'",
			"- '(map {\"a-1\": 1, \"b-1\": 2, \"c-1\": 3}, map {\"a-1\": 2, \"b-1\": 3, \"c-1\": 4})?b-1 (:confusing.?:)'",
			""
		]
	},
	"prod-ModuleImport": {
		"K-ModuleImport-1": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		],
		"K-ModuleImport-2": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		]
	},
	"prod-NamespaceDecl": {
		"K-NamespaceProlog-1": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		],
		"K-NamespaceProlog-2": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		]
	},
	"prod-OptionDecl": {
		"K-OptionDeclarationProlog-2": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		],
		"K-OptionDeclarationProlog-3": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"actual expected",
			"",
			"'declare (::)\\noption (::)\\nlocal:opt \"option value\"; (::) (::)\\n\\n1 eq 1'",
			""
		],
		"K-OptionDeclarationProlog-4": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"actual expected",
			"",
			"'declare (::)\\noption (::)\\nlocal:opt \"option value\"; (::) (::)\\n\\n1 eq 1'",
			""
		]
	},
	"prod-OrderingModeDecl": {
		"K-DefaultOrderingProlog-1": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"actual expected",
			"",
			"'declare (::)\\nordering ordered; (::)\\n\\n1 eq 1'",
			""
		],
		"K-DefaultOrderingProlog-2": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"actual expected",
			"",
			"'declare (::)\\nordering unordered; (::)\\n\\n1 eq 1'",
			""
		],
		"K-DefaultOrderingProlog-3": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"actual expected",
			"",
			"'declare (::)\\nordering unordered; (::)\\ndeclare (::)\\nordering ordered; (::)\\n\\n1 eq 1'",
			""
		]
	},
	"prod-SchemaImport": {
		"qischema008": [
			"Error: Comment \"(: at \"qischema008.xsd\" :)\" was not printed. Please report this error!"
		],
		"qischema040": [
			"Error: Comment \"(:at \"xmod040a.xq\":)\" was not printed. Please report this error!"
		],
		"qischema040a": [
			"Error: Comment \"(:at \"xmod040a.xq\":)\" was not printed. Please report this error!"
		],
		"qischema043": [
			"Error: Comment \"(:at \"xmod043a.xq\" :)\" was not printed. Please report this error!"
		],
		"qischema044": [
			"Error: Comment \"(:at \"xmod040a.xq\" :)\" was not printed. Please report this error!"
		],
		"qischema061": [
			"Error: Comment \"(:at \"qischema061.xsd\":)\" was not printed. Please report this error!"
		],
		"qischema063q02-err": [
			"Error: Comment \"(: at \"qischema063.xsd\" :)\" was not printed. Please report this error!"
		],
		"qischema070": [
			"Error: Comment \"(:at \"mini-fpml.xsd\" :)\" was not printed. Please report this error!"
		],
		"qischema90631-err": [
			"Error: Comment \"(:at \"qischema063.xsd\":)\" was not printed. Please report this error!"
		]
	},
	"prod-StringConstructor": {
		"string-constructor-025": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"actual expected",
			"",
			"'``[` *`{}`* `]`` (:Nothing here:)\\n}`* `]``'",
			""
		]
	},
	"prod-UnaryLookup": {
		"UnaryLookup-044": [
			"AssertionError [ERR_ASSERTION]: The prettification should be stable after a first one",
			"+ actual - expected",
			"",
			"+ '(\\n' +",
			"+   '  map {\"a-1\": 1, \"b-1\": 2, \"c-1\": 3}, map {\"a-1\": 2, \"b-1\": 3, \"c-1\": 4}\\n' +",
			"+   ')[?(:confusing?:)\\n' +",
			"+   'b-1 eq\\n' +",
			"- '(map {\"a-1\": 1, \"b-1\": 2, \"c-1\": 3}, map {\"a-1\": 2, \"b-1\": 3, \"c-1\": 4})[?b-1 eq (:confusing?:)\\n' +",
			"    '  3]'",
			""
		]
	},
	"prod-ValidateExpr": {
		"validate-as-101": [
			"Error: Comment \"(:  at \"qischema001.xsd\" :)\" was not printed. Please report this error!"
		],
		"validate-as-102": [
			"Error: Comment \"(:  at \"qischema001.xsd\" :)\" was not printed. Please report this error!"
		],
		"validate-as-104": [
			"Error: Comment \"(:  at \"qischema001.xsd\" :)\" was not printed. Please report this error!"
		],
		"validate-as-105": [
			"Error: Comment \"(:  at \"qischema001.xsd\" :)\" was not printed. Please report this error!"
		],
		"validate-as-91011": [
			"Error: Comment \"(:  at \"qischema001.xsd\" :)\" was not printed. Please report this error!"
		],
		"validate-as-91014": [
			"Error: Comment \"(:  at \"qischema001.xsd\" :)\" was not printed. Please report this error!"
		],
		"validate-as-91015": [
			"Error: Comment \"(:  at \"qischema001.xsd\" :)\" was not printed. Please report this error!"
		],
		"validate-as-91016": [
			"Error: Comment \"(:  at \"qischema001.xsd\" :)\" was not printed. Please report this error!"
		]
	},
	"prod-VarDecl": {
		"internalvar-2": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		],
		"internalvar-1": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		],
		"K-InternalVariablesWith-1": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		],
		"K-InternalVariablesWith-2": [
			"Error: Comment \"(::)\" was not printed. Please report this error!"
		]
	},
	"prod-VersionDecl": {
		"version_declaration-001": [
			"Error: Comment \"(:encoding \"utf-8xx\":)\" was not printed. Please report this error!"
		]
	},
	"map-size": {
		"map-size-015": [
			"Error: Comment \"(:30:)\" was not printed. Please report this error!"
		]
	}
} as Record<string,Record<string,string>>;

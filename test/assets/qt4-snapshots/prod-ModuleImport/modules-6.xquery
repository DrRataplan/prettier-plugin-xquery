declare namespace foo = "http://example.org";

import module namespace test1 = "http://www.w3.org/TestModules/test1";

declare variable $foo:flag := 3;

let $var := $test1:flag + $foo:flag
return $var

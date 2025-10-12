declare namespace foo = "http://example.org";

import module namespace test1 = "http://www.w3.org/TestModules/test1";

declare function foo:ok () {
  "ok"
};

let $var := fn:concat(test1:ok(), foo:ok())
return $var

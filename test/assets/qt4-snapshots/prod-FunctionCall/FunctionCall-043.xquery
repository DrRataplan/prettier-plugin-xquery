declare namespace lu = "http://www.w3.org/XQueryTest/ListUnionTypes";

import schema  "http://www.w3.org/XQueryTest/ListUnionTypes";

declare function local:hof (
  $f as function (lu:unionType) as xs:integer
) as xs:integer {
  $f(3) + 1
};

let $f := function ($a as lu:unionOfUnionType) as xs:integer { $a + 2 }
return local:hof($f)

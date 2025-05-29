declare namespace lu = "http://www.w3.org/XQueryTest/ListUnionTypes";

import schema  "http://www.w3.org/XQueryTest/ListUnionTypes";

let $v := validate { <lu:e>1 1.0e0</lu:e> }
let $dv := data($v)
return ($dv[1] instance of xs:integer, $dv[2] instance of xs:float)

declare namespace lu = "http://www.w3.org/XQueryTest/ListUnionTypes";

import schema  "http://www.w3.org/XQueryTest/ListUnionTypes";

function ($in as xs:integer) as lu:unionOfUnionType { $in + 23 }(9)

declare namespace lu = "http://www.w3.org/XQueryTest/ListUnionTypes";

import schema  "http://www.w3.org/XQueryTest/ListUnionTypes";

declare function local:daysAhead ($in as xs:integer) as lu:unionOfUnionType {
  current-date() + (xs:dayTimeDuration("P1D") * $in)
};

local:daysAhead(9)

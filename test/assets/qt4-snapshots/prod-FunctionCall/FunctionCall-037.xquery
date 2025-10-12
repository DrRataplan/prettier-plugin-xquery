declare namespace lu = "http://www.w3.org/XQueryTest/ListUnionTypes";

import schema  "http://www.w3.org/XQueryTest/ListUnionTypes";

declare function local:makeDate ($in as xs:string) as lu:unionOfUnionType {
  if ($in castable as xs:date) then
    xs:untypedAtomic($in)
  else
    current-date()
};

local:makeDate("2012-12-12")

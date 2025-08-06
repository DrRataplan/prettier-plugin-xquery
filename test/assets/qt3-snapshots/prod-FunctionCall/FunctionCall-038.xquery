declare namespace lu = "http://www.w3.org/XQueryTest/ListUnionTypes";

import schema  "http://www.w3.org/XQueryTest/ListUnionTypes";

declare function local:makeDate (
  $in as xs:string,
  $year as xs:integer
) as lu:unionOfUnionType {
  let $date := $year || "-" || $in
  return if ($date castable as xs:date) then
    xs:untypedAtomic($date)
  else
    current-date()
};

let $make2012date := local:makeDate(?, 2012)
return $make2012date("12-12")

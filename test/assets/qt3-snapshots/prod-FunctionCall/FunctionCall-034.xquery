declare namespace lu = "http://www.w3.org/XQueryTest/ListUnionTypes";

import schema  "http://www.w3.org/XQueryTest/ListUnionTypes";

function ($in as lu:listType) as xs:boolean {
  $in instance of xs:integer
}(23)

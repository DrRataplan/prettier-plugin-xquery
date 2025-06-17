declare namespace lu = "http://www.w3.org/XQueryTest/unionListDefined";

import schema  "http://www.w3.org/XQueryTest/unionListDefined";

declare variable $f := function (

  $in as element(*, lu:approximateDate)
) as xs:integer { string-length(string($in)) };

$f instance of function (element(*, lu:restrictedUnion)) as xs:integer

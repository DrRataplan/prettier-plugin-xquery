declare namespace lu = "http://www.w3.org/XQueryTest/unionListDefined";

import schema  "http://www.w3.org/XQueryTest/unionListDefined";

declare variable $elem := validate strict {
  <lu:elementContainingApproximateDate><lu:e>2018-11-06</lu:e></lu:elementContainingApproximateDate>
  };

declare function local:hof (
  $f as function (element(*, lu:restrictedUnion)) as xs:integer,
  $e as node()
) as xs:boolean {
  $f($e) = 10
};

local:hof(function ($in as element(*, lu:approximateDate)) as xs:integer {
    string-length(string($in))
  }, $elem/lu:e)

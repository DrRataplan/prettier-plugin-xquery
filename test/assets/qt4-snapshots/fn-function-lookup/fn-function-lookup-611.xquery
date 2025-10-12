xquery version "3.0";

declare %private function local:square ($i as xs:integer) as xs:integer {
  $i * $i
};

function-lookup(
  QName("http://www.w3.org/2005/xquery-local-functions", "square"),
  1
)("banana")

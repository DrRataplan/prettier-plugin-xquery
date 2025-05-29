declare default collation "http://www.w3.org/2010/09/qt-fots-catalog/collation/caseblind";

declare namespace array = "http://www.w3.org/2005/xpath-functions/array";

declare function local:key ($n as xs:integer) as xs:string {
  ("Red", "green", "blUE", "PINK", "ORanGE")[$n]
};

array:sort(
  [1, 2, 3, 4, 5],
  "http://www.w3.org/2010/09/qt-fots-catalog/collation/caseblind",
  local:key#1
)

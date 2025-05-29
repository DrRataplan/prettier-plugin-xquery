declare function local:key ($n as xs:integer) as xs:string {
  ("Red", "green", "blUE", "PINK", "ORanGE")[$n]
};

fn:sort(
  (1 to 5),
  "http://www.w3.org/2010/09/qt-fots-catalog/collation/caseblind",
  local:key#1
)

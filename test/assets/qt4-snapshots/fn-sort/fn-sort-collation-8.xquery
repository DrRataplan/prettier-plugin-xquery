declare function local:key ($n as xs:integer) as xs:string {
  ("Red", "green", "blUE", "PINK", "ORanGE")[$n]
};

fn:sort(
  (1 to 5),
  "http://www.w3.org/2005/xpath-functions/collation/html-ascii-case-insensitive",
  local:key#1
)

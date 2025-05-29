declare function local:lower-case ($x as xs:string) as xs:string {
  concat("'", fn:lower-case($x), "'")
};

declare function local:ops () as (function (xs:string) as xs:string)* {
  upper-case#1, local:lower-case#1, function ($x) {
    translate($x, "e", "i")
  }, substring-before(?, " ")
};

string-join(
  for $f in local:ops()
  return $f(<a name="Michael Kay"/>/@name),
  "~"
)

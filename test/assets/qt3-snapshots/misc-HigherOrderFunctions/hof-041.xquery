declare function local:ops () as (function (xs:string) as xs:string)* {
  (
    upper-case#1,
    lower-case#1,
    function ($x) { translate($x, "e", "i") },
    substring-before(?, " ")
  )
};

string-join(
  for $f in local:ops()
  return $f("Michael Kay"),
  "~"
)

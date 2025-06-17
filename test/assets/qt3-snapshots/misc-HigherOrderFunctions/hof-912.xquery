declare function local:apply (
  $fns as (function (xs:string) as xs:string)*,
  $s as xs:string
) as xs:string* {
  for $f in $fns
  return $f($s)
};

let $ops :=
  (
    upper-case#1,
    lower-case#1,
    function ($x) { translate($x, "e", "i") },
    substring-before(?, " ", ?)
  )
return string-join(local:apply($ops, "Michael Kay"), "~")

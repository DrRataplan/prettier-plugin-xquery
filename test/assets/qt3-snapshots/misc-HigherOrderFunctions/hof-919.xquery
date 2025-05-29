declare function local:round ($x as xs:double) as xs:double {
  fn:floor($x)
};

declare function local:ops () as (function (xs:double) as xs:double)* {
  (abs#1, local:round#1, function ($x as xs:float) {
      $x + 1
    }, round-half-to-even(?, 2))
};

string-join(
  for $f in local:ops()
  return string(round-half-to-even($f(xs:decimal("123.456")), 4)),
  "~"
)

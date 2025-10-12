declare function local:round ($x as xs:double) as xs:double {
  fn:floor($x)
};

declare function local:ops () as (function (xs:double) as xs:double)* {
  (abs#1, local:round#1, function ($x) { $x + 1 }, round-half-to-even(?, 2))
};

string-join(
  for $f in local:ops()
  return string($f(xs:untypedAtomic("123.456"))),
  "~"
)

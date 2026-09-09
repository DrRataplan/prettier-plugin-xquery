declare variable $p as xs:integer external;

declare function local:negate($x) {
  -$x
};

declare variable $f := let $x := $p
return function ($a) { local:negate($a + $x + $p) };

$f(12)

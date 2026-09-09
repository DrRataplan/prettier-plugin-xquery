declare variable $p as xs:integer external;

declare variable $f := function ($a) { $a + $p };

$f(12)

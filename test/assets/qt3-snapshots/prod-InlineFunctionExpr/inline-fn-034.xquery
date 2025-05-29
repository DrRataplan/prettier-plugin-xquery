declare variable $p external;

declare variable $f := function ($a) {
  $a + $p
};

$f(12)

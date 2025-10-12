declare variable $x external;

declare variable $a := $x + 2;

declare function local:foo () {
  $x + $a
};

declare variable $y external;

$y

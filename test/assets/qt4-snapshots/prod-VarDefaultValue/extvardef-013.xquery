declare variable $y external;

declare variable $z external;

declare function local:aaa () {
  $z
};

declare variable $x external;

declare function local:bbb () {
  $y
};

$x

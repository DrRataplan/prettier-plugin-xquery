declare variable $n external;

declare variable $v := function-lookup($n, 0)();

declare function local:return-v () {
  $v + 1
};

$v

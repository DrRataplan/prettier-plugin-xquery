declare variable $n external := xs:QName("local:return-v");

declare variable $v := function-lookup($n, 0)();

declare function local:return-v() {
  $v + 1
};

$v

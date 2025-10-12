declare function local:f1 () {
  $a
};

declare function local:f2 () {
  $a
};

declare variable $a := 19;

local:f1() + local:f2()

declare variable $var := local:func1();

declare function local:func1 () {
  local:func2()
};

declare function local:func2 () {
  local:func3()
};

declare variable $var2 := local:func2();

declare function local:func3 () {
  $var2
};

boolean($var)

declare variable $var := local:func1();

declare function local:func1 () {
  local:func2()
};

declare function local:func2 () {
  local:func3()
};

declare function local:func3 () {
  local:func4()
};

declare function local:func4 () {
  $var
};

boolean($var)

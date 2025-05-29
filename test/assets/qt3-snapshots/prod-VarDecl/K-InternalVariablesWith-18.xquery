declare variable $var := local:func1();

declare function local:func1 () {
  local:func2($var)
};

declare function local:func2 ($arg2) {
  $arg2
};

$var

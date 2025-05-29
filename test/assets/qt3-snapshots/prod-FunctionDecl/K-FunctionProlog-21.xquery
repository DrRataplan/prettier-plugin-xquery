declare function local:func ($a as xs:integer, $unused, $c as xs:integer) {
  $a + $c
};

local:func(1, 2, 3)

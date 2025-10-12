declare function local:func ($a as xs:integer, $b as xs:integer, $unused) {
  $a + $b
};

local:func(1, 2, 3)

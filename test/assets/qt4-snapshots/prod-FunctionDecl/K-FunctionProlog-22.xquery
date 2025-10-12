declare function local:func ($unused, $b as xs:integer, $c as xs:integer) {
  $b + $c
};

local:func(1, 2, 3)

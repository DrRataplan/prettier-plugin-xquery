declare function local:f ($x as xs:integer) as xs:integer {
  $x + 1
};

local:f#1 eq 3

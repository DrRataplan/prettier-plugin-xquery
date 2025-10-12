declare function local:do () as xs:integer {
  (local:f#1)(5)
};

declare function local:f ($x as xs:integer) as xs:integer {
  $x + 1
};

local:do()

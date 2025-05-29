declare function local:square ($arg as xs:integer) as xs:integer {
  $arg * $arg
};

local:square(7) div -1

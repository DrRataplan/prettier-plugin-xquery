declare function local:square ($arg as xs:integer) as xs:integer {
  $arg * $arg
};

local:square(2) div 0

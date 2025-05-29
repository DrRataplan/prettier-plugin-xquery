declare function local:square ($arg as xs:float) as xs:float {
  $arg * $arg
};

local:square(7) div xs:float(-1)

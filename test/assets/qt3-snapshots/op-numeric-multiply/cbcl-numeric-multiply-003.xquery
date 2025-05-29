declare function local:square ($arg as xs:double) as xs:double {
  $arg * $arg
};

local:square(7) * 1e0

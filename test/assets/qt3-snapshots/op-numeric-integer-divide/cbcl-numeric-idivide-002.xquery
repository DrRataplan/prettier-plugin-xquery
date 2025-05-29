declare function local:square ($arg as xs:double) as xs:double {
  $arg * $arg
};

local:square(1e100) idiv 5e-100

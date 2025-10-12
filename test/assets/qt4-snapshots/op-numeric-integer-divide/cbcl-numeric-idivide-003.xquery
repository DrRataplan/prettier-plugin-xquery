declare function local:square ($arg as xs:float) as xs:float {
  $arg * $arg
};

local:square(xs:float(1e30)) idiv xs:float(5e-30)

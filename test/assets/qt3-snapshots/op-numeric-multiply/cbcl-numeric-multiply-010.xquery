declare function local:square ($arg as xs:float) as xs:float {
  $arg * $arg
};

xs:float(1) * local:square(7)

declare function local:square ($arg as xs:float) as xs:float {
  $arg * $arg
};

not(local:square(xs:float(1e0)) ne local:square(xs:float(2e0)))

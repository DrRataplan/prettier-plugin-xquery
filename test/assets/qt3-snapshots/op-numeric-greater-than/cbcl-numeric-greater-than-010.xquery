declare function local:square ($arg as xs:float) as xs:float {
  $arg * $arg
};

not(not(local:square(xs:float(1e0)) gt local:square(xs:float(2e0))))

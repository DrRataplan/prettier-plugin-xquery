declare function local:square ($arg as xs:float) as xs:float {
  $arg * $arg
};

xs:float("NaN") div local:square(7)

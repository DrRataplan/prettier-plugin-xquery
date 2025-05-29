declare function local:square ($arg as xs:double) as xs:double {
  $arg * $arg
};

xs:double("NaN") div local:square(7)

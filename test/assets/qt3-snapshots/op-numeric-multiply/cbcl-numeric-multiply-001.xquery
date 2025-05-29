declare function local:square ($arg as xs:double) as xs:double {
  $arg * $arg
};

xs:double("NaN") * local:square(7)

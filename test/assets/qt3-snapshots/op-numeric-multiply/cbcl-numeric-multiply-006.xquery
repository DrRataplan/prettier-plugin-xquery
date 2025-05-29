declare function local:square ($arg as xs:double) as xs:double {
  $arg * $arg
};

-1e0 * local:square(7)

declare function local:square ($arg as xs:double) as xs:double {
  $arg * $arg
};

not(not(local:square(1e0) lt local:square(2e0)))

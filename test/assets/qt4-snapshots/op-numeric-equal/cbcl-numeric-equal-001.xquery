declare function local:square ($arg as xs:double) as xs:double {
  $arg * $arg
};

not(local:square(1e0) eq local:square(2e0))

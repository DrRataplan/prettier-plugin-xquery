declare function local:square ($arg as xs:decimal) as xs:decimal {
  $arg * $arg
};

not(local:square(1.0) ge local:square(2.0))

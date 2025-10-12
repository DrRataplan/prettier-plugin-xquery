declare function local:square ($arg as xs:integer) as xs:integer {
  $arg * $arg
};

not(local:square(1) ge local:square(2))

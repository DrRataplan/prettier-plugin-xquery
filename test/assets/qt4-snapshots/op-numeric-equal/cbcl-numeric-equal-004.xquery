declare function local:square ($arg as xs:integer) as xs:integer {
  $arg * $arg
};

not(local:square(1) eq local:square(2))

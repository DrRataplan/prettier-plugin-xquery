declare function local:square ($arg as xs:integer) as xs:integer {
  $arg * $arg
};

not(local:square(1) ne local:square(2))

declare function local:square ($arg as xs:integer) as xs:integer {
  $arg * $arg
};

-1 * local:square(7)

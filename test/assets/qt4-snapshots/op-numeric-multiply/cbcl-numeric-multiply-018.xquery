declare function local:square ($arg as xs:decimal) as xs:decimal {
  $arg * $arg
};

-1.0 * local:square(7.0)

declare function local:square ($arg as xs:decimal) as xs:decimal {
  $arg * $arg
};

0.0 * local:square(7.0)

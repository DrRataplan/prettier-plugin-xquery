declare function local:odds ($arg as xs:integer?) as xs:integer? {
  $arg[. mod 2 eq 1]
};

boolean(
  for $x in local:odds(2)
  where $x < 3
  return $x + 1
)

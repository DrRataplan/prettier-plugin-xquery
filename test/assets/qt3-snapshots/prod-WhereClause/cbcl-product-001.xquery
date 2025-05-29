declare function local:odds ($arg as xs:integer*) as xs:integer* {
  $arg[. mod 2 eq 1]
};

boolean(
  zero-or-one(
    for $x in local:odds((2, 4, 8)), $y in local:odds((2, 4, 8))
    return ($x, $y)
  )
)

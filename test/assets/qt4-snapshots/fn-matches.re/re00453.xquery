(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsBopomofoExtended})$")
) and
  (
    every
      $s in
      tokenize("㆟", ",") satisfies
      not(matches($s, "^(?:\p{IsBopomofoExtended})$"))
  )

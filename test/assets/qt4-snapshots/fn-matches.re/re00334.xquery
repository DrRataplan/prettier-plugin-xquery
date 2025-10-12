(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsGreekExtended}?)$")
) and
  (
    every
      $s in
      tokenize(" ", ",") satisfies
      not(matches($s, "^(?:\p{IsGreekExtended}?)$"))
  )

(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsGreekExtended})$")
) and
  (
    every
      $s in
      tokenize("ỿ", ",") satisfies
      not(matches($s, "^(?:\p{IsGreekExtended})$"))
  )

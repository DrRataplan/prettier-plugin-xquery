(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsSpacingModifierLetters}?)$")
) and
  (
    every
      $s in
      tokenize("̀", ",") satisfies
      not(matches($s, "^(?:\p{IsSpacingModifierLetters}?)$"))
  )

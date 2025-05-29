(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsMathematicalAlphanumericSymbols})$")
) and
  (
    every
      $s in
      tokenize("𝇿", ",") satisfies
      not(matches($s, "^(?:\p{IsMathematicalAlphanumericSymbols})$"))
  )

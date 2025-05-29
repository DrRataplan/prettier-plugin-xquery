(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsMathematicalAlphanumericSymbols}?)$")
) and
  (
    every
      $s in
      tokenize("𠀀", ",") satisfies
      not(matches($s, "^(?:\p{IsMathematicalAlphanumericSymbols}?)$"))
  )

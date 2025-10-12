(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsBraillePatterns})$")
) and
  (
    every
      $s in
      tokenize("➿", ",") satisfies
      not(matches($s, "^(?:\p{IsBraillePatterns})$"))
  )

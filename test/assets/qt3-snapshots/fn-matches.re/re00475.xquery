(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsMusicalSymbols})$")
) and
  (
    every
      $s in
      tokenize("𝃿", ",") satisfies
      not(matches($s, "^(?:\p{IsMusicalSymbols})$"))
  )

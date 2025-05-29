(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsMusicalSymbols}?)$")
) and
  (
    every
      $s in
      tokenize("𝐀", ",") satisfies
      not(matches($s, "^(?:\p{IsMusicalSymbols}?)$"))
  )

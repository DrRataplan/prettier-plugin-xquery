(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsByzantineMusicalSymbols}?)$")
) and
  (
    every
      $s in
      tokenize("𝄀", ",") satisfies
      not(matches($s, "^(?:\p{IsByzantineMusicalSymbols}?)$"))
  )

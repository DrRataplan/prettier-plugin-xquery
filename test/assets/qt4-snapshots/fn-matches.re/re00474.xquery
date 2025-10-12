(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsByzantineMusicalSymbols})$")
) and
  (
    every
      $s in
      tokenize("𐑏", ",") satisfies
      not(matches($s, "^(?:\p{IsByzantineMusicalSymbols})$"))
  )

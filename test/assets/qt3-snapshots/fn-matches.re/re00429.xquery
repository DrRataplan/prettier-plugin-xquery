(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsCombiningDiacriticalMarksforSymbols})$")
) and
  (
    every
      $s in
      tokenize("⃏", ",") satisfies
      not(matches($s, "^(?:\p{IsCombiningDiacriticalMarksforSymbols})$"))
  )

(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsHangulSyllables})$")
) and
  (
    every
      $s in
      tokenize("꓏", ",") satisfies
      not(matches($s, "^(?:\p{IsHangulSyllables})$"))
  )

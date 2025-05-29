(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsEnclosedCJKLettersandMonths}?)$")
) and
  (
    every
      $s in
      tokenize("㌀", ",") satisfies
      not(matches($s, "^(?:\p{IsEnclosedCJKLettersandMonths}?)$"))
  )

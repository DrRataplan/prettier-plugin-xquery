(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsEnclosedCJKLettersandMonths})$")
) and
  (
    every
      $s in
      tokenize("ㆿ", ",") satisfies
      not(matches($s, "^(?:\p{IsEnclosedCJKLettersandMonths})$"))
  )

(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsCombiningHalfMarks})$")
) and
  (
    every
      $s in
      tokenize("﷿", ",") satisfies
      not(matches($s, "^(?:\p{IsCombiningHalfMarks})$"))
  )

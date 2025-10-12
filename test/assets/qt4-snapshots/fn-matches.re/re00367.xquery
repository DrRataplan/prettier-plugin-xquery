(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsYiSyllables}?)$")
) and
  (
    every
      $s in
      tokenize("꒐", ",") satisfies
      not(matches($s, "^(?:\p{IsYiSyllables}?)$"))
  )

(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsYiSyllables})$")
) and
  (
    every
      $s in
      tokenize("鿿", ",") satisfies
      not(matches($s, "^(?:\p{IsYiSyllables})$"))
  )

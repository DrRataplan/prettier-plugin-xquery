(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsDevanagari})$")
) and
  (
    every
      $s in
      tokenize("޿", ",") satisfies
      not(matches($s, "^(?:\p{IsDevanagari})$"))
  )

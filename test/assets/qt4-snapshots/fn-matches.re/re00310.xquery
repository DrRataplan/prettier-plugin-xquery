(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsDevanagari}?)$")
) and
  (
    every
      $s in
      tokenize("ঀ", ",") satisfies
      not(matches($s, "^(?:\p{IsDevanagari}?)$"))
  )

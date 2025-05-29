(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsOgham})$")) and
  (
    every
      $s in
      tokenize("ᙿ", ",") satisfies
      not(matches($s, "^(?:\p{IsOgham})$"))
  )

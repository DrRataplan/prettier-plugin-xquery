(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsGothic})$")) and
  (
    every
      $s in
      tokenize("𐌯", ",") satisfies
      not(matches($s, "^(?:\p{IsGothic})$"))
  )

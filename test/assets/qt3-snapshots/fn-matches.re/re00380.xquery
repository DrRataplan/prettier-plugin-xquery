(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsGothic}?)$")) and
  (
    every
      $s in
      tokenize("𐐀", ",") satisfies
      not(matches($s, "^(?:\p{IsGothic}?)$"))
  )

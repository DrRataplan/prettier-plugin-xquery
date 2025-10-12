(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsSyriac}?)$")) and
  (
    every
      $s in
      tokenize("ހ", ",") satisfies
      not(matches($s, "^(?:\p{IsSyriac}?)$"))
  )

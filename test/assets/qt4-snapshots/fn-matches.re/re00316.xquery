(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsTelugu}?)$")) and
  (
    every
      $s in
      tokenize("ಀ", ",") satisfies
      not(matches($s, "^(?:\p{IsTelugu}?)$"))
  )

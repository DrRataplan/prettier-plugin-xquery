(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsTamil}?)$")) and
  (
    every
      $s in
      tokenize("ఀ", ",") satisfies
      not(matches($s, "^(?:\p{IsTamil}?)$"))
  )

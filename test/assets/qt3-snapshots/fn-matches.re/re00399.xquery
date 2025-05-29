(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsSyriac})$")) and
  (
    every
      $s in
      tokenize("ۿ", ",") satisfies
      not(matches($s, "^(?:\p{IsSyriac})$"))
  )

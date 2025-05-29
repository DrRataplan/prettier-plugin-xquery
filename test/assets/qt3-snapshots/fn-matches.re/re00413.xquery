(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsTibetan})$")) and
  (
    every
      $s in
      tokenize("໿", ",") satisfies
      not(matches($s, "^(?:\p{IsTibetan})$"))
  )

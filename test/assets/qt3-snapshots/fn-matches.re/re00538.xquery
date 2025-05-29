(every $s in tokenize("123", ",") satisfies matches($s, "^(?:\d+\d+\d+)$")) and
  (
    every
      $s in
      tokenize("12", ",") satisfies
      not(matches($s, "^(?:\d+\d+\d+)$"))
  )

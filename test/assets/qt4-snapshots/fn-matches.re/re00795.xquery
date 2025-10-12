(every $s in tokenize("", ",") satisfies matches($s, "^(?:^(cat|chat))$")) and
  (
    every
      $s in
      tokenize("cats are bad", ",") satisfies
      not(matches($s, "^(?:^(cat|chat))$"))
  )

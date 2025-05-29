(every $s in tokenize("", ",") satisfies matches($s, "^(?:qqq(123)*)$")) and
  (
    every
      $s in
      tokenize("Startqqq123123End", ",") satisfies
      not(matches($s, "^(?:qqq(123)*)$"))
  )

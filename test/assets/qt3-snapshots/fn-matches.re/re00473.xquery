(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsDeseret})$")) and
  (
    every
      $s in
      tokenize("𐍏", ",") satisfies
      not(matches($s, "^(?:\p{IsDeseret})$"))
  )

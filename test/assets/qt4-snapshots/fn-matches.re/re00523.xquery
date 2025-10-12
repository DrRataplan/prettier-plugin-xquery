(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{Nd}{2})$")) and
  (
    every
      $s in
      tokenize("1999", ",") satisfies
      not(matches($s, "^(?:\p{Nd}{2})$"))
  )

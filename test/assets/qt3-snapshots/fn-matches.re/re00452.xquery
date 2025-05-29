(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsKanbun})$")) and
  (
    every
      $s in
      tokenize("㆏", ",") satisfies
      not(matches($s, "^(?:\p{IsKanbun})$"))
  )

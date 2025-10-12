(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsKannada})$")) and
  (
    every
      $s in
      tokenize("౿", ",") satisfies
      not(matches($s, "^(?:\p{IsKannada})$"))
  )

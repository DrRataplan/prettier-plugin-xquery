(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsTags})$")) and
  (
    every
      $s in
      tokenize("𯨟", ",") satisfies
      not(matches($s, "^(?:\p{IsTags})$"))
  )

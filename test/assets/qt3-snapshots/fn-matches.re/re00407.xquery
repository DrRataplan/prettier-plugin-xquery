(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsTelugu})$")) and
  (
    every
      $s in
      tokenize("௿", ",") satisfies
      not(matches($s, "^(?:\p{IsTelugu})$"))
  )

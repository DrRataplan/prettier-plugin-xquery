(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsThai})$")) and
  (
    every
      $s in
      tokenize("෿", ",") satisfies
      not(matches($s, "^(?:\p{IsThai})$"))
  )

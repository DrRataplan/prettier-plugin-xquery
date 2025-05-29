(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsThaana})$")) and
  (
    every
      $s in
      tokenize("ݏ", ",") satisfies
      not(matches($s, "^(?:\p{IsThaana})$"))
  )

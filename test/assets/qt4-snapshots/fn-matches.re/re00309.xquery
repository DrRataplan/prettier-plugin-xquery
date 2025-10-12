(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsThaana}?)$")) and
  (
    every
      $s in
      tokenize("ऀ", ",") satisfies
      not(matches($s, "^(?:\p{IsThaana}?)$"))
  )

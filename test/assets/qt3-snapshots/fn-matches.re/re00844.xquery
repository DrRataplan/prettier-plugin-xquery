(every $s in tokenize("", ",") satisfies matches($s, "^(?:(a+|b){0,1}?)$")) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:(a+|b){0,1}?)$"))
  )

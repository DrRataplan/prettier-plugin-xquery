(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsRunic}?)$")) and
  (
    every
      $s in
      tokenize("ក", ",") satisfies
      not(matches($s, "^(?:\p{IsRunic}?)$"))
  )

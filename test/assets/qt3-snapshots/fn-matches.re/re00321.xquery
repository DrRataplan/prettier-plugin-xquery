(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsLao}?)$")) and
  (
    every
      $s in
      tokenize("ༀ", ",") satisfies
      not(matches($s, "^(?:\p{IsLao}?)$"))
  )

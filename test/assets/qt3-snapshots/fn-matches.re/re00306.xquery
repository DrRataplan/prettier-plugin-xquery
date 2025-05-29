(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsHebrew}?)$")) and
  (
    every
      $s in
      tokenize("؀", ",") satisfies
      not(matches($s, "^(?:\p{IsHebrew}?)$"))
  )

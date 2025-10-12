(every $s in tokenize("", ",") satisfies matches($s, "^(?:a(.)c(.)e)$")) and
  (
    every
      $s in
      tokenize("123abcde456aBCDe789", ",") satisfies
      not(matches($s, "^(?:a(.)c(.)e)$"))
  )

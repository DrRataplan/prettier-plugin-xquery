(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsKanbun}?)$")) and
  (
    every
      $s in
      tokenize("ㆠ", ",") satisfies
      not(matches($s, "^(?:\p{IsKanbun}?)$"))
  )

(every $s in tokenize("ab,abc", ",") satisfies matches($s, "^(?:abc?)$")) and
  (
    every
      $s in
      tokenize("a,bc,abcc,", ",") satisfies
      not(matches($s, "^(?:abc?)$"))
  )

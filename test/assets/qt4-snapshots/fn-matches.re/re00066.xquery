(every $s in tokenize("a*a", ",") satisfies matches($s, "^(?:\c[^\d]\c)$")) and
  (
    every
      $s in
      tokenize("aa", ",") satisfies
      not(matches($s, "^(?:\c[^\d]\c)$"))
  )

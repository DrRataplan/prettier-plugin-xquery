(every $s in tokenize("a  123c", ",") satisfies matches($s, "^(?:a\I+\c)$")) and
  (
    every
      $s in
      tokenize("b123c,a123 123cc", ",") satisfies
      not(matches($s, "^(?:a\I+\c)$"))
  )

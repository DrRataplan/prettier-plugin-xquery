(every $s in tokenize("ac,abc", ",") satisfies matches($s, "^(?:ab?c)$")) and
  (
    every
      $s in
      tokenize("a,ab,bc,", ",") satisfies
      not(matches($s, "^(?:ab?c)$"))
  )

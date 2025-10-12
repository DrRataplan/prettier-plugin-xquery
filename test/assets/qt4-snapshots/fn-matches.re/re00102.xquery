(every $s in tokenize("a-x", ",") satisfies matches($s, "^(?:[a-a-x-x]+)$")) and
  (
    every
      $s in
      tokenize("j,a-b", ",") satisfies
      not(matches($s, "^(?:[a-a-x-x]+)$"))
  )

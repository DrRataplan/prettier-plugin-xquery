(every $s in tokenize("㆐", ",") satisfies matches($s, "^(?:\P{Sk}*)$")) and
  (
    every
      $s in
      tokenize("゛￣", ",") satisfies
      not(matches($s, "^(?:\P{Sk}*)$"))
  )

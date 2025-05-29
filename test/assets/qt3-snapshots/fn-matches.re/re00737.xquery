(every $s in tokenize("", ",") satisfies matches($s, "^(?:[^cde-[ag]]+)$")) and
  (
    every
      $s in
      tokenize("agbfxyzga", ",") satisfies
      not(matches($s, "^(?:[^cde-[ag]]+)$"))
  )

(every $s in tokenize("", ",") satisfies matches($s, "^(?:İ)$")) and
  (
    every
      $s in
      tokenize("i,i,I,i,I,i", ",") satisfies
      not(matches($s, "^(?:İ)$"))
  )

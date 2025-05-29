(every $s in tokenize("", ",") satisfies matches($s, "^(?:ı)$")) and
  (
    every
      $s in
      tokenize("I,I,I,i,I,i", ",") satisfies
      not(matches($s, "^(?:ı)$"))
  )

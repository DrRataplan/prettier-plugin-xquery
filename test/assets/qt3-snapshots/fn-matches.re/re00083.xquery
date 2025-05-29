(every $s in tokenize("?", ",") satisfies matches($s, "^(?:[\c\?a-c\?]+)$")) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:[\c\?a-c\?]+)$"))
  )

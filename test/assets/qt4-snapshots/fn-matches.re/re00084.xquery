(every $s in tokenize("", ",") satisfies matches($s, "^(?:[\D\?a-c\?]+)$")) and
  (
    every
      $s in
      tokenize("?1?", ",") satisfies
      not(matches($s, "^(?:[\D\?a-c\?]+)$"))
  )

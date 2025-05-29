(every $s in tokenize("", ",") satisfies matches($s, "^(?:[\S\?a-c\?]+)$")) and
  (
    every
      $s in
      tokenize("? ?,?	?", ",") satisfies
      not(matches($s, "^(?:[\S\?a-c\?]+)$"))
  )

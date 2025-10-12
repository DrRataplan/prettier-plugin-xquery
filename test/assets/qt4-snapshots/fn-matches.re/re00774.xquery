(every $s in tokenize("", ",") satisfies matches($s, "^(?:foo\s+)$")) and
  (
    every
      $s in
      tokenize("0123456789foo4567890foo         ", ",") satisfies
      not(matches($s, "^(?:foo\s+)$"))
  )

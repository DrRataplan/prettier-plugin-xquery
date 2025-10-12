(every $s in tokenize("", ",") satisfies matches($s, "^(?:\s+\d+)$")) and
  (
    every
      $s in
      tokenize("sdf 12sad", ",") satisfies
      not(matches($s, "^(?:\s+\d+)$"))
  )

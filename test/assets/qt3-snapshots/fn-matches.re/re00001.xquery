(every $s in tokenize(",", ",") satisfies matches($s, "^(?:)$")) and
  (
    every
      $s in
      tokenize("a,#x20;,#xD;,#x9;,#xA;", ",") satisfies
      not(matches($s, "^(?:)$"))
  )

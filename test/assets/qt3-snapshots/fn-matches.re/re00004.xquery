(every $s in tokenize("a,b", ",") satisfies matches($s, "^(?:a|b)$")) and
  (
    every
      $s in
      tokenize("aa,bb,ab,", ",") satisfies
      not(matches($s, "^(?:a|b)$"))
  )

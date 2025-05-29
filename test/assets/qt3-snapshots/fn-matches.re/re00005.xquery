(every $s in tokenize("ab", ",") satisfies matches($s, "^(?:ab)$")) and
  (
    every
      $s in
      tokenize("a,b,aa,bb,", ",") satisfies
      not(matches($s, "^(?:ab)$"))
  )

(every $s in tokenize("", ",") satisfies matches($s, "^(?:\c[^\s]\c)$")) and
  (
    every
      $s in
      tokenize("a c,a
z,a
c,a	r", ",") satisfies
      not(matches($s, "^(?:\c[^\s]\c)$"))
  )

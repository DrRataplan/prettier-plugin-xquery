(every $s in tokenize("", ",") satisfies matches($s, "^(?:\D*(bar))$")) and
  (
    every
      $s in
      tokenize("65498foobar58719", ",") satisfies
      not(matches($s, "^(?:\D*(bar))$"))
  )

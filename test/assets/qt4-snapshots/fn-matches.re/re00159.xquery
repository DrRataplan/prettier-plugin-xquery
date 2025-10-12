(every $s in tokenize("»›", ",") satisfies matches($s, "^(?:\p{Pf}*)$")) and
  (every $s in tokenize("¿", ",") satisfies not(matches($s, "^(?:\p{Pf}*)$")))

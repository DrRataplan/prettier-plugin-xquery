(every $s in tokenize("«‹", ",") satisfies matches($s, "^(?:\p{Pi}*)$")) and
  (every $s in tokenize("»", ",") satisfies not(matches($s, "^(?:\p{Pi}*)$")))

(every $s in tokenize("゛￣", ",") satisfies matches($s, "^(?:\p{Sk}*)$")) and
  (every $s in tokenize("㆐", ",") satisfies not(matches($s, "^(?:\p{Sk}*)$")))

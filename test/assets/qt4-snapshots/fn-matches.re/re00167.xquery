(every $s in tokenize("₠￦", ",") satisfies matches($s, "^(?:\p{Sc}*)$")) and
  (every $s in tokenize("゛", ",") satisfies not(matches($s, "^(?:\p{Sc}*)$")))

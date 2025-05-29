(every $s in tokenize(" ", ",") satisfies matches($s, "^(?:\p{Zl}*)$")) and
  (every $s in tokenize(" ", ",") satisfies not(matches($s, "^(?:\p{Zl}*)$")))

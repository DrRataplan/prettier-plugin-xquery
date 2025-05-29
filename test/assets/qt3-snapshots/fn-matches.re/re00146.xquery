(every $s in tokenize("ً𝆭", ",") satisfies matches($s, "^(?:\p{Mn}*)$")) and
  (every $s in tokenize("ः", ",") satisfies not(matches($s, "^(?:\p{Mn}*)$")))

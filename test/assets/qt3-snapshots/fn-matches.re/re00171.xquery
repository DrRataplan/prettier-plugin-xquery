(every $s in tokenize("	", ",") satisfies matches($s, "^(?:\p{Cc}*)$")) and
  (every $s in tokenize("܏", ",") satisfies not(matches($s, "^(?:\p{Cc}*)$")))

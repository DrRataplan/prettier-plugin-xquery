(every $s in tokenize("\a", ",") satisfies matches($s, "^(?:\\\p{L}*)$")) and
  (every $s in tokenize("a", ",") satisfies not(matches($s, "^(?:\\\p{L}*)$")))

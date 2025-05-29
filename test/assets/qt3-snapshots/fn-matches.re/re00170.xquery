(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{C}*)$")) and
  (every $s in tokenize("₠", ",") satisfies not(matches($s, "^(?:\p{C}*)$")))

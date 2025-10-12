(every $s in tokenize("א𪘀", ",") satisfies matches($s, "^(?:\p{Lo}*)$")) and
  (every $s in tokenize("ً", ",") satisfies not(matches($s, "^(?:\p{Lo}*)$")))

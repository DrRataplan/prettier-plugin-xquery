(every $s in tokenize("ً", ",") satisfies matches($s, "^(?:\P{Lo}*)$")) and
  (every $s in tokenize("א𪘀", ",") satisfies not(matches($s, "^(?:\P{Lo}*)$")))

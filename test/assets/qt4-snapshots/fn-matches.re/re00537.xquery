(every $s in tokenize("1111", ",") satisfies matches($s, "^(?:\p{Nd}\d+)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:\p{Nd}\d+)$")))

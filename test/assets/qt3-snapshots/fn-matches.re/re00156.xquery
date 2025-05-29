(every $s in tokenize("〝｢", ",") satisfies matches($s, "^(?:\p{Ps}*)$")) and
  (every $s in tokenize("〞", ",") satisfies not(matches($s, "^(?:\p{Ps}*)$")))

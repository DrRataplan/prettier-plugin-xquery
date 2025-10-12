(every $s in tokenize("〞", ",") satisfies matches($s, "^(?:\P{Ps}*)$")) and
  (every $s in tokenize("〝｢", ",") satisfies not(matches($s, "^(?:\P{Ps}*)$")))

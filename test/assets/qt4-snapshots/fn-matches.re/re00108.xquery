(every $s in tokenize("\r", ",") satisfies matches($s, "^(?:\\r)$")) and
  (every $s in tokenize("r,\\r,
", ",") satisfies not(matches($s, "^(?:\\r)$")))

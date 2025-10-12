(every $s in tokenize("»", ",") satisfies matches($s, "^(?:\P{Pi}*)$")) and
  (every $s in tokenize("«‹", ",") satisfies not(matches($s, "^(?:\P{Pi}*)$")))

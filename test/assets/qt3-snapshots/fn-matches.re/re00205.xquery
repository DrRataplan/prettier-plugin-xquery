(every $s in tokenize("゛", ",") satisfies matches($s, "^(?:\P{Sc}*)$")) and
  (every $s in tokenize("₠￦", ",") satisfies not(matches($s, "^(?:\P{Sc}*)$")))

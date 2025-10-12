(every $s in tokenize(" ", ",") satisfies matches($s, "^(?:\P{Zl}*)$")) and
  (every $s in tokenize(" ", ",") satisfies not(matches($s, "^(?:\P{Zl}*)$")))

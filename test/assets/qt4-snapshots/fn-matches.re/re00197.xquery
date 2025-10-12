(every $s in tokenize("¿", ",") satisfies matches($s, "^(?:\P{Pf}*)$")) and
  (every $s in tokenize("»›", ",") satisfies not(matches($s, "^(?:\P{Pf}*)$")))

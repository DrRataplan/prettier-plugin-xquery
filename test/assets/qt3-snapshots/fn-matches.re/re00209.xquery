(every $s in tokenize("܏", ",") satisfies matches($s, "^(?:\P{Cc}*)$")) and
  (every $s in tokenize("	", ",") satisfies not(matches($s, "^(?:\P{Cc}*)$")))

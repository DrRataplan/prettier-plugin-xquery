(every $s in tokenize("", ",") satisfies matches($s, "^(?:\P{Cf}*)$")) and
  (every $s in tokenize("܏󠁸", ",") satisfies not(matches($s, "^(?:\P{Cf}*)$")))

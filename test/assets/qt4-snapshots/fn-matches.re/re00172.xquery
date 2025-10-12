(every $s in tokenize("܏󠁸", ",") satisfies matches($s, "^(?:\p{Cf}*)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:\p{Cf}*)$")))

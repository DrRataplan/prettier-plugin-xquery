(every $s in tokenize("", ",") satisfies matches($s, "^(?:cH)$")) and
  (every $s in tokenize("Ch,Ch", ",") satisfies not(matches($s, "^(?:cH)$")))

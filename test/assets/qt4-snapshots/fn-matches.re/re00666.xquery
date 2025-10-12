(every $s in tokenize("", ",") satisfies matches($s, "^(?:CH)$")) and
  (every $s in tokenize("Ch,Ch", ",") satisfies not(matches($s, "^(?:CH)$")))

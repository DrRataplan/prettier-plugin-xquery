(every $s in tokenize("", ",") satisfies matches($s, "^(?:([a-c]*)\1)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:([a-c]*)\1)$")))

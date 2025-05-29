(every $s in tokenize("", ",") satisfies matches($s, "^(?:(abc)\1)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:(abc)\1)$")))

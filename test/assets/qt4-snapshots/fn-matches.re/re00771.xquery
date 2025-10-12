(every $s in tokenize("", ",") satisfies matches($s, "^(?:^Aa$)$")) and
  (every $s in tokenize("aA", ",") satisfies not(matches($s, "^(?:^Aa$)$")))

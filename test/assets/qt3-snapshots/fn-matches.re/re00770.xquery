(every $s in tokenize("", ",") satisfies matches($s, "^(?:^aa$)$")) and
  (every $s in tokenize("aA", ",") satisfies not(matches($s, "^(?:^aa$)$")))

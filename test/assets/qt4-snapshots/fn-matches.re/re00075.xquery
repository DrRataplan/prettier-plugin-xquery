(every $s in tokenize("a", ",") satisfies matches($s, "^(?:[a-a])$")) and
  (every $s in tokenize("b", ",") satisfies not(matches($s, "^(?:[a-a])$")))

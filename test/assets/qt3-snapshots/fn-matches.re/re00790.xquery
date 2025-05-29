(every $s in tokenize("aaa", ",") satisfies matches($s, "^(?:(111|aaa))$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:(111|aaa))$")))

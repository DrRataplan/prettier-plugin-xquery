(every $s in tokenize("", ",") satisfies matches($s, "^(?:\-?\d)$")) and
  (every $s in tokenize("+1", ",") satisfies not(matches($s, "^(?:\-?\d)$")))

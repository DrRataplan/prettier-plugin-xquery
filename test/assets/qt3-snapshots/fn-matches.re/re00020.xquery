(every $s in tokenize(",", ",") satisfies matches($s, "^(?:a{0})$")) and
  (every $s in tokenize("a", ",") satisfies not(matches($s, "^(?:a{0})$")))

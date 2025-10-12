(every $s in tokenize("ch-a", ",") satisfies matches($s, "^(?:\c{2,4})$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:\c{2,4})$")))

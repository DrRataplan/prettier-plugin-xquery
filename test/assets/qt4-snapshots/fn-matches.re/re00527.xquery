(every $s in tokenize("a,abcdef", ",") satisfies matches($s, "^(?:\c+)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:\c+)$")))

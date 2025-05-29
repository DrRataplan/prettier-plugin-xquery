(every $s in tokenize("", ",") satisfies matches($s, "^(?:\-\d\d)$")) and
  (every $s in tokenize("11", ",") satisfies not(matches($s, "^(?:\-\d\d)$")))

(every $s in tokenize("123,12", ",") satisfies matches($s, "^(?:\d+)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:\d+)$")))

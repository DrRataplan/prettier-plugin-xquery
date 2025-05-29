(every $s in tokenize("1234", ",") satisfies matches($s, "^(?:\I*)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:\I*)$")))

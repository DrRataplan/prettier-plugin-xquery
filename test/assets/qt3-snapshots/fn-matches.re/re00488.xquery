(every $s in tokenize("", ",") satisfies matches($s, "^(?:\S*)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:\S*)$")))

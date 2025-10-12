(every $s in tokenize("|", ",") satisfies matches($s, "^(?:\|)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:\|)$")))

(every $s in tokenize("
", ",") satisfies matches($s, "^(?:[\n])$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:[\n])$")))

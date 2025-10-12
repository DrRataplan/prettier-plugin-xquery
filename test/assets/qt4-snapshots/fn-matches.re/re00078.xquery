(every $s in tokenize("	", ",") satisfies matches($s, "^(?:[\t])$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:[\t])$")))

(every $s in tokenize("1", ",") satisfies matches($s, "^(?:(1|true))$")) and
  (every $s in tokenize("0", ",") satisfies not(matches($s, "^(?:(1|true))$")))

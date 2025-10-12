(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{L}*)$")) and
  (every $s in tokenize("⃝", ",") satisfies not(matches($s, "^(?:\p{L}*)$")))

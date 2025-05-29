(every $s in tokenize("⃝⃠", ",") satisfies matches($s, "^(?:\p{Me}*)$")) and
  (every $s in tokenize("０", ",") satisfies not(matches($s, "^(?:\p{Me}*)$")))

(every $s in tokenize("０", ",") satisfies matches($s, "^(?:\P{Me}*)$")) and
  (every $s in tokenize("⃝⃠", ",") satisfies not(matches($s, "^(?:\P{Me}*)$")))

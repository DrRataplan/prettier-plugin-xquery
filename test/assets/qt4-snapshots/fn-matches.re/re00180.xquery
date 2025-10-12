(every $s in tokenize("ʰ", ",") satisfies matches($s, "^(?:\P{Lt}*)$")) and
  (every $s in tokenize("ǅῼ", ",") satisfies not(matches($s, "^(?:\P{Lt}*)$")))

(every $s in tokenize("ǅῼ", ",") satisfies matches($s, "^(?:\p{Lt}*)$")) and
  (every $s in tokenize("ʰ", ",") satisfies not(matches($s, "^(?:\p{Lt}*)$")))

(every $s in tokenize("ः𝅲", ",") satisfies matches($s, "^(?:\P{Mn}*)$")) and
  (every $s in tokenize("ً𝆭", ",") satisfies not(matches($s, "^(?:\P{Mn}*)$")))

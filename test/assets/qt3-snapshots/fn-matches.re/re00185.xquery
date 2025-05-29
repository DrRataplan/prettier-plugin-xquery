(every $s in tokenize("⃝", ",") satisfies matches($s, "^(?:\P{Mc}*)$")) and
  (every $s in tokenize("ः𝅲", ",") satisfies not(matches($s, "^(?:\P{Mc}*)$")))

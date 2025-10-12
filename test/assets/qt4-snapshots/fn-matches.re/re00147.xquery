(every $s in tokenize("ः𝅲", ",") satisfies matches($s, "^(?:\p{Mc}*)$")) and
  (every $s in tokenize("⃝", ",") satisfies not(matches($s, "^(?:\p{Mc}*)$")))

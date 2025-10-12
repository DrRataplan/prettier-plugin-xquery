(every $s in tokenize("〜", ",") satisfies matches($s, "^(?:\P{Pc}*)$")) and
  (every $s in tokenize("‿･", ",") satisfies not(matches($s, "^(?:\P{Pc}*)$")))

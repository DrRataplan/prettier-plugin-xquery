(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{Pc}*)$")) and
  (every $s in tokenize("〜", ",") satisfies not(matches($s, "^(?:\p{Pc}*)$")))

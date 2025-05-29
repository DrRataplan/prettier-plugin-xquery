(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{Cn}*)$")) and
  (every $s in tokenize("	", ",") satisfies not(matches($s, "^(?:\p{Cn}*)$")))

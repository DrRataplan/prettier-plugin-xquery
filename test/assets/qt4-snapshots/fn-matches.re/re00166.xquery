(every $s in tokenize("⁄￢", ",") satisfies matches($s, "^(?:\p{Sm}*)$")) and
  (every $s in tokenize("₠", ",") satisfies not(matches($s, "^(?:\p{Sm}*)$")))

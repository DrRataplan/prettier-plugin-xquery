(every $s in tokenize("1999", ",") satisfies matches($s, "^(?:\p{Nd}{4})$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:\p{Nd}{4})$")))

(every $s in tokenize("〞｣", ",") satisfies matches($s, "^(?:\p{Pe}*)$")) and
  (every $s in tokenize("«", ",") satisfies not(matches($s, "^(?:\p{Pe}*)$")))

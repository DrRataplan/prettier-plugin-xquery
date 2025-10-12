(every $s in tokenize("«", ",") satisfies matches($s, "^(?:\P{Pe}*)$")) and
  (every $s in tokenize("〞｣", ",") satisfies not(matches($s, "^(?:\P{Pe}*)$")))

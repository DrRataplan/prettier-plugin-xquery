(every $s in tokenize("1,3", ",") satisfies matches($s, "^(?:[13])$")) and
  (every $s in tokenize("2", ",") satisfies not(matches($s, "^(?:[13])$")))

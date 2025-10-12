(every $s in tokenize("AF01D1", ",") satisfies matches($s, "^(?:AF01D1)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:AF01D1)$")))

(every $s in tokenize("", ",") satisfies matches($s, "^(?:ab+?bc)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:ab+?bc)$")))

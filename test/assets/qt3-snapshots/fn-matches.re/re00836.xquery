(every $s in tokenize("", ",") satisfies matches($s, "^(?:ab{3,4}?bc)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:ab{3,4}?bc)$")))

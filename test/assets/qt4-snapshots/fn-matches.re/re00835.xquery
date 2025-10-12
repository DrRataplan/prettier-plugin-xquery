(every $s in tokenize("", ",") satisfies matches($s, "^(?:ab{1,3}?bc)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:ab{1,3}?bc)$")))

(every $s in tokenize("", ",") satisfies matches($s, "^(?:ab{4,5}?bc)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:ab{4,5}?bc)$")))

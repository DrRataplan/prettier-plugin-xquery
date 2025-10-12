(every $s in tokenize("", ",") satisfies matches($s, "^(?:ab{0,1}?c)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:ab{0,1}?c)$")))

(every $s in tokenize("+1,1,+9", ",") satisfies matches($s, "^(?:\+?\d)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:\+?\d)$")))

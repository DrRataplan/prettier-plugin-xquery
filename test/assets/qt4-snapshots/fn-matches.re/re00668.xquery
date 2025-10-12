(every $s in tokenize("", ",") satisfies matches($s, "^(?:AA)$")) and
  (every $s in tokenize("Aa,Aa", ",") satisfies not(matches($s, "^(?:AA)$")))

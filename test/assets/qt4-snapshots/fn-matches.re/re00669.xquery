(every $s in tokenize("", ",") satisfies matches($s, "^(?:aA)$")) and
  (every $s in tokenize("Aa,Aa", ",") satisfies not(matches($s, "^(?:aA)$")))

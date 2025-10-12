(every $s in tokenize("a, ", ",") satisfies matches($s, "^(?:.)$")) and
  (every $s in tokenize("aa,", ",") satisfies not(matches($s, "^(?:.)$")))

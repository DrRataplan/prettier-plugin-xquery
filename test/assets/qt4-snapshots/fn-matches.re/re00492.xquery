(every $s in tokenize("", ",") satisfies matches($s, "^(?:\i+)$")) and
  (every $s in tokenize("a b", ",") satisfies not(matches($s, "^(?:\i+)$")))

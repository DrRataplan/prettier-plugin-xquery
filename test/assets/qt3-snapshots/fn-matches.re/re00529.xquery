(every $s in tokenize("ab", ",") satisfies matches($s, "^(?:[\i\c]*)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:[\i\c]*)$")))

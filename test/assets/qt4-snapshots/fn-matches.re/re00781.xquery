(every $s in tokenize("abc\nsfc", ",") satisfies matches($s, "^(?:(.*))$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:(.*))$")))

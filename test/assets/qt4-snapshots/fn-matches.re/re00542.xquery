(every $s in tokenize("9,0", ",") satisfies matches($s, "^(?:[0-9]*)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:[0-9]*)$")))

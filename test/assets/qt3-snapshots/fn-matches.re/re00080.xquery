(every $s in tokenize("", ",") satisfies matches($s, "^(?:[^a-z^])$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:[^a-z^])$")))

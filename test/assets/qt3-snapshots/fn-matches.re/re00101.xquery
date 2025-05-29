(every $s in tokenize("a--aa---", ",") satisfies matches($s, "^(?:[a-]*)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:[a-]*)$")))

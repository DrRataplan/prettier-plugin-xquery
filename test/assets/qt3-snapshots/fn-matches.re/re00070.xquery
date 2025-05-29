(every $s in tokenize("}-", ",") satisfies matches($s, "^(?:[a-\}-]+)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:[a-\}-]+)$")))

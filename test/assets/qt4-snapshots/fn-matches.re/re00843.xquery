(every $s in tokenize("", ",") satisfies matches($s, "^(?:a.{0,5}?c)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:a.{0,5}?c)$")))

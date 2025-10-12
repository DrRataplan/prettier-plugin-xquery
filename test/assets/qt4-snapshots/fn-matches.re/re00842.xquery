(every $s in tokenize("", ",") satisfies matches($s, "^(?:a.*?c)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:a.*?c)$")))

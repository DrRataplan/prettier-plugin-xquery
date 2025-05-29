(every $s in tokenize("false", ",") satisfies matches($s, "^(?:false)$")) and
  (every $s in tokenize("true", ",") satisfies not(matches($s, "^(?:false)$")))

(every $s in tokenize("true", ",") satisfies matches($s, "^(?:true)$")) and
  (every $s in tokenize("false", ",") satisfies not(matches($s, "^(?:true)$")))

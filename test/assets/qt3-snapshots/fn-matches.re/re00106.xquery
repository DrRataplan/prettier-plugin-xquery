(every $s in tokenize("\t", ",") satisfies matches($s, "^(?:\\t)$")) and
  (every $s in tokenize("t,\\t,	", ",") satisfies not(matches($s, "^(?:\\t)$")))

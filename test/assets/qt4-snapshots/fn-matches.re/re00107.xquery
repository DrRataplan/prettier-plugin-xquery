(every $s in tokenize("\n", ",") satisfies matches($s, "^(?:\\n)$")) and
  (every $s in tokenize("n,\\n,
", ",") satisfies not(matches($s, "^(?:\\n)$")))

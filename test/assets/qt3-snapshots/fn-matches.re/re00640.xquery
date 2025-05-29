(every $s in tokenize("", ",") satisfies matches($s, "^(?:(foo)\c)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:(foo)\c)$")))

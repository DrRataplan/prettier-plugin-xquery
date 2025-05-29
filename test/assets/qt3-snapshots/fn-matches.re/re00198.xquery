(every $s in tokenize(" ", ",") satisfies matches($s, "^(?:\P{Po}*)$")) and
  (every $s in tokenize("¿､", ",") satisfies not(matches($s, "^(?:\P{Po}*)$")))

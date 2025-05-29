(every $s in tokenize("¿､", ",") satisfies matches($s, "^(?:\p{Po}*)$")) and
  (every $s in tokenize(" ", ",") satisfies not(matches($s, "^(?:\p{Po}*)$")))

(every $s in tokenize("a𝟉", ",") satisfies matches($s, "^(?:\p{Ll}*)$")) and
  (every $s in tokenize("ǅ", ",") satisfies not(matches($s, "^(?:\p{Ll}*)$")))

(every $s in tokenize("ǅ", ",") satisfies matches($s, "^(?:\P{Ll}*)$")) and
  (every $s in tokenize("a𝟉", ",") satisfies not(matches($s, "^(?:\P{Ll}*)$")))

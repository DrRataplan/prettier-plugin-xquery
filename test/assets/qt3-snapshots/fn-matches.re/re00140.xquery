(every $s in tokenize("A𝞨", ",") satisfies matches($s, "^(?:\p{Lu}*)$")) and
  (every $s in tokenize("a", ",") satisfies not(matches($s, "^(?:\p{Lu}*)$")))

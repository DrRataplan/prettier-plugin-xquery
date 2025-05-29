(every $s in tokenize("a", ",") satisfies matches($s, "^(?:\P{Lu}*)$")) and
  (every $s in tokenize("A𝞨", ",") satisfies not(matches($s, "^(?:\P{Lu}*)$")))

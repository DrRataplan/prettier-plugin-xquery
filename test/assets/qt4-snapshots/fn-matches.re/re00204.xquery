(every $s in tokenize("₠", ",") satisfies matches($s, "^(?:\P{Sm}*)$")) and
  (every $s in tokenize("⁄￢", ",") satisfies not(matches($s, "^(?:\P{Sm}*)$")))

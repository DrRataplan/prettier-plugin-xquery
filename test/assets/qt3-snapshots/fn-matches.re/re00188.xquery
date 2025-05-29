(every $s in tokenize("𐍊", ",") satisfies matches($s, "^(?:\P{Nd}*)$")) and
  (every $s in tokenize("０𝟿", ",") satisfies not(matches($s, "^(?:\P{Nd}*)$")))

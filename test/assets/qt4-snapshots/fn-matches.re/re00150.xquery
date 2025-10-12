(every $s in tokenize("０𝟿", ",") satisfies matches($s, "^(?:\p{Nd}*)$")) and
  (every $s in tokenize("𐍊", ",") satisfies not(matches($s, "^(?:\p{Nd}*)$")))

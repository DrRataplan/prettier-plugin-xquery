(every $s in tokenize("ʰﾟ", ",") satisfies matches($s, "^(?:\p{Lm}*)$")) and
  (every $s in tokenize("א", ",") satisfies not(matches($s, "^(?:\p{Lm}*)$")))

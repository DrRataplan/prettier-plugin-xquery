(every $s in tokenize("א", ",") satisfies matches($s, "^(?:\P{Lm}*)$")) and
  (every $s in tokenize("ʰﾟ", ",") satisfies not(matches($s, "^(?:\P{Lm}*)$")))

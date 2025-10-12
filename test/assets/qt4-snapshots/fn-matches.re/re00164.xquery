(every $s in tokenize(" ", ",") satisfies matches($s, "^(?:\p{Zp}*)$")) and
  (every $s in tokenize("⁄", ",") satisfies not(matches($s, "^(?:\p{Zp}*)$")))

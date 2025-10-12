(every $s in tokenize("⁄", ",") satisfies matches($s, "^(?:\P{Zp}*)$")) and
  (every $s in tokenize(" ", ",") satisfies not(matches($s, "^(?:\P{Zp}*)$")))

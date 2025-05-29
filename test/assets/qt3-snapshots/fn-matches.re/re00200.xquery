(every $s in tokenize(" ", ",") satisfies matches($s, "^(?:\P{Zs}*)$")) and
  (every $s in tokenize(" 　", ",") satisfies not(matches($s, "^(?:\P{Zs}*)$")))

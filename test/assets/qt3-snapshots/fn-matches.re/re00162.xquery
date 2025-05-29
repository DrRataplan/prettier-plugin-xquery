(every $s in tokenize(" 　", ",") satisfies matches($s, "^(?:\p{Zs}*)$")) and
  (every $s in tokenize(" ", ",") satisfies not(matches($s, "^(?:\p{Zs}*)$")))

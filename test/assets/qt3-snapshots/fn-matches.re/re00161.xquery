(every $s in tokenize(" 　    ", ",") satisfies matches($s, "^(?:\p{Z}*)$")) and
  (every $s in tokenize("¿", ",") satisfies not(matches($s, "^(?:\p{Z}*)$")))

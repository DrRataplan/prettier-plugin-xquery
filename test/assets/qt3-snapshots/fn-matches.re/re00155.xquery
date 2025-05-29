(every $s in tokenize("〜－", ",") satisfies matches($s, "^(?:\p{Pd}*)$")) and
  (every $s in tokenize("〝", ",") satisfies not(matches($s, "^(?:\p{Pd}*)$")))

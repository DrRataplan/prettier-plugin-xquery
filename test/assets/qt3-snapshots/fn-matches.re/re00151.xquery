(every $s in tokenize("𐍊〥", ",") satisfies matches($s, "^(?:\p{Nl}*)$")) and
  (every $s in tokenize("²", ",") satisfies not(matches($s, "^(?:\p{Nl}*)$")))

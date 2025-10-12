(every $s in tokenize("²", ",") satisfies matches($s, "^(?:\P{Nl}*)$")) and
  (every $s in tokenize("𐍊〥", ",") satisfies not(matches($s, "^(?:\P{Nl}*)$")))

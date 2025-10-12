(
  every $s in tokenize("０𝟿𐍊𐍊〥²²𐌣", ",") satisfies matches($s, "^(?:\p{N}*)$")
) and
  (every $s in tokenize("ः", ",") satisfies not(matches($s, "^(?:\p{N}*)$")))

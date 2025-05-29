(every $s in tokenize("²𐌣", ",") satisfies matches($s, "^(?:\p{No}*)$")) and
  (every $s in tokenize("‿", ",") satisfies not(matches($s, "^(?:\p{No}*)$")))

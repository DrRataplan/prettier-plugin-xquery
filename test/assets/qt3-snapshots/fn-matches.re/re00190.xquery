(every $s in tokenize("‿", ",") satisfies matches($s, "^(?:\P{No}*)$")) and
  (every $s in tokenize("²𐌣", ",") satisfies not(matches($s, "^(?:\P{No}*)$")))

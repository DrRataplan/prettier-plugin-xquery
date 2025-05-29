(every $s in tokenize("㆐𝇝", ",") satisfies matches($s, "^(?:\p{So}*)$")) and
  (every $s in tokenize("	", ",") satisfies not(matches($s, "^(?:\p{So}*)$")))

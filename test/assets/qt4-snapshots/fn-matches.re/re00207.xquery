(every $s in tokenize("	", ",") satisfies matches($s, "^(?:\P{So}*)$")) and
  (every $s in tokenize("㆐𝇝", ",") satisfies not(matches($s, "^(?:\P{So}*)$")))

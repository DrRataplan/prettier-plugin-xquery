(every $s in tokenize("", ",") satisfies matches($s, "^(?:a\sb)$")) and
  (every $s in tokenize("a 
b", ",") satisfies not(matches($s, "^(?:a\sb)$")))

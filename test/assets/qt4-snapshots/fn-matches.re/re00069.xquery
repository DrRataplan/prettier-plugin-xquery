(every $s in tokenize("abc", ",") satisfies matches($s, "^(?:[a-abc]{3})$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:[a-abc]{3})$")))

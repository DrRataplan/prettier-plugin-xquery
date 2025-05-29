(every $s in tokenize("123", ",") satisfies matches($s, "^(?:[1-3]{1,4})$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:[1-3]{1,4})$")))

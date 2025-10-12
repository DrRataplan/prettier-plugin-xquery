(every $s in tokenize("", ",") satisfies matches($s, "^(?:[^\^a])$")) and
  (every $s in tokenize("^,a", ",") satisfies not(matches($s, "^(?:[^\^a])$")))

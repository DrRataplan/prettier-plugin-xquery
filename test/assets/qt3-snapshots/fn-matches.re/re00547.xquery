(every $s in tokenize("abab", ",") satisfies matches($s, "^(?:[abxyz]+)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:[abxyz]+)$")))

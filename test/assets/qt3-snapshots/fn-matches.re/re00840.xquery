(every $s in tokenize("", ",") satisfies matches($s, "^(?:ab??c)$")) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:ab??c)$")))

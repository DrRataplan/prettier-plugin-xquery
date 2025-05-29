(
  every $s in tokenize("-11111,-9", ",") satisfies matches($s, "^(?:\-[0-9]*)$")
) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:\-[0-9]*)$")))

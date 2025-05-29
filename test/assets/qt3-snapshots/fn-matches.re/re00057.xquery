(
  every $s in tokenize("abcxyz}", ",") satisfies matches($s, "^(?:[a-\}]+)$")
) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:[a-\}]+)$")))

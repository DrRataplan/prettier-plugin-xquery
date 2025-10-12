(
  every $s in tokenize("a**,aa*,a", ",") satisfies matches($s, "^(?:[a\*]*)$")
) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:[a\*]*)$")))

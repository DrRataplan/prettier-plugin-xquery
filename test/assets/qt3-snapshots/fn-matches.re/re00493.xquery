(
  every $s in tokenize("zabcsdea", ",") satisfies matches($s, "^(?:\c\i*a)$")
) and
  (every $s in tokenize("ab", ",") satisfies not(matches($s, "^(?:\c\i*a)$")))

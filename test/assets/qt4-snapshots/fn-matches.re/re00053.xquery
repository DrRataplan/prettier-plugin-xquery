(
  every $s in tokenize(",a,ab, a", ",") satisfies matches($s, "^(?:[^@]{0,2})$")
) and
  (every $s in tokenize("@", ",") satisfies not(matches($s, "^(?:[^@]{0,2})$")))

(
  every $s in tokenize("a+*abc", ",") satisfies matches($s, "^(?:([^\?])*)$")
) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:([^\?])*)$")))

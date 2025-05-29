(
  every
    $s in
    tokenize("a*a****aaaaa*", ",") satisfies
    matches($s, "^(?:[\*a]*)$")
) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:[\*a]*)$")))

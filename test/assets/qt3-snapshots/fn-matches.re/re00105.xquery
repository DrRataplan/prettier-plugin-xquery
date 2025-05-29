(
  every
    $s in
    tokenize("a?,a?a?a?,a,a??,aa?", ",") satisfies
    matches($s, "^(?:[(a\?)?]+)$")
) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:[(a\?)?]+)$")))

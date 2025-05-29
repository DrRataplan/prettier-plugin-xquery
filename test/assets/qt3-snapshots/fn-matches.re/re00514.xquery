(
  every
    $s in
    tokenize("1.001,1.001", ",") satisfies
    matches($s, "^(?:\d*\.\d+)$")
) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:\d*\.\d+)$")))

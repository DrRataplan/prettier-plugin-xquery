(
  every
    $s in
    tokenize("_:abcdefghijklmnopqrstuvwxyzAZ:_", ",") satisfies
    matches($s, "^(?:\i*)$")
) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:\i*)$")))

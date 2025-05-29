(
  every
    $s in
    tokenize("10000101,10000201", ",") satisfies
    matches($s, "^(?:\p{Nd}+)$")
) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:\p{Nd}+)$")))

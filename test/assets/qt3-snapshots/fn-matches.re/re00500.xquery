(
  every
    $s in
    tokenize("a,aa,aaaaaaaaaaaaaaaaaaaaaaaaaa", ",") satisfies
    matches($s, "^(?:\c?\c+\c*)$")
) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:\c?\c+\c*)$")))

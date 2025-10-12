(
  every
    $s in
    tokenize("a1b,ab,ab,name1", ",") satisfies
    matches($s, "^(?:\c[\c\d]*)$")
) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:\c[\c\d]*)$")))

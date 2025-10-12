(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:([0-9]+?)([\w]+?))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:([0-9]+?)([\w]+?))$"))
  )

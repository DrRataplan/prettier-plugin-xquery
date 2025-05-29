(
  every $s in tokenize("foo", ",") satisfies matches($s, "^(?:([a-z]*)([\w]))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:([a-z]*)([\w]))$"))
  )

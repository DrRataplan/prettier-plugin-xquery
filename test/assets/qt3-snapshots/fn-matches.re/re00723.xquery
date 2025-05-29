(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:[a-zA-Z0-9-[\s]]+)$")
) and
  (
    every
      $s in
      tokenize("  azAZ09", ",") satisfies
      not(matches($s, "^(?:[a-zA-Z0-9-[\s]]+)$"))
  )

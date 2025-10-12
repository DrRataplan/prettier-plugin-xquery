(
  every
    $s in
    tokenize("209.25.0.111", ",") satisfies
    matches($s, "^(?:([0-9]+(\.[0-9]+){3}))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:([0-9]+(\.[0-9]+){3}))$"))
  )

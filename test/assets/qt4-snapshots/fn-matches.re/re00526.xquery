(
  every
    $s in
    tokenize("--12--", ",") satisfies
    matches($s, "^(?:--((0[1-9])|(1(1|2)))--)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:--((0[1-9])|(1(1|2)))--)$"))
  )

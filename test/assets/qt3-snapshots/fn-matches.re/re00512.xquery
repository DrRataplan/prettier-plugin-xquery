(
  every
    $s in
    tokenize("1111,11001010", ",") satisfies
    matches($s, "^(?:([0-1]{4}|(0|1){8}))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:([0-1]{4}|(0|1){8}))$"))
  )

(
  every
    $s in
    tokenize(" abc       ", ",") satisfies
    matches($s, "^(?: ([^/]+)       )$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?: ([^/]+)       )$"))
  )

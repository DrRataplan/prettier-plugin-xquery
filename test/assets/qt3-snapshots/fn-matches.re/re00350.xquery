(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsMiscellaneousSymbols}?)$")
) and
  (
    every
      $s in
      tokenize("✀", ",") satisfies
      not(matches($s, "^(?:\p{IsMiscellaneousSymbols}?)$"))
  )

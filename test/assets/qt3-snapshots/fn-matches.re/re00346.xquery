(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsEnclosedAlphanumerics}?)$")
) and
  (
    every
      $s in
      tokenize("─", ",") satisfies
      not(matches($s, "^(?:\p{IsEnclosedAlphanumerics}?)$"))
  )

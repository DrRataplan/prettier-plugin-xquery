(
  every
    $s in
    tokenize("       a", ",") satisfies
    matches($s, "^(?:       a|b      )$")
) and
  (
    every
      $s in
      tokenize("abc", ",") satisfies
      not(matches($s, "^(?:       a|b      )$"))
  )

(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsSuperscriptsandSubscripts})$")
) and
  (
    every
      $s in
      tokenize("⁯", ",") satisfies
      not(matches($s, "^(?:\p{IsSuperscriptsandSubscripts})$"))
  )

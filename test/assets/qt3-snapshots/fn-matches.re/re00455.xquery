(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsCJKCompatibility})$")
) and
  (
    every
      $s in
      tokenize("㋿", ",") satisfies
      not(matches($s, "^(?:\p{IsCJKCompatibility})$"))
  )

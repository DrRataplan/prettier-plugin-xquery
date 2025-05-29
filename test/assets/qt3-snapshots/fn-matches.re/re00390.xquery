(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsLatinExtended-A})$")
) and
  (
    every
      $s in
      tokenize("ÿ", ",") satisfies
      not(matches($s, "^(?:\p{IsLatinExtended-A})$"))
  )

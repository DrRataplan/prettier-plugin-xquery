(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsLatinExtendedAdditional})$")
) and
  (
    every
      $s in
      tokenize("᢯", ",") satisfies
      not(matches($s, "^(?:\p{IsLatinExtendedAdditional})$"))
  )

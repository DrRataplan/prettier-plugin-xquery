(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsLatinExtended-B}?)$")
) and
  (
    every
      $s in
      tokenize("ɐ", ",") satisfies
      not(matches($s, "^(?:\p{IsLatinExtended-B}?)$"))
  )

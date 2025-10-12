(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsLatinExtended-A}?)$")
) and
  (
    every
      $s in
      tokenize("ƀ", ",") satisfies
      not(matches($s, "^(?:\p{IsLatinExtended-A}?)$"))
  )

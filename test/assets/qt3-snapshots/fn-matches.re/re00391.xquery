(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsLatinExtended-B})$")
) and
  (
    every
      $s in
      tokenize("ſ", ",") satisfies
      not(matches($s, "^(?:\p{IsLatinExtended-B})$"))
  )

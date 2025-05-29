(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsGeneralPunctuation}?)$")
) and
  (
    every
      $s in
      tokenize("⁰", ",") satisfies
      not(matches($s, "^(?:\p{IsGeneralPunctuation}?)$"))
  )

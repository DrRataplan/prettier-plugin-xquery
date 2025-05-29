(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsHangulCompatibilityJamo}?)$")
) and
  (
    every
      $s in
      tokenize("㆐", ",") satisfies
      not(matches($s, "^(?:\p{IsHangulCompatibilityJamo}?)$"))
  )

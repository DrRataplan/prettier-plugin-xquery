(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsHangulCompatibilityJamo})$")
) and
  (
    every
      $s in
      tokenize("ㄯ", ",") satisfies
      not(matches($s, "^(?:\p{IsHangulCompatibilityJamo})$"))
  )

(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsGreekandCoptic})$")
) and
  (
    every
      $s in
      tokenize("ͯ", ",") satisfies
      not(matches($s, "^(?:\p{IsGreekandCoptic})$"))
  )

(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsSmallFormVariants})$")
) and
  (
    every
      $s in
      tokenize("﹏", ",") satisfies
      not(matches($s, "^(?:\p{IsSmallFormVariants})$"))
  )

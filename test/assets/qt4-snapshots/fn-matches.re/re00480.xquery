(
  every
    $s in
    tokenize("󿿽", ",") satisfies
    matches($s, "^(?:\p{IsSupplementaryPrivateUseArea-A})$")
) and
  (
    every
      $s in
      tokenize("󠁿", ",") satisfies
      not(matches($s, "^(?:\p{IsSupplementaryPrivateUseArea-A})$"))
  )

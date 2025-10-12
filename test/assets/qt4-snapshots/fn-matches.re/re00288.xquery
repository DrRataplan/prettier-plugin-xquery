(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsPrivateUseArea}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsPrivateUseArea}+)$"))
  )

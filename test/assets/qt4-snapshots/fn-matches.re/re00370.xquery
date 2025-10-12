(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsPrivateUseArea}?)$")
) and
  (
    every
      $s in
      tokenize("豈,", ",") satisfies
      not(matches($s, "^(?:\p{IsPrivateUseArea}?)$"))
  )

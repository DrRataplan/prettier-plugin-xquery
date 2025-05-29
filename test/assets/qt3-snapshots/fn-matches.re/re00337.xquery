(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsCurrencySymbols}?)$")
) and
  (
    every
      $s in
      tokenize("⃐", ",") satisfies
      not(matches($s, "^(?:\p{IsCurrencySymbols}?)$"))
  )

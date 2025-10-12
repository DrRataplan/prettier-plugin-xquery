(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsCJKCompatibilityIdeographsSupplement})$")
) and
  (
    every
      $s in
      tokenize("𪛖", ",") satisfies
      not(matches($s, "^(?:\p{IsCJKCompatibilityIdeographsSupplement})$"))
  )

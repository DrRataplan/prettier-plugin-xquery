(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsCJKCompatibilityForms})$")
) and
  (
    every
      $s in
      tokenize("︯", ",") satisfies
      not(matches($s, "^(?:\p{IsCJKCompatibilityForms})$"))
  )

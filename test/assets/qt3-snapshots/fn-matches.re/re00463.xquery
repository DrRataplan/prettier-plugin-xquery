(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsAlphabeticPresentationForms})$")
) and
  (
    every
      $s in
      tokenize("﫿", ",") satisfies
      not(matches($s, "^(?:\p{IsAlphabeticPresentationForms})$"))
  )

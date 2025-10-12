(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsArabicPresentationForms-A}?)$")
) and
  (
    every
      $s in
      tokenize("︠", ",") satisfies
      not(matches($s, "^(?:\p{IsArabicPresentationForms-A}?)$"))
  )

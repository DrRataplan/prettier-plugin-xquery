(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsArabicPresentationForms-B})$")
) and
  (
    every
      $s in
      tokenize("﹯", ",") satisfies
      not(matches($s, "^(?:\p{IsArabicPresentationForms-B})$"))
  )

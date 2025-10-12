(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsAlphabeticPresentationForms}?)$")
) and
  (
    every
      $s in
      tokenize("ﭐ", ",") satisfies
      not(matches($s, "^(?:\p{IsAlphabeticPresentationForms}?)$"))
  )

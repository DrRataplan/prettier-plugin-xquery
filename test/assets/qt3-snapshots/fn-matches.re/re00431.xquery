(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsNumberForms})$")
) and
  (
    every
      $s in
      tokenize("⅏", ",") satisfies
      not(matches($s, "^(?:\p{IsNumberForms})$"))
  )

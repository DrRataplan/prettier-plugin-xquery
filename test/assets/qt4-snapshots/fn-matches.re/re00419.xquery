(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsUnifiedCanadianAboriginalSyllabics})$")
) and
  (
    every
      $s in
      tokenize("᏿", ",") satisfies
      not(matches($s, "^(?:\p{IsUnifiedCanadianAboriginalSyllabics})$"))
  )

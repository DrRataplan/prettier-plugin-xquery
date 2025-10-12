(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsHalfwidthandFullwidthForms}?)$")
) and
  (
    every
      $s in
      tokenize("￰", ",") satisfies
      not(matches($s, "^(?:\p{IsHalfwidthandFullwidthForms}?)$"))
  )

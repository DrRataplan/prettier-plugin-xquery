(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsMathematicalOperators})$")
) and
  (
    every
      $s in
      tokenize("⇿", ",") satisfies
      not(matches($s, "^(?:\p{IsMathematicalOperators})$"))
  )

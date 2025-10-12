(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsGeometricShapes})$")
) and
  (
    every
      $s in
      tokenize("▟", ",") satisfies
      not(matches($s, "^(?:\p{IsGeometricShapes})$"))
  )

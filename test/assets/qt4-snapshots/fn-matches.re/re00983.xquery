(
  every
    $s in
    tokenize("first.last@seznam.cz,first-last@seznam.cz", ",") satisfies
    matches($s, "^(?:[\w\-\.]+@.*)$")
) and
  (
    every
      $s in
      tokenize("first_last@seznam.cz", ",") satisfies
      not(matches($s, "^(?:[\w\-\.]+@.*)$"))
  )

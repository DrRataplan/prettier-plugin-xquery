(
  every
    $s in
    tokenize("-128", ",") satisfies
    matches($s, "^(?:((\-|\+)?[1-127])|(\-?128))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:((\-|\+)?[1-127])|(\-?128))$"))
  )

(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsBlockElements}?)$")
) and
  (
    every
      $s in
      tokenize("■", ",") satisfies
      not(matches($s, "^(?:\p{IsBlockElements}?)$"))
  )

(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:            ((.)+)      )$")
) and
  (
    every
      $s in
      tokenize("abc", ",") satisfies
      not(matches($s, "^(?:            ((.)+)      )$"))
  )

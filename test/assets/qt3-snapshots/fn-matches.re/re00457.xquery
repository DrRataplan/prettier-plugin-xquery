(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsCJKUnifiedIdeographs})$")
) and
  (
    every
      $s in
      tokenize("䶵", ",") satisfies
      not(matches($s, "^(?:\p{IsCJKUnifiedIdeographs})$"))
  )

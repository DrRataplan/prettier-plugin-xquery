(
  every
    $s in
    tokenize("1999-12-12", ",") satisfies
    matches($s, "^(?:\p{Nd}{4}-\p{Nd}{2}-\p{Nd}{2})$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{Nd}{4}-\p{Nd}{2}-\p{Nd}{2})$"))
  )

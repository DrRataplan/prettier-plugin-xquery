(
  every
    $s in
    tokenize("2001-06-06T12:12:00", ",") satisfies
    matches($s, "^(?:\p{Nd}{4}-\d\d-\d\dT\d\d:\d\d:\d\d)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{Nd}{4}-\d\d-\d\dT\d\d:\d\d:\d\d)$"))
  )

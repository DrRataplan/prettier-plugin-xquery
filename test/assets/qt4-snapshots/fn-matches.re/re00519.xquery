(
  every
    $s in
    tokenize("11:00:00,13:20:00-05:00", ",") satisfies
    matches($s, "^(?:\p{Nd}{2}:\d\d:\d\d(\-\d\d:\d\d)?)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{Nd}{2}:\d\d:\d\d(\-\d\d:\d\d)?)$"))
  )

(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsMiscellaneousTechnical}?)$")
) and
  (
    every
      $s in
      tokenize("␀", ",") satisfies
      not(matches($s, "^(?:\p{IsMiscellaneousTechnical}?)$"))
  )

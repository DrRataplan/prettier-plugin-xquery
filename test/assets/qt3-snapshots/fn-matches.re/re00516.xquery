(
  every
    $s in
    tokenize("a:b", ",") satisfies
    matches($s, "^(?:[\i\c]+:[\i\c]+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:[\i\c]+:[\i\c]+)$"))
  )

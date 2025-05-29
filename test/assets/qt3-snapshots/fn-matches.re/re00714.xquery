(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:[\p{Ll}-[ae-z0-9]]+)$")
) and
  (
    every
      $s in
      tokenize("09aaabbbcccdddeee", ",") satisfies
      not(matches($s, "^(?:[\p{Ll}-[ae-z0-9]]+)$"))
  )

(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:[\p{Ll}-[ae-z]]+)$")
) and
  (
    every
      $s in
      tokenize("aaabbbcccdddeee", ",") satisfies
      not(matches($s, "^(?:[\p{Ll}-[ae-z]]+)$"))
  )

(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:[\P{Lu}-[ae-zA-Z]]+)$")
) and
  (
    every
      $s in
      tokenize("AZaaabbbcccdddeee", ",") satisfies
      not(matches($s, "^(?:[\P{Lu}-[ae-zA-Z]]+)$"))
  )

(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:[\P{Lu}-[ae-z]]+)$")
) and
  (
    every
      $s in
      tokenize("aaabbbcccdddeee", ",") satisfies
      not(matches($s, "^(?:[\P{Lu}-[ae-z]]+)$"))
  )

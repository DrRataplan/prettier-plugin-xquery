(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:[\w-[\p{Po}]]+)$")
) and
  (
    every
      $s in
      tokenize("#a09AZz!", ",") satisfies
      not(matches($s, "^(?:[\w-[\p{Po}]]+)$"))
  )

(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:[\w-[\d\p{Po}]]+)$")
) and
  (
    every
      $s in
      tokenize("!#0AZaz9", ",") satisfies
      not(matches($s, "^(?:[\w-[\d\p{Po}]]+)$"))
  )

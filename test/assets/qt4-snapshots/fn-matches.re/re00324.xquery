(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsGeorgian}?)$")
) and
  (
    every
      $s in
      tokenize("ᄀ", ",") satisfies
      not(matches($s, "^(?:\p{IsGeorgian}?)$"))
  )

(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:[\p{Ll}-[A-Z]]+)$")
) and
  (
    every
      $s in
      tokenize("AZaz09", ",") satisfies
      not(matches($s, "^(?:[\p{Ll}-[A-Z]]+)$"))
  )

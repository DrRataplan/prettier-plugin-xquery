(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:[\p{Nd}-[a-z]]+)$")
) and
  (
    every
      $s in
      tokenize("az09", ",") satisfies
      not(matches($s, "^(?:[\p{Nd}-[a-z]]+)$"))
  )

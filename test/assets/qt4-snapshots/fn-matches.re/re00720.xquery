(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:[\d-[\p{Ll}]]+)$")
) and
  (
    every
      $s in
      tokenize("az09az", ",") satisfies
      not(matches($s, "^(?:[\d-[\p{Ll}]]+)$"))
  )

(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsBopomofo}?)$")
) and
  (
    every
      $s in
      tokenize("㄰", ",") satisfies
      not(matches($s, "^(?:\p{IsBopomofo}?)$"))
  )

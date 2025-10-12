(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsTibetan}?)$")
) and
  (
    every
      $s in
      tokenize("က", ",") satisfies
      not(matches($s, "^(?:\p{IsTibetan}?)$"))
  )

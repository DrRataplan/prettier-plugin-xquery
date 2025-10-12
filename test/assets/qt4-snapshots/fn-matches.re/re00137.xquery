(
  every $s in tokenize("aX", ",") satisfies matches($s, "^(?:[\p{L}*]{0,2})$")
) and
  (
    every
      $s in
      tokenize("aBC", ",") satisfies
      not(matches($s, "^(?:[\p{L}*]{0,2})$"))
  )

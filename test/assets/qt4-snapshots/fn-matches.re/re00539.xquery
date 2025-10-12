(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\d+\d+\p{Nd}\d+)$")
) and
  (
    every
      $s in
      tokenize("123", ",") satisfies
      not(matches($s, "^(?:\d+\d+\p{Nd}\d+)$"))
  )

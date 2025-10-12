(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsCyrillic}?)$")
) and
  (
    every
      $s in
      tokenize("԰", ",") satisfies
      not(matches($s, "^(?:\p{IsCyrillic}?)$"))
  )

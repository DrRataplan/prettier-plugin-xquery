(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsKatakana}?)$")
) and
  (
    every
      $s in
      tokenize("㄀", ",") satisfies
      not(matches($s, "^(?:\p{IsKatakana}?)$"))
  )

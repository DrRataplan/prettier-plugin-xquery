(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsKatakana})$")
) and
  (
    every
      $s in
      tokenize("ゟ", ",") satisfies
      not(matches($s, "^(?:\p{IsKatakana})$"))
  )

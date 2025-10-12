(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsMongolian}?)$")
) and
  (
    every
      $s in
      tokenize("Ḁ", ",") satisfies
      not(matches($s, "^(?:\p{IsMongolian}?)$"))
  )

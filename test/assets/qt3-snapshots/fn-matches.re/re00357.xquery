(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsHiragana}?)$")
) and
  (
    every
      $s in
      tokenize("゠", ",") satisfies
      not(matches($s, "^(?:\p{IsHiragana}?)$"))
  )

(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsCyrillic})$")
) and
  (
    every
      $s in
      tokenize("Ͽ", ",") satisfies
      not(matches($s, "^(?:\p{IsCyrillic})$"))
  )

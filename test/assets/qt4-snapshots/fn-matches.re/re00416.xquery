(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsHangulJamo})$")
) and
  (
    every
      $s in
      tokenize("ჿ", ",") satisfies
      not(matches($s, "^(?:\p{IsHangulJamo})$"))
  )

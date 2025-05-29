(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsOldItalic})$")
) and
  (
    every
      $s in
      tokenize("�", ",") satisfies
      not(matches($s, "^(?:\p{IsOldItalic})$"))
  )

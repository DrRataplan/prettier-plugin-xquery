(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsOldItalic}?)$")
) and
  (
    every
      $s in
      tokenize("𐌰", ",") satisfies
      not(matches($s, "^(?:\p{IsOldItalic}?)$"))
  )

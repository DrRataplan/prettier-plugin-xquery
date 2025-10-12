(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsDingbats})$")
) and
  (
    every
      $s in
      tokenize("⛿", ",") satisfies
      not(matches($s, "^(?:\p{IsDingbats})$"))
  )

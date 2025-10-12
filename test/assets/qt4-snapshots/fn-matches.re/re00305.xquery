(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsArmenian}?)$")
) and
  (
    every
      $s in
      tokenize("֐", ",") satisfies
      not(matches($s, "^(?:\p{IsArmenian}?)$"))
  )

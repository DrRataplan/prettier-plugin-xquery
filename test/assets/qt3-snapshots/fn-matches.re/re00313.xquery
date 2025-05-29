(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsGujarati}?)$")
) and
  (
    every
      $s in
      tokenize("଀", ",") satisfies
      not(matches($s, "^(?:\p{IsGujarati}?)$"))
  )

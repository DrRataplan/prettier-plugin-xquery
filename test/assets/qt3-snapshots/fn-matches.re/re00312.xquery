(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsGurmukhi}?)$")
) and
  (
    every
      $s in
      tokenize("઀", ",") satisfies
      not(matches($s, "^(?:\p{IsGurmukhi}?)$"))
  )

(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsYiRadicals}?)$")
) and
  (
    every
      $s in
      tokenize("가", ",") satisfies
      not(matches($s, "^(?:\p{IsYiRadicals}?)$"))
  )

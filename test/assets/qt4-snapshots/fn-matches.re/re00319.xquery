(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsSinhala}?)$")
) and
  (
    every
      $s in
      tokenize("฀", ",") satisfies
      not(matches($s, "^(?:\p{IsSinhala}?)$"))
  )

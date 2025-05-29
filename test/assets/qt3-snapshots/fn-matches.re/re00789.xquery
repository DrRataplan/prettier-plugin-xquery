(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:(d+?)(e*?)(f??))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:(d+?)(e*?)(f??))$"))
  )

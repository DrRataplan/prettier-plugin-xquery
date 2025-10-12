(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsMalayalam}?)$")
) and
  (
    every
      $s in
      tokenize("඀", ",") satisfies
      not(matches($s, "^(?:\p{IsMalayalam}?)$"))
  )

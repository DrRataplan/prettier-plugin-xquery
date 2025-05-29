(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsBengali}?)$")
) and
  (
    every
      $s in
      tokenize("਀", ",") satisfies
      not(matches($s, "^(?:\p{IsBengali}?)$"))
  )

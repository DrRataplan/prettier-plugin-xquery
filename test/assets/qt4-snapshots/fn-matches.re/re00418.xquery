(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsCherokee})$")
) and
  (
    every
      $s in
      tokenize("፿", ",") satisfies
      not(matches($s, "^(?:\p{IsCherokee})$"))
  )

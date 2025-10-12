(
  every $s in tokenize("1z", ",") satisfies matches($s, "^(?:[^2-9a-x]{2})$")
) and
  (
    every
      $s in
      tokenize("1x", ",") satisfies
      not(matches($s, "^(?:[^2-9a-x]{2})$"))
  )

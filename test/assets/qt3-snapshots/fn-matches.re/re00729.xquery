(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:[\P{Nd}-[2-8]]+)$")
) and
  (
    every
      $s in
      tokenize("1234567890azAZ1234567890", ",") satisfies
      not(matches($s, "^(?:[\P{Nd}-[2-8]]+)$"))
  )

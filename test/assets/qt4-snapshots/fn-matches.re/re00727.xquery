(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:[\P{Lu}-[A-Z]]+)$")
) and
  (
    every
      $s in
      tokenize("AZazAZ", ",") satisfies
      not(matches($s, "^(?:[\P{Lu}-[A-Z]]+)$"))
  )

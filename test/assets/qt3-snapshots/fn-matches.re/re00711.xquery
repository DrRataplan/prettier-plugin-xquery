(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:[\d-[13579\s]]+)$")
) and
  (
    every
      $s in
      tokenize("  ١02468٠", ",") satisfies
      not(matches($s, "^(?:[\d-[13579\s]]+)$"))
  )

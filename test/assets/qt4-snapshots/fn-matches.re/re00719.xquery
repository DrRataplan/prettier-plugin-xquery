(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:[\d-[a-zA-Z]]+)$")
) and
  (
    every
      $s in
      tokenize("az09AZ,azAZ١02468٠", ",") satisfies
      not(matches($s, "^(?:[\d-[a-zA-Z]]+)$"))
  )

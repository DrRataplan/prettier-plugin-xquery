(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:[\d-[13579abcd]]+)$")
) and
  (
    every
      $s in
      tokenize("abcd١02468٠", ",") satisfies
      not(matches($s, "^(?:[\d-[13579abcd]]+)$"))
  )

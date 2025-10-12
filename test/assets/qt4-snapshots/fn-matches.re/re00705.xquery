(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:[\d-[357\p{Ll}]]+)$")
) and
  (
    every
      $s in
      tokenize("az3312468977", ",") satisfies
      not(matches($s, "^(?:[\d-[357\p{Ll}]]+)$"))
  )

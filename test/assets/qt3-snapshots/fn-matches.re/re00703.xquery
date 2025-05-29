(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:[\d-[357a-z]]+)$")
) and
  (
    every
      $s in
      tokenize("az33312468955", ",") satisfies
      not(matches($s, "^(?:[\d-[357a-z]]+)$"))
  )

(every $s in tokenize("", ",") satisfies matches($s, "^(?:[\d-[357]]+)$")) and
  (
    every
      $s in
      tokenize("33312468955,51246897,3312468977", ",") satisfies
      not(matches($s, "^(?:[\d-[357]]+)$"))
  )

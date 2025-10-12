(every $s in tokenize("", ",") satisfies matches($s, "^(?:[\w-[\d]]+)$")) and
  (
    every
      $s in
      tokenize("0AZaz9", ",") satisfies
      not(matches($s, "^(?:[\w-[\d]]+)$"))
  )

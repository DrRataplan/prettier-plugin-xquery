(every $s in tokenize("", ",") satisfies matches($s, "^(?:[\d-[\D]]+)$")) and
  (
    every
      $s in
      tokenize("azAZ1024689", ",") satisfies
      not(matches($s, "^(?:[\d-[\D]]+)$"))
  )

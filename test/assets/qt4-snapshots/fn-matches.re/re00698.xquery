(every $s in tokenize("", ",") satisfies matches($s, "^(?:[\d-[13579]]+)$")) and
  (
    every
      $s in
      tokenize("1024689", ",") satisfies
      not(matches($s, "^(?:[\d-[13579]]+)$"))
  )

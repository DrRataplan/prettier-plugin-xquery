(every $s in tokenize("¿", ",") satisfies matches($s, "^(?:\P{Z}*)$")) and
  (
    every
      $s in
      tokenize(" 　    ", ",") satisfies
      not(matches($s, "^(?:\P{Z}*)$"))
  )

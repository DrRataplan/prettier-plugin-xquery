(every $s in tokenize("", ",") satisfies matches($s, "^(?:\w)$")) and
  (
    every
      $s in
      tokenize(",܏,,‐,︷,},“,»,༄, , , ", ",") satisfies
      not(matches($s, "^(?:\w)$"))
  )

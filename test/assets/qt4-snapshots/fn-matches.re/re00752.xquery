(every $s in tokenize("", ",") satisfies matches($s, "^(?:[-e-g]+)$")) and
  (
    every
      $s in
      tokenize("ddd---eeefffggghhh,ddd---eeefffggghhh", ",") satisfies
      not(matches($s, "^(?:[-e-g]+)$"))
  )

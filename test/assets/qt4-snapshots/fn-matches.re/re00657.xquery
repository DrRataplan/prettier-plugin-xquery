(every $s in tokenize("", ",") satisfies matches($s, "^(?:([^{}]|\n)+)$")) and
  (
    every
      $s in
      tokenize("{{{{Hello  World  }END", ",") satisfies
      not(matches($s, "^(?:([^{}]|\n)+)$"))
  )

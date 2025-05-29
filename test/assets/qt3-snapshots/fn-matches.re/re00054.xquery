(every $s in tokenize("", ",") satisfies matches($s, "^(?:[^-z]+)$")) and
  (
    every
      $s in
      tokenize("aaz,a-z", ",") satisfies
      not(matches($s, "^(?:[^-z]+)$"))
  )

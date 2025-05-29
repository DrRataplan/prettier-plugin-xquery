(every $s in tokenize("", ",") satisfies matches($s, "^(?:(ab){0,0})$")) and
  (
    every
      $s in
      tokenize("a,ab", ",") satisfies
      not(matches($s, "^(?:(ab){0,0})$"))
  )

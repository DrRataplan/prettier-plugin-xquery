(every $s in tokenize("", ",") satisfies matches($s, "^(?:(foo)(\176))$")) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:(foo)(\176))$"))
  )

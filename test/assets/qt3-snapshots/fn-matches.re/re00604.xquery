(every $s in tokenize("", ",") satisfies matches($s, "^(?:(foo)\S*)$")) and
  (
    every
      $s in
      tokenize("sfdfoobar    3270", ",") satisfies
      not(matches($s, "^(?:(foo)\S*)$"))
  )

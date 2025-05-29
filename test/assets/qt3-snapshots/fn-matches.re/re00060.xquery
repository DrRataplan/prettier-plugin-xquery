(every $s in tokenize("", ",") satisfies matches($s, "^(?:[a-z-[^a]])$")) and
  (
    every
      $s in
      tokenize("b", ",") satisfies
      not(matches($s, "^(?:[a-z-[^a]])$"))
  )

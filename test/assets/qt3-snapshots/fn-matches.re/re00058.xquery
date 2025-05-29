(every $s in tokenize("", ",") satisfies matches($s, "^(?:[a-b-[0-9]]+)$")) and
  (
    every
      $s in
      tokenize("a1", ",") satisfies
      not(matches($s, "^(?:[a-b-[0-9]]+)$"))
  )

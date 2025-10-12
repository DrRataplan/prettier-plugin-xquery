(every $s in tokenize("", ",") satisfies matches($s, "^(?:[a-d-[b-c]])$")) and
  (
    every
      $s in
      tokenize("b,c", ",") satisfies
      not(matches($s, "^(?:[a-d-[b-c]])$"))
  )

(every $s in tokenize("", ",") satisfies matches($s, "^(?:[a-c-[^a-c]])$")) and
  (
    every
      $s in
      tokenize("d", ",") satisfies
      not(matches($s, "^(?:[a-c-[^a-c]])$"))
  )

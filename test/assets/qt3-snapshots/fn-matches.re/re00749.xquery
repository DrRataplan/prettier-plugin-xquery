(every $s in tokenize("", ",") satisfies matches($s, "^(?:[a-d\--[bc]]+)$")) and
  (
    every
      $s in
      tokenize("cccaaa--dddbbb", ",") satisfies
      not(matches($s, "^(?:[a-d\--[bc]]+)$"))
  )

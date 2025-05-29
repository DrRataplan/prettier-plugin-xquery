(every $s in tokenize("", ",") satisfies matches($s, "^(?:[a-[a-f]])$")) and
  (
    every
      $s in
      tokenize("abcdefghijklmnopqrstuvwxyz", ",") satisfies
      not(matches($s, "^(?:[a-[a-f]])$"))
  )

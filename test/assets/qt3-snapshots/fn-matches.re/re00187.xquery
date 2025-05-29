(every $s in tokenize("ः", ",") satisfies matches($s, "^(?:\P{N}*)$")) and
  (
    every
      $s in
      tokenize("０𝟿𐍊𐍊〥²²𐌣", ",") satisfies
      not(matches($s, "^(?:\P{N}*)$"))
  )

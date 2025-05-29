(every $s in tokenize("〝", ",") satisfies matches($s, "^(?:\P{Pd}*)$")) and
  (
    every
      $s in
      tokenize("〜－", ",") satisfies
      not(matches($s, "^(?:\P{Pd}*)$"))
  )

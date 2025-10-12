(every $s in tokenize("", ",") satisfies matches($s, "^(?:[abc\--[b]]+)$")) and
  (
    every
      $s in
      tokenize("[[[```bbbaaa---cccddd", ",") satisfies
      not(matches($s, "^(?:[abc\--[b]]+)$"))
  )

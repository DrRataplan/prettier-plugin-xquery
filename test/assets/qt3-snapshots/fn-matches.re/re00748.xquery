(every $s in tokenize("", ",") satisfies matches($s, "^(?:[a-[c-e]]+)$")) and
  (
    every
      $s in
      tokenize("bbbaaaccc,```aaaccc", ",") satisfies
      not(matches($s, "^(?:[a-[c-e]]+)$"))
  )

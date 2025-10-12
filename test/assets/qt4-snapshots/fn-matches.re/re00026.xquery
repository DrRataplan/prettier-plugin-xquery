(every $s in tokenize("abbc", ",") satisfies matches($s, "^(?:ab{2}c)$")) and
  (
    every
      $s in
      tokenize("ac,abc,abbbc,a,", ",") satisfies
      not(matches($s, "^(?:ab{2}c)$"))
  )

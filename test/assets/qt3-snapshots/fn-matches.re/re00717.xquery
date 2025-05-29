(every $s in tokenize("", ",") satisfies matches($s, "^(?:[abc-[defg]]+)$")) and
  (
    every
      $s in
      tokenize("dddaabbccddd", ",") satisfies
      not(matches($s, "^(?:[abc-[defg]]+)$"))
  )

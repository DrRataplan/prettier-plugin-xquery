(every $s in tokenize("", ",") satisfies matches($s, "^(?:[abcd-[d]]+)$")) and
  (
    every
      $s in
      tokenize("dddaabbccddd", ",") satisfies
      not(matches($s, "^(?:[abcd-[d]]+)$"))
  )

(every $s in tokenize("", ",") satisfies matches($s, "^(?:[abcd-[def]]+)$")) and
  (
    every
      $s in
      tokenize("fedddaabbccddd", ",") satisfies
      not(matches($s, "^(?:[abcd-[def]]+)$"))
  )

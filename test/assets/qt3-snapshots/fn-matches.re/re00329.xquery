(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsOgham}?)$")) and
  (
    every
      $s in
      tokenize("ᚠ", ",") satisfies
      not(matches($s, "^(?:\p{IsOgham}?)$"))
  )

(every $s in tokenize("abcc", ",") satisfies matches($s, "^(?:abc{2})$")) and
  (
    every
      $s in
      tokenize("abc,abccc,", ",") satisfies
      not(matches($s, "^(?:abc{2})$"))
  )

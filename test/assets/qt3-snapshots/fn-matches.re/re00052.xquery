(every $s in tokenize("abc", ",") satisfies matches($s, "^(?:[^\s]{3})$")) and
  (
    every
      $s in
      tokenize("a c", ",") satisfies
      not(matches($s, "^(?:[^\s]{3})$"))
  )

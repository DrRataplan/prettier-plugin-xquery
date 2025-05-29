(every $s in tokenize("", ",") satisfies matches($s, "^(?:foo([\w]*))$")) and
  (
    every
      $s in
      tokenize("sfdfoobar    3270,sfdfoobar    3270", ",") satisfies
      not(matches($s, "^(?:foo([\w]*))$"))
  )

(every $s in tokenize("", ",") satisfies matches($s, "^(?:[a-e - m-p]+)$")) and
  (
    every
      $s in
      tokenize("---a b c d e m n o p---", ",") satisfies
      not(matches($s, "^(?:[a-e - m-p]+)$"))
  )

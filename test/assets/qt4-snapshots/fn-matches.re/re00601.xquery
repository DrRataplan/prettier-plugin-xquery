(every $s in tokenize("", ",") satisfies matches($s, "^(?:(foo)\d*bar)$")) and
  (
    every
      $s in
      tokenize("hello123foo230927bar1412d", ",") satisfies
      not(matches($s, "^(?:(foo)\d*bar)$"))
  )

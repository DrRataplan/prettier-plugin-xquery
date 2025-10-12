(every $s in tokenize("", ",") satisfies matches($s, "^(?:foo\d+)$")) and
  (
    every
      $s in
      tokenize(
        "0123456789foo4567890foo         ,0123456789foo4567890foo1foo  0987",
        ","
      ) satisfies
      not(matches($s, "^(?:foo\d+)$"))
  )

(every $s in tokenize("", ",") satisfies matches($s, "^(?:(a+)(b*)(c?))$")) and
  (
    every
      $s in
      tokenize("aaabbbccc", ",") satisfies
      not(matches($s, "^(?:(a+)(b*)(c?))$"))
  )

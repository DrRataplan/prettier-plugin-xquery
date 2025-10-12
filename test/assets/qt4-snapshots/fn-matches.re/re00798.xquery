(every $s in tokenize("", ",") satisfies matches($s, "^(?:(\s)?(-))$")) and
  (
    every
      $s in
      tokenize("once -upon-a time", ",") satisfies
      not(matches($s, "^(?:(\s)?(-))$"))
  )

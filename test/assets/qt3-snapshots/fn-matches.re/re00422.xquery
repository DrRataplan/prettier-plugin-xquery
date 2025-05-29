(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsKhmer})$")) and
  (
    every
      $s in
      tokenize("᛿", ",") satisfies
      not(matches($s, "^(?:\p{IsKhmer})$"))
  )

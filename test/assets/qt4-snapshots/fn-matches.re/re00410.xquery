(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsSinhala})$")) and
  (
    every
      $s in
      tokenize("ൿ", ",") satisfies
      not(matches($s, "^(?:\p{IsSinhala})$"))
  )

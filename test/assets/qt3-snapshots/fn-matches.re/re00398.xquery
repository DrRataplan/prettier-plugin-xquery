(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsArabic})$")) and
  (
    every
      $s in
      tokenize("׿", ",") satisfies
      not(matches($s, "^(?:\p{IsArabic})$"))
  )

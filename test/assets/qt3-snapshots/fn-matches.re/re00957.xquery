(every $s in tokenize("ab9ab", ",") satisfies matches($s, "^(?:(ab)\d\1)$")) and
  (
    every
      $s in
      tokenize("ab9aa", ",") satisfies
      not(matches($s, "^(?:(ab)\d\1)$"))
  )

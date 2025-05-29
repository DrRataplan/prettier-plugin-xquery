(every $s in tokenize("", ",") satisfies matches($s, "^(?:[^a-d-b-c])$")) and
  (
    every
      $s in
      tokenize("a-b,c-c,ab,cc", ",") satisfies
      not(matches($s, "^(?:[^a-d-b-c])$"))
  )

(every $s in tokenize("", ",") satisfies matches($s, "^(?:[\d-[abc]]+)$")) and
  (
    every
      $s in
      tokenize("abc09abc", ",") satisfies
      not(matches($s, "^(?:[\d-[abc]]+)$"))
  )

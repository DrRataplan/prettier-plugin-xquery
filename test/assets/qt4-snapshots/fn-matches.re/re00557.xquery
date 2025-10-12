(every $s in tokenize("", ",") satisfies matches($s, "^(?:[X-\]]+)$")) and
  (
    every
      $s in
      tokenize("wWXYZxyz[\]^", ",") satisfies
      not(matches($s, "^(?:[X-\]]+)$"))
  )

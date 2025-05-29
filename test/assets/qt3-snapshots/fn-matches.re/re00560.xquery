(every $s in tokenize("", ",") satisfies matches($s, "^(?:[X-c]+)$")) and
  (
    every
      $s in
      tokenize("wWABCXYZabcxyz", ",") satisfies
      not(matches($s, "^(?:[X-c]+)$"))
  )

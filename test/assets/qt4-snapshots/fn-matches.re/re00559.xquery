(every $s in tokenize("", ",") satisfies matches($s, "^(?:[X-a]+)$")) and
  (
    every
      $s in
      tokenize("wWAXYZaxyz", ",") satisfies
      not(matches($s, "^(?:[X-a]+)$"))
  )

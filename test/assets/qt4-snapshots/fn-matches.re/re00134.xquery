(every $s in tokenize("\c", ",") satisfies matches($s, "^(?:\\c)$")) and
  (
    every
      $s in
      tokenize("\p{_xmlC},\\c,\\", ",") satisfies
      not(matches($s, "^(?:\\c)$"))
  )

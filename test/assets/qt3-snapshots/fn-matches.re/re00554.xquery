(every $s in tokenize("", ",") satisfies matches($s, "^(?:[@-D]+)$")) and
  (
    every
      $s in
      tokenize("eE?@ABCDabcdeE", ",") satisfies
      not(matches($s, "^(?:[@-D]+)$"))
  )

(every $s in tokenize("", ",") satisfies matches($s, "^(?:\p{IsOriya}?)$")) and
  (
    every
      $s in
      tokenize("஀", ",") satisfies
      not(matches($s, "^(?:\p{IsOriya}?)$"))
  )

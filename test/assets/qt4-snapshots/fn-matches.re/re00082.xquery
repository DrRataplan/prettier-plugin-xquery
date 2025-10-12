(
  every
    $s in
    tokenize("?a?,?b?,?c?", ",") satisfies
    matches($s, "^(?:[\C\?a-c\?]+)$")
) and
  (
    every
      $s in
      tokenize("?d?", ",") satisfies
      not(matches($s, "^(?:[\C\?a-c\?]+)$"))
  )

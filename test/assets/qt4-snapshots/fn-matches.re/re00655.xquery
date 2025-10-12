(
  every
    $s in
    tokenize("fooʰ barʱ", ",") satisfies
    matches($s, "^(?:(\w+)\s+(\w+))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:(\w+)\s+(\w+))$"))
  )

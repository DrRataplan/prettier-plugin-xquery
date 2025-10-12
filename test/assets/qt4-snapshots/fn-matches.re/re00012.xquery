(
  every
    $s in
    tokenize("abc,abbbbbbbc,ac", ",") satisfies
    matches($s, "^(?:ab*c)$")
) and
  (
    every
      $s in
      tokenize("a,ab,bc,c,abcb,", ",") satisfies
      not(matches($s, "^(?:ab*c)$"))
  )

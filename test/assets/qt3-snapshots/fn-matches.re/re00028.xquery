(
  every
    $s in
    tokenize("aaabbb,bb,bbb,bbbb", ",") satisfies
    matches($s, "^(?:a*b{2,4}c{0})$")
) and
  (
    every
      $s in
      tokenize("ab,abbc,bbc,abbbbb,", ",") satisfies
      not(matches($s, "^(?:a*b{2,4}c{0})$"))
  )

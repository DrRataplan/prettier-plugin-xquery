(
  every
    $s in
    tokenize("a*a**a***,aa*a", ",") satisfies
    matches($s, "^(?:\c\C?\c\C+\c\C*)$")
) and
  (
    every
      $s in
      tokenize(",a12b1c1,ab12345,1a2a2,a1b1c1a", ",") satisfies
      not(matches($s, "^(?:\c\C?\c\C+\c\C*)$"))
  )

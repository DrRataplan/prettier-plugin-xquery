(
  every
    $s in
    tokenize("aa,a a,a   a", ",") satisfies
    matches($s, "^(?:a\s{0,3}a)$")
) and
  (
    every
      $s in
      tokenize("a    a,aa a", ",") satisfies
      not(matches($s, "^(?:a\s{0,3}a)$"))
  )

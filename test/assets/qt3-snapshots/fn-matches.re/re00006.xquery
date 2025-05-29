(
  every
    $s in
    tokenize("a,b,c,d", ",") satisfies
    matches($s, "^(?:a|b|a|c|b|d|a)$")
) and
  (
    every
      $s in
      tokenize("aa,ac,e", ",") satisfies
      not(matches($s, "^(?:a|b|a|c|b|d|a)$"))
  )

(
  every
    $s in
    tokenize("b,ab,bcccccc,abc,abbbc", ",") satisfies
    matches($s, "^(?:a?b+c*)$")
) and
  (
    every
      $s in
      tokenize("aabc,a,c,ac,", ",") satisfies
      not(matches($s, "^(?:a?b+c*)$"))
  )

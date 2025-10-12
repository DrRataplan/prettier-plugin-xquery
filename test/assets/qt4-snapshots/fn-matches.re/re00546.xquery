(
  every
    $s in
    tokenize("112233123,abcaabbccabc,abab", ",") satisfies
    matches($s, "^(?:([abc]+)|([123]+))$")
) and
  (
    every
      $s in
      tokenize("1a,1a,x", ",") satisfies
      not(matches($s, "^(?:([abc]+)|([123]+))$"))
  )

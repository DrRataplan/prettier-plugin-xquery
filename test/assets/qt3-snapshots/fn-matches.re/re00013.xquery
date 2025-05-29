(
  every
    $s in
    tokenize(
      "abc,ab,abccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
      ","
    ) satisfies
    matches($s, "^(?:abc*)$")
) and
  (
    every
      $s in
      tokenize("a,abcd,abbc,", ",") satisfies
      not(matches($s, "^(?:abc*)$"))
  )

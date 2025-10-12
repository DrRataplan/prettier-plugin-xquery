(
  every
    $s in
    tokenize(
      "abc,abccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
      ","
    ) satisfies
    matches($s, "^(?:abc+)$")
) and
  (
    every
      $s in
      tokenize("a,ab,abcd", ",") satisfies
      not(matches($s, "^(?:abc+)$"))
  )

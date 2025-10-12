(
  every
    $s in
    tokenize("112233123,abcaabbccabc", ",") satisfies
    matches($s, "^(?:[123]+|[abc]+)$")
) and
  (
    every
      $s in
      tokenize("1a,a1", ",") satisfies
      not(matches($s, "^(?:[123]+|[abc]+)$"))
  )

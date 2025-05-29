(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:[^\p{IsBasicLatin}]*)$")
) and
  (
    every
      $s in
      tokenize("a", ",") satisfies
      not(matches($s, "^(?:[^\p{IsBasicLatin}]*)$"))
  )

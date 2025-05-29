(
  every
    $s in
    tokenize("Ā", ",") satisfies
    matches($s, "^(?:[^\p{IsBasicLatin}]+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:[^\p{IsBasicLatin}]+)$"))
  )

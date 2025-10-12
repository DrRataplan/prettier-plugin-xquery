(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsLatin-1Supplement})$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsLatin-1Supplement})$"))
  )

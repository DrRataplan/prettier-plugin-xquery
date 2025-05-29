(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsCJKCompatibilityIdeographs}?)$")
) and
  (
    every
      $s in
      tokenize("ﬀ", ",") satisfies
      not(matches($s, "^(?:\p{IsCJKCompatibilityIdeographs}?)$"))
  )

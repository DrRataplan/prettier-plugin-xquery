(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:((((((((((a))))))))))\10)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:((((((((((a))))))))))\10)$"))
  )

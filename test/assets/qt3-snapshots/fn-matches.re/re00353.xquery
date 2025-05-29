(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsCJKRadicalsSupplement}?)$")
) and
  (
    every
      $s in
      tokenize("⼀", ",") satisfies
      not(matches($s, "^(?:\p{IsCJKRadicalsSupplement}?)$"))
  )

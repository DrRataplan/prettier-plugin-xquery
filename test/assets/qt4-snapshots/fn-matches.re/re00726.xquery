(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:[\P{Lu}-[\p{Lu}]]+)$")
) and
  (
    every
      $s in
      tokenize("AZazAZ", ",") satisfies
      not(matches($s, "^(?:[\P{Lu}-[\p{Lu}]]+)$"))
  )

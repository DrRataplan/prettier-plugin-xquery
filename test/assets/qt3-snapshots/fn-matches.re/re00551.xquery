(
  every
    $s in
    tokenize("hellO worlD", ",") satisfies
    matches($s, "^(?:(\P{Lu}+\p{Lu})\s(\P{Lu}+\p{Lu}))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:(\P{Lu}+\p{Lu})\s(\P{Lu}+\p{Lu}))$"))
  )

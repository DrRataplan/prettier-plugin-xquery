(
  every
    $s in
    tokenize("Hello World", ",") satisfies
    matches($s, "^(?:\p{Lu}(\w*)\s\p{Lu}(\w*))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{Lu}(\w*)\s\p{Lu}(\w*))$"))
  )

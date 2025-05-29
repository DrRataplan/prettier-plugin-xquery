(
  every
    $s in
    tokenize("hellofoo barworld", ",") satisfies
    matches($s, "^(?:(hello)foo\s+bar(world))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:(hello)foo\s+bar(world))$"))
  )

(
  every
    $s in
    tokenize(",a b,a ba b", ",") satisfies
    matches($s, "^(?:(a\sb){0,2})$")
) and
  (
    every
      $s in
      tokenize("a ba ba b,ab,a b a b,a  b", ",") satisfies
      not(matches($s, "^(?:(a\sb){0,2})$"))
  )

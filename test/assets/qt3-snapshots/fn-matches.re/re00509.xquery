(
  every
    $s in
    tokenize("true,false", ",") satisfies
    matches($s, "^(?:(true|false))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:(true|false))$"))
  )

(
  every
    $s in
    tokenize("0", ",") satisfies
    matches($s, "^(?:(1|true|false|0|0))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:(1|true|false|0|0))$"))
  )

(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:(\p{Ll}\p{Cc}\p{Nd})*)$")
) and
  (
    every
      $s in
      tokenize(" ", ",") satisfies
      not(matches($s, "^(?:(\p{Ll}\p{Cc}\p{Nd})*)$"))
  )

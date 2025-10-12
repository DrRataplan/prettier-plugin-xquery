(
  every
    $s in
    tokenize("Hello World", ",") satisfies
    matches($s, "^(?:(\P{Ll}\p{Ll}*)\s(\P{Ll}\p{Ll}*))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:(\P{Ll}\p{Ll}*)\s(\P{Ll}\p{Ll}*))$"))
  )

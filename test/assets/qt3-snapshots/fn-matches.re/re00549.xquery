(
  every
    $s in
    tokenize("Hello World", ",") satisfies
    matches($s, "^(?:(\p{Lu}\p{Ll}*)\s(\p{Lu}\p{Ll}*))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:(\p{Lu}\p{Ll}*)\s(\p{Lu}\p{Ll}*))$"))
  )

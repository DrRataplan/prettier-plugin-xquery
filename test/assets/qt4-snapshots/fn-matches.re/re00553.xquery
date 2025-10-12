(
  every
    $s in
    tokenize("Hello World", ",") satisfies
    matches($s, "^(?:(\P{Lt}\w*)\s(\P{Lt}*\w*))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:(\P{Lt}\w*)\s(\P{Lt}*\w*))$"))
  )

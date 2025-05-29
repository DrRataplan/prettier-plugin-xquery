(
  every
    $s in
    tokenize("ǅello ǅorld", ",") satisfies
    matches($s, "^(?:(\p{Lt}\w*)\s(\p{Lt}*\w*))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:(\p{Lt}\w*)\s(\p{Lt}*\w*))$"))
  )

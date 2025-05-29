(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:http://([a-zA-Z0-9\-]*\.?)*?/)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:http://([a-zA-Z0-9\-]*\.?)*?/)$"))
  )

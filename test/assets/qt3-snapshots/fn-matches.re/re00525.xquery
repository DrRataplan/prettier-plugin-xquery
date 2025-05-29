(
  every
    $s in
    tokenize("---30", ",") satisfies
    matches($s, "^(?:---([123]0)|([12]?[1-9])|(31))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:---([123]0)|([12]?[1-9])|(31))$"))
  )

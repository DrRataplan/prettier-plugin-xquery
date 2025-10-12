(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsCJKUnifiedIdeographsExtensionA})$")
) and
  (
    every
      $s in
      tokenize("㏿", ",") satisfies
      not(matches($s, "^(?:\p{IsCJKUnifiedIdeographsExtensionA})$"))
  )

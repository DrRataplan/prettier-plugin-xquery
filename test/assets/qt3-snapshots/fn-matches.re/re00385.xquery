(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsCJKUnifiedIdeographsExtensionB}?)$")
) and
  (
    every
      $s in
      tokenize("丽", ",") satisfies
      not(matches($s, "^(?:\p{IsCJKUnifiedIdeographsExtensionB}?)$"))
  )
